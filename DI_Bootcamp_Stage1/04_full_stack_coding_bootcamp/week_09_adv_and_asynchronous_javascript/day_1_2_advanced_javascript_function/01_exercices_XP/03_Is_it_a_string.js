// Définis isString comme une arrow function qui renvoie true si c'est une string
const isString = value => typeof value === 'string' || value instanceof String;

// Tests
console.log(isString('hello'));       // true  
console.log(isString([1, 2, 4, 0]));  // false
console.log(isString(new String('yo'))); // true (pour les String objects)



// Explications
// Arrow function : const isString = value => … raccourcit la syntaxe classique.

// typeof détecte les primitives string('hello').

//     instanceof String gère le cas où quelqu’un aurait créé un objet new String('…').

// On renvoie directement un booléen, pile - poil ce dont tu as besoin pour tes conditions!