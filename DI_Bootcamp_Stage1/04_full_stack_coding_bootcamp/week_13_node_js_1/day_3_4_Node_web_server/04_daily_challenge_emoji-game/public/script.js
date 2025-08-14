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
    const stopBtn = document.getElementById("stopBtn");

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

            // En mode difficile, masquer TOUTES les options
            const displayText = difficulty === "hard"
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
            visibleIndexes.add(randIndex);
        }

        return option
            .split("")
            .map((char, index) => (visibleIndexes.has(index) ? char : "_"))
            .join("");
    }

    // 📤 Submit guess
    async function submitGuess(guessedName) {
        const playerName = playerNameInput.value.trim();
        if (!playerName) {
            alert("Please enter your name!");
            return;
        }

        const difficulty = difficultySelect.value.trim();

        const res = await fetch("/api/guess", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                guessedName,
                correctName: currentAnswer,
                playerName,
                difficulty
            }),
        });

        const result = await res.json();

        feedbackEl.textContent = result.message;
        score = result.score;
        scoreEl.textContent = score;

        if (result.correct) {
            feedbackEl.style.color = "green";
            setTimeout(() => {
                loadQuestion();
                feedbackEl.textContent = "";
            }, 1500);
        } else {
            feedbackEl.style.color = "red";
            setTimeout(() => {
                feedbackEl.textContent = "";
            }, 1500);
        }

        loadLeaderboard();
    }

    // 🏆 Load leaderboard
    async function loadLeaderboard() {
        const res = await fetch("/api/leaderboard");
        const leaderboard = await res.json();

        const sortedPlayers = Object.entries(leaderboard)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5);

        leaderboardEl.innerHTML = sortedPlayers
            .map(([name, score]) => `<li>${name}: ${score}</li>`)
            .join("");
    }

    // � Export leaderboard as JSON
    function exportLeaderboardJSON() {
        return new Promise(async (resolve) => {
            const res = await fetch("/api/leaderboard");
            const leaderboard = await res.json();

            const exportData = {
                exportDate: new Date().toISOString(),
                gameType: "Emoji Guessing Game",
                leaderboard: leaderboard
            };

            const dataStr = JSON.stringify(exportData, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

            const exportFileDefaultName = `emoji-game-leaderboard-${new Date().toISOString().split('T')[0]}.json`;

            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();

            resolve();
        });
    }

    // 🖼️ Export leaderboard as Image (Canvas)
    function exportLeaderboardImage() {
        return new Promise(async (resolve) => {
            const res = await fetch("/api/leaderboard");
            const leaderboard = await res.json();

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Set canvas size
            canvas.width = 500;
            canvas.height = 400;

            // Background
            ctx.fillStyle = '#f0f8ff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Title
            ctx.fillStyle = '#333';
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('🎯 Emoji Game Leaderboard', canvas.width / 2, 40);

            // Date
            ctx.font = '14px Arial';
            ctx.fillText(new Date().toLocaleDateString(), canvas.width / 2, 65);

            // Leaderboard entries
            const sortedPlayers = Object.entries(leaderboard)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 10);

            ctx.textAlign = 'left';
            ctx.font = '18px Arial';

            sortedPlayers.forEach(([name, score], index) => {
                const y = 110 + (index * 30);
                const medal = index < 3 ? ['🥇', '🥈', '🥉'][index] : `${index + 1}.`;

                ctx.fillStyle = index < 3 ? '#ff6b35' : '#333';
                ctx.fillText(`${medal} ${name}: ${score} points`, 50, y);
            });

            // Convert to image and download
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `emoji-game-leaderboard-${new Date().toISOString().split('T')[0]}.png`;
                link.click();
                URL.revokeObjectURL(url);
                resolve();
            });
        });
    }

    // 📄 Export leaderboard as PDF (using jsPDF simulation with canvas)
    function exportLeaderboardPDF() {
        return new Promise(async (resolve) => {
            const res = await fetch("/api/leaderboard");
            const leaderboard = await res.json();

            // Create a larger canvas for PDF-like quality
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // A4 aspect ratio (210 x 297 mm) scaled
            canvas.width = 600;
            canvas.height = 800;

            // White background
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Header
            ctx.fillStyle = '#2c3e50';
            ctx.font = 'bold 32px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('🎯 Emoji Guessing Game', canvas.width / 2, 60);

            ctx.font = 'bold 24px Arial';
            ctx.fillText('Leaderboard Report', canvas.width / 2, 100);

            // Date and time
            ctx.font = '16px Arial';
            ctx.fillStyle = '#7f8c8d';
            ctx.fillText(`Generated on: ${new Date().toLocaleString()}`, canvas.width / 2, 130);

            // Line separator
            ctx.strokeStyle = '#bdc3c7';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(50, 150);
            ctx.lineTo(canvas.width - 50, 150);
            ctx.stroke();

            // Leaderboard
            const sortedPlayers = Object.entries(leaderboard)
                .sort(([, a], [, b]) => b - a);

            ctx.textAlign = 'left';
            ctx.font = 'bold 20px Arial';
            ctx.fillStyle = '#2c3e50';
            ctx.fillText('Top Players:', 50, 190);

            ctx.font = '18px Arial';
            sortedPlayers.forEach(([name, score], index) => {
                const y = 230 + (index * 35);
                if (y > canvas.height - 50) return; // Don't overflow

                const medal = index < 3 ? ['🥇', '🥈', '🥉'][index] : `${index + 1}.`;

                // Rank
                ctx.fillStyle = index < 3 ? '#e74c3c' : '#34495e';
                ctx.font = 'bold 18px Arial';
                ctx.fillText(medal, 50, y);

                // Name
                ctx.fillStyle = '#2c3e50';
                ctx.font = '18px Arial';
                ctx.fillText(name, 100, y);

                // Score
                ctx.fillStyle = '#27ae60';
                ctx.font = 'bold 18px Arial';
                ctx.textAlign = 'right';
                ctx.fillText(`${score} pts`, canvas.width - 50, y);
                ctx.textAlign = 'left';
            });

            // Footer
            ctx.fillStyle = '#95a5a6';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Emoji Guessing Game - Made with ❤️', canvas.width / 2, canvas.height - 30);

            // Convert to PDF-like image and download
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `emoji-game-leaderboard-${new Date().toISOString().split('T')[0]}.pdf.png`;
                link.click();
                URL.revokeObjectURL(url);
                resolve();
            });
        });
    }

    // 🛑 Stop game and show export options
    function stopGame() {
        if (confirm("Stop the game and export leaderboard?")) {
            // Show export options
            const exportChoice = prompt(
                "Choose export format:\n" +
                "1 - JSON file\n" +
                "2 - PNG image\n" +
                "3 - PDF-style image\n" +
                "Enter 1, 2, or 3:"
            );

            switch (exportChoice) {
                case '1':
                    exportLeaderboardJSON().then(() => {
                        alert("✅ Leaderboard exported as JSON!");
                    });
                    break;
                case '2':
                    exportLeaderboardImage().then(() => {
                        alert("✅ Leaderboard exported as PNG image!");
                    });
                    break;
                case '3':
                    exportLeaderboardPDF().then(() => {
                        alert("✅ Leaderboard exported as PDF-style image!");
                    });
                    break;
                default:
                    alert("❌ Invalid choice. Export cancelled.");
            }
        }
    }

    // �🔁 Restart button event
    restartBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to restart? Your current score will be reset.")) {
            startGame();
            loadLeaderboard();
        }
    });

    // 🛑 Stop button event
    stopBtn.addEventListener("click", stopGame);

    //  Initialize game
    startGame();
    loadLeaderboard();
});
