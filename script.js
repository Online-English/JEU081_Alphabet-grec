const alphabet = [
    { maj: "Α", min: "α", nom: "Alpha" },
    { maj: "Β", min: "β", nom: "Bêta" },
    { maj: "Γ", min: "γ", nom: "Gamma" },
    { maj: "Δ", min: "δ", nom: "Delta" },
    // Ajoutez le reste de l'alphabet ici
];

const container = document.getElementById('exercise-container');
const modal = document.getElementById('modal-fiche');
const select = document.getElementById('exercise-select');

// Fiche synthèse
document.getElementById('btn-fiche').addEventListener('click', () => {
    const content = alphabet.map(l => `${l.maj}${l.min} : ${l.nom}`).join('<br>');
    document.getElementById('fiche-content').innerHTML = content;
    modal.showModal();
});

// Gestion des exercices
select.addEventListener('change', (e) => {
    const type = e.target.value;
    if (!type) return;
    
    const randomItem = alphabet[Math.floor(Math.random() * alphabet.length)];
    renderExercise(type, randomItem);
});

function renderExercise(type, item) {
    container.innerHTML = "";
    
    if (type === 'lecture') {
        container.innerHTML = `<h3>Quel est le nom de cette lettre ?</h3>
                               <span class="letter-box">${item.maj}</span>
                               <p>${item.nom}</p>`; // Simplification : ajouter un input pour valider
    } 
    else if (type === 'audition') {
        container.innerHTML = `<h3>Écoutez et identifiez</h3>
                               <button onclick="speak('${item.nom}')">Écouter</button>`;
        // Logique de vérification à implémenter ici
    }
    else if (type === 'ecriture') {
        container.innerHTML = `<h3>Écrivez la lettre correspondant à :</h3>
                               <p><strong>${item.nom}</strong></p>`;
    }
}

function speak(text) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'el-GR'; // Grec moderne
    window.speechSynthesis.speak(msg);
}