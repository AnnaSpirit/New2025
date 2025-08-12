// Import the HTTP module
// Importer le module HTTP
const http = require('http');

// Define the JSON object
// Définir l'objet JSON
const json = {
    menu: {
        firstCourse: 'Vegetable Soup',
        mainCourse: 'Hamburger',
        dessert: 'Fruit salad'
    }
};

// Create the HTTP server
// Créer le serveur HTTP
const server = http.createServer((req, res) => {
    // Set response header to JSON
    // Définir l'en-tête de la réponse en JSON
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

    // Send the JSON as string
    // Envoyer le JSON sous forme de chaîne
    res.end(JSON.stringify(json));
});

// Start the server on port 3000
// Démarrer le serveur sur le port 3000
server.listen(3000, 'localhost', () => {
    console.log('✅ JSON Server is running at http://localhost:3000 🚀');
});
