// 🚀 Required npm packages to install:
// npm install express

// Import required modules
// Importer les modules nécessaires
const express = require('express');
const posts = require('./data'); // Import des articles

// Create Express app
// Créer l'application Express
const app = express();

// Middleware to parse JSON
// Middleware pour analyser le JSON du corps des requêtes
app.use(express.json());

// 📍 CREATE – POST /api/posts
app.post('/api/posts', (req, res) => {
    const { title, content } = req.body;

    // Vérification basique
    if (!title || !content) {
        return res.status(400).json({ message: "⚠️ Title and content are required" });
    }

    const newPost = {
        id: posts.length + 1,
        title,
        content
    };

    posts.push(newPost); // Ajouter le nouvel article au tableau
    res.status(201).json(newPost); // 201 Created
});

// 📖 READ ALL – GET /api/posts
app.get('/api/posts', (req, res) => {
    res.status(200).json(posts);
});

// 🔍 READ ONE – GET /api/posts/:postID
app.get('/api/posts/:postID', (req, res) => {
    const id = parseInt(req.params.postID);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ message: "❌ Post not found" });
    }

    res.status(200).json(post);
});

// ✏️ UPDATE – PUT /api/posts/:postID
app.put('/api/posts/:postID', (req, res) => {
    const id = parseInt(req.params.postID);
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "❌ Post not found" });
    }

    const { title, content } = req.body;

    // On garde les anciennes valeurs si pas de nouvelle
    posts[index] = {
        id,
        title: title || posts[index].title,
        content: content || posts[index].content
    };

    res.status(200).json({ message: "✅ Post updated", post: posts[index] });
});

// 🗑 DELETE – DELETE /api/posts/:postID
app.delete('/api/posts/:postID', (req, res) => {
    const id = parseInt(req.params.postID);
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "❌ Post not found" });
    }

    posts.splice(index, 1);
    res.status(200).json({ message: `🗑 Post with ID ${id} deleted` });
});

// Start the server
// Démarrer le serveur
app.listen(5000, () => {
    console.log("✅ CRUD Blog API is running at http://localhost:5000 🚀");
});
