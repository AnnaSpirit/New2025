// Import the Express module
// Importer le module Express
const express = require('express');

// Create the Express app
// Créer l'application Express
const app = express();

// Define a GET route at /api/greetings
// Définir une route GET sur /api/greetings
app.get('/api/greetings', (req, res) => {
    // Send JSON response
    // Envoyer une réponse JSON
    res.json({ message: '👋 Hello from Express API!' });
});

// Start the server on port 3000
// Démarrer le serveur sur le port 3000
app.listen(3000, () => {
    console.log('✅ Server is running on http://localhost:3000 🚀');
});
// This code sets up a simple Express API that responds with a greeting message