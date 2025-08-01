// Import the built-in 'fs' module 👇
// Importer le module natif 'fs' pour lire un fichier

const fs = require('fs');

// Read the content from 'output.txt' 👇
// Lire le contenu du fichier output.txt

fs.readFile('output.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("❌ Error reading file:", err);
    } else {
        console.log("📄 File content:\n" + data);
    }
});
