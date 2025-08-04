// Import the fs module to read the directory
// Importer le module fs pour lire le répertoire
const fs = require('fs');

// Read all file names in the current directory
// Lire tous les noms de fichiers du répertoire actuel
const files = fs.readdirSync('./');

// Display each file name
// Afficher chaque nom de fichier
console.log('📂 Files in current directory:');
files.forEach(file => {
    console.log('- ' + file);
});
