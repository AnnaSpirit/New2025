// Import the add function from math.js 👇
// Importer la fonction add depuis math.js

import { add } from './math.mjs';

// On utilise des accolades car on fait un import nommé (lié au export nommé).

const result = add(9, 4);
console.log(`The sum is: ${result}`); // La somme est : 13