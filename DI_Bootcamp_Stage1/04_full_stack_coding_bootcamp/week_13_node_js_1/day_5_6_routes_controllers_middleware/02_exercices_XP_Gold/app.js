/*
========================================
SETUP INSTRUCTIONS
========================================

1. Initialize a new Node.js project:
    npm init -y

2. Install Express.js:
    npm install express

3. (Optional) Install nodemon for development:
    npm install --save-dev nodemon

4. Add this to your package.json scripts section:
    "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
    }

5. Save this code as server.js

6. Run the server:
    npm start        (or)
    npm run dev      (with nodemon for auto-restart)

7. Server will run on http://localhost:3000

========================================
*/

const express = require('express');
const app = express();
const blogRouter = express.Router();

// Middleware
app.use(express.json());

// In-memory storage for blog posts
let posts = [
    {
        id: 1,
        title: 'First Post',
        content: 'This is the first blog post.',
        timestamp: new Date('2024-01-01')
    },
    {
        id: 2,
        title: 'Second Post',
        content: 'This is the second blog post.',
        timestamp: new Date('2024-01-02')
    }
];

let nextId = 3;

// Validation helper
function validatePost(post) {
    const errors = [];

    if (!post.title || typeof post.title !== 'string' || post.title.trim() === '') {
        errors.push('Title is required and must be a non-empty string');
    }

    if (!post.content || typeof post.content !== 'string' || post.content.trim() === '') {
        errors.push('Content is required and must be a non-empty string');
    }

    return errors;
}

// Routes

// GET /posts - Retrieve all blog posts
blogRouter.get('/', (req, res) => {
    res.json(posts);
});

// GET /posts/:id - Retrieve a specific blog post by ID
blogRouter.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).json({ error: 'ID must be a valid number' });
    }

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: 'Blog post not found' });
    }

    res.json(post);
});

// POST /posts - Create a new blog post
blogRouter.post('/', (req, res) => {
    const errors = validatePost(req.body);

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    const newPost = {
        id: nextId++,
        title: req.body.title.trim(),
        content: req.body.content.trim(),
        timestamp: new Date()
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});

// PUT /posts/:id - Update a blog post by ID
blogRouter.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).json({ error: 'ID must be a valid number' });
    }

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: 'Blog post not found' });
    }

    const errors = validatePost(req.body);

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    post.title = req.body.title.trim();
    post.content = req.body.content.trim();
    post.timestamp = new Date();

    res.json(post);
});

// DELETE /posts/:id - Delete a blog post by ID
blogRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).json({ error: 'ID must be a valid number' });
    }

    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Blog post not found' });
    }

    const deletedPost = posts.splice(index, 1);
    res.json({ message: 'Blog post deleted', post: deletedPost[0] });
});

// Mount the router
app.use('/posts', blogRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Blog API running on http://localhost:${PORT}`);
});

module.exports = app;

/*
========================================
TESTS INSTRUCTIONS
========================================

# GET all posts
curl http://localhost:3000/posts

# GET a specific post
curl http://localhost:3000/posts/1

# CREATE a new post
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"My New Post","content":"This is great content"}'

# UPDATE a post
curl -X PUT http://localhost:3000/posts/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title","content":"Updated content"}'

# DELETE a post
curl -X DELETE http://localhost:3000/posts/1

========================================
*/