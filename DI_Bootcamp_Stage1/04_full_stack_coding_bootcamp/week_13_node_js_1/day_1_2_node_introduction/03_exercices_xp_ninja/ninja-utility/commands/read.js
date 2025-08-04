// read.js
// ✅ Read and display the contents of a file using fs
// ✅ Lire et afficher le contenu d’un fichier avec fs

const fs = require('fs');
const path = require('path');

// Fonction pour lire un fichier texte (par défaut : "sample.txt")
function readFile(fileName = 'sample.txt') {
    const filePath = path.join(__dirname, '..', fileName);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('📛 Error reading the file:', err.message);
        } else {
            console.log('📄 File Content:\n', data);
        }
    });
}

// Export de la fonction pour qu’elle soit utilisée dans index.js
module.exports = readFile;
