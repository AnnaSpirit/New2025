// // validate-fullname.js
// // ✅ Module to validate a user's full name using RegExp
// // ✅ Module pour valider un nom complet avec une expression régulière

// const readline = require('readline-sync'); // Load the readline-sync module
// // Charger le module readline-sync

// // Function to ask for full name and validate it
// // Fonction pour demander le nom complet et le valider
// function checkFullName() {
//     const fullName = readline.question('📝 Enter your full name (e.g. John Doe): ');
//     // Demander le nom complet à l'utilisateur

//     // Regular expression explanation:
//     // ^            => start of string
//     // [A-Z][a-z]+  => first name: uppercase followed by lowercase letters
//     //               (e.g. John)
//     // [ ]          => exactly one space
//     // [A-Z][a-z]+  => last name: same rule
//     // $            => end of string
//     const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

//     // Test the input against the regex
//     // Tester la chaîne avec l'expression régulière
//     if (regex.test(fullName)) {
//         console.log('✅ Valid name format!');
//     } else {
//         console.log('❌ Invalid name! Must be two words, first letter capitalized, only letters.');
//     }
// }

// // Export the function for use in app.js
// // Exporter la fonction pour l'utiliser dans app.js
// module.exports = checkFullName;


//++++ Redo if invalid

// validate-fullname.js
// ✅ Module to validate a user's full name using RegExp with retry
// ✅ Module pour valider un nom complet avec RegExp, avec répétition si erreur

const readline = require('readline-sync'); // Import readline-sync
// Importer readline-sync

function checkFullName() {
    const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

    let isValid = false;

    // Repeat until valid input
    // Répéter jusqu'à ce que l'entrée soit valide
    while (!isValid) {
        const fullName = readline.question('📝 Enter your full name (e.g. John Doe): ');
        // Demander le nom complet

        if (regex.test(fullName)) {
            console.log('✅ Valid name format!');
            isValid = true;
        } else {
            console.log('❌ Must be two words, first letter capitalized, only letters.');
        }
    }
}
// Export the function for use in app.js
// Exporter la fonction pour l'utiliser dans app.js
module.exports = checkFullName;