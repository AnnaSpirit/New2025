// Import the fs module 👇
// Importer le module natif fs

const fs = require('fs');

// Function to read a file 👇
// Fonction pour lire un fichier

function readFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
}

// Function to write to a file 👇
// Fonction pour écrire dans un fichier

function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Content written to ${filePath}`);
}

// Export the functions 👇
// Exporter les fonctions avec CommonJS

module.exports = {
    readFile,
    writeFile
};
