"use strict";

/* EN: Patch to work with secure server endpoints (no answer leaked).
   FR: Patch pour fonctionner avec les endpoints sécurisés (sans fuite de réponse). */

/* --- Guard: warn when an element id is missing (your original helper) --- */
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

    // 🧠 Game state (no more currentAnswer; we use questionId now)
    // 🧠 État du jeu (plus de currentAnswer ; on utilise questionId désormais)
    let currentQuestionId = null;
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
    const stopBtn = document.getElementById("stopBtn");

    // 🎮 Start Game
    function startGame() {
        score = 0;
        if (scoreEl) scoreEl.textContent = String(score);
        if (feedbackEl) feedbackEl.textContent = "";
        loadQuestion();
    }

    // 🔄 Load question (server now sends { emoji, options, questionId })
    // 🔄 Charger une question (le serveur renvoie { emoji, options, questionId })
    async function loadQuestion() {
        try {
            const res = await fetch("/api/question");
            if (!res.ok) {
                throw new Error(`GET /api/question failed: ${res.status}`);
            }
            const data = await res.json();

            currentQuestionId = data.questionId || null;
            if (!currentQuestionId) {
                throw new Error("Missing questionId in response");
            }

            if (emojiEl) emojiEl.textContent = data.emoji ?? "❓";

            const difficulty = (difficultySelect?.value || "easy").trim();
            renderOptions(data.options || [], difficulty);
        } catch (err) {
            console.error(err);
            if (feedbackEl) feedbackEl.textContent = "Server is napping 😴. Try again.";
        }
    }

    // 🎨 Render options (safe, no innerHTML for user-supplied values)
    // 🎨 Afficher les options (sûr, sans innerHTML pour valeurs utilisateur)
    function renderOptions(options, difficulty) {
        if (!optionsEl) return;
        optionsEl.innerHTML = "";

        options.forEach((option) => {
            const btn = document.createElement("button");

            // EN: In hard mode, mask every option.
            // FR: En mode 'hard', masquer chaque option.
            const displayText = difficulty === "hard" ? maskOption(option) : option;

            btn.type = "button";
            btn.textContent = displayText;
            btn.classList.add("option-button");
            btn.addEventListener("click", () => submitGuess(option));
            optionsEl.appendChild(btn);
        });
    }

    // 😈 Hard mode mask (keep your logic)
    // 😈 Masquage mode hard (on garde ta logique)
    function maskOption(option) {
        const length = option.length;
        const visibleCount = length > 6 ? 2 : 1;

        const visibleIndexes = new Set();
        while (visibleIndexes.size < visibleCount) {
            const randIndex = Math.floor(Math.random() * length);
            visibleIndexes.add(randIndex);
        }

        return option
            .split("")
            .map((char, index) => (visibleIndexes.has(index) ? char : "_"))
            .join("");
    }

    // 📤 Submit guess (NO correctName sent; use questionId)
    // 📤 Soumettre la réponse (NE PAS envoyer correctName ; utiliser questionId)
    async function submitGuess(guessedName) {
        const playerName = (playerNameInput?.value || "").trim();
        if (!playerName) {
            alert("Please enter your name!");
            return;
        }
        const difficulty = (difficultySelect?.value || "easy").trim();

        // EN: Build body with questionId (server validates correctness)
        // FR: Construire le body avec questionId (le serveur valide la justesse)
        const body = {
            questionId: currentQuestionId,
            guessedName,
            playerName,
            difficulty
        };

        try {
            const res = await fetch("/api/guess", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const result = await res.json();

            // EN: Handle common server error messages
            // FR: Gérer les messages d’erreur classiques serveur
            if (!res.ok) {
                if (feedbackEl) feedbackEl.textContent = result?.message || "Server said no 😅";
                // If question expired, fetch a new one
                if (res.status === 410) {
                    setTimeout(() => loadQuestion(), 800);
                }
                return;
            }

            if (feedbackEl) {
                feedbackEl.textContent = result.message || (result.correct ? "Correct! 🎉" : "Nope! ❌");
                feedbackEl.style.color = result.correct ? "green" : "red";
            }

            // EN: Server now returns your cumulative score
            // FR: Le serveur renvoie ton score cumulatif
            if (typeof result.score === "number") {
                score = result.score;
                if (scoreEl) scoreEl.textContent = String(score);
            }

            if (result.correct) {
                setTimeout(() => {
                    loadQuestion();
                    if (feedbackEl) feedbackEl.textContent = "";
                }, 1500);
            } else {
                setTimeout(() => {
                    if (feedbackEl) feedbackEl.textContent = "";
                }, 1500);
            }

            loadLeaderboard();
        } catch (err) {
            console.error(err);
            if (feedbackEl) feedbackEl.textContent = "Network gremlins! 🧌";
        }
    }

    // 🏆 Load leaderboard (XSS-safe rendering)
    // 🏆 Charger le leaderboard (rendu sûr contre XSS)
    async function loadLeaderboard() {
        if (!leaderboardEl) return;
        try {
            const res = await fetch("/api/leaderboard");
            if (!res.ok) throw new Error(`GET /api/leaderboard failed: ${res.status}`);
            const leaderboard = await res.json();

            // sort & top 5
            const sortedPlayers = Object.entries(leaderboard)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5);

            // Safe DOM build (no innerHTML injection of user data)
            leaderboardEl.innerHTML = "";
            for (const [name, points] of sortedPlayers) {
                const li = document.createElement("li");
                li.textContent = `${name}: ${points}`;
                leaderboardEl.appendChild(li);
            }
        } catch (err) {
            console.error(err);
            leaderboardEl.innerHTML = "";
            const li = document.createElement("li");
            li.textContent = "Leaderboard unavailable ☕";
            leaderboardEl.appendChild(li);
        }
    }

    // 🧾 Export leaderboard as JSON
    async function exportLeaderboardJSON() {
        const res = await fetch("/api/leaderboard");
        const leaderboard = await res.json();

        const exportData = {
            exportDate: new Date().toISOString(),
            gameType: "Emoji Guessing Game",
            leaderboard: leaderboard
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

        const exportFileDefaultName = `emoji-game-leaderboard-${new Date().toISOString().split("T")[0]}.json`;

        const linkElement = document.createElement("a");
        linkElement.setAttribute("href", dataUri);
        linkElement.setAttribute("download", exportFileDefaultName);
        linkElement.click();
    }

    // 🖼️ Export leaderboard as Image (Canvas)
    async function exportLeaderboardImage() {
        const res = await fetch("/api/leaderboard");
        const leaderboard = await res.json();

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = 500;
        canvas.height = 400;

        ctx.fillStyle = "#f0f8ff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#333";
        ctx.font = "bold 24px Arial";
        ctx.textAlign = "center";
        ctx.fillText("🎯 Emoji Game Leaderboard", canvas.width / 2, 40);

        ctx.font = "14px Arial";
        ctx.fillText(new Date().toLocaleDateString(), canvas.width / 2, 65);

        const sortedPlayers = Object.entries(leaderboard)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 10);

        ctx.textAlign = "left";
        ctx.font = "18px Arial";

        sortedPlayers.forEach(([name, points], index) => {
            const y = 110 + (index * 30);
            const medal = index < 3 ? ["🥇", "🥈", "🥉"][index] : `${index + 1}.`;

            ctx.fillStyle = index < 3 ? "#ff6b35" : "#333";
            ctx.fillText(`${medal} ${name}: ${points} points`, 50, y);
        });

        await new Promise((resolve) => {
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = `emoji-game-leaderboard-${new Date().toISOString().split("T")[0]}.png`;
                link.click();
                URL.revokeObjectURL(url);
                resolve();
            });
        });
    }

    // 📄 Export leaderboard as PDF-style image (via canvas)
    async function exportLeaderboardPDF() {
        const res = await fetch("/api/leaderboard");
        const leaderboard = await res.json();

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = 600;
        canvas.height = 800;

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#2c3e50";
        ctx.font = "bold 32px Arial";
        ctx.textAlign = "center";
        ctx.fillText("🎯 Emoji Guessing Game", canvas.width / 2, 60);

        ctx.font = "bold 24px Arial";
        ctx.fillText("Leaderboard Report", canvas.width / 2, 100);

        ctx.font = "16px Arial";
        ctx.fillStyle = "#7f8c8d";
        ctx.fillText(`Generated on: ${new Date().toLocaleString()}`, canvas.width / 2, 130);

        ctx.strokeStyle = "#bdc3c7";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(50, 150);
        ctx.lineTo(canvas.width - 50, 150);
        ctx.stroke();

        const sortedPlayers = Object.entries(leaderboard).sort(([, a], [, b]) => b - a);

        ctx.textAlign = "left";
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "#2c3e50";
        ctx.fillText("Top Players:", 50, 190);

        ctx.font = "18px Arial";
        sortedPlayers.forEach(([name, points], index) => {
            const y = 230 + (index * 35);
            if (y > canvas.height - 50) return;

            const medal = index < 3 ? ["🥇", "🥈", "🥉"][index] : `${index + 1}.`;

            ctx.fillStyle = index < 3 ? "#e74c3c" : "#34495e";
            ctx.font = "bold 18px Arial";
            ctx.fillText(medal, 50, y);

            ctx.fillStyle = "#2c3e50";
            ctx.font = "18px Arial";
            ctx.fillText(name, 100, y);

            ctx.fillStyle = "#27ae60";
            ctx.font = "bold 18px Arial";
            ctx.textAlign = "right";
            ctx.fillText(`${points} pts`, canvas.width - 50, y);
            ctx.textAlign = "left";
        });

        ctx.fillStyle = "#95a5a6";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText("Emoji Guessing Game - Made with ❤️", canvas.width / 2, canvas.height - 30);

        await new Promise((resolve) => {
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = `emoji-game-leaderboard-${new Date().toISOString().split("T")[0]}.pdf.png`;
                link.click();
                URL.revokeObjectURL(url);
                resolve();
            });
        });
    }

    // 🛑 Stop game and show export options
    function stopGame() {
        if (confirm("Stop the game and export leaderboard?")) {
            const exportChoice = prompt(
                "Choose export format:\n" +
                "1 - JSON file\n" +
                "2 - PNG image\n" +
                "3 - PDF-style image\n" +
                "Enter 1, 2, or 3:"
            );

            switch (exportChoice) {
                case "1":
                    exportLeaderboardJSON().then(() => {
                        alert("✅ Leaderboard exported as JSON!");
                    });
                    break;
                case "2":
                    exportLeaderboardImage().then(() => {
                        alert("✅ Leaderboard exported as PNG image!");
                    });
                    break;
                case "3":
                    exportLeaderboardPDF().then(() => {
                        alert("✅ Leaderboard exported as PDF-style image!");
                    });
                    break;
                default:
                    alert("❌ Invalid choice. Export cancelled.");
            }
        }
    }

    // 🔁 Restart button
    restartBtn?.addEventListener("click", () => {
        if (confirm("Are you sure you want to restart? Your current score will be reset.")) {
            startGame();
            loadLeaderboard();
        }
    });

    // 🛑 Stop button
    stopBtn?.addEventListener("click", stopGame);

    // 🚀 Initialize
    startGame();
    loadLeaderboard();
});
