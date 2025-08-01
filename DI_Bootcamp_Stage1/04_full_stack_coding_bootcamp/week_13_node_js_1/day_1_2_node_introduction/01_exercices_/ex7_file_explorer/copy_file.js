// Import the fs module to interact with the file system
// Importer le module fs pour interagir avec le système de fichiers
const fs = require('fs');

// Read content from source.txt
// Lire le contenu depuis source.txt
const content = fs.readFileSync('source.txt', 'utf8');

// Write the content to destination.txt
// Écrire le contenu dans destination.txt
fs.writeFileSync('destination.txt', content, 'utf8');

console.log('✅ File copied from source.txt to destination.txt');
