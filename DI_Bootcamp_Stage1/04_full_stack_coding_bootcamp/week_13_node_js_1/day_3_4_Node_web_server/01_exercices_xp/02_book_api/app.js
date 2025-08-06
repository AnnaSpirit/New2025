// 🚀 Required npm packages to install:
// npm install express

// 📦 Import express
const express = require('express');

// 🛠️ Create express app
const app = express();

// ✅ Middleware pour lire le JSON
app.use(express.json());

// 📚 Base de données fictive de livres
let books = [
    { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937 },
    { id: 2, title: "1984", author: "George Orwell", publishedYear: 1949 },
    { id: 3, title: "Harry Potter", author: "J.K. Rowling", publishedYear: 1997 }
];

// 🎧 Démarrer le serveur sur le port 5000
app.listen(5000, () => {
    console.log("📚 Book API is running on http://localhost:5000");
});


// 📖 READ ALL – GET /api/books
app.get('/api/books', (req, res) => {
    res.status(200).json(books);
});


// 🔍 READ ONE – GET /api/books/:bookId
app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const foundBook = books.find(book => book.id === bookId);

    if (!foundBook) {
        return res.status(404).json({ message: "❌ Book not found" });
    }

    res.status(200).json(foundBook);
});


// ➕ CREATE – POST /api/books
app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;

    if (!title || !author || !publishedYear) {
        return res.status(400).json({ message: "⚠️ title, author and publishedYear are required" });
    }

    const newBook = {
        id: books.length ? books[books.length - 1].id + 1 : 1,
        title,
        author,
        publishedYear
    };

    books.push(newBook);
    res.status(201).json(newBook);
});


/* 
{
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "publishedYear": 2008
}
*/