// Import the people array from data.js 👇
// Importer le tableau de personnes depuis data.js

import { people } from './data.js';

// Function to calculate average age 👇
// Fonction pour calculer l'âge moyen

function calculateAverageAge(personArray) {
    const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
    const average = totalAge / personArray.length;
    return average.toFixed(2); // arrondi à 2 décimales
}

// Display the result 👇
// Afficher le résultat

console.log("📊 Average age of all people:", calculateAverageAge(people));
