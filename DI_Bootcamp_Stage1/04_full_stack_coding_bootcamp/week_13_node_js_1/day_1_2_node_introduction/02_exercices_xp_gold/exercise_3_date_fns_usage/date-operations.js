// date-operations.js
// 📅 Module that performs date manipulations using date-fns
// 📅 Module qui effectue des opérations sur les dates avec date-fns

const { format, addDays } = require('date-fns'); // Import required functions from date-fns
// Importer les fonctions nécessaires depuis date-fns

// Define a function to manipulate and display the date
// Définir une fonction pour manipuler et afficher la date
function showFormattedDate() {
    // Get the current date and time
    // Obtenir la date et l'heure actuelles
    const now = new Date();

    // Add 5 days to the current date
    // Ajouter 5 jours à la date actuelle
    const futureDate = addDays(now, 5);

    // Format the future date into a readable string
    // Formater la date future sous forme lisible
    const formatted = format(futureDate, "yyyy-MM-dd HH:mm:ss");

    // Display the result in the terminal
    // Afficher le résultat dans le terminal
    console.log(`📆 Current date: ${format(now, "yyyy-MM-dd")}`);
    console.log(`🕔 In 5 days: ${formatted}`);
}

// Export the function to use in another file
// Exporter la fonction pour l'utiliser dans un autre fichier
module.exports = showFormattedDate;
