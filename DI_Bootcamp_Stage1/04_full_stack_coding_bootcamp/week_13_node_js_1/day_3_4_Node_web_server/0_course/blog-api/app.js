// 🚀 Required npm packages to install before running:
// npm install express

// Import the required modules
// Importer les modules nécessaires
const express = require('express');
const posts = require('./data'); // Import blog posts data

// Create the Express app
// Créer l'application Express
const app = express();

// Route: GET /api/posts → all posts
// Route : renvoyer tous les articles
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// Route: GET /api/posts/:postID → specific post
// Route : renvoyer un seul article selon son ID
app.get('/api/posts/:postID', (req, res) => {
    const id = parseInt(req.params.postID); // Récupère l'ID depuis l'URL
    const post = posts.find((p) => p.id === id);

    if (!post) {
        return res.status(404).json({ message: '❌ Post not found' });
    }

    res.json(post); // Renvoie l'article trouvé
});

// Route: GET /api/search?title=express
// Route : chercher des articles par titre
app.get('/api/search', (req, res) => {
    const query = req.query.title?.toLowerCase(); // On récupère la query string "title"

    if (!query) {
        return res.status(400).json({ message: '⚠️ Please provide a title to search.' });
    }

    const results = posts.filter((post) =>
        post.title.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        return res.json({ message: '🔍 No matching posts found.' });
    }

    res.json(results);
});

// Start the server
// Démarrer le serveur sur le port 3000
app.listen(3000, () => {
    console.log('✅ Blog API is running at http://localhost:3000 🚀');
});
