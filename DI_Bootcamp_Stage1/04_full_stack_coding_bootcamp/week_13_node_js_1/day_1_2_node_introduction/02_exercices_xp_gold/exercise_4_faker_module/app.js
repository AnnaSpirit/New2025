// app.js
// 🎬 Main app file to generate fake users and add one manually
// 🎬 Fichier principal pour générer des faux utilisateurs et en ajouter un manuellement

const { generateFakeUsers, addManualUser, displayUsers } = require('./faker-users');

// Generate 3 fake users
// Générer 3 faux utilisateurs
generateFakeUsers(3);

// Add a real user from input
// Ajouter un vrai utilisateur via le terminal
addManualUser();

// Show all users
// Afficher tous les utilisateurs
displayUsers();
