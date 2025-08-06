// 🚀 Required npm packages to install:
// npm install express

app.use(express.json());


// 📦 Importer express
const express = require('express');

// 🛠️ Créer une instance de l'application
const app = express();

// 🧠 Simuler une "base de données" avec un tableau
let posts = [
    { id: 1, title: "My first blog post", content: "Hello world!" },
    { id: 2, title: "Another one", content: "DJ Khaled voice 🎧" }
];

// 🧱 Middleware pour lire le JSON
app.use(express.json());

// 📖 GET /posts - Récupérer tous les articles
app.get('/posts', (req, res) => {
    res.json(posts);
});

// 🔍 GET /posts/:id - Récupérer un article spécifique
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: "🚫 Post not found!" });
    res.json(post);
});

// ➕ POST /posts - Ajouter un nouvel article
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: "⚠️ Title and content required!" });
    }

    const newPost = {
        id: posts.length ? posts[posts.length - 1].id + 1 : 1,
        title,
        content
    };

    posts.push(newPost); // Ajouter le nouvel article au tableau, pas de remplacement
    res.status(201).json(newPost);
});

// ✏️ PUT /posts/:id - Modifier un article existant
app.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: "🚫 Post not found!" });

    // ✏️ PUT /posts/:id - Modifier un article existant
    app.put('/posts/:id', (req, res) => {
        const post = posts.find(p => p.id === parseInt(req.params.id));

        //Securisation 

        if (!post) {
            return res.status(404).json({ message: "🚫 Post not found!" });
        }

        // 🔐 Sécurité : vérifier que le body est bien là
        if (!req.body) {
            return res.status(400).json({ message: "⚠️ Request body is missing!" });
        }

        // 👁️ Log pour debug
        console.log("📦 Received body:", req.body);

        const { title, content } = req.body;

        // 🧼 Vérification du contenu
        if (!title || !content) {
            return res.status(400).json({ message: "⚠️ Title and content required!" });
        }

        post.title = title;
        post.content = content;

        res.json(post);
    });


    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: "⚠️ Title and content required!" });
    }

    post.title = title;
    post.content = content;
    res.json(post);
});

// ❌ DELETE /posts/:id - Supprimer un article
app.delete('/posts/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) return res.status(404).json({ message: "🚫 Post not found!" });

    const deletedPost = posts.splice(postIndex, 1);
    res.json(deletedPost[0]);
});

// 🛑 Middleware pour les routes inconnues
app.use((req, res) => {
    res.status(404).json({ message: "❓ Route not found!" });
});

// 🔥 Middleware pour les erreurs serveur
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "💥 Server error!" });
});

// 🚀 Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
