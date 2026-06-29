const alphabet = [
    { maj: "Α", min: "α", nom: "Alpha", mot: "Αθήνα (Athènes)" }, 
    { maj: "Β", min: "β", nom: "Bêta", mot: "Βιβλίο (Livre)" },
    { maj: "Γ", min: "γ", nom: "Gamma", mot: "Γάλα (Lait)" }, 
    { maj: "Δ", min: "δ", nom: "Delta", mot: "Δέντρο (Arbre)" },
    { maj: "Ε", min: "ε", nom: "Epsilon", mot: "Ελλάδα (Grèce)" }, 
    { maj: "Ζ", min: "ζ", nom: "Zeta", mot: "Ζωή (Vie)" },
    { maj: "Η", min: "η", nom: "Eta", mot: "Ήλιος (Soleil)" }, 
    { maj: "Θ", min: "θ", nom: "Theta", mot: "Θάλασσα (Mer)" },
    { maj: "Ι", min: "ι", nom: "Iota", mot: "Ιδέα (Idée)" }, 
    { maj: "Κ", min: "κ", nom: "Kappa", mot: "Καρδιά (Cœur)" },
    { maj: "Λ", min: "λ", nom: "Lambda", mot: "Λάδι (Huile)" }, 
    { maj: "Μ", min: "μ", nom: "Mu", mot: "Μήλο (Pomme)" },
    { maj: "Ν", min: "ν", nom: "Nu", mot: "Νερό (Eau)" }, 
    { maj: "Ξ", min: "ξ", nom: "Xi", mot: "Ξύλο (Bois)" },
    { maj: "Ο", min: "ο", nom: "Omicron", mot: "Όνομα (Nom)" }, 
    { maj: "Π", min: "π", nom: "Pi", mot: "Πóλη (Ville)" },
    { maj: "Ρ", min: "ρ", nom: "Rho", mot: "Ρóδι (Grenade)" }, 
    { maj: "Σ", min: "σ", nom: "Sigma", mot: "Σπίτι (Maison)" },
    { maj: "Τ", min: "τ", nom: "Tau", mot: "Τυρί (Fromage)" }, 
    { maj: "Υ", min: "υ", nom: "Upsilon", mot: "Ύπνος (Sommeil)" },
    { maj: "Φ", min: "φ", nom: "Phi", mot: "Φως (Lumière)" }, 
    { maj: "Χ", min: "χ", nom: "Chi", mot: "Χέρι (Main)" },
    { maj: "Ψ", min: "ψ", nom: "Psi", mot: "Ψωμί (Pain)" }, 
    { maj: "Ω", min: "ω", nom: "Omega", mot: "Ώρα (Heure)" }
];

let state = JSON.parse(localStorage.getItem('greekData')) || { score: 0, streak: 0, history: {} };

// Algorithme SRS : Sélectionne en priorité les lettres contenant le plus d'erreurs
function getNextLetter() {
    return [...alphabet].sort((a, b) => {
        const rateA = (state.history[a.nom]?.errors || 0) / (state.history[a.nom]?.total || 1);
        const rateB = (state.history[b.nom]?.errors || 0) / (state.history[b.nom]?.total || 1);
        return rateB - rateA; 
    })[0];
}

function renderExercise() {
    const type = document.getElementById('exercise-select').value;
    const item = getNextLetter();
    const container = document.getElementById('exercise-container');
    
    let html = `<h2>Exercice</h2>`;
    if(type === 'lecture') {
        html += `<span class="big-char">${item.maj} ${item.min}</span>
                 <p>Quel est le nom de cette lettre ?</p>
                 <input type="text" id="answer" data-correct="${item.nom}" placeholder="Ex: Alpha, Bêta..." autocomplete="off">`;
    } else if(type === 'ecriture') {
        html += `<p>Entrez la lettre majuscule correspondant à :</p>
                 <span class="big-char" style="font-size: 2.5rem">${item.nom}</span>
                 <input type="text" id="answer" data-correct="${item.maj}" placeholder="Entrez le caractère grec">`;
    } else { // Audition
        html += `<p>Écoutez le nom de la lettre :</p>
                 <button onclick="speak('${item.nom}')" style="font-size: 2rem; background:none; border:none; cursor:pointer;">🔊</button>
                 <br><input type="text" id="answer" data-correct="${item.maj}" placeholder="Entrez la majuscule grecque (ex: Α)">`;
        setTimeout(() => speak(item.nom), 300); // Lance l'audio automatiquement
    }
    
    container.innerHTML = html + `<br><button class="valider-btn" onclick="validate()">Valider</button>
                                  <p class="hint-word">Exemple : ${item.mot}</p>`;
    
    // Focus automatique sur le champ de saisie
    document.getElementById('answer').focus();
}

function validate() {
    const input = document.getElementById('answer');
    if (!input || input.disabled) return;

    const userAns = input.value.trim().toLowerCase();
    const correctAns = input.dataset.correct.toLowerCase();
    const isCorrect = userAns === correctAns;
    
    // Trouver l'item correspondant dans l'alphabet pour l'historique SRS
    const item = alphabet.find(i => i.nom.toLowerCase() === correctAns || i.maj.toLowerCase() === correctAns);
    if(!state.history[item.nom]) state.history[item.nom] = {errors: 0, total: 0};
    state.history[item.nom].total++;
    
    input.disabled = true;

    if (isCorrect) {
        input.classList.add('feedback-success');
        state.score += 10; 
        state.streak++;
    } else {
        input.classList.add('feedback-error');
        input.value = `Dommage ! La réponse était : ${input.dataset.correct}`;
        state.streak = 0; 
        state.history[item.nom].errors++;
    }
    
    saveAndRefresh();
    setTimeout(renderExercise, 1800);
}

function saveAndRefresh() {
    localStorage.setItem('greekData', JSON.stringify(state));
    document.getElementById('score').innerText = state.score;
    document.getElementById('streak').innerText = state.streak;
    
    // Calcul de la barre de progression (Lettres découvertes / Total de l'alphabet)
    const discovered = Object.keys(state.history).length;
    const progressPercent = (discovered / alphabet.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;
}

// Audio corrigé (Prononciation Grecque)
function speak(text) { 
    window.speechSynthesis.cancel(); // Arrête l'audio en cours s'il y en a un
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'el-GR'; 
    window.speechSynthesis.speak(utterance); 
}

// Gestion de la Fiche Synthèse Modal
const modal = document.getElementById('modal-fiche');
document.getElementById('btn-fiche').onclick = () => {
    const content = alphabet.map(l => `<div class="fiche-item"><strong>${l.maj} ${l.min}</strong><br>${l.nom}<br><small style="color:#64748b">${l.mot.split(' ')[0]}</small></div>`).join('');
    document.getElementById('fiche-content').innerHTML = content;
    modal.showModal();
};
document.getElementById('close-modal').onclick = () => modal.close();

// Événements globaux
document.addEventListener('keydown', (e) => { if(e.key === 'Enter') validate(); });
document.getElementById('theme-toggle').onclick = () => document.body.classList.toggle('dark-mode');
document.getElementById('exercise-select').onchange = renderExercise;

// Initialisation
saveAndRefresh();
renderExercise();