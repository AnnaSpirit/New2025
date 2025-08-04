// app.js
// 🧪 Main file to test the returnNumbers function
// 🧪 Fichier principal pour tester la fonction returnNumbers

// Import the function from extract-numbers.js
// Importer la fonction depuis extract-numbers.js
const returnNumbers = require('./extract-numbers');

// Define a test string
// Définir une chaîne de test
const testString = 'k5k3q2g5z6x9bn';

// Call the function and store the result
// Appeler la fonction et stocker le résultat
const result = returnNumbers(testString);

// Display the result
// Afficher le résultat
console.log(`📦 Input: ${testString}`);
console.log(`🎯 Extracted Numbers: ${result}`); // Should output: 532569
