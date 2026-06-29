const alphabet = [
    { maj: "Α", min: "α", nom: "Alpha" }, { maj: "Β", min: "β", nom: "Bêta" },
    { maj: "Γ", min: "γ", nom: "Gamma" }, { maj: "Δ", min: "δ", nom: "Delta" },
    { maj: "Ε", min: "ε", nom: "Epsilon" }, { maj: "Ζ", min: "ζ", nom: "Zeta" },
    { maj: "Η", min: "η", nom: "Eta" }, { maj: "Θ", min: "θ", nom: "Theta" },
    { maj: "Ι", min: "ι", nom: "Iota" }, { maj: "Κ", min: "κ", nom: "Kappa" },
    { maj: "Λ", min: "λ", nom: "Lambda" }, { maj: "Μ", min: "μ", nom: "Mu" },
    { maj: "Ν", min: "ν", nom: "Nu" }, { maj: "Ξ", min: "ξ", nom: "Xi" },
    { maj: "Ο", min: "ο", nom: "Omicron" }, { maj: "Π", min: "π", nom: "Pi" },
    { maj: "Ρ", min: "ρ", nom: "Rho" }, { maj: "Σ", min: "sigma", nom: "Sigma" },
    { maj: "Τ", min: "τ", nom: "Tau" }, { maj: "Υ", min: "upsilon", nom: "Upsilon" },
    { maj: "Φ", min: "φ", nom: "Phi" }, { maj: "Χ", min: "chi", nom: "Chi" },
    { maj: "Ψ", min: "psi", nom: "Psi" }, { maj: "Ω", min: "omega", nom: "Omega" }
];

const container = document.getElementById('exercise-container');
const modal = document.getElementById('modal-fiche');
const select = document.getElementById('exercise-select');

// Ouvrir fiche
document.getElementById('btn-fiche').addEventListener('click', () => {
    const content = alphabet.map(l => `<div class="letter-card">${l.maj}${l.min}<br><strong>${l.nom}</strong></div>`).join('');
    document.getElementById('fiche-content').innerHTML = content;
    modal.showModal();
});
document.getElementById('close-modal').addEventListener('click', () => modal.close());

select.addEventListener('change', (e) => {
    if(!e.target.value) return;
    runExercise(e.target.value);
});

function runExercise(type) {
    const item = alphabet[Math.floor(Math.random() * alphabet.length)];
    container.innerHTML = `<h3>Exercice en cours...</h3>`;
    
    if (type === 'lecture') {
        container.innerHTML = `<span class="big-char">${item.maj}</span>
                               <p>Quelle est cette lettre ?</p>
                               <input type="text" id="answer" placeholder="Nom de la lettre">
                               <button onclick="check('${item.nom}')">Vérifier</button>`;
    } else if (type === 'audition') {
        container.innerHTML = `<h3>Écoutez le nom :</h3>
                               <button onclick="speak('${item.nom}')">🔊 Écouter</button>
                               <p>Quelle lettre correspond à ce son ?</p>
                               <select id="answer">${alphabet.map(l => `<option value="${l.nom}">${l.maj} (${l.nom})</option>`).join('')}</select>
                               <button onclick="check('${item.nom}')">Vérifier</button>`;
    } else if (type === 'ecriture') {
        container.innerHTML = `<p>Écrivez la lettre correspondant à : <strong>${item.nom}</strong></p>
                               <input type="text" id="answer" placeholder="La lettre (maj ou min)">
                               <button onclick="check('${item.maj}')">Vérifier</button>`;
    }
}

function speak(text) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'el-GR';
    window.speechSynthesis.speak(msg);
}

window.check = function(correct) {
    const userVal = document.getElementById('answer').value;
    alert(userVal.toLowerCase() === correct.toLowerCase() ? "Bravo !" : "Dommage, c'était : " + correct);
    runExercise(select.value); // Next
}
