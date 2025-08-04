// npm init for json file
// npm install chalk

// Importer la bibliothèque chalk pour styliser le terminal
// Import chalk library to style terminal output
import chalk from 'chalk';

// Créer un message stylisé avec différentes couleurs et styles
// Create a styled message with different colors and styles
const message = chalk.bold.green('✅ Welcome') + ' ' + chalk.blue('to') + ' ' + chalk.underline.magenta('NPM Fun!');

// Afficher le message coloré dans le terminal
// Display the colorful message in the terminal
console.log(message);

