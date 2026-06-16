
const express = require('express');
const booksRouter = require('./routes/books');

const app = express();
const PORT = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Monter le router des books
app.use('/books', booksRouter);

// Route de base
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur l\'API Book Management' });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
