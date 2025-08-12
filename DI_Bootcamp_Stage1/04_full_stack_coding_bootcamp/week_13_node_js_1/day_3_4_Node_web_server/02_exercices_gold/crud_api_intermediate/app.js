/**
 * Required npm packages to install:
 * npm install express axios
 * 
 * File: app.js — AnnaSpirit
 */

// ================== Imports & App Setup ==================
// EN: Import required modules
// FR: Importer les modules nécessaires
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json()); // EN: Parse JSON bodies | FR: Analyser les corps JSON

// EN: Base URL for external API (JSONPlaceholder)
// FR: URL de base pour l'API externe (JSONPlaceholder)
const API = 'https://jsonplaceholder.typicode.com';

// ================== Helper: Safe Axios Wrapper ==================
// EN: Centralized try/catch for Axios requests
// FR: try/catch centralisé pour les requêtes Axios
async function safeRequest(res, fn) {
    try {
        const result = await fn();
        return res.status(200).json(result.data);
    } catch (err) {
        const status = err.response?.status || 500;
        const message = err.response?.data || { message: 'External API error' };
        return res.status(status).json({
            error: true,
            source: 'jsonplaceholder',
            details: message
        });
    }
}

// ================== CRUD Endpoints ==================

// READ ALL: GET /api/posts
app.get('/api/posts', (req, res) => {
    // EN: Fetch all posts from external API
    // FR: Récupérer tous les posts depuis l’API externe
    return safeRequest(res, () => axios.get(`${API}/posts`));
});

// READ ONE: GET /api/posts/:id
app.get('/api/posts/:id', (req, res) => {
    const { id } = req.params;
    // EN: Fetch a single post
    // FR: Récupérer un post
    return safeRequest(res, () => axios.get(`${API}/posts/${id}`));
});

// CREATE: POST /api/posts
app.post('/api/posts', (req, res) => {
    const { title, body, userId } = req.body;
    if (!title || !body || !userId) {
        // EN: Basic validation
        // FR: Validation basique
        return res.status(400).json({ message: 'title, body, and userId are required' });
    }
    // EN: Create a new post
    // FR: Créer un nouveau post
    return safeRequest(res, () => axios.post(`${API}/posts`, { title, body, userId }));
});

// UPDATE: PUT /api/posts/:id
app.put('/api/posts/:id', (req, res) => {
    const { id } = req.params;
    const { title, body, userId } = req.body;
    if (!title || !body || !userId) {
        return res.status(400).json({ message: 'title, body, and userId are required' });
    }
    // EN: Update existing post
    // FR: Mettre à jour un post
    return safeRequest(res, () => axios.put(`${API}/posts/${id}`, { title, body, userId }));
});

// DELETE: DELETE /api/posts/:id
app.delete('/api/posts/:id', (req, res) => {
    const { id } = req.params;
    // EN: Delete a post
    // FR: Supprimer un post
    return safeRequest(res, () => axios.delete(`${API}/posts/${id}`));
});

// ================== Server ==================
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 CRUD API ready on http://localhost:${PORT} — bring snacks! 🍿`);
});


/* TESTING

# Read all
curl http://localhost:5000/api/posts

# Read one
curl http://localhost:5000/api/posts/3

# Create
curl -X POST http://localhost:5000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"Hello","body":"From AnnaSpirit","userId":1}'

# Update
curl -X PUT http://localhost:5000/api/posts/3 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated","body":"…and shiny","userId":1}'

# Delete
curl -X DELETE http://localhost:5000/api/posts/3
*/