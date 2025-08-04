// faker-users.js
// 🧪 Module that generates fake users and adds manual input users
// 🧪 Module qui génère de faux utilisateurs et ajoute des utilisateurs saisis manuellement

const { faker } = require('@faker-js/faker');       // Import faker
// Importer faker

const readline = require('readline-sync');          // Import readline-sync
// Importer readline-sync

// Create an array to store users
// Créer un tableau pour stocker les utilisateurs
const users = [];

// Function to generate fake users
// Fonction pour générer des faux utilisateurs
function generateFakeUsers(count) {
    for (let i = 0; i < count; i++) {
        const user = {
            name: faker.person.fullName(),            // Fake full name / Faux nom complet (faker.name deprecated ==> faker.person.fullName())
            street: faker.location.streetAddress(), // Fake street address / Adresse fictive
            country: faker.location.country()       // Fake country / Pays fictif
        };
        users.push(user);
    }
}
//BONUS
// Function to add a manual user via terminal prompts
// Fonction pour ajouter un utilisateur manuel via le terminal
function addManualUser() {
    const name = readline.question('👤 Enter your name: ');         // Saisir le nom
    const street = readline.question('🏠 Enter your street: ');     // Saisir la rue
    const country = readline.question('🌍 Enter your country: ');   // Saisir le pays

    const user = { name, street, country };
    users.push(user);
    console.log('✅ Manual user added successfully!');
}

// Function to display all users
// Fonction pour afficher tous les utilisateurs
function displayUsers() {
    console.log('\n👥 All Users:');
    console.log(users);
}

// Export functions
// Exporter les fonctions
module.exports = {
    generateFakeUsers,
    addManualUser,
    displayUsers
};
