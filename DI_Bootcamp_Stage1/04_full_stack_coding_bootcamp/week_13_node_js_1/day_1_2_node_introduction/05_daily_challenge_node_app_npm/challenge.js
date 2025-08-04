// challenge.js
const greet = require('./greeting'); // 🇫🇷 On importe la fonction de salutation
const displayColorfulMessage = require('./colorful-message'); // 🇫🇷 Message coloré
const readFileContent = require('./files/read-file'); // 🇫🇷 Lecture de fichier

console.log('\n===== WELCOME TO THE DAILY CHALLENGE 🔥 =====\n');

// 🇫🇷 Affiche la salutation personnalisée
const message = greet('Anna');
console.log(message);

// 🇫🇷 Affiche les messages colorés
displayColorfulMessage();

// 🇫🇷 Lit et affiche le contenu du fichier texte
readFileContent();

