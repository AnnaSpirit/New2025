// ==========================================================
// 📦 Required npm packages to install:
// ----------------------------------------------------------
// npm init -y
// npm install express
// ==========================================================

/* EN: Secure & async Express server for Emoji Guess Game (CommonJS)
   FR: Serveur Express sécurisé & asynchrone pour le jeu Emoji (CommonJS) */

const express = require("express");
const path = require("path");
const fs = require("fs");
const fsp = fs.promises;
const crypto = require("crypto");

// EN: Load emojis (format { name, emoji } — supports { name, symbol } too)
// FR: Charger les emojis (format { name, emoji } — supporte aussi { name, symbol })
const emojisRaw = require("./data/emojis");
const emojis = emojisRaw.map((e, i) => {
    const icon = e?.emoji ?? e?.symbol;
    if (!e?.name || !icon) {
        throw new Error(`Invalid emoji entry at index ${i}`);
    }
    return { name: String(e.name), emoji: String(icon) };
});

const app = express();
const PORT = process.env.PORT || 5000;
const leaderboardPath = path.join(__dirname, "leaderboard.json");

// 🛠️ Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// 🧠 In-memory store: questionId -> { correctName, expiresAt }
// 🧠 Mémoire: questionId -> { correctName, expiresAt }
const questionStore = new Map();

// 🧩 Build one question: pick 1 correct + 3 distractors (no answer leakage)
// 🧩 Construire une question : 1 bonne + 3 distracteurs (sans fuite de réponse)
function pickQuestion() {
    const idx = Math.floor(Math.random() * emojis.length);
    const correct = emojis[idx];
    const pool = emojis.filter((_, i) => i !== idx);
    const distractors = pool.sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [correct.name, ...distractors.map(e => e.name)].sort(() => Math.random() - 0.5);
    return { correctName: correct.name, emoji: correct.emoji, options };
}

// 🚀 ROUTE INITIALE (on garde ton comportement)
// Si views/index.html existe, on le sert. Sinon, le static /public prendra le relais.
app.get("/", async (req, res) => {
    try {
        const viewFile = path.join(__dirname, "views", "index.html");
        await fsp.access(viewFile, fs.constants.F_OK);
        return res.sendFile(viewFile);
    } catch {
        // Fallback: laisser express.static servir /public/index.html si présent
        return res.send("OK");
    }
});

// 🎲 GET /api/question — renvoie uniquement emoji + options + questionId
// ❗ Ne PAS renvoyer la bonne réponse au client (sécurité)
app.get("/api/question", (req, res) => {
    const q = pickQuestion();
    const questionId = crypto.randomUUID();
    questionStore.set(questionId, {
        correctName: q.correctName.toLowerCase().trim(),
        expiresAt: Date.now() + 60_000 // 60s TTL
    });

    res.json({
        emoji: q.emoji,
        options: q.options,
        questionId
        // ❌ NO 'answer' here
    });
});

// 📥 POST /api/guess — vérifie côté serveur via questionId (ignore correctName client)
const allowedDifficulties = new Set(["easy", "hard"]);
const sanitizeName = (s) => String(s || "")
    .replace(/[^a-z0-9 _-]/gi, "")
    .slice(0, 20);

app.post("/api/guess", async (req, res) => {
    try {
        const { guessedName, correctName /*unused*/, playerName, difficulty, questionId } = req.body || {};

        // ✅ Validation minimale robuste
        if (typeof guessedName !== "string" || typeof questionId !== "string" || !playerName || !difficulty) {
            return res.status(400).json({ message: "Missing or invalid fields" });
        }
        if (!allowedDifficulties.has(String(difficulty))) {
            return res.status(400).json({ message: "Invalid difficulty" });
        }

        const record = questionStore.get(questionId);
        if (!record || record.expiresAt < Date.now()) {
            questionStore.delete(questionId);
            return res.status(410).json({ message: "Question expired" });
        }

        const isCorrect = String(guessedName).toLowerCase().trim() === record.correctName;
        questionStore.delete(questionId);

        // 🧮 Points: hard = +3, easy = +1 (comme ton implémentation)
        const pointsToAdd = isCorrect ? (difficulty === "hard" ? 3 : 1) : 0;

        // 🗂️ Leaderboard: on conserve ton schéma { "playerName": number }
        let leaderboard = {};
        try {
            const raw = await fsp.readFile(leaderboardPath, "utf8").catch(e => (e.code === "ENOENT" ? "{}" : Promise.reject(e)));
            leaderboard = JSON.parse(raw || "{}");
            if (typeof leaderboard !== "object" || Array.isArray(leaderboard) || leaderboard === null) {
                leaderboard = {};
            }
        } catch (e) {
            console.error("Leaderboard read error:", e);
            leaderboard = {};
        }

        const safeName = sanitizeName(playerName);
        if (!leaderboard[safeName]) leaderboard[safeName] = 0;
        leaderboard[safeName] += pointsToAdd;

        try {
            await fsp.writeFile(leaderboardPath, JSON.stringify(leaderboard, null, 2), "utf8");
        } catch (e) {
            console.error("Leaderboard write error:", e);
            // On continue quand même à répondre, mais on signale l'échec silencieusement côté serveur
        }

        return res.json({
            correct: isCorrect,
            score: leaderboard[safeName],
            pointsEarned: pointsToAdd,
            message: isCorrect
                ? `🎉 Correct! +${pointsToAdd} point${pointsToAdd > 1 ? "s" : ""}!`
                : "❌ Wrong guess!"
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
});

// 🏆 GET /api/leaderboard — on garde exactement ton format (objet { name: score })
app.get("/api/leaderboard", async (req, res) => {
    try {
        const raw = await fsp.readFile(leaderboardPath, "utf8").catch(e => (e.code === "ENOENT" ? "{}" : Promise.reject(e)));
        const leaderboard = JSON.parse(raw || "{}");
        if (typeof leaderboard !== "object" || Array.isArray(leaderboard) || leaderboard === null) {
            return res.json({});
        }
        return res.json(leaderboard);
    } catch (e) {
        console.error("Leaderboard read error:", e);
        return res.json({});
    }
});

// ❤️ Health check (pratique pour debug)
app.get("/api/health", (_req, res) => {
    res.json({ ok: true });
});

// ▶️ Démarrer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
/* AnnaSpirit */