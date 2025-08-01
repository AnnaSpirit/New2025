//import lodash and custom math functions 👇
// Importer lodash et les fonctions de math.js 

const _ = require('lodash');
//on crée une variable _ pour utiliser lodash
const { add, multiply } = require('./math');

// Utilisation des fonctions
const result1 = add(5, 3);
const result2 = multiply(4, 7);

// Use lodash to sum an array
// Utilisation de lodash pour faire une somme d'un tableau

const numbers = [10, 20, 30, 40];
const total = _.sum(numbers);

// total = _ [alias:pour appeler la bibliothèque Lodash que tu as importée] ca equivaut à ecrire: const total = lodash.sum(numbers);

//Display the results with style ✨
// Affichage des résultats avec style ✨

console.log("🧮 Custom add: 5 + 3 =", result1);
console.log("🧮 Custom multiply: 4 * 7 =", result2);
console.log("📊 Lodash total:", total);
