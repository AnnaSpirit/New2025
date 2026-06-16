
const express = require('express');
const router = express.Router();

// Base de données en mémoire pour stocker les livres
const books = [];
let nextId = 1;

// GET - Récupérer tous les livres
router.get('/', (req, res) => {
    res.json(books);
});

// POST - Créer un nouveau livre
router.post('/', (req, res) => {
    const { title, author, isbn, published } = req.body;

    // Validation simple
    if (!title || !author) {
        return res.status(400).json({ error: 'Le titre et l\'auteur sont requis' });
    }

    const newBook = {
        id: nextId++,
        title,
        author,
        isbn: isbn || '',
        published: published || null,
        createdAt: new Date()
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT - Mettre à jour un livre par ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, isbn, published } = req.body;

    const book = books.find(b => b.id === parseInt(id));

    if (!book) {
        return res.status(404).json({ error: 'Livre non trouvé' });
    }

    // Mettre à jour les champs fournis
    if (title !== undefined) book.title = title;
    if (author !== undefined) book.author = author;
    if (isbn !== undefined) book.isbn = isbn;
    if (published !== undefined) book.published = published;
    book.updatedAt = new Date();

    res.json(book);
});

// DELETE - Supprimer un livre par ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(b => b.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Livre non trouvé' });
    }

    const deletedBook = books.splice(index, 1);
    res.json({ message: 'Livre supprimé avec succès', book: deletedBook[0] });
});

module.exports = router;
