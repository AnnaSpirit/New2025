// Import the HTTP module
// Importer le module HTTP -- charge le module HTTP de Node.js
const http = require('http');

// Create the HTTP server
// Créer le serveur HTTP avec la fonction de callback

/*BASE
//req Objet représentant la requête HTTP (info envoyée par le client)
// res Objet représentant la réponse HTTP (info à envoyer au client)
const server = http.createServer((req, res) => {
    // End and send the response
    // Terminer et envoyer la réponse
    res.end('🌍 Hello World from the server! 👋');
});

// Start the server on port 5000
// Démarrer (= lancer) le serveur sur le port 5000
server.listen(5000, 'localhost', () => {
    console.log('✅ Server is listening at http://localhost:5000');
});
*/


const server = http.createServer((req, res) => {
    // Set response header to text/html
    // Définir l'en-tête comme du HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        res.end('<h1>🏠 Home page</h1>');
    } else if (req.url === '/about') {
        res.end('<h1>📖 About page</h1>');
    } else {
        // Page not found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>❌ Page not found</h1>');
    }
});

server.listen(5000, 'localhost', () => {
    console.log('🚀 Server is running at http://localhost:5000');
});