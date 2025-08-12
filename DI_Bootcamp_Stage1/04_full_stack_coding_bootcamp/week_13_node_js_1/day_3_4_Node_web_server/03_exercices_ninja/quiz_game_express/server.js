/* EN: Required npm packages to install: express
   FR: Paquets npm requis à installer : express */

/* EN: Express server that serves static files and quiz APIs.
   FR: Serveur Express qui sert les fichiers statiques et les APIs du quiz. */

const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

/* EN: Middleware to parse JSON bodies.
   FR: Middleware pour parser les corps JSON. */
app.use(express.json());

/* EN: Serve static frontend files from /public.
   FR: Sert les fichiers front depuis /public. */
app.use(express.static(path.join(__dirname, "public")));

/* EN: In-memory question bank (answers hidden from client).
   FR: Banque de questions en mémoire (réponses cachées côté client). */
const questionBank = [
    {
        id: 1,
        type: "mcq",
        difficulty: "easy",
        question: "What does HTTP stand for?",
        choices: [
            "HyperText Transfer Protocol",
            "High Transfer Text Protocol",
            "Hyperlink Transmission Text Process",
            "Host Transfer Type Package"
        ],
        correctAnswer: "HyperText Transfer Protocol",
        explanation: "HTTP = HyperText Transfer Protocol. It moves hypertext over the web. 🕸️"
    },
    {
        id: 2,
        type: "boolean",
        difficulty: "easy",
        question: "JavaScript and Java are the same language.",
        correctAnswer: false,
        explanation: "Nope! Same first four letters, different universes. 🌌"
    },
    {
        id: 3,
        type: "text",
        difficulty: "medium",
        question: "Which port does HTTP typically use by default?",
        correctAnswer: "80",
        explanation: "Default HTTP is port 80; HTTPS is usually 443. 🔐"
    },
    {
        id: 4,
        type: "mcq",
        difficulty: "medium",
        question: "Which HTTP method should be idempotent by spec?",
        choices: ["GET", "POST", "PATCH", "CONNECT"],
        correctAnswer: "GET",
        explanation: "GET is read-only and should be idempotent. (PUT too, but not in this list.) 📚"
    },
    {
        id: 5,
        type: "mcq",
        difficulty: "hard",
        question: "In REST, which status code best represents 'resource created'?",
        choices: ["200 OK", "201 Created", "204 No Content", "409 Conflict"],
        correctAnswer: "201 Created",
        explanation: "201 tells clients a new resource has been created. ✨"
    }
];

/* EN: Basic in-memory leaderboard (resets on server restart).
   FR: Leaderboard en mémoire (réinitialisé au redémarrage du serveur). */
const leaderboard = [];

/* EN: Helper to sanitize questions before sending to client.
   FR: Helper pour retirer les réponses avant envoi au client. */
function sanitizeQuestion(q) {
    const base = {
        id: q.id,
        type: q.type,
        difficulty: q.difficulty,
        question: q.question
    };
    if (q.type === "mcq") {
        base.choices = q.choices;
    }
    if (q.type === "boolean") {
        base.choices = ["True", "False"];
    }
    return base;
}

/* EN: Get all questions (sanitized).
   FR: Récupérer toutes les questions (sanitisées). */
app.get("/api/questions", (req, res) => {
    const sanitized = questionBank.map(sanitizeQuestion);
    res.status(200).json({ questions: sanitized });
});

/* EN: Check answer for a given questionId.
   FR: Vérifier la réponse pour un questionId donné. */
app.post("/api/answer", (req, res) => {
    const { questionId, answer } = req.body;
    const question = questionBank.find(q => q.id === Number(questionId));

    if (!question) {
        return res.status(404).json({ correct: false, message: "Question not found. 🕵️" });
    }

    let isCorrect = false;

    if (question.type === "boolean") {
        const normalized = String(answer).toLowerCase();
        const truthy = normalized === "true" || normalized === "t";
        isCorrect = (truthy === Boolean(question.correctAnswer));
    } else if (question.type === "text") {
        const normalizedAnswer = String(answer).trim().toLowerCase();
        const normalizedCorrect = String(question.correctAnswer).trim().toLowerCase();
        isCorrect = normalizedAnswer === normalizedCorrect;
    } else {
        // mcq
        isCorrect = String(answer) === String(question.correctAnswer);
    }

    res.status(200).json({
        correct: isCorrect,
        message: isCorrect ? "Correct! 🎉" : `Oops! The correct answer was: ${question.correctAnswer} ❌`,
        explanation: question.explanation
    });
});

/* EN: Save score to leaderboard.
   FR: Sauvegarder le score dans le leaderboard. */
app.post("/api/score", (req, res) => {
    const { player, score, total } = req.body;
    if (!player || typeof score !== "number" || typeof total !== "number") {
        return res.status(400).json({ message: "Invalid score payload. 🧹" });
    }

    const entry = {
        player: String(player).slice(0, 20) || "Anonymous",
        score,
        total,
        at: new Date().toISOString()
    };
    leaderboard.push(entry);

    // sort best first
    leaderboard.sort((a, b) => b.score - a.score);
    // keep top 10
    if (leaderboard.length > 10) leaderboard.length = 10;

    res.status(201).json({ message: "Score saved! 🏁", leaderboard });
});

/* EN: Get leaderboard.
   FR: Récupérer le leaderboard. */
app.get("/api/leaderboard", (req, res) => {
    res.status(200).json({ leaderboard });
});

/* EN: Health check.
   FR: Vérification de santé. */
app.get("/api/health", (_req, res) => {
    res.status(200).json({ ok: true });
});

app.listen(PORT, () => {
    console.log(`Quiz server running on http://localhost:${PORT}`);
});

/* AnnaSpirit */
