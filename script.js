const alphabet = [
    { maj: "Α", min: "α", nom: "Alpha", mot: "Αθήνα (Athènes)" }, { maj: "Β", min: "β", nom: "Bêta", mot: "Βιβλίο (Livre)" },
    { maj: "Γ", min: "γ", nom: "Gamma", mot: "Γάλα (Lait)" }, { maj: "Δ", min: "δ", nom: "Delta", mot: "Δέντρο (Arbre)" },
    { maj: "Ε", min: "ε", nom: "Epsilon", mot: "Ελλάδα (Grèce)" }, { maj: "Ζ", min: "ζ", nom: "Zeta", mot: "Ζωή (Vie)" },
    { maj: "Η", min: "η", nom: "Eta", mot: "Ήλιος (Soleil)" }, { maj: "Θ", min: "θ", nom: "Theta", mot: "Θάλασσα (Mer)" },
    { maj: "Ι", min: "ι", nom: "Iota", mot: "Ιδέα (Idée)" }, { maj: "Κ", min: "κ", nom: "Kappa", mot: "Καρδιά (Cœur)" },
    { maj: "Λ", min: "λ", nom: "Lambda", mot: "Λάδι (Huile)" }, { maj: "Μ", min: "μ", nom: "Mu", mot: "Μήλο (Pomme)" },
    { maj: "Ν", min: "ν", nom: "Nu", mot: "Νερό (Eau)" }, { maj: "Ξ", min: "ξ", nom: "Xi", mot: "Ξύλο (Bois)" },
    { maj: "Ο", min: "ο", nom: "Omicron", mot: "Όνομα (Nom)" }, { maj: "Π", min: "π", nom: "Pi", mot: "Πóλη (Ville)" },
    { maj: "Ρ", min: "ρ", nom: "Rho", mot: "Ρóδι (Grenade)" }, { maj: "Σ", min: "σ", nom: "Sigma", mot: "Σπίτι (Maison)" },
    { maj: "Τ", min: "τ", nom: "Tau", mot: "Τυρί (Fromage)" }, { maj: "Υ", min: "υ", nom: "Upsilon", mot: "Ύπνος (Sommeil)" },
    { maj: "Φ", min: "φ", nom: "Phi", mot: "Φως (Lumière)" }, { maj: "Χ", min: "χ", nom: "Chi", mot: "Χέri (Main)" },
    { maj: "Ψ", min: "ψ", nom: "Psi", mot: "Ψωμί (Pain)" }, { maj: "Ω", min: "ω", nom: "Omega", mot: "Ώρα (Heure)" }
];

// État de l'application
let state = JSON.parse(localStorage.getItem('greekData')) || { score: 0, streak: 0, history: {} };
let currentLetter = null; // Sécurise la lettre en cours d'exercice

// Algorithme SRS intelligent
function getNextLetter() {
    // 1. Trouver les lettres qui n'ont ENCORE JAMAIS été vues
    const unseen = alphabet.filter(l => !state.history[l.nom] || state.history[l.nom].total === 0);
    if (unseen.length > 0) {
        // Sélectionne une lettre non vue au hasard pour lancer la rotation
        return unseen[Math.floor(Math.random() * unseen.length)];
    }
    
    // 2. Si toutes ont été vues au moins une fois, on trie par taux d'erreur
    const sorted = [...alphabet].sort((a, b) => {
        const hA = state.history[a.nom];
        const hB = state.history[b.nom];
        const rateA = hA.errors / hA.total;
        const rateB = hB.errors / hB.total;
        
        if (rateA !== rateB) {
            return rateB - rateA; // Taux d'erreur le plus haut en premier
        }
        return hA.total - hB.total; // En cas d'égalité, la moins révisée en premier
    });
    
    // Crée un petit groupe avec les 3 pires lettres pour éviter de boucler indéfiniment sur la même
    const poolSize = Math.min(3, sorted.length);
    return sorted[Math.floor(Math.random() * poolSize)];
}

function generateKeyboardHTML() {
    let kbdHtml = `<div class="virtual-keyboard">`;
    alphabet.forEach(letter => {
        kbdHtml += `<button class="kbd-key" onclick="pressVirtualKey('${letter.maj}')">${letter.maj}</button>`;
    });
    kbdHtml += `<button class="kbd-key backspace" onclick="pressVirtualKey('BACK')">⌫</button></div>`;
    return kbdHtml;
}

function renderExercise() {
    const type = document.getElementById('exercise-select').value;
    currentLetter = getNextLetter(); // Assigne la nouvelle lettre globale
    const container = document.getElementById('exercise-container');
    
    let html = `<h2>Exercice</h2>`;
    
    if(type === 'lecture') {
        html += `<span class="big-char">${currentLetter.maj} ${currentLetter.min}</span>
                 <p>Quel est le nom de cette lettre ?</p>
                 <input type="text" id="answer" data-correct="${currentLetter.nom}" placeholder="Ex: Alpha, Bêta..." autocomplete="off">`;
    } else if(type === 'ecriture') {
        html += `<p>Entrez la lettre majuscule pour :</p>
                 <span class="big-char" style="font-size: 2.5rem; color:var(--text)">${currentLetter.nom}</span>
                 <input type="text" id="answer" inputmode="none" data-correct="${currentLetter.maj}" placeholder="Utilise le clavier ci-dessous">`;
        html += generateKeyboardHTML();
    } else { // Audition
        html += `<p>Écoutez le nom de la lettre :</p>
                 <button onclick="speak('${currentLetter.nom}')" style="font-size: 3rem; background:none; border:none; cursor:pointer; -webkit-tap-highlight-color: transparent;">🔊</button>
                 <br><input type="text" id="answer" inputmode="none" data-correct="${currentLetter.maj}" placeholder="Quelle est cette lettre ?">`;
        html += generateKeyboardHTML();
        setTimeout(() => speak(currentLetter.nom), 300);
    }
    
    container.innerHTML = html + `<br><button class="valider-btn" onclick="validate()">Valider</button>
                                  <p class="hint-word">Exemple : ${currentLetter.mot}</p>`;
    
    document.getElementById('answer').focus();
}

window.pressVirtualKey = function(char) {
    const input = document.getElementById('answer');
    if (!input || input.disabled) return;
    
    if (char === 'BACK') {
        input.value = input.value.slice(0, -1);
    } else {
        input.value += char;
    }
}

function validate() {
    const input = document.getElementById('answer');
    if (!input || input.disabled || input.value.trim() === "") return;

    const userAns = input.value.trim().toLowerCase();
    const correctAns = input.dataset.correct.toLowerCase();
    const isCorrect = userAns === correctAns;
    
    // Enregistrement des statistiques SRS basé sur la sécurité de currentLetter
    if(!state.history[currentLetter.nom]) state.history[currentLetter.nom] = {errors: 0, total: 0};
    state.history[currentLetter.nom].total++;
    
    input.disabled = true;

    if (isCorrect) {
        input.classList.add('feedback-success');
        state.score += 10; 
        state.streak++;
    } else {
        input.classList.add('feedback-error');
        input.value = `Erreur ! C'était : ${input.dataset.correct}`;
        state.streak = 0; 
        state.history[currentLetter.nom].errors++;
    }
    
    saveAndRefresh();
    setTimeout(renderExercise, 1800); // Passe au prochain exercice automatiquement
}

function saveAndRefresh() {
    localStorage.setItem('greekData', JSON.stringify(state));
    document.getElementById('score').innerText = state.score;
    document.getElementById('streak').innerText = state.streak;
    
    // Met à jour la barre de progression (nombre de lettres abordées au moins une fois)
    const discovered = Object.keys(state.history).length;
    const progressPercent = (discovered / alphabet.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;
}

function speak(text) { 
    window.speechSynthesis.cancel(); 
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

// Déclencheurs globaux
document.addEventListener('keydown', (e) => { if(e.key === 'Enter') validate(); });
document.getElementById('theme-toggle').onclick = () => document.body.classList.toggle('dark-mode');
document.getElementById('exercise-select').onchange = renderExercise;

// Premier lancement officiel
saveAndRefresh();
renderExercise();