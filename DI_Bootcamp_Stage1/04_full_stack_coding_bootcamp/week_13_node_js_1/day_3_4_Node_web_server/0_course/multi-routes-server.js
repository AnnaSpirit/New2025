// Import the HTTP module
// Importer le module HTTP
const http = require('http');

// Create the HTTP server
// Créer le serveur HTTP
const server = http.createServer((req, res) => {
    // Define headers with UTF-8 encoding
    // Définir les en-têtes avec encodage UTF-8
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // Handle different URL paths
    // Gérer les différents chemins de l'URL
    if (req.url === '/') {
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Home</title>
            </head>
            <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
                <h1>🏠 Home Page</h1>
                <p>Welcome to the home of awesome servers!</p>
            </body>
            </html>
        `);
    } else if (req.url === '/about') {
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>About</title>
            </head>
            <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
                <h1>📖 About Page</h1>
                <p>This server was proudly built by AnnaSpirit 💖</p>
            </body>
            </html>
        `);
    } else if (req.url === '/contact') {
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Contact</title>
            </head>
            <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
                <h1>📬 Contact Page</h1>
                <p>You can reach us via magic, pigeons, or Node.js 🪄🐦‍⬛</p>
            </body>
            </html>
        `);
    } else {
        // Page not found – use 404 status
        // Page non trouvée – définir statut 404
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>404</title>
            </head>
            <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
                <h1>❌ 404 - Page Not Found</h1>
                <p>Oops! That page doesn't exist... yet 😅</p>
            </body>
            </html>
        `);
    }
});

// Start the server on port 3000
// Démarrer le serveur sur le port 3000
server.listen(3000, 'localhost', () => {
    console.log('✅ Server is running at http://localhost:3000 🚀');
});


/* Si ton HTML devient trop long, tu peux aussi le stocker dans un fichier .html séparé et faire :

js:
Copier le code
const fs = require('fs');
const html = fs.readFileSync('./index.html', 'utf-8');
res.end(html);
*/