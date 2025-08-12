"use strict";

/* EN: Quiz Game Frontend Logic (Vanilla JS)
   FR: Logique Front du jeu de quiz (Vanilla JS) */

/* EN: DOM references
   FR: Références DOM */
const questionAreaEl = document.getElementById("questionArea");
const feedbackEl = document.getElementById("feedback");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const progressEl = document.getElementById("progress");
const timerEl = document.getElementById("timer");
const finalSection = document.getElementById("final");
const finalText = document.getElementById("finalText");
const saveScoreForm = document.getElementById("saveScoreForm");
const playerNameInput = document.getElementById("playerName");
const leaderboardList = document.getElementById("leaderboardList");

/* EN: Game state
   FR: État du jeu */
const state = {
    questions: [],
    currentIndex: 0,
    score: 0,
    total: 0,
    perQuestionSeconds: 20,
    tickHandle: null,
    remaining: 0
};

/* EN: Fetch and bootstrap the quiz
   FR: Récupérer et initialiser le quiz */
init();
async function init() {
    try {
        const res = await fetch("/api/questions");
        const data = await res.json();
        state.questions = data.questions || [];
        state.total = state.questions.length;
        state.currentIndex = 0;
        state.score = 0;
        updateProgress();
        feedbackEl.textContent = "";
        finalSection.classList.add("hidden");
        renderQuestion();
        updateBoard(); // Load leaderboard immediately
    } catch (err) {
        console.error(err);
        // EN: User-visible message in English (French translation in comments)
        // FR: Message visible utilisateur en anglais (traduction FR en commentaire)
        feedbackEl.textContent = "Server nap detected 😴 Try again in a moment.";
    }
}

/* EN: Re/Start the whole game
   FR: (Re)Démarrer le jeu au complet */
restartBtn.addEventListener("click", () => {
    stopTimer();
    init();
});

/* EN: Submit current answer
   FR: Soumettre la réponse courante */
submitBtn.addEventListener("click", async () => {
    const payload = collectAnswerPayload();
    if (!payload) {
        feedbackEl.textContent = "Pick or type an answer first 🙃";
        return;
    }
    const result = await checkAnswer(payload);
    showFeedback(result);
    stopTimer();
});

/* EN: Go to next question
   FR: Passer à la question suivante */
nextBtn.addEventListener("click", () => {
    if (state.currentIndex < state.total - 1) {
        state.currentIndex += 1;
        feedbackEl.textContent = "";
        renderQuestion();
    } else {
        endGame();
    }
});

/* EN: Collect the answer depending on question type
   FR: Récupérer la réponse selon le type de question */
function collectAnswerPayload() {
    const q = state.questions[state.currentIndex];
    if (!q) return null;

    if (q.type === "mcq" || q.type === "boolean") {
        const picked = document.querySelector("input[name='answer']:checked");
        if (!picked) return null;
        return { questionId: q.id, answer: picked.value };
    }

    if (q.type === "text") {
        const input = document.querySelector("#answerText");
        const value = (input?.value || "").trim();
        if (!value) return null;
        return { questionId: q.id, answer: value };
    }

    return null;
}

/* EN: Ask server to verify the answer
   FR: Demander au serveur de vérifier la réponse */
async function checkAnswer(payload) {
    try {
        const res = await fetch("/api/answer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.correct) state.score += 1;
        return data;
    } catch (err) {
        console.error(err);
        return { correct: false, message: "Network gremlins! 🧌", explanation: "" };
    }
}

/* EN: Show feedback message with styling
   FR: Afficher le feedback avec style */
function showFeedback(result) {
    feedbackEl.textContent = `${result.message} ${result.explanation ? "— " + result.explanation : ""}`;
    feedbackEl.classList.toggle("correct", !!result.correct);
    feedbackEl.classList.toggle("incorrect", !result.correct);
}

/* EN: Render the current question block
   FR: Afficher le bloc de la question courante */
function renderQuestion() {
    const q = state.questions[state.currentIndex];
    if (!q) return;

    updateProgress();
    startTimer();

    let html = `
        <h2>Q${state.currentIndex + 1}. ${escapeHtml(q.question)}</h2>
        <div class="meta">Type: ${q.type} • Difficulty: ${q.difficulty}</div>
    `;

    if (q.type === "mcq" || q.type === "boolean") {
        html += `<div class="options">` + q.choices.map((c, idx) => `
            <label class="option">
                <input type="radio" name="answer" value="${escapeHtml(c)}" />
                <span>${String.fromCharCode(65 + idx)}.</span>
                <span>${escapeHtml(c)}</span>
            </label>
        `).join("") + `</div>`;
    } else if (q.type === "text") {
        html += `
            <label for="answerText" class="meta">Type your answer below:</label>
            <input id="answerText" type="text" autocomplete="off" placeholder="Enter your answer..." />
        `;
    }

    questionAreaEl.innerHTML = html;
}

/* EN: End of game view
   FR: Vue de fin de jeu */
function endGame() {
    stopTimer();
    document.getElementById("game").classList.add("hidden");
    finalSection.classList.remove("hidden");
    finalText.textContent = `You scored ${state.score} out of ${state.total}. ${scoreRemark(state.score, state.total)}`;
}

/* EN: Save score form handler
   FR: Handler de sauvegarde du score */
saveScoreForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const player = (playerNameInput.value || "Anonymous").trim() || "Anonymous";
    try {
        const res = await fetch("/api/score", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ player, score: state.score, total: state.total })
        });
        await res.json();
        updateBoard();
        // EN: Small playful confirmation
        // FR: Petite confirmation amusante
        finalText.textContent += " Score saved! 💾✨";
    } catch (err) {
        console.error(err);
        finalText.textContent += " Could not save score 😅.";
    }
});

/* EN: Update leaderboard
   FR: Mettre à jour le leaderboard */
async function updateBoard() {
    try {
        const res = await fetch("/api/leaderboard");
        const data = await res.json();
        const list = data.leaderboard || [];
        leaderboardList.innerHTML = list.map((row, i) =>
            `<li>#${i + 1} — ${escapeHtml(row.player)}: ${row.score}/${row.total} <small>(${new Date(row.at).toLocaleString()})</small></li>`
        ).join("");
    } catch {
        leaderboardList.innerHTML = "<li>Leaderboard is taking a coffee break ☕</li>";
    }
}

/* EN: Progress bar + index
   FR: Barre de progression + index */
function updateProgress() {
    const pct = state.total ? Math.round((state.currentIndex) / state.total * 100) : 0;
    progressEl.style.setProperty("--w", `${pct}%`);
}

/* EN: Simple per-question timer
   FR: Timer simple par question */
function startTimer() {
    stopTimer();
    state.remaining = state.perQuestionSeconds;
    renderTime();
    state.tickHandle = setInterval(() => {
        state.remaining -= 1;
        renderTime();
        if (state.remaining <= 0) {
            stopTimer();
            feedbackEl.textContent = "Time's up! ⏰ Moving on...";
            nextBtn.click();
        }
    }, 1000);
}
function stopTimer() {
    if (state.tickHandle) {
        clearInterval(state.tickHandle);
        state.tickHandle = null;
    }
}
function renderTime() {
    const s = String(Math.max(0, state.remaining)).padStart(2, "0");
    timerEl.textContent = s;
}

/* EN: Small helpers
   FR: Petits helpers */
function escapeHtml(str) {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll("\"", "&quot;")
        .replaceAll("'", "&#039;");
}
function scoreRemark(score, total) {
    const ratio = score / Math.max(1, total);
    if (ratio === 1) return "Flawless victory! 🏆";
    if (ratio >= 0.8) return "Almost perfect—chef’s kiss. 👌";
    if (ratio >= 0.5) return "Solid work, captain. 🧭";
    return "Every miss is a lesson. Onward! 📈";
}

/* AnnaSpirit */
