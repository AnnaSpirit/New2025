// extract-numbers.js
// 🔢 Module that extracts all numbers from a string using RegExp 
// 🔢 Module qui extrait tous les chiffres d'une chaîne avec les expressions régulières

// Define the function that takes a string and returns only digits
// Définir la fonction qui prend une chaîne et renvoie uniquement les chiffres
function returnNumbers(str) {
    // Use a regular expression to match all digits globally
    // Utiliser une expression régulière pour capturer tous les chiffres globalement
    const matches = str.match(/\d/g); // \d = digit (0-9), g = global
    return matches ? matches.join('') : '';
    // Si des chiffres sont trouvés, les joindre. Sinon, retourner une chaîne vide.
}

// Export the function to be used in app.js
// Exporter la fonction pour l'utiliser dans app.js
module.exports = returnNumbers;
