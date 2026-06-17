
/*
  ============================================
  SETUP INSTRUCTIONS
  ============================================
  
  1. Initialize a new Node.js project:
     npm init -y
  
  2. Install Express.js and express-session:
     npm install express express-session
  
  3. (Optional) Install nodemon for development:
     npm install --save-dev nodemon
  
  4. Add this to your package.json scripts:
     "scripts": {
       "start": "node quiz.js",
       "dev": "nodemon quiz.js"
     }
  
  5. Save this code as quiz.js
  
  6. Run the server:
     npm start (or npm run dev)
  
  7. Open http://localhost:3000 in your browser
  
  ============================================
*/

const express = require('express');
const session = require('express-session');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'trivia-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 } // 1 hour
}));

// Trivia questions database
const triviaQuestions = [
    {
        id: 0,
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        id: 1,
        question: "Which planet is known as the Red Planet?",
        answer: "Mars"
    },
    {
        id: 2,
        question: "What is the largest mammal in the world?",
        answer: "Blue whale"
    },
    {
        id: 3,
        question: "Who wrote 'Romeo and Juliet'?",
        answer: "William Shakespeare"
    },
    {
        id: 4,
        question: "What is the smallest prime number?",
        answer: "2"
    }
];

// Create router
const quizRouter = express.Router();

// Initialize quiz session
function initializeQuiz(req) {
    if (!req.session.quiz) {
        req.session.quiz = {
            currentQuestion: 0,
            score: 0,
            totalQuestions: triviaQuestions.length,
            answered: false,
            feedback: null,
            userAnswer: null
        };
    }
}

/*
  ============================================
  FONCTION DE VALIDATION AMÉLIORÉE
  ============================================
  
  Cette fonction accepte les réponses partielles et sans majuscules.
  
  Logique:
  1. Convertit la réponse utilisateur et la bonne réponse en minuscules
  2. Divise la réponse en mots (ex: "William Shakespeare" → ["william", "shakespeare"])
  3. Vérifie si AU MOINS UN mot complet de la réponse utilisateur
     se trouve dans la bonne réponse
  
  Exemples acceptés:
  - Question: "Who wrote 'Romeo and Juliet'?"
  - Bonne réponse: "William Shakespeare"
  - Réponses acceptées:
    ✓ "Shakespeare" (un mot qui correspond)
    ✓ "william" (un mot qui correspond, sans majuscule)
    ✓ "William Shakespeare" (réponse complète)
    ✓ "shakespeare" (un mot, sans majuscule)
  - Réponses rejetées:
    ✗ "Will" (mot partiel, pas un mot complet)
    ✗ "Bob" (mot qui ne correspond pas)
*/
function checkAnswer(userAnswer, correctAnswer) {
    // Convertir les deux en minuscules pour comparaison insensible à la casse
    const userAnswerLower = userAnswer.toLowerCase().trim();
    const correctAnswerLower = correctAnswer.toLowerCase();

    // Vérification exacte d'abord (réponse complète identique)
    if (userAnswerLower === correctAnswerLower) {
        return true;
    }

    // Diviser la réponse correcte en mots
    const correctWords = correctAnswerLower.split(/\s+/);

    // Diviser la réponse utilisateur en mots
    const userWords = userAnswerLower.split(/\s+/);

    // Vérifier si AU MOINS UN mot complet de l'utilisateur 
    // correspond à UN mot complet de la bonne réponse
    return userWords.some(userWord =>
        correctWords.includes(userWord)
    );
}

// GET /quiz - Start quiz or display current question
quizRouter.get('/', (req, res) => {
    initializeQuiz(req);

    const quiz = req.session.quiz;

    // Check if quiz is complete
    if (quiz.currentQuestion >= quiz.totalQuestions) {
        return res.redirect('/quiz/score');
    }

    const question = triviaQuestions[quiz.currentQuestion];
    const progressPercentage = ((quiz.currentQuestion) / quiz.totalQuestions) * 100;

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Trivia Quiz Game</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Georgia', serif;
          background: linear-gradient(135deg, #1a0f0a 0%, #4a1f1f 25%, #6b2d2d 50%, #3d1a1a 75%, #1a0f0a 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .container {
          background: rgba(20, 12, 10, 0.8);
          border: 2px solid #d4804f;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7), inset 0 0 30px rgba(212, 128, 79, 0.1);
          padding: 40px;
          max-width: 700px;
          width: 100%;
          backdrop-filter: blur(10px);
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        h1 {
          color: #f5d5a8;
          font-size: 2em;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .score-display {
          background: linear-gradient(135deg, #8b3a1f 0%, #d4804f 100%);
          color: #f5d5a8;
          padding: 10px 20px;
          border-radius: 20px;
          font-weight: 600;
          border: 1px solid #d4804f;
          box-shadow: 0 4px 15px rgba(212, 128, 79, 0.3);
        }

        .progress-bar {
          background-color: rgba(212, 128, 79, 0.2);
          height: 8px;
          border-radius: 10px;
          margin-bottom: 30px;
          overflow: hidden;
          border: 1px solid #d4804f;
        }

        .progress-fill {
          background: linear-gradient(90deg, #d4804f 0%, #f5a962 100%);
          height: 100%;
          width: ${progressPercentage}%;
          transition: width 0.3s ease;
          box-shadow: 0 0 10px rgba(212, 128, 79, 0.5);
        }

        .question-number {
          color: #d4804f;
          font-size: 0.95em;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .question {
          background: rgba(212, 128, 79, 0.1);
          padding: 25px;
          border-radius: 8px;
          font-size: 1.3em;
          color: #f5d5a8;
          margin-bottom: 30px;
          border-left: 5px solid #d4804f;
          box-shadow: inset 0 0 20px rgba(212, 128, 79, 0.05);
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        label {
          font-weight: 600;
          color: #f5d5a8;
        }

        input[type="text"] {
          padding: 12px 15px;
          border: 2px solid #8b3a1f;
          background: rgba(212, 128, 79, 0.05);
          border-radius: 8px;
          font-size: 1em;
          color: #f5d5a8;
          font-family: 'Georgia', serif;
          transition: all 0.3s ease;
        }

        input[type="text"]::placeholder {
          color: rgba(245, 213, 168, 0.5);
        }

        input[type="text"]:focus {
          outline: none;
          border-color: #d4804f;
          background: rgba(212, 128, 79, 0.15);
          box-shadow: 0 0 15px rgba(212, 128, 79, 0.3);
        }

        button {
          padding: 12px 30px;
          background: linear-gradient(135deg, #8b3a1f 0%, #d4804f 100%);
          color: #f5d5a8;
          border: 1px solid #d4804f;
          border-radius: 8px;
          font-size: 1.1em;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          box-shadow: 0 4px 15px rgba(212, 128, 79, 0.3);
        }

        button:hover {
          background: linear-gradient(135deg, #d4804f 0%, #f5a962 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(212, 128, 79, 0.5);
          color: #1a0f0a;
        }

        button:active {
          transform: translateY(0);
        }

        .feedback {
          padding: 15px 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .feedback.correct {
          background: rgba(100, 150, 80, 0.2);
          color: #c8e6c9;
          border-left: 4px solid #8bc34a;
        }

        .feedback.incorrect {
          background: rgba(180, 80, 80, 0.2);
          color: #ffb3b3;
          border-left: 4px solid #d9534f;
        }

        .next-button {
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🧠 Trivia Quiz</h1>
          <div class="score-display">Score: ${quiz.score}/${quiz.totalQuestions}</div>
        </div>

        <div class="progress-bar">
          <div class="progress-fill"></div>
        </div>

        <div class="question-number">Question ${quiz.currentQuestion + 1} of ${quiz.totalQuestions}</div>

        <div class="question">${question.question}</div>

        ${quiz.feedback ? `
          <div class="feedback ${quiz.feedback.isCorrect ? 'correct' : 'incorrect'}">
            ${quiz.feedback.isCorrect
                ? '✓ Correct!'
                : `✗ Incorrect! The correct answer is: <strong>${question.answer}</strong>`
            }
          </div>
        ` : ''}

        ${quiz.feedback ? `
          <form method="GET" action="/quiz/next">
            <button type="submit" class="next-button">
              ${quiz.currentQuestion + 1 === quiz.totalQuestions ? 'See Results' : 'Next Question'}
            </button>
          </form>
        ` : `
          <form method="POST" action="/quiz">
            <div class="form-group">
              <label for="answer">Your Answer:</label>
              <input
                type="text"
                id="answer"
                name="answer"
                placeholder="Type your answer here..."
                required
                autofocus
              >
            </div>
            <button type="submit">Submit Answer</button>
          </form>
        `}
      </div>
    </body>
    </html>
  `;

    res.send(html);
});

// POST /quiz - Submit answer
quizRouter.post('/', (req, res) => {
    initializeQuiz(req);

    const quiz = req.session.quiz;
    const userAnswer = req.body.answer.trim();
    const currentQuestion = triviaQuestions[quiz.currentQuestion];

    // Validate answer input
    if (!userAnswer) {
        return res.status(400).send('Please provide an answer');
    }

    // Utiliser la fonction de validation améliorée
    const isCorrect = checkAnswer(userAnswer, currentQuestion.answer);

    if (isCorrect) {
        quiz.score++;
    }

    // Store feedback and mark as answered
    quiz.feedback = {
        isCorrect: isCorrect,
        userAnswer: userAnswer
    };
    quiz.answered = true;

    // Redirect back to quiz to show feedback
    res.redirect('/quiz');
});

// GET /quiz/next - Move to next question
quizRouter.get('/next', (req, res) => {
    initializeQuiz(req);

    const quiz = req.session.quiz;
    quiz.currentQuestion++;
    quiz.feedback = null;
    quiz.answered = false;

    res.redirect('/quiz');
});

// GET /quiz/score - Display final score
quizRouter.get('/score', (req, res) => {
    initializeQuiz(req);

    const quiz = req.session.quiz;
    const percentage = Math.round((quiz.score / quiz.totalQuestions) * 100);

    let message = '';
    let emoji = '';

    if (percentage === 100) {
        message = 'Perfect! You are a trivia master!';
        emoji = '🏆';
    } else if (percentage >= 80) {
        message = 'Excellent! You did great!';
        emoji = '⭐';
    } else if (percentage >= 60) {
        message = 'Good job! Keep learning!';
        emoji = '👍';
    } else if (percentage >= 40) {
        message = 'Not bad! Try again to improve!';
        emoji = '💪';
    } else {
        message = 'Keep practicing! You\'ll do better next time!';
        emoji = '📚';
    }

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Quiz Results</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Georgia', serif;
          background: linear-gradient(135deg, #1a0f0a 0%, #4a1f1f 25%, #6b2d2d 50%, #3d1a1a 75%, #1a0f0a 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .container {
          background: rgba(20, 12, 10, 0.8);
          border: 2px solid #d4804f;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7), inset 0 0 30px rgba(212, 128, 79, 0.1);
          padding: 50px 40px;
          max-width: 600px;
          width: 100%;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        h1 {
          color: #f5d5a8;
          margin-bottom: 10px;
          font-size: 2.5em;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .emoji {
          font-size: 4em;
          margin-bottom: 20px;
        }

        .score-box {
          background: linear-gradient(135deg, #8b3a1f 0%, #d4804f 100%);
          color: #f5d5a8;
          padding: 40px 30px;
          border-radius: 8px;
          margin: 30px 0;
          border: 1px solid #d4804f;
          box-shadow: inset 0 0 20px rgba(212, 128, 79, 0.2), 0 4px 15px rgba(212, 128, 79, 0.3);
        }

        .score-number {
          font-size: 3em;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .score-text {
          font-size: 1.2em;
          opacity: 0.9;
        }

        .percentage {
          font-size: 1.5em;
          margin-top: 15px;
          font-weight: 600;
        }

        .message {
          color: #f5d5a8;
          font-size: 1.2em;
          margin: 20px 0;
          font-weight: 500;
        }

        .buttons {
          display: flex;
          gap: 15px;
          margin-top: 30px;
          flex-direction: column;
        }

        a, button {
          padding: 12px 30px;
          background: linear-gradient(135deg, #8b3a1f 0%, #d4804f 100%);
          color: #f5d5a8;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.05em;
          border: 1px solid #d4804f;
          cursor: pointer;
          transition: all 0.3s ease;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          box-shadow: 0 4px 15px rgba(212, 128, 79, 0.3);
        }

        a:hover, button:hover {
          background: linear-gradient(135deg, #d4804f 0%, #f5a962 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(212, 128, 79, 0.5);
          color: #1a0f0a;
        }

        .details {
          background: rgba(212, 128, 79, 0.1);
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
          color: #f5d5a8;
          border: 1px solid rgba(212, 128, 79, 0.3);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="emoji">${emoji}</div>
        <h1>Quiz Complete!</h1>
        
        <div class="score-box">
          <div class="score-number">${quiz.score}/${quiz.totalQuestions}</div>
          <div class="score-text">Questions Answered Correctly</div>
          <div class="percentage">${percentage}%</div>
        </div>

        <p class="message">${message}</p>

        <div class="details">
          <p>Great effort! You answered <strong>${quiz.score}</strong> out of <strong>${quiz.totalQuestions}</strong> questions correctly.</p>
        </div>

        <div class="buttons">
          <a href="/quiz/reset">Retake Quiz</a>
          <a href="/">Home</a>
        </div>
      </div>
    </body>
    </html>
  `;

    res.send(html);
});

// Route pour reset le quiz
app.get('/quiz/reset', (req, res) => {
    req.session.quiz = null;
    res.redirect('/quiz');
});

// Mount router
app.use('/quiz', quizRouter);

// Home page
app.get('/', (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Trivia Quiz Game</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Georgia', serif;
          background: linear-gradient(135deg, #1a0f0a 0%, #4a1f1f 25%, #6b2d2d 50%, #3d1a1a 75%, #1a0f0a 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .container {
          background: rgba(20, 12, 10, 0.8);
          border: 2px solid #d4804f;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7), inset 0 0 30px rgba(212, 128, 79, 0.1);
          padding: 50px 40px;
          max-width: 600px;
          width: 100%;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        h1 {
          color: #f5d5a8;
          font-size: 2.5em;
          margin-bottom: 15px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        p {
          color: #d4a574;
          font-size: 1.1em;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        a {
          display: inline-block;
          padding: 15px 40px;
          background: linear-gradient(135deg, #8b3a1f 0%, #d4804f 100%);
          color: #f5d5a8;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.1em;
          transition: all 0.3s ease;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          border: 1px solid #d4804f;
          box-shadow: 0 4px 15px rgba(212, 128, 79, 0.3);
        }

        a:hover {
          background: linear-gradient(135deg, #d4804f 0%, #f5a962 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(212, 128, 79, 0.5);
          color: #1a0f0a;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🧠 Welcome to Trivia Quiz!</h1>
        <p>Test your knowledge with our exciting trivia questions. Answer as many questions as you can correctly and see how well you score!</p>
        <a href="/quiz">Start Quiz</a>
      </div>
    </body>
    </html>
  `;

    res.send(html);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Trivia Quiz Game running on http://localhost:3000`);
});

module.exports = app;
