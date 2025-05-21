//** EX 1 : Nested Function */

// let landscape = function () {

//     let result = "";

//     let flat = function (x) {
//         for (let count = 0; count < x; count++) {
//             result = result + "_";
//         }
//     }

//     let mountain = function (x) {
//         result = result + "/"
//         for (let counter = 0; counter < x; counter++) {
//             result = result + "'"
//         }
//         result = result + "\\"
//     }

//     flat(4);
//     mountain(4);
//     flat(4)

//     return result;
// }

// landscape()

//Ce que je comprend: La fonction interne flat(x) boucle x fois pour accumuler des _.

// La fonction interne mountain(x) ajoute d’abord un /, puis x fois un ', puis un \.

// On appelle flat(4), mountain(4), puis flat(4) dans landscape(), qui retourne la chaîne finale.


// Version "nested arrow functions"
const landscape = () => {
    let result = "";

    // Trace une plaine de x underscores
    const flat = (x) => {
        for (let count = 0; count < x; count++) {
            result += "_";
        }
    };

    // Trace une montagne : /''''\ pour x apostrophes
    const mountain = (x) => {
        result += "/";
        for (let counter = 0; counter < x; counter++) {
            result += "'";
        }
        result += "\\";
    };

    flat(4);
    mountain(4);
    flat(4);

    return result;
};

// Exécution et affichage du résultat
console.log(landscape()); // "____/''''\____"


//**Ex 2 - Closure: */

// Analyse the code below, and before executing it, predict the outcome of the last line.

const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);

// result: 13
// Explanation:
// addTo(10) returns a function that takes y as an argument and adds it to 10.
// When we call addToTen(3), it adds 3 to 10, resulting in 13.

// const addToTen = y => 10 + y;
// Ici, on passe y = 3 à la fonction y => 10 + y

//**EX 3: Currying */

// Analyse the code below, and before executing it, predict the outcome of the last line.

const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

    // It’s a curried function: you give it one argument a, and it returns a new function that takes b and returns a + b. Thanks to closures, the inner function “remembers” the original a

    We fix a = 30.
    (b) => 30 + b
curriedSum(30)(1) => 30 + 1
    =>


//**Ex 4 : Currying */

// Analyse the code below, and before executing it, predict the outcome of the last line.

const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

// fonction « curried » : elle prend d’abord un argument a, puis renvoie une nouvelle fonction qui prendra b et retournera a + b.

// => curriedSum(5), donc a devient 5
// => (b) => 5 + b
// => add5(12) => 5 + 12
// => 17


//**Ex 5 : Composing */

// Analyse the code below, and before executing it, predict the outcome of the last line.

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

// compose takes two functions, f and g, and returns a new function that, given an input a, first applies g to a, then passes the result into f

// add1(x) returns x + 1.
// add5(x) returns x + 5

// The composed function is roughly(a) => add1(add5(a)).
// a = 10, first add5(10) gives 15, then add1(15) gives 16.

