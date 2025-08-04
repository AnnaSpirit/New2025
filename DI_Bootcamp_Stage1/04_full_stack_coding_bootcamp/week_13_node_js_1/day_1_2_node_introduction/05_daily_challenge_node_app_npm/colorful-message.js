// colorful-message.js
const chalk = require('chalk'); // 🇫🇷 On importe le module chalk

function displayColorfulMessage() {
    console.log(chalk.blue('✨ Welcome to the Daily Challenge! ✨'));
    console.log(chalk.green('🚀 Let’s build something awesome today!'));
    console.log(chalk.magenta.bold('💡 Keep learning and stay curious!'));
}

// 🇫🇷 On exporte la fonction pour pouvoir l'utiliser ailleurs
module.exports = displayColorfulMessage;
