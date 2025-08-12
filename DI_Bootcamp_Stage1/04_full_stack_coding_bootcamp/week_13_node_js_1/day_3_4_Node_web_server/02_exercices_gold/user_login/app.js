/**
 * Required npm packages to install:
 * npm install express bcrypt jsonwebtoken
 * 
 * File: app.js — AnnaSpirit
 */

// ================== Imports & App Setup ==================
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// EN: Graceful error for invalid JSON payloads
// FR: Erreur propre quand le JSON reçu est invalide
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && 'body' in err) {
        return res.status(400).json({
            message: "Invalid JSON payload. Please remove comments, trailing commas, and use double quotes only. 🧹"
            // FR: JSON invalide. Retire les commentaires, virgules finales, et utilise uniquement des guillemets doubles.
        });
    }
    next(err);
});


// EN: In-memory users store (for demo only)
// FR: Stockage utilisateurs en mémoire (démo uniquement)
const users = []; // { id, username, passwordHash, role }

const JWT_SECRET = 'super-secret-just-for-exercise'; // EN: Use .env in real apps | FR: Utiliser .env en vrai

// ================== Helpers ==================
function generateToken(user) {
    // EN: Minimal payload
    // FR: Payload minimal
    return jwt.sign(
        { sub: user.id, username: user.username, role: user.role || 'user' },
        JWT_SECRET,
        { expiresIn: '2h' }
    );
}

function auth(req, res, next) {
    // EN: Check Authorization: Bearer <token>
    // FR: Vérifie l’entête Authorization: Bearer <token>
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;
    if (!token) return res.status(401).json({ message: 'Missing token' });

    try {
        req.user = jwt.verify(token, JWT_SECRET);
        return next();
    } catch {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}

// ================== Routes ==================

// POST /api/register
app.post('/api/register', async (req, res) => {
    const { username, password, role } = req.body;

    // EN: Basic validation
    // FR: Validation basique
    if (!username || !password) {
        return res.status(400).json({ message: 'username and password are required' });
    }

    // EN: Unique username check
    // FR: Vérification d’unicité
    if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
        return res.status(409).json({ message: 'Username already exists' });
    }

    // EN: Hash password
    // FR: Hasher le mot de passe
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = {
        id: users.length + 1,
        username,
        passwordHash,
        role: role === 'admin' ? 'admin' : 'user'
    };
    users.push(newUser);

    return res.status(201).json({
        id: newUser.id,
        username: newUser.username,
        role: newUser.role
    });
});

// POST /api/login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    // EN: Validate input
    // FR: Valider l’entrée
    if (!username || !password) {
        return res.status(400).json({ message: 'username and password are required' });
    }

    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken(user);
    return res.status(200).json({ token, expiresIn: '2h' });
});

// GET /api/profile (protected)
app.get('/api/profile', auth, (req, res) => {
    // EN: Return minimal profile info
    // FR: Retourner des infos minimales
    return res.status(200).json({
        id: req.user.sub,
        username: req.user.username,
        role: req.user.role
    });
});

// ================== Server ==================
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🔐 User Login API up at http://localhost:${PORT} — passwords doing squats 🏋️`);
});


/*TESTING

# Register
curl -X POST http://localhost:5000/api/register \
  -H "Content-Type: application/json" \
  -d '{"username":"anna","password":"P@ssw0rd!","role":"admin"}'

# Login
curl -X POST http://localhost:5000/api/login \
  -H "Content-Type: application/json" \
  -d '{"username":"anna","password":"P@ssw0rd!"}'

# Profile (replace <TOKEN>)
curl http://localhost:5000/api/profile -H "Authorization: Bearer <TOKEN>"
*/

/*IDEAS
    Complexity Password: REGEX(≥8 tanks, update, min, figure, special) → return 400 if non - compliant.

    Lockout: chess counter per username, block 5 min after 5 failures.

    Roles: Middleware REQUIEROLE('Admin') to protect certain roads.
*/