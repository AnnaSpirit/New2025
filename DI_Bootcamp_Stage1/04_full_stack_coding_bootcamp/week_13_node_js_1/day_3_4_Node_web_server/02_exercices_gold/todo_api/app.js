/**
 * Required npm packages to install:
 * npm install express
 * 
 * File: app.js — AnnaSpirit
 */

// ================== Imports & App Setup ==================
const express = require('express');
const app = express();

app.use(express.json()); // EN: Parse JSON | FR: Analyser JSON

// ================== In-Memory Store ==================
// EN: Simple in-memory todos store
// FR: Stockage des todos en mémoire
let nextId = 1;
const todos = []; // { id, title, completed }

// ================== Validation Helpers ==================
function isValidId(id) {
    // EN: Must be positive integer
    // FR: Doit être un entier positif
    return Number.isInteger(id) && id > 0;
}

function findTodo(id) {
    return todos.find(t => t.id === id);
}

// ================== Routes ==================

// CREATE: POST /api/todos
app.post('/api/todos', (req, res) => {
    const { title, completed } = req.body;

    // EN: Validate title presence and type
    // FR: Valider la présence et le type de title
    if (!title || typeof title !== 'string') {
        return res.status(400).json({ message: 'title (string) is required' });
    }

    const todo = {
        id: nextId++,
        title: title.trim(),
        completed: Boolean(completed) || false
    };
    todos.push(todo);
    return res.status(201).json(todo);
});

// READ ALL: GET /api/todos
app.get('/api/todos', (req, res) => {
    return res.status(200).json(todos);
});

// READ ONE: GET /api/todos/:id
app.get('/api/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    if (!isValidId(id)) {
        return res.status(400).json({ message: 'Invalid id' });
    }
    const todo = findTodo(id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    return res.status(200).json(todo);
});

// UPDATE: PUT /api/todos/:id
app.put('/api/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    if (!isValidId(id)) {
        return res.status(400).json({ message: 'Invalid id' });
    }

    const { title, completed } = req.body;
    if (typeof title !== 'string' || typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'title (string) and completed (boolean) are required' });
    }

    const todo = findTodo(id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    todo.title = title.trim();
    todo.completed = completed;
    return res.status(200).json(todo);
});

// DELETE: DELETE /api/todos/:id
app.delete('/api/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    if (!isValidId(id)) {
        return res.status(400).json({ message: 'Invalid id' });
    }

    const index = todos.findIndex(t => t.id === id);
    if (index === -1) return res.status(404).json({ message: 'Todo not found' });

    const deleted = todos.splice(index, 1)[0];
    return res.status(200).json({ deleted });
});

// ================== Server ==================
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`📝 Todo API listening on http://localhost:${PORT} — productivity mode: ON ✨`);
});

/*TESTING

# Create
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy cat food","completed":false}'

# Read all
curl http://localhost:5000/api/todos

# Read one
curl http://localhost:5000/api/todos/1

# Update
curl -X PUT http://localhost:5000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy more cat food","completed":true}'

# Delete
curl -X DELETE http://localhost:5000/api/todos/1
*/
