const express = require('express');
const { fetchPosts } = require('./data/dataService'); // ✅ Import de la fonction axios

const app = express();

// 🧪 GET /api/posts – récupère les posts via JSONPlaceholder
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        console.log("✅ Fetched posts from JSONPlaceholder");
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "💥 Failed to fetch posts" });
    }
});

// 🚀 Démarrage du serveur
app.listen(5000, () => {
    console.log("🌐 Server is running at http://localhost:5000");
});
