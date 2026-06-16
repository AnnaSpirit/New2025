
const express = require('express');
const router = express.Router();

// Base de données en mémoire pour stocker les todos
const todos = [];
let nextId = 1;

// GET - Récupérer tous les todos
router.get('/', (req, res) => {
    res.json(todos);
});

// POST - Créer un nouveau todo
router.post('/', (req, res) => {
    const { title, description } = req.body;

    // Validation simple
    if (!title) {
        return res.status(400).json({ error: 'Le titre est requis' });
    }

    const newTodo = {
        id: nextId++,
        title,
        description: description || '',
        completed: false,
        createdAt: new Date()
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT - Mettre à jour un todo par ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const todo = todos.find(t => t.id === parseInt(id));

    if (!todo) {
        return res.status(404).json({ error: 'Todo non trouvé' });
    }

    // Mettre à jour les champs fournis
    if (title !== undefined) todo.title = title;
    if (description !== undefined) todo.description = description;
    if (completed !== undefined) todo.completed = completed;
    todo.updatedAt = new Date();

    res.json(todo);
});

// DELETE - Supprimer un todo par ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(t => t.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Todo non trouvé' });
    }

    const deletedTodo = todos.splice(index, 1);
    res.json({ message: 'Todo supprimé avec succès', todo: deletedTodo[0] });
});

module.exports = router;
