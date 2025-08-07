const originalGetElementById = document.getElementById;
document.getElementById = function (id) {
    const result = originalGetElementById.call(document, id);
    if (!result) {
        console.warn(`⚠️ getElementById("${id}") returned null`);
    }
    return result;
};



document.addEventListener("DOMContentLoaded", () => {
    console.log("JS loaded");

    // 🧠 Variables
    let currentAnswer = "";
    let score = 0;

    // 🎯 DOM Elements
    const emojiEl = document.getElementById("emoji");
    const optionsEl = document.getElementById("options");
    const feedbackEl = document.getElementById("feedback");
    const scoreEl = document.getElementById("score");
    const leaderboardEl = document.getElementById("leaderboard");
    const playerNameInput = document.getElementById("playerName");
    const difficultySelect = document.getElementById("difficulty");
    const restartBtn = document.getElementById("restartBtn");

    // 🎮 Start Game
    function startGame() {
        score = 0;
        scoreEl.textContent = score;
        feedbackEl.textContent = "";
        loadQuestion();
    }

    // 🔄 Load question
    async function loadQuestion() {
        const res = await fetch("/api/question");
        const data = await res.json();

        currentAnswer = data.answer;
        emojiEl.textContent = data.emoji;

        const difficulty = difficultySelect.value.trim();
        console.log("🎚️ Difficulty selected:", difficulty);

        renderOptions(data.options, currentAnswer, difficulty);
    }

    // 🎨 Render options
    function renderOptions(options, answer, difficulty) {
        optionsEl.innerHTML = "";

        options.forEach((option) => {
            const btn = document.createElement("button");

            const displayText =
                difficulty === "hard" && isCorrectOption(option, answer)
                    ? maskOption(option)
                    : option;

            btn.textContent = displayText;
            btn.classList.add("option-button");
            btn.addEventListener("click", () => submitGuess(option));
            optionsEl.appendChild(btn);
        });
    }

    // 🔍 Vérifie si une option est la bonne réponse
    function isCorrectOption(option, answer) {
        return option.trim().toLowerCase() === answer.trim().toLowerCase();
    }

    // 😈 Hard mode mask
    function maskOption(option) {
        const length = option.length;
        const visibleCount = length > 6 ? 2 : 1;

        const visibleIndexes = new Set();
        while (visibleIndexes.size < visibleCount) {
            const randIndex = Math.floor(Math.random() * length);
            visibleIndexes.add(randIndex)
