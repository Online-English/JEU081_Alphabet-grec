const alphabet = [
    // Lettres Classiques
    { maj: "Α", min: "α", nom: "Alpha", mot: "Αθήνα (Athènes)", type: "lettre" },
    { maj: "Β", min: "β", nom: "Bêta", mot: "Βιβλίο (Livre)", type: "lettre" },
    { maj: "Γ", min: "γ", nom: "Gamma", mot: "Γάλα (Lait)", type: "lettre" },
    { maj: "Δ", min: "δ", nom: "Delta", mot: "Δέντρο (Arbre)", type: "lettre" },
    { maj: "Ε", min: "ε", nom: "Epsilon", mot: "Ελλάδα (Grèce)", type: "lettre" },
    { maj: "Ζ", min: "ζ", nom: "Zeta", mot: "Ζωή (Vie)", type: "lettre" },
    { maj: "Η", min: "η", nom: "Eta", mot: "Ήλιος (Soleil)", type: "lettre" },
    { maj: "Θ", min: "θ", nom: "Theta", mot: "Θάλασσα (Mer)", type: "lettre" },
    { maj: "Ι", min: "ι", nom: "Iota", mot: "Ιδέα (Idée)", type: "lettre" },
    { maj: "Κ", min: "κ", nom: "Kappa", mot: "Καρδιά (Cœur)", type: "lettre" },
    { maj: "Λ", min: "λ", nom: "Lambda", mot: "Λάδι (Huile)", type: "lettre" },
    { maj: "Μ", min: "μ", nom: "Mu", mot: "Μήλο (Pomme)", type: "lettre" },
    { maj: "Ν", min: "ν", nom: "Nu", mot: "Νερό (Eau)", type: "lettre" },
    { maj: "Ξ", min: "ξ", nom: "Xi", mot: "Ξύλο (Bois)", type: "lettre" },
    { maj: "Ο", min: "ο", nom: "Omicron", mot: "Όνομα (Nom)", type: "lettre" },
    { maj: "Π", min: "π", nom: "Pi", mot: "Πóλη (Ville)", type: "lettre" },
    { maj: "Ρ", min: "ρ", nom: "Rho", mot: "Ρóδι (Grenade)", type: "lettre" },
    { maj: "Σ", min: "σ", nom: "Sigma", mot: "Σπίτι (Maison)", type: "lettre" },
    { maj: "Τ", min: "τ", nom: "Tau", mot: "Τυρί (Fromage)", type: "lettre" },
    { maj: "Υ", min: "υ", nom: "Upsilon", mot: "Ύπνος (Sommeil)", type: "lettre" },
    { maj: "Φ", min: "φ", nom: "Phi", mot: "Φως (Lumière)", type: "lettre" },
    { maj: "Χ", min: "χ", nom: "Chi", mot: "Χέri (Main)", type: "lettre" },
    { maj: "Ψ", min: "ψ", nom: "Psi", mot: "Ψωμί (Pain)", type: "lettre" },
    { maj: "Ω", min: "ω", nom: "Omega", mot: "Ώρα (Heure)", type: "lettre" },
    // Diphthongues & Combinaisons (Débloquées au niveau supérieur)
    { maj: "ΟΙ", min: "οι", nom: "I (oi)", mot: "Οικόγενεια (Famille)", type: "combo" },
    { maj: "ΕΙ", min: "ει", nom: "I (ei)", mot: "Είμαι (Je suis)", type: "combo" },
    { maj: "ΑΙ", min: "αι", nom: "È (αι)", mot: "Αίμα (Sang)", type: "combo" },
    { maj: "ΜΠ", min: "μπ", nom: "B (mp)", mot: "Μπουκάλι (Bouteille)", type: "combo" },
    { maj: "ΝΤ", min: "ντ", nom: "D (nt)", mot: "Ντομάτα (Tomate)", type: "combo" },
    { maj: "ΓΚ", min: "γκ", nom: "G (gk)", mot: "Γκάφα (Gaffe)", type: "combo" }
];

let state = JSON.parse(localStorage.getItem('greekDataV3')) || { score: 0, streak: 0, history: {} };
let currentLetter = null;
let isSlowAudio = false;

// Audio Synth - Sound Design Épuré
function playSynthSound(isSuccess) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    
    if (isSuccess) {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.1); // G5
    } else {
        osc.frequency.setValueAtTime(293.66, ctx.currentTime); // D4
        osc.frequency.linearRampToValueAtTime(146.83, ctx.currentTime + 0.15); // D3
    }
    osc.start(); gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.stop(ctx.currentTime + 0.25);
}

function getLevel() {
    return Math.min(20, Math.floor(state.score / 2000) + 1);
}

function getNextLetter() {
    const userLevel = getLevel();
    // Filtre les combinaisons complexes si niveau < 2
    const availablePool = alphabet.filter(item => item.type === 'lettre' || userLevel >= 2);
    
    const unseen = availablePool.filter(l => !state.history[l.nom] || state.history[l.nom].total === 0);
    if (unseen.length > 0) return unseen[Math.floor(Math.random() * unseen.length)];
    
    const sorted = [...availablePool].sort((a, b) => {
        const hA = state.history[a.nom] || { errors: 0, total: 1 };
        const hB = state.history[b.nom] || { errors: 0, total: 1 };
        return (hB.errors / hB.total) - (hA.errors / hA.total);
    });
    return sorted[Math.floor(Math.random() * Math.min(3, sorted.length))];
}

function renderExercise() {
    const type = document.getElementById('exercise-select').value;
    currentLetter = getNextLetter();
    const container = document.getElementById('exercise-container');
    let html = `<h2>Exercice</h2>`;
    
    if (type === 'qcm') {
        const options = [currentLetter.nom];
        while(options.length < 4) {
            const r = alphabet[Math.floor(Math.random() * alphabet.length)].nom;
            if(!options.includes(r)) options.push(r);
        }
        options.sort(() => Math.random() - 0.5);
        html += `<span class="big-char">${currentLetter.maj} ${currentLetter.min}</span><p>Identifiez la bonne transcription :</p><div class="qcm-grid">`;
        options.forEach(opt => {
            html += `<button class="qcm-btn" onclick="validateQCM('${opt}')">${opt}</button>`;
        });
        html += `</div>`;
    } else if (type === 'lecture') {
        html += `<span class="big-char">${currentLetter.maj} ${currentLetter.min}</span><input type="text" id="answer" data-correct="${currentLetter.nom}" placeholder="Nom de la lettre" autocomplete="off">`;
        html += `<br><button class="valider-btn" onclick="validateText()">Valider</button>`;
    } else if (type === 'ecriture') {
        html += `<p>Lettre majuscule pour :</p><span class="big-char" style="font-size: 2.5rem; color:var(--text)">${currentLetter.nom}</span><input type="text" id="answer" inputmode="none" data-correct="${currentLetter.maj}"><div class="virtual-keyboard">`;
        alphabet.filter(l => l.type === 'lettre').forEach(l => html += `<button class="kbd-key" onclick="pressKey('${l.maj}')">${l.maj}</button>`);
        html += `<button class="kbd-key backspace" onclick="pressKey('BACK')">⌫</button></div><button class="valider-btn" onclick="validateText()">Valider</button>`;
    } else if (type === 'audition') {
        html += `<p>Écoutez le son :</p><button onclick="speak('${currentLetter.nom}')" style="font-size:3rem; background:none; border:none; cursor:pointer;">🔊</button><br><input type="text" id="answer" inputmode="none" data-correct="${currentLetter.maj}"><div class="virtual-keyboard">`;
        alphabet.filter(l => l.type === 'lettre').forEach(l => html += `<button class="kbd-key" onclick="pressKey('${l.maj}')">${l.maj}</button>`);
        html += `<button class="kbd-key backspace" onclick="pressKey('BACK')">⌫</button></div><button class="valider-btn" onclick="validateText()">Valider</button>`;
        setTimeout(() => speak(currentLetter.nom), 400);
    } else if (type === 'oral') {
        html += `<span class="big-char">${currentLetter.maj} ${currentLetter.min}</span><p>Cliquez sur le micro et prononcez son nom à voix haute :</p><button id="mic-trigger" class="mic-btn" onclick="startRecognition()">🎙️</button><div id="oral-transcript" style="margin-top:10px; font-weight:bold;"></div>`;
    }
    
    container.innerHTML = html + `<p class="hint-word">Exemple : ${currentLetter.mot}</p>`;
    const ansInput = document.getElementById('answer');
    if (ansInput && ansInput.getAttribute('inputmode') !== 'none') ansInput.focus();
}

window.pressKey = function(char) {
    const input = document.getElementById('answer');
    if (!input || input.disabled) return;
    if (char === 'BACK') input.value = input.value.slice(0, -1);
    else input.value += char;
};

window.validateQCM = function(selected) {
    processAnswer(selected.toLowerCase() === currentLetter.nom.toLowerCase(), currentLetter.nom);
};

window.validateText = function() {
    const input = document.getElementById('answer');
    if(!input || input.value.trim() === "") return;
    processAnswer(input.value.trim().toLowerCase() === input.dataset.correct.toLowerCase(), input.dataset.correct);
};

function processAnswer(isCorrect, correctDisplay) {
    const container = document.getElementById('exercise-container');
    const input = document.getElementById('answer');
    
    if(!state.history[currentLetter.nom]) state.history[currentLetter.nom] = {errors: 0, total: 0};
    state.history[currentLetter.nom].total++;
    
    playSynthSound(isCorrect);
    if(input) input.disabled = true;

    if (isCorrect) {
        if(input) input.classList.add('feedback-success');
        state.score += 15; state.streak++;
    } else {
        if(input) {
            input.classList.add('feedback-error');
            input.value = `Correction : ${correctDisplay}`;
        }
        state.streak = 0; state.history[currentLetter.nom].errors++;
    }
    saveAndRefresh();
    setTimeout(renderExercise, 1800);
}

// Reconnaissance Vocale (Expression Orale)
window.startRecognition = function() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("La reconnaissance vocale n'est pas supportée par votre appareil actuel.");
        return;
    }
    const rec = new SpeechRecognition();
    rec.lang = 'el-GR'; // Traité en contexte Grec moderne
    const btn = document.getElementById('mic-trigger');
    const display = document.getElementById('oral-transcript');
    
    rec.onstart = () => { btn.classList.add('recording'); display.innerText = "Écoute active..."; };
    rec.onresult = (e) => {
        const resultText = e.results[0][0].transcript.toLowerCase();
        display.innerText = `Entendu : "${resultText}"`;
        // Comparaison souple avec le nom ou le caractère
        const match = resultText.includes(currentLetter.nom.toLowerCase()) || resultText.includes(currentLetter.min) || resultText.includes(currentLetter.maj.toLowerCase());
        setTimeout(() => processAnswer(match, currentLetter.nom), 1000);
    };
    rec.onerror = () => { btn.classList.remove('recording'); display.innerText = "Erreur d'écoute."; };
    rec.onend = () => btn.classList.remove('recording');
    rec.start();
};

function saveAndRefresh() {
    localStorage.setItem('greekDataV3', JSON.stringify(state));
    const lvl = getLevel();
    document.getElementById('level-val').innerText = lvl;
    document.getElementById('score').innerText = state.score;
    document.getElementById('streak').innerText = state.streak;
    
    // Barre basée sur la progression vers le niveau supérieur (palier de 2000 XP)
    const currentLevelXP = state.score % 2000;
    const progressPercent = (currentLevelXP / 2000) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;
    
    renderDashboard();
}

function renderDashboard() {
    const grid = document.getElementById('dashboard-grid');
    const userLevel = getLevel();
    const activePool = alphabet.filter(item => item.type === 'lettre' || userLevel >= 2);
    
    grid.innerHTML = activePool.map(l => {
        const h = state.history[l.nom];
        let status = "";
        if (h && h.total > 0) status = (h.errors / h.total < 0.25) ? "mastered" : "learning";
        return `<div class="dash-cell ${status}">${l.maj}</div>`;
    }).join('');
}

function speak(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'el-GR';
    utterance.rate = isSlowAudio ? 0.45 : 0.85; // Prise en compte de l'audio lent
    window.speechSynthesis.speak(utterance);
}

// Événements
document.getElementById('slow-toggle').onclick = (e) => {
    isSlowAudio = !isSlowAudio;
    e.target.classList.toggle('active', isSlowAudio);
    e.target.innerText = isSlowAudio ? "🐢 Audio Lent : ON" : "🐢 Audio Lent : OFF";
};
const modal = document.getElementById('modal-fiche');
document.getElementById('btn-fiche').onclick = () => {
    document.getElementById('fiche-content').innerHTML = alphabet.map(l => `<div class="fiche-item"><strong>${l.maj} ${l.min}</strong><br>${l.nom}</div>`).join('');
    modal.showModal();
};
document.getElementById('close-modal').onclick = () => modal.close();
document.getElementById('theme-toggle').onclick = () => document.body.classList.toggle('dark-mode');
document.getElementById('exercise-select').onchange = renderExercise;
document.addEventListener('keydown', (e) => { if(e.key === 'Enter') window.validateText(); });

saveAndRefresh();
renderExercise();