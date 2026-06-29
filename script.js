const alphabet = [
    { maj: "Α", min: "α", nom: "Alpha", mot: "Αθήνα (Athènes)", type: "lettre", mne: "Le début de tout, la première marche." },
    { maj: "Β", min: "β", nom: "Bêta", mot: "Βιβλίο (Livre)", type: "lettre", mne: "Un B avec une longue jambe qui descend." },
    { maj: "Γ", min: "γ", nom: "Gamma", mot: "Γάλα (Lait)", type: "lettre", mne: "Il ressemble à un 'r' mais chante 'G'." },
    { maj: "Δ", min: "δ", nom: "Delta", mot: "Δέντρο (Arbre)", type: "lettre", mne: "La forme d'un delta de fleuve ou d'une tente." },
    { maj: "Ε", min: "ε", nom: "Epsilon", mot: "Ελλάδα (Grèce)", type: "lettre", mne: "Un 'E' minuscule arrondi à l'envers." },
    { maj: "Ζ", min: "ζ", nom: "Zeta", mot: "Ζωή (Vie)", type: "lettre", mne: "Un 'Z' cursif élégant avec une boucle." },
    { maj: "Η", min: "η", nom: "Eta", mot: "Ήλιος (Soleil)", type: "lettre", mne: "Piège ! On dirait un 'n' mais c'est un son 'I'." },
    { maj: "Θ", min: "θ", nom: "Theta", mot: "Θάλασσα (Mer)", type: "lettre", mne: "Un bouclier fendu en deux pour le 'Th'." },
    { maj: "Ι", min: "ι", nom: "Iota", mot: "Ιδέα (Idée)", type: "lettre", mne: "Le plus petit, un simple i sans point." },
    { maj: "Κ", min: "κ", nom: "Kappa", mot: "Καρδιά (Cœur)", type: "lettre", mne: "Un 'K' tout à fait traditionnel." },
    { maj: "Λ", min: "λ", nom: "Lambda", mot: "Λάδι (Huile)", type: "lettre", mne: "Un toit de maison pointu ou un 'V' inversé." },
    { maj: "Μ", min: "μ", nom: "Mu", mot: "Μήλο (Pomme)", type: "lettre", mne: "Un 'u' possédant une grande patte avant." },
    { maj: "Ν", min: "ν", nom: "Nu", mot: "Νερό (Eau)", type: "lettre", mne: "DANGER ! Ressemble à un 'v' mais c'est un 'N' !" },
    { maj: "Ξ", min: "ξ", nom: "Xi", mot: "Ξύλο (Bois)", type: "lettre", mne: "Trois lignes horizontales parallèles : le son 'X'." },
    { maj: "Ο", min: "ο", nom: "Omicron", mot: "Όνομα (Nom)", type: "lettre", mne: "Le petit 'o' tout à fait classique." },
    { maj: "Π", min: "π", nom: "Pi", mot: "Πóλη (Ville)", type: "lettre", mne: "Le fameux nombre géométrique Pi." },
    { maj: "Ρ", min: "ρ", nom: "Rho", mot: "Ρóδι (Grenade)", type: "lettre", mne: "PIÈGE ! Ressemble à un 'p' mais c'est un 'R'." },
    { maj: "Σ", min: "σ", nom: "Sigma", mot: "Σπίτι (Maison)", type: "lettre", mne: "Un 'o' avec une casquette ou un chapeau." },
    { maj: "Τ", min: "τ", nom: "Tau", mot: "Τυρί (Fromage)", type: "lettre", mne: "Un 'T' sans barre supérieure à gauche." },
    { maj: "Υ", min: "υ", nom: "Upsilon", mot: "Ύπνος (Sommeil)", type: "lettre", mne: "Une coupe ou un vase pour recueillir le son 'I'." },
    { maj: "Φ", min: "φ", nom: "Phi", mot: "Φως (Lumière)", type: "lettre", mne: "Une ligne verticale qui transperce un cercle." },
    { maj: "Χ", min: "χ", nom: "Chi", mot: "Χέri (Main)", type: "lettre", mne: "Une grande croix qui produit le son 'R' raclé." },
    { maj: "Ψ", min: "ψ", nom: "Psi", mot: "Ψωμί (Pain)", type: "lettre", mne: "Le trident magique de Poséidon : son 'Ps'." },
    { maj: "Ω", min: "ω", nom: "Omega", mot: "Ώρα (Heure)", type: "lettre", mne: "Le grand 'O' en forme de petites fesses." },
    
    // Diphthongues (Niveau >= 2)
    { maj: "ΟΙ", min: "οι", nom: "I (oi)", mot: "Οικόγενεια (Famille)", type: "combo", mne: "L'union du O et du I se prononce 'I'." },
    { maj: "ΕΙ", min: "ει", nom: "I (ei)", mot: "Είμαι (Je suis)", type: "combo", mne: "L'union du E et du I se prononce 'I'." },
    { maj: "ΑΙ", min: "αι", nom: "È (αι)", mot: "Αίμα (Sang)", type: "combo", mne: "L'union du A et du I se prononce 'È'." },
    { maj: "ΜΠ", min: "μπ", nom: "B (mp)", mot: "Μπουκάλι (Bouteille)", type: "combo", mne: "En début de mot, MP se prononce 'B'." },
    { maj: "ΝΤ", min: "ντ", nom: "D (nt)", mot: "Ντομάτα (Tomate)", type: "combo", mne: "En début de mot, NT se prononce 'D'." }
];

const avatarsList = ["👶", "🤓", "🎓", "🏛️", "🏺", "🦉", "⚡", "🔱", "🏹", "🛡️", "⚔️", "🦁", "🦅", "🐉", "🌋", "☀️", "🌟", "👑", "🔮", "👑"];
const themesList = [
    { id: "theme-dark", name: "Sombre Abyssal", req: 1 },
    { id: "theme-light", name: "Clarté Épurée", req: 1 },
    { id: "theme-cyberpunk", name: "Néo Athènes 2026", req: 2 },
    { id: "theme-olympe", name: "Marbre de l'Olympe", req: 4 }
];

let state = JSON.parse(localStorage.getItem('greekMasterV4')) || { score: 0, streak: 0, currentCombo: 0, history: {}, activeAvatar: "👶", activeTheme: "theme-dark" };
let currentLetter = null;
let isSlowAudio = false;
let chronoTimer = null;
let timeLeft = 60;

// Sound Design Nativ
function playTone(freqs, duration) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    freqs.forEach((f, i) => {
        const osc = ctx.createOscillator(); const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(f, ctx.currentTime + (i * 0.08));
        gain.gain.setValueAtTime(0.06, ctx.currentTime + (i * 0.08));
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (i * 0.08) + duration);
        osc.start(ctx.currentTime + (i * 0.08)); osc.stop(ctx.currentTime + (i * 0.08) + duration);
    });
}

// Retour Haptique Mobile
function triggerVibrate(pattern) {
    if ("vibrate" in navigator) navigator.vibrate(pattern);
}

function getLevel() { return Math.min(20, Math.floor(state.score / 2000) + 1); }

function getNextLetter() {
    const lvl = getLevel();
    const pool = alphabet.filter(item => item.type === 'lettre' || lvl >= 2);
    const unseen = pool.filter(l => !state.history[l.nom] || state.history[l.nom].total === 0);
    if (unseen.length > 0) return unseen[Math.floor(Math.random() * unseen.length)];
    return pool.sort((a,b) => ((state.history[b.nom]?.errors||0)/(state.history[b.nom]?.total||1)) - ((state.history[a.nom]?.errors||0)/(state.history[a.nom]?.total||1)))[Math.floor(Math.random() * Math.min(3, pool.length))];
}

function renderExercise() {
    const type = document.getElementById('exercise-select').value;
    const container = document.getElementById('exercise-container');
    const timerBox = document.getElementById('timer-container');
    
    if (type === 'chrono') { timerBox.classList.remove('timer-hidden'); if(!chronoTimer) startChrono(); } 
    else { timerBox.classList.add('timer-hidden'); stopChrono(); }

    currentLetter = getNextLetter();
    let html = `<h2>Mission</h2>`;
    
    if (type === 'qcm' || type === 'chrono') {
        const opts = [currentLetter.nom];
        while(opts.length < 4) { const r = alphabet[Math.floor(Math.random() * alphabet.length)].nom; if(!opts.includes(r)) opts.push(r); }
        opts.sort(() => Math.random() - 0.5);
        html += `<span class="big-char">${currentLetter.maj} ${currentLetter.min}</span><div class="qcm-grid">` + opts.map(o => `<button class="qcm-btn" onclick="checkAnswer('${o}', '${currentLetter.nom}')">${o}</button>`).join('') + `</div>`;
    } else if (type === 'lecture') {
        html += `<span class="big-char">${currentLetter.maj} ${currentLetter.min}</span><input type="text" id="answer" data-correct="${currentLetter.nom}" placeholder="Nom en français..."><br><button class="valider-btn" onclick="validateText()">Valider</button>`;
    } else if (type === 'ecriture' || type === 'audition') {
        const isAud = type === 'audition';
        html += isAud ? `<p>Écoutez :</p><button onclick="speak('${currentLetter.nom}')" style="font-size:3rem; background:none; border:none; cursor:pointer;">🔊</button>` : `<p>Lettre pour :</p><h3>${currentLetter.nom}</h3>`;
        html += `<br><input type="text" id="answer" inputmode="none" data-correct="${currentLetter.maj}"><div class="virtual-keyboard">` + alphabet.filter(l=>l.type==='lettre').map(l=>`<button class="kbd-key" onclick="pressKey('${l.maj}')">${l.maj}</button>`).join('') + `<button class="kbd-key backspace" onclick="pressKey('BACK')">⌫</button></div><button class="valider-btn" onclick="validateText()">Valider</button>`;
        if(isAud) setTimeout(() => speak(currentLetter.nom), 300);
    } else if (type === 'oral') {
        html += `<span class="big-char">${currentLetter.maj} ${currentLetter.min}</span><button id="mic-trigger" class="mic-btn" onclick="startSpeech()">🎙️</button><div id="oral-transcript">Prêt...</div>`;
    }
    container.innerHTML = html + `<p class="hint-word">Exemple : ${currentLetter.mot}</p>`;
    if(document.getElementById('answer') && document.getElementById('answer').getAttribute('inputmode') !== 'none') document.getElementById('answer').focus();
}

window.pressKey = function(c) {
    const i = document.getElementById('answer'); if(!i || i.disabled) return;
    if(c === 'BACK') i.value = i.value.slice(0,-1); else i.value += c;
};

window.checkAnswer = function(selected, correct) { processResult(selected.toLowerCase() === correct.toLowerCase(), correct); };
window.validateText = function() { const i = document.getElementById('answer'); processResult(i.value.trim().toLowerCase() === i.dataset.correct.toLowerCase(), i.dataset.correct); };

function processResult(isCorrect, correctAnswerDisplay) {
    const type = document.getElementById('exercise-select').value;
    if(!state.history[currentLetter.nom]) state.history[currentLetter.nom] = {errors: 0, total: 0};
    state.history[currentLetter.nom].total++;
    
    const input = document.getElementById('answer');
    if(input) input.disabled = true;

    if (isCorrect) {
        triggerVibrate(40); state.currentCombo = Math.min(3, state.currentCombo + 1);
        const multiplier = state.currentCombo;
        state.score += 10 * multiplier; state.streak++;
        if(type === 'chrono') timeLeft += 2;
        if(input) input.classList.add('feedback-success');
        playTone([523.25, 659.25, 783.99], 0.15); // Accord parfait joyeux
    } else {
        triggerVibrate([80, 50, 80]); state.currentCombo = 0; state.streak = 0;
        state.history[currentLetter.nom].errors++;
        if(type === 'chrono') timeLeft = Math.max(0, timeLeft - 5);
        playTone([220, 196], 0.2); // Son d'erreur descendé
        
        // Injection du mnémonique visuel directement en cas de mauvaise réponse
        const container = document.getElementById('exercise-container');
        const mneDiv = document.createElement('div'); mneDiv.className = "mnemonic-text";
        mneDiv.innerText = `💡 Mémo : ${currentLetter.mne}`;
        container.insertBefore(mneDiv, container.lastChild);
        if(input) { input.classList.add('feedback-error'); input.value = `C'était : ${correctAnswerDisplay}`; }
    }
    saveAndRefresh();
    setTimeout(renderExercise, isCorrect ? 1000 : 2500);
}

function startChrono() {
    timeLeft = 60; document.getElementById('timer-val').innerText = timeLeft;
    chronoTimer = setInterval(() => {
        timeLeft--; document.getElementById('timer-val').innerText = timeLeft;
        if(timeLeft <= 0) { stopChrono(); alert("Temps écoulé ! Votre score global a augmenté."); document.getElementById('exercise-select').value = 'qcm'; renderExercise(); }
    }, 1000);
}
function stopChrono() { clearInterval(chronoTimer); chronoTimer = null; }

window.startSpeech = function() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SR) return alert("Micro non supporté.");
    const rec = new SR(); rec.lang = 'el-GR';
    rec.onstart = () => { document.getElementById('mic-trigger').classList.add('recording'); };
    rec.onresult = (e) => {
        const txt = e.results[0][0].transcript.toLowerCase();
        document.getElementById('oral-transcript').innerText = `Entendu : ${txt}`;
        const match = txt.includes(currentLetter.nom.toLowerCase()) || txt.includes(currentLetter.min) || txt.includes(currentLetter.maj.toLowerCase());
        setTimeout(() => processResult(match, currentLetter.nom), 800);
    };
    rec.onerror = () => { document.getElementById('mic-trigger').classList.remove('recording'); };
    rec.onend = () => document.getElementById('mic-trigger').classList.remove('recording');
    rec.start();
};

function saveAndRefresh() {
    localStorage.setItem('greekMasterV4', JSON.stringify(state));
    const lvl = getLevel();
    document.getElementById('level-val').innerText = lvl;
    document.getElementById('score').innerText = state.score;
    document.getElementById('streak').innerText = state.streak;
    document.getElementById('avatar-val').innerText = avatarsList[lvl - 1];
    
    // Combo UI
    const cBox = document.getElementById('combo-box');
    if(state.currentCombo > 1) { cBox.style.display = "block"; document.getElementById('combo-val').innerText = `x${state.currentCombo}`; } 
    else { cBox.style.display = "none"; }
    
    // Barre de progression
    document.getElementById('progress-bar').style.width = `${((state.score % 2000) / 2000) * 100}%`;
    document.body.className = state.activeTheme;
    renderDashboard();
}

function renderDashboard() {
    const lvl = getLevel();
    document.getElementById('dashboard-grid').innerHTML = alphabet.filter(i => i.type === 'lettre' || lvl >= 2).map(l => {
        const h = state.history[l.nom]; let s = "";
        if(h && h.total > 0) s = (h.errors/h.total < 0.25) ? "mastered" : "learning";
        return `<div class="dash-cell ${s}">${l.maj}</div>`;
    }).join('');
}

function speak(text) {
    window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text);
    u.lang = 'el-GR'; u.rate = isSlowAudio ? 0.45 : 0.85; window.speechSynthesis.speak(u);
}

// Boutiques et fenêtres Modales
const shopModal = document.getElementById('modal-boutique');
document.getElementById('btn-boutique').onclick = () => {
    const lvl = getLevel();
    document.getElementById('avatars-pool').innerHTML = avatarsList.map((a, i) => `<span class="avatar-item ${i < lvl ? 'unlocked' : ''}" title="Niveau ${i+1}">${a}</span>`).join('');
    document.getElementById('themes-pool').innerHTML = themesList.map(t => {
        const locked = lvl < t.req;
        return `<button class="theme-btn ${locked ? 'locked' : ''}" ${locked ? 'disabled' : ''} onclick="applyTheme('${t.id}')">${t.name} ${locked ? `(Niv. ${t.req})` : ''}</button>`;
    }).join('');
    shopModal.showModal();
};
window.applyTheme = function(themeId) { state.activeTheme = themeId; saveAndRefresh(); shopModal.close(); };
document.getElementById('close-boutique').onclick = () => shopModal.close();

document.getElementById('btn-fiche').onclick = () => {
    document.getElementById('fiche-content').innerHTML = alphabet.map(l => `<div class="fiche-item"><strong>${l.maj} ${l.min}</strong><br>${l.nom}</div>`).join('');
    document.getElementById('modal-fiche').showModal();
};
document.getElementById('close-modal').onclick = () => document.getElementById('modal-fiche').close();

document.getElementById('slow-toggle').onclick = (e) => { isSlowAudio = !isSlowAudio; e.target.classList.toggle('active', isSlowAudio); e.target.innerText = isSlowAudio ? "🐢 Audio Lent : ON" : "🐢 Audio Lent : OFF"; };
document.getElementById('exercise-select').onchange = renderExercise;
document.addEventListener('keydown', (e) => { if(e.key === 'Enter') window.validateText(); });

saveAndRefresh(); renderExercise();