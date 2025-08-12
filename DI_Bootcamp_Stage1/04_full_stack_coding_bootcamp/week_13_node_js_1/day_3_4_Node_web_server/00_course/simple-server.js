// Import the HTTP module
// Importer le module HTTP
const http = require('http');

// Create the HTTP server
// Créer le serveur HTTP
const server = http.createServer((req, res) => {
    // Set the response header to HTML
    // Définir l'en-tête de la réponse comme HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Send an HTML response
    // Envoyer une réponse HTML
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>My Simple Server</title>
        </head>
        <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
            <h1>🚀 Welcome to My Server 🎉</h1>
            <p>This is your friendly neighborhood Node.js server.</p>
        </body>
        </html>
    `);
});

// Start the server on port 3000
// Démarrer le serveur sur le port 3000
server.listen(3000, 'localhost', () => {
    console.log('✅ Server is running at http://localhost:3000 🚀');
});
