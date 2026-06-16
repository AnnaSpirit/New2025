
const express = require('express');
const todosRouter = require('./routes/todos');

const app = express();
const PORT = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Monter le router des todos
app.use('/todos', todosRouter);

// Route de base pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur l\'API Todo List' });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
