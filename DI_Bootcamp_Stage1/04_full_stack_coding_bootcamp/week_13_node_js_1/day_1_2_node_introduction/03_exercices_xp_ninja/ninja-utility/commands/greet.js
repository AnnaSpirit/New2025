// greet.js
// ✅ Display a colorful greeting message using chalk
// ✅ Afficher un message de salutation coloré avec chalk

const chalk = require('chalk');

// Fonction pour afficher un message stylisé dans la console
function greetUser() {
    console.log(chalk.bold.greenBright('👋 Hello, ninja! Ready to kick some code? 🥷💻'));
}

// Export de la fonction pour qu’elle soit utilisée dans index.js
module.exports = greetUser;
