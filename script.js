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
    { maj: "Σ", min: "σ / ς", nom: "Sigma", mot: "Σπίτι (Maison)", type: "lettre", mne: "Utilise 'σ' au début/milieu d'un mot et 'ς' à la toute fin !" },
    { maj: "Τ", min: "τ", nom: "Tau", mot: "Τυρί (Fromage)", type: "lettre", mne: "Un 'T' sans barre supérieure à gauche." },
    { maj: "Υ", min: "υ", nom: "Upsilon", mot: "Ύπνος (Sommeil)", type: "lettre", mne: "Une coupe ou un vase pour recueillir le son 'I'." },
    { maj: "Φ", min: "φ", nom: "Phi", mot: "Φως (Lumière)", type: "lettre", mne: "Une ligne verticale qui transperce un cercle." },
    { maj: "Χ", min: "χ", nom: "Chi", mot: "Χέri (Main)", type: "lettre", mne: "Une grande croix qui produit le son 'R' raclé." },
    { maj: "Ψ", min: "ψ", nom: "Psi", mot: "Ψωμί (Pain)", type: "lettre", mne: "Le trident magique de Poséidon : son 'Ps'." },
    { maj: "Ω", min: "ω", nom: "Omega", mot: "Ώρα (Heure)", type: "lettre", mne: "Le grand 'O' en forme de petites fesses." },
    
    // Combinaisons (Niveau >= 2)
    { maj: "ΟΙ", min: "οι", nom: "I (oi)", mot: "Οικόγενεια (Famille)", type: "combo", mne: "L'union du O et du I se prononce 'I'." },
    { maj: "ΕΙ", min: "ει", nom: "I (ei)", mot: "Είμαι (Je suis)", type: "combo", mne: "L'union du E et du I se prononce 'I'." },
    { maj: "ΑΙ", min: "αι", nom: "È (αι)", mot: "Αίμα (Sang)", type: "combo", mne: "L'union du A et du I se prononce 'È'." },
    { maj: "ΜΠ", min: "μπ", nom: "B (mp)", mot: "Μπουκάλι (Bouteille)", type: "combo", mne: "En début de mot, MP se prononce 'B'." },
    { maj: "ΝΤ", min: "ντ", nom: "D (nt)", mot: "Ντομάτα (Tomate)", type: "combo", mne: "En début de mot, NT se prononce 'D'." }
];

const avatarsList = ["👶", "🤓", "🎓", "🏛️", "🏺", "🦉", "🦁", "🦅", "🐉", "🌋", "☀️", "🌟", "👑", "🔮", "⚔️", "🛡️", "🏹", "✨", "🔥", "👑"];
const prestigeAvatars = ["⚡", "🔱", "🏹", "🦉", "🛡️", "🌋", "🍷"];

// Économie : Boutique d'objets cachés (5 Avatars & 5 Thèmes)
const shopAvatars = [
    { emoji: "🧜‍♂️", cost: 600 }, { emoji: "👾", cost: 1000 }, { emoji: "🤖", cost: 1500 }, { emoji: "🦊", cost: 2000 }, { emoji: "🦄", cost: 3000 }
];
const shopThemes = [
    { id: "theme-atlantis", name: "Profondeurs d'Atlantis 🌊", cost: 800 },
    { id: "theme-cyberpunk", name: "Néo Athènes 🌌", cost: 1200 },
    { id: "theme-sunset", name: "Coucher de Soleil Égée 🌅", cost: 1800 },
    { id: "theme-forest", name: "Forêt des Dryades 🌳", cost: 2500 },
    { id: "theme-royal", name: "Empire Byzantin 👑", cost: 3500 }
];

const badgesList = [
    "🦉 Initié d'Athéna (Niv 1)", "📜 Scribe de l'Agora (Niv 2)", "🏺 Porteur de Jarre (Niv 3)", "🔱 Explorateur d'Atlantis (Niv 4)",
    "🛡️ Soldat de Sparte (Niv 5)", "🗣️ Orateur du Pnyx (Niv 6)", "🎭 Acteur de Dionysos (Niv 7)", "📐 Disciple de Thalès (Niv 8)",
    "🏛️ Pilier du Parthénon (Niv 9)", "🏹 Chasseur d'Artémis (Niv 10)", "🏃 Athlète d'Olympie (Niv 11)", "🎨 Poète Homérique (Niv 12)",
    "🐎 Cavalier d'Alexandre (Niv 13)", "🔮 Oracle de Delphes (Niv 14)", "🦁 Sphinx Mythique (Niv 15)", "🌟 Constellation d'Orion (Niv 16)",
    "🌋 Forgeron d'Héphaïstos (Niv 17)", "⚔️ Conquérant du Titan (Niv 18)", "🌟 Élu des Constellations (Niv 19)", "⚡ Divinité de l'Olympe (Niv 20)"
];

const nativeThemes = [
    { id: "theme-dark", name: "Sombre Abyssal" }, { id: "theme-light", name: "Clarté Épurée" }, { id: "theme-olympe", name: "Marbre de l'Olympe" }
];

// État initial global (Version V9 - Économie de Drachmes et Calendrier)
let state = JSON.parse(localStorage.getItem('greekMasterV9')) || { 
    score: 0, drachmes: 0, streak: 0, highestStreak: 0, currentCombo: 0, lastLvl: 1, prestige: 0, streakFreeze: 0, lastActiveDate: "",
    unlockedAvatars: [], unlockedThemes: ["theme-dark", "theme-light", "theme-olympe"],
    history: {}, dailyQuests: { date: "", list: [] }, chronoRecords: [], activityLog: {}
};

let currentLetter = null; let isSlowAudio = false; let chronoTimer = null; let timeLeft = 60; let chronoScore = 0;
let assocSelected = null; let assocPairsMatched = 0;

function launchCelebration() {
    for (let i = 0; i < 80; i++) {
        const p = document.createElement('div'); p.className = 'confetti-particle'; p.style.left = Math.random() * 100 + 'vw';
        p.style.backgroundColor = ['#ff007f', '#00ffcc', '#f59e0b', '#22c55e', '#6366f1'][Math.floor(Math.random() * 5)];
        p.style.animationDuration = (Math.random() * 2 + 1.5) + 's'; p.style.animationDelay = Math.random() * 0.4 + 's';
        p.style.width = p.style.height = (Math.random() * 6 + 6) + 'px'; document.body.appendChild(p); setTimeout(() => p.remove(), 3500);
    }
}

function triggerVibrate(p) { if ("vibrate" in navigator) navigator.vibrate(p); }

function playTone(freqs, duration) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    freqs.forEach((f, i) => {
        const osc = ctx.createOscillator(); const gain = ctx.createGain(); osc.connect(gain); gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(f, ctx.currentTime + (i * 0.08)); gain.gain.setValueAtTime(0.04, ctx.currentTime + (i * 0.08));
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (i * 0.08) + duration);
        osc.start(ctx.currentTime + (i * 0.08)); osc.stop(ctx.currentTime + (i * 0.08) + duration);
    });
}

function getLevel() { return Math.min(20, Math.floor(state.score / 1000) + 1); }

// Gestion du Calendrier d'Assiduité (Vérification et sauvegarde journalière)
function checkDailyStreakAndCalendar() {
    const today = new Date().toISOString().split('T')[0];
    if (!state.activityLog) state.activityLog = {};
    if (!state.activityLog[today]) state.activityLog[today] = 0;

    if (state.lastActiveDate && state.lastActiveDate !== today) {
        const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        // Si rupture de la chaîne d'assiduité d'un jour entier
        if (state.lastActiveDate !== yesterdayStr && state.streak > 0) {
            if ((state.streakFreeze || 0) > 0) {
                state.streakFreeze--;
                alert("❄️ Bouclier de Série activé ! Votre série de jours consécutifs a été sauvée.");
            } else {
                state.streak = 0;
            }
        }
    }
    state.lastActiveDate = today;
    localStorage.setItem('greekMasterV9', JSON.stringify(state));
}

// Rendu graphique du calendrier d'assiduité (21 jours coulissants)
function renderCalendarHeatmap() {
    const container = document.getElementById('calendar-heatmap');
    let html = '';
    for (let i = 20; i >= 0; i--) {
        const d = new Date(); d.setDate(d.getDate() - i);
        const dateStr = d.toISOString().split('T')[0];
        const xpEarned = state.activityLog[dateStr] || 0;

        let intensityLvl = 0;
        if (xpEarned > 0 && xpEarned <= 40) intensityLvl = 1;
        else if (xpEarned > 40 && xpEarned <= 120) intensityLvl = 2;
        else if (xpEarned > 120) intensityLvl = 3;

        html += `<div class="cal-day day-lvl-${intensityLvl}" title="${dateStr} : +${xpEarned} XP"></div>`;
    }
    container.innerHTML = html;
}

function verifyAndGenerateQuests() {
    const today = new Date().toDateString();
    if (state.dailyQuests.date !== today) {
        state.dailyQuests = {
            date: today,
            list: [
                { id: "gain_xp", desc: "Gagner 200 XP global", target: 200, current: 0, done: false },
                { id: "answers", desc: "Valider 10 bonnes réponses", target: 10, current: 0, done: false },
                { id: "drachmes", desc: "Récolter 150 Drachmes", target: 150, current: 0, done: false }
            ]
        };
    }
    renderQuestsUI();
}

function updateQuestProgress(id, amount) {
    const quest = state.dailyQuests.list.find(q => q.id === id);
    if (quest && !quest.done) {
        quest.current += amount;
        if (quest.current >= quest.target) {
            quest.done = true; state.score += 300; state.drachmes += 150;
            setTimeout(launchCelebration, 100); playTone([523.25, 659.25, 783.99, 1046.50], 0.3);
        }
    }
}

function renderQuestsUI() {
    document.getElementById('quests-list').innerHTML = state.dailyQuests.list.map(q => `
        <div class="quest-item ${q.done ? 'done' : ''}">
            <span>${q.desc}</span>
            <span><b>${q.done ? '✅ Complété' : `${q.current}/${q.target}`}</b></span>
        </div>
    `).join('');
}

function getNextLetter() {
    const type = document.getElementById('exercise-select').value; const lvl = getLevel();
    let pool = alphabet.filter(item => item.type === 'lettre' || lvl >= 2 || state.prestige > 0);
    if (type === 'rattrapage') {
        let weakPool = pool.filter(l => (state.history[l.nom]?.errors / state.history[l.nom]?.total) >= 0.40);
        if (weakPool.length === 0) weakPool = pool.filter(l => (state.history[l.nom]?.errors || 0) > 0);
        return weakPool.length > 0 ? weakPool[Math.floor(Math.random() * weakPool.length)] : pool[Math.floor(Math.random() * pool.length)];
    }
    const unseen = pool.filter(l => !state.history[l.nom] || state.history[l.nom].total === 0);
    if (unseen.length > 0) return unseen[Math.floor(Math.random() * unseen.length)];
    return pool.sort((a,b) => ((state.history[b.nom]?.errors||0)/(state.history[b.nom]?.total||1)) - ((state.history[a.nom]?.errors||0)/(state.history[a.nom]?.total||1)))[Math.floor(Math.random() * Math.min(3, pool.length))];
}

function renderExercise() {
    const type = document.getElementById('exercise-select').value;
    const container = document.getElementById('exercise-container');
    const timerBox = document.getElementById('timer-container');
    
    if (type === 'chrono') { timerBox.classList.remove('timer-hidden'); if(!chronoTimer) { chronoScore = 0; startChrono(); } document.getElementById('chrono-score-val').innerText = chronoScore; } 
    else { timerBox.classList.add('timer-hidden'); stopChrono(); }

    if (type === 'association') { buildAssociationGame(); return; }

    currentLetter = getNextLetter();
    let html = type === 'rattrapage' ? `<h2 style="color:var(--error)">⚠️ RATTRAPAGE (XP X2)</h2>` : `<h2>Mission</h2>`;
    
    if (type === 'qcm' || type === 'chrono') {
        const opts = [currentLetter.nom];
        while(opts.length < 4) { const r = alphabet[Math.floor(Math.random() * alphabet.length)].nom; if(!opts.includes(r)) opts.push(r); }
        opts.sort(() => Math.random() - 0.5);
        html += `<span class="big-char">${currentLetter.maj} ${currentLetter.min}</span><div class="qcm-grid">` + opts.map(o => `<button class="qcm-btn" onclick="checkAnswer('${o}', '${currentLetter.nom}')">${o}</button>`).join('') + `</div>`;
    } else if (type === 'lecture' || type === 'rattrapage') {
        html += `<span class="big-char">${currentLetter.maj} ${currentLetter.min}</span><input type="text" id="answer" data-correct="${currentLetter.nom}" placeholder="Nom de la lettre..."><br><button class="valider-btn" onclick="validateText()">Valider</button>`;
    } else if (type === 'ecriture' || type === 'audition') {
        const isAud = type === 'audition';
        html += isAud ? `<p>Écoutez le son :</p><button onclick="speak('${currentLetter.nom}')" style="font-size:3rem; background:none; border:none; cursor:pointer;">🔊</button>` : `<p>Lettre pour :</p><h3>${currentLetter.nom}</h3>`;
        html += `<br><input type="text" id="answer" inputmode="none" data-correct="${currentLetter.maj}">`;
        
        let kbd = `<div class="virtual-keyboard">`;
        alphabet.filter(l => l.type === 'lettre').forEach(l => {
            kbd += `<button class="kbd-key" onclick="pressKey('${l.maj}')">${l.maj}</button>`;
            if(l.maj === "Σ") kbd += `<button class="kbd-key" onclick="pressKey('ς')">ς</button>`;
        });
        kbd += `<button class="kbd-key backspace" onclick="pressKey('BACK')">⌫</button></div>`;
        html += kbd + `<button class="valider-btn" onclick="validateText()">Valider</button>`;
        if(isAud) setTimeout(() => speak(currentLetter.nom), 300);
    } else if (type === 'oral') {
        html += `<span class="big-char">${currentLetter.maj} ${currentLetter.min}</span><button id="mic-trigger" class="mic-btn" onclick="startSpeech()">🎙️</button><div id="oral-transcript">Prêt...</div>`;
    }
    container.innerHTML = html + `<p class="hint-word">Exemple : ${currentLetter.mot}</p>`;
    if(document.getElementById('answer') && document.getElementById('answer').getAttribute('inputmode') !== 'none') document.getElementById('answer').focus();
}

function buildAssociationGame() {
    const container = document.getElementById('exercise-container'); assocPairsMatched = 0; assocSelected = null;
    const shuffledAlphabet = [...alphabet].sort(() => Math.random() - 0.5).slice(0, 4);
    let cards = [];
    shuffledAlphabet.forEach(item => {
        cards.push({ id: item.nom, text: `${item.maj} ${item.min}`, type: "greek" });
        cards.push({ id: item.nom, text: item.nom, type: "french" });
    });
    cards.sort(() => Math.random() - 0.5);

    let html = `<h2>🧩 Jeu d'Association</h2><p>Liez les paires correspondantes !</p><div class="association-grid">`;
    cards.forEach((card, idx) => { html += `<button id="assoc-card-${idx}" class="assoc-card" onclick="selectAssocCard(${idx}, '${card.id}')">${card.text}</button>`; });
    container.innerHTML = html + `</div>`;
}

window.selectAssocCard = function(idx, id) {
    const btn = document.getElementById(`assoc-card-${idx}`); if (btn.classList.contains('hidden-pair')) return;
    triggerVibrate(25);
    if (!assocSelected) { assocSelected = { idx, id }; btn.classList.add('selected'); } 
    else {
        const prevBtn = document.getElementById(`assoc-card-${assocSelected.idx}`);
        if (assocSelected.idx === idx) { btn.classList.remove('selected'); assocSelected = null; return; }
        if (assocSelected.id === id) {
            btn.classList.add('feedback-success'); prevBtn.classList.add('feedback-success'); playTone([523.25, 659.25], 0.1);
            setTimeout(() => { btn.className = "assoc-card hidden-pair"; prevBtn.className = "assoc-card hidden-pair"; }, 500);
            assocPairsMatched++;
            if (assocPairsMatched === 4) {
                state.score += 50; state.drachmes += 30; updateQuestProgress("gain_xp", 50); updateQuestProgress("drachmes", 30);
                setTimeout(() => { alert("Bravo ! (+50 XP / +30 🪙)"); buildAssociationGame(); }, 600);
            }
        } else {
            btn.classList.add('feedback-error'); prevBtn.classList.add('feedback-error'); playTone([220], 0.15);
            setTimeout(() => { btn.classList.remove('feedback-error', 'selected'); prevBtn.classList.remove('feedback-error', 'selected'); }, 600);
        }
        assocSelected = null;
    }
};

window.pressKey = function(c) {
    const i = document.getElementById('answer'); if(!i || i.disabled) return;
    if(c === 'BACK') i.value = i.value.slice(0,-1); else i.value += c;
};

window.checkAnswer = function(selected, correct) { processResult(selected.toLowerCase() === correct.toLowerCase(), correct); };
window.validateText = function() { 
    const i = document.getElementById('answer'); let isCorrect = i.value.trim().toLowerCase() === i.dataset.correct.toLowerCase();
    if(i.dataset.correct === "Σ" && (i.value.trim() === "σ" || i.value.trim() === "ς" || i.value.trim() === "Σ")) isCorrect = true;
    processResult(isCorrect, i.dataset.correct); 
};

function processResult(isCorrect, correctAnswerDisplay) {
    const type = document.getElementById('exercise-select').value;
    const today = new Date().toISOString().split('T')[0];
    if(!state.history[currentLetter.nom]) state.history[currentLetter.nom] = {errors: 0, total: 0};
    state.history[currentLetter.nom].total++;
    
    const input = document.getElementById('answer'); if(input) input.disabled = true;

    if (isCorrect) {
        triggerVibrate(35); state.currentCombo = Math.min(3, state.currentCombo + 1);
        let baseXP = type === 'rattrapage' ? 20 : 10;
        let gainedXP = baseXP * state.currentCombo;
        let gainedDrachmes = 10 * state.currentCombo;
        
        state.score += gainedXP; state.drachmes += gainedDrachmes; state.streak++;
        state.activityLog[today] = (state.activityLog[today] || 0) + gainedXP; // Log d'assiduité
        
        if(type === 'chrono') { timeLeft += 2; chronoScore += gainedXP; document.getElementById('chrono-score-val').innerText = chronoScore; }
        
        updateQuestProgress("gain_xp", gainedXP); updateQuestProgress("answers", 1); updateQuestProgress("drachmes", gainedDrachmes);

        if(state.streak > (state.highestStreak || 0)) state.highestStreak = state.streak;
        if(input) input.classList.add('feedback-success');
        playTone([523.25, 659.25, 783.99], 0.12);
    } else {
        triggerVibrate([60, 40, 60]); state.currentCombo = 0; state.streak = 0;
        state.history[currentLetter.nom].errors++; if(type === 'chrono') timeLeft = Math.max(0, timeLeft - 5);
        playTone([220, 180], 0.2);
        
        const container = document.getElementById('exercise-container');
        const mneDiv = document.createElement('div'); mneDiv.className = "mnemonic-text"; mneDiv.innerText = `💡 Aide : ${currentLetter.mne}`;
        container.insertBefore(mneDiv, container.lastChild);
        if(input) { input.classList.add('feedback-error'); input.value = `Réponse : ${correctAnswerDisplay}`; }
    }
    saveAndRefresh(); setTimeout(renderExercise, isCorrect ? 1000 : 2600);
}

function startChrono() {
    timeLeft = 60; document.getElementById('timer-val').innerText = timeLeft;
    chronoTimer = setInterval(() => {
        timeLeft--; document.getElementById('timer-val').innerText = timeLeft;
        if(timeLeft <= 0) { 
            stopChrono(); saveChronoRecord(chronoScore);
            alert(`Fin du chrono ! Session terminée avec ${chronoScore} XP.`); 
            document.getElementById('exercise-select').value = 'qcm'; renderExercise(); 
        }
    }, 1000);
}
function stopChrono() { clearInterval(chronoTimer); chronoTimer = null; }

function saveChronoRecord(score) {
    if(!state.chronoRecords) state.chronoRecords = [];
    state.chronoRecords.push({ score: score, date: new Date().toLocaleDateString() });
    state.chronoRecords.sort((a, b) => b.score - a.score); state.chronoRecords = state.chronoRecords.slice(0, 5);
    saveAndRefresh();
}

window.startSpeech = function() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition; if(!SR) return alert("Micro non supporté.");
    const rec = new SR(); rec.lang = 'el-GR';
    rec.onstart = () => document.getElementById('mic-trigger').classList.add('recording');
    rec.onresult = (e) => {
        const txt = e.results[0][0].transcript.toLowerCase(); document.getElementById('oral-transcript').innerText = `Entendu : ${txt}`;
        const match = txt.includes(currentLetter.nom.toLowerCase()) || txt.includes(currentLetter.min[0]) || txt.includes(currentLetter.maj.toLowerCase());
        setTimeout(() => processResult(match, currentLetter.nom), 800);
    };
    rec.onerror = () => document.getElementById('mic-trigger').classList.remove('recording');
    rec.onend = () => document.getElementById('mic-trigger').classList.remove('recording');
    rec.start();
};

// Système Import/Export de fichiers JSON locaux
window.exportSave = function() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
    const dlAnchor = document.createElement('a'); dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `grec_master_save_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(dlAnchor); dlAnchor.click(); dlAnchor.remove();
};

window.importSave = function(event) {
    const file = event.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedState = JSON.parse(e.target.result);
            if (importedState.score !== undefined && importedState.history) {
                state = importedState; saveAndRefresh(); checkDailyStreakAndCalendar();
                alert("📂 Sauvegarde importée avec succès ! Synchronisation de l'arène.");
                renderExercise();
            } else { alert("Fichier JSON de sauvegarde invalide."); }
        } catch (err) { alert("Erreur lors de la lecture du fichier."); }
    };
    reader.readAsText(file);
};

// Logique d'achat d'objets avec de vrais Drachmes
window.buyItem = function(type, cost, value) {
    if (state.drachmes < cost) { alert("🪙 Drachmes insuffisants ! Effectuez des exercices pour en récolter."); return; }
    state.drachmes -= cost;
    triggerVibrate(50); playTone([523.25, 783.99, 1046.50], 0.2);

    if (type === 'freeze') { state.streakFreeze = (state.streakFreeze || 0) + 1; } 
    else if (type === 'avatar') { state.unlockedAvatars.push(value); } 
    else if (type === 'theme') { state.unlockedThemes.push(value); }
    
    saveAndRefresh(); openShopMenuUI();
};

function openShopMenuUI() {
    const lvl = getLevel(); document.getElementById('freeze-count-val').innerText = state.streakFreeze || 0;
    
    // Rendu des 5 avatars achetables
    document.getElementById('avatars-shop-pool').innerHTML = shopAvatars.map(a => {
        const isOwned = state.unlockedAvatars.includes(a.emoji);
        return `<div class="shop-item-box ${isOwned ? 'owned' : ''}" onclick="${isOwned ? `selectAvatar('${a.emoji}')` : `buyItem('avatar', ${a.cost}, '${a.emoji}')`}">
            ${a.emoji}<br><small style="font-size:0.65rem; font-weight:bold;">${isOwned ? 'Équiper' : `${a.cost} 🪙`}</small>
        </div>`;
    }).join('');

    // Rendu des 5 thèmes achetables
    document.getElementById('themes-shop-pool').innerHTML = shopThemes.map(t => {
        const isOwned = state.unlockedThemes.includes(t.id);
        return `<button class="theme-shop-btn ${isOwned ? 'owned' : ''}" onclick="${isOwned ? `applyTheme('${t.id}')` : `buyItem('theme', ${t.cost}, '${t.id}')`}">
            <span>${t.name}</span> <span><b>${isOwned ? 'Activer' : `${t.cost} 🪙`}</b></span>
        </button>`;
    }).join('');
}

window.selectAvatar = function(emoji) { state.activeAvatar = emoji; saveAndRefresh(); };

function saveAndRefresh() {
    const lvl = getLevel(); if (lvl > (state.lastLvl || 1)) { setTimeout(launchCelebration, 200); state.lastLvl = lvl; }
    localStorage.setItem('greekMasterV9', JSON.stringify(state));
    
    document.getElementById('level-val').innerText = lvl;
    document.getElementById('score').innerText = state.score;
    document.getElementById('drachmes-val').innerText = state.drachmes;
    document.getElementById('streak').innerText = state.streak;
    document.getElementById('avatar-val').innerText = state.activeAvatar || avatarsList[lvl - 1];
    
    if (state.prestige > 0) {
        document.getElementById('prestige-badge').style.display = "inline"; document.getElementById('prestige-val').innerText = state.prestige;
    } else { document.getElementById('prestige-badge').style.display = "none"; }
    
    const cBox = document.getElementById('combo-box');
    if(state.currentCombo > 1) { cBox.style.display = "block"; document.getElementById('combo-val').innerText = `x${state.currentCombo}`; } else { cBox.style.display = "none"; }
    
    document.getElementById('progress-bar').style.width = `${((state.score % 1000) / 1000) * 100}%`;
    document.body.className = state.activeTheme || "theme-dark"; renderDashboard(); renderQuestsUI();
}

function renderDashboard() {
    const lvl = getLevel(); const pool = alphabet.filter(i => i.type === 'lettre' || lvl >= 2 || state.prestige > 0);
    document.getElementById('dashboard-grid').innerHTML = pool.map(l => {
        const h = state.history[l.nom]; let s = ""; if(h && h.total > 0) s = (h.errors/h.total < 0.25) ? "mastered" : "learning";
        return `<div class="dash-cell ${s}">${l.maj}</div>`;
    }).join('');
}

function speak(text) {
    window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = 'el-GR';
    u.rate = isSlowAudio ? 0.45 : 0.85; window.speechSynthesis.speak(u);
}

window.triggerPrestigeAscension = function() {
    if (getLevel() < 20 || state.score < 20000) return;
    if (confirm("🏛️ Êtes-vous prêt à monter sur l'Olympe et obtenir un rang de Prestige Divin ?")) {
        state.prestige += 1; state.score = 0; state.lastLvl = 1; state.currentCombo = 0; state.streak = 0;
        launchCelebration(); playTone([523.25, 659.25, 783.99, 1046.50], 0.3); saveAndRefresh(); shopModal.close(); renderExercise();
    }
};

const statsModal = document.getElementById('modal-stats');
document.getElementById('btn-stats').onclick = () => {
    let totalAnswers = 0, totalErrors = 0; Object.values(state.history).forEach(h => { totalAnswers += h.total; totalErrors += h.errors; });
    const accuracy = totalAnswers > 0 ? Math.round(((totalAnswers - totalErrors) / totalAnswers) * 100) : 100;
    
    document.getElementById('stats-content').innerHTML = `
        <p>🏆 <span>Rang de Divinité :</span> <b>Prestige ${state.prestige || 0}</b></p>
        <p>🥇 <span>Niveau Actuel :</span> <b>${getLevel()} / 20</b></p>
        <p>🔥 <span>Meilleure Série historique :</span> <b>${state.highestStreak || 0}</b></p>
        <p>🎯 <span>Précision Saisie :</span> <b>${accuracy}%</b></p>
    `;
    
    const recs = state.chronoRecords || [];
    document.getElementById('leaderboard-list').innerHTML = recs.length > 0 ? recs.map(r => `<li>${r.score} XP <span>(${r.date})</span></li>`).join('') : `<li>Aucun record enregistré</li>`;
    
    document.getElementById('badges-grid').innerHTML = badgesList.map((badge, index) => {
        const isUnlocked = getLevel() >= (index + 1) || state.prestige > 0;
        return `<div class="badge-item ${isUnlocked ? 'unlocked' : ''}">${isUnlocked ? badge : "🔒 Niveau " + (index + 1)}</div>`;
    }).join('');
    
    renderCalendarHeatmap(); statsModal.showModal();
};
document.getElementById('close-stats').onclick = () => statsModal.close();

const shopModal = document.getElementById('modal-boutique');
document.getElementById('btn-boutique').onclick = () => { openShopMenuUI(); shopModal.showModal(); };
window.applyTheme = function(tId) { state.activeTheme = tId; saveAndRefresh(); shopModal.close(); };
document.getElementById('close-boutique').onclick = () => shopModal.close();

document.getElementById('btn-fiche').onclick = () => {
    document.getElementById('fiche-content').innerHTML = alphabet.map(l => `<div class="fiche-item"><strong>${l.maj} ${l.min[0]}</strong><br>${l.nom}<br><button class="dictio-audio-btn" onclick="speak('${l.nom}')">🔊 Lettre</button><button class="dictio-audio-btn" style="color:var(--accent);" onclick="speak('${l.mot.split(' ')[0]}')">🔊 Mot</button></div>`).join('');
    document.getElementById('modal-fiche').showModal();
};
document.getElementById('close-modal').onclick = () => document.getElementById('modal-fiche').close();

document.getElementById('slow-toggle').onclick = (e) => { isSlowAudio = !isSlowAudio; e.target.classList.toggle('active', isSlowAudio); e.target.innerText = isSlowAudio ? "Lent" : "Audio"; };
document.getElementById('exercise-select').onchange = renderExercise;
document.addEventListener('keydown', (e) => { if(e.key === 'Enter') { const ex = document.getElementById('exercise-select').value; if(ex !== 'association' && ex !== 'qcm' && ex !== 'chrono') window.validateText(); } });

checkDailyStreakAndCalendar(); verifyAndGenerateQuests(); saveAndRefresh(); renderExercise();