// read-file.js
const fs = require('fs'); // 🇫🇷 On importe le module natif 'fs' pour accéder aux fichiers
const path = require('path'); // 🇫🇷 Pour construire un chemin compatible tous OS

function readFileContent() {
    const filePath = path.join(__dirname, 'file-data.txt'); // 🇫🇷 Chemin vers le fichier

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Oops! Something went wrong while reading the file 😢');
            console.error(err);
            return;
        }

        console.log('Here is the content of the file: 📂\n');
        console.log(data);
    });
}

// 🇫🇷 On exporte la fonction
module.exports = readFileContent;
