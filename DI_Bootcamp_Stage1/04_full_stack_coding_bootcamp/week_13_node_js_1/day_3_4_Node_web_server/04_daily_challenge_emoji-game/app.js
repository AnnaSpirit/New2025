// ==========================================================
// 📦 Required npm packages to install:
// ----------------------------------------------------------
// npm init -y
// npm install express
// ==========================================================

// 📚 Import des modules
const express = require('express');
const path = require('path');
const fs = require('fs');
const emojis = require('./data/emojis');
const app = express();
const PORT = 5000;

// 🛠️ Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 📄 Variables temporaires (score par joueur + emoji actuel)
let currentEmoji = null;

// 🎯 Fonction pour obtenir un emoji + 3 options
function getRandomOptions() {
    const correct = emojis[Math.floor(Math.random() * emojis.length)];
    const distractors = emojis
        .filter(e => e.name !== correct.name)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    const allOptions = [...distractors.map(e => e.name), correct.name].sort(() => 0.5 - Math.random());
    return { correct, all: allOptions };
}

// 🚀 ROUTE INITIALE
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 🎲 ROUTE: GET /api/question
app.get('/api/question', (req, res) => {
    const { correct, all } = getRandomOptions();
    currentEmoji = correct;

    res.json({
        emoji: correct.emoji,
        options: all
    });
});

// 📥 ROUTE: POST /api/guess
app.post('/api/guess', (req, res) => {
    const { guessedName, correctName, playerName } = req.body;

    if (!playerName || !guessedName || !correctName) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const isCorrect = guessedName === correctName;

    // Charger ou initialiser le leaderboard
    let leaderboard = {};
    if (fs.existsSync(leaderboardPath)) {
        const data = fs.readFileSync(leaderboardPath, 'utf8') || '{}';
        leaderboard = JSON.parse(data);
    }

    if (!leaderboard[playerName]) leaderboard[playerName] = 0;
    if (isCorrect) leaderboard[playerName]++;

    fs.writeFileSync(leaderboardPath, JSON.stringify(leaderboard, null, 2));

    res.json({
        correct: isCorrect,
        score: leaderboard[playerName],
        message: isCorrect ? '🎉 Correct guess!' : '❌ Wrong guess!'
    });
});


// 🏆 ROUTE: GET /api/leaderboard
app.get('/api/leaderboard', (req, res) => {
    const filePath = path.join(__dirname, 'leaderboard.json');

    if (!fs.existsSync(filePath)) {
        return res.json({});
    }

    const data = fs.readFileSync(filePath, 'utf8');
    const leaderboard = JSON.parse(data);
    res.json(leaderboard);
});

// 📢 Démarrer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
