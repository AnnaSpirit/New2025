// npm init for json file
// npm install lodash

// Simple custom module with addition and multiplication 👇
// Module personnalisé avec addition et multiplication

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Export des fonctions
module.exports = { add, multiply };
