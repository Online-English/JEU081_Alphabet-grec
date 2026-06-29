const alphabet = [
    { maj: "Α", min: "α", nom: "Alpha", mot: "Αθήνα" }, { maj: "Β", min: "β", nom: "Bêta", mot: "Βιβλίο" },
    { maj: "Γ", min: "γ", nom: "Gamma", mot: "Γάλα" }, { maj: "Δ", min: "δ", nom: "Delta", mot: "Δέντρο" },
    { maj: "Ε", min: "ε", nom: "Epsilon", mot: "Ελλάδα" }, { maj: "Ζ", min: "ζ", nom: "Zeta", mot: "Ζωή" },
    { maj: "Η", min: "η", nom: "Eta", mot: "Ήλιος" }, { maj: "Θ", min: "θ", nom: "Theta", mot: "Θάλασσα" },
    { maj: "Ι", min: "ι", nom: "Iota", mot: "Ιδέα" }, { maj: "Κ", min: "κ", nom: "Kappa", mot: "Καρδιά" },
    { maj: "Λ", min: "λ", nom: "Lambda", mot: "Λάδι" }, { maj: "Μ", min: "μ", nom: "Mu", mot: "Μήλο" },
    { maj: "Ν", min: "ν", nom: "Nu", mot: "Νερό" }, { maj: "Ξ", min: "ξ", nom: "Xi", mot: "Ξύλο" },
    { maj: "Ο", min: "ο", nom: "Omicron", mot: "Όνομα" }, { maj: "Π", min: "π", nom: "Pi", mot: "Πόλη" },
    { maj: "Ρ", min: "ρ", nom: "Rho", mot: "Ρόδι" }, { maj: "Σ", min: "σ", nom: "Sigma", mot: "Σπίτι" },
    { maj: "Τ", min: "τ", nom: "Tau", mot: "Τυρί" }, { maj: "Υ", min: "upsilon", nom: "Ύπνος" },
    { maj: "Φ", min: "φ", nom: "Phi", mot: "Φως" }, { maj: "Χ", min: "chi", mot: "Χέρι" },
    { maj: "Ψ", min: "psi", nom: "Ψωμί" }, { maj: "Ω", min: "omega", mot: "Ώρα" }
];

let state = JSON.parse(localStorage.getItem('greekData')) || { score: 0, streak: 0, history: {} };

function getNextLetter() {
    return alphabet.sort((a, b) => {
        const rateA = (state.history[a.nom]?.errors || 0) / (state.history[a.nom]?.total || 1);
        const rateB = (state.history[b.nom]?.errors || 0) / (state.history[b.nom]?.total || 1);
        return rateB - rateA;
    })[0];
}

function renderExercise() {
    const type = document.getElementById('exercise-select').value;
    const item = getNextLetter();
    const container = document.getElementById('exercise-container');
    
    let html = `<h3>${type.toUpperCase()}</h3>`;
    if(type === 'lecture') html += `<span class="big-char">${item.maj}</span><input type="text" id="answer" data-correct="${item.nom}" placeholder="Nom de la lettre">`;
    else if(type === 'ecriture') html += `<p>Lettre pour <strong>${item.nom}</strong></p><input type="text" id="answer" data-correct="${item.maj}" placeholder="Entrez la lettre">`;
    else html += `<button onclick="speak('${item.nom}')">🔊 Écouter</button><input type="text" id="answer" data-correct="${item.nom}" placeholder="Quelle est cette lettre ?">`;
    
    container.innerHTML = html + `<br><button onclick="validate()">Valider</button>`;
}

function validate() {
    const input = document.getElementById('answer');
    const isCorrect = input.value.trim().toLowerCase() === input.dataset.correct.toLowerCase();
    const item = alphabet.find(i => i.nom === input.dataset.correct || i.maj === input.dataset.correct);
    
    if(!state.history[item.nom]) state.history[item.nom] = {errors: 0, total: 0};
    state.history[item.nom].total++;
    
    if (isCorrect) {
        input.classList.add('feedback-success');
        state.score += 10; state.streak++;
    } else {
        input.classList.add('feedback-error');
        state.streak = 0; state.history[item.nom].errors++;
    }
    
    localStorage.setItem('greekData', JSON.stringify(state));
    document.getElementById('score').innerText = state.score;
    document.getElementById('streak').innerText = state.streak;
    setTimeout(renderExercise, 1000);
}

function speak(text) { new SpeechSynthesisUtterance(text).lang = 'el-GR'; window.speechSynthesis.speak(new SpeechSynthesisUtterance(text)); }

document.addEventListener('keydown', (e) => { if(e.key === 'Enter') validate(); });
document.getElementById('theme-toggle').onclick = () => document.body.classList.toggle('dark-mode');
document.getElementById('exercise-select').onchange = renderExercise;
renderExercise();
