// app.js
const greet = require('./greeting'); // 🇫🇷 On importe la fonction greet depuis greeting.js

const userName = 'Anna'; // 🇫🇷 Nom d'exemple pour le test
const message = greet(userName); // 🇫🇷 On appelle la fonction greet

console.log(message); // 🇫🇷 On affiche le message dans le terminal

// app.js
const displayColorfulMessage = require('./colorful-message'); // 🇫🇷 On importe la fonction colorée

displayColorfulMessage(); // 🇫🇷 On l'appelle pour afficher les messages colorés
