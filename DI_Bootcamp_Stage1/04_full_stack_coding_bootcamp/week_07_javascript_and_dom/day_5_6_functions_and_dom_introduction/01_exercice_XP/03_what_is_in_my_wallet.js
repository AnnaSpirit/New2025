// The value 4.25 represents the item’s price
// The array[25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25(the total amount due)

// Read the illustration(point 4), while reading the instructions

//     Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments:
//         an item price
//         and an array representing the amount of change in your pocket.

//     In the function, determine whether or not you can afford the item.
//         If the sum of the change is bigger or equal than the item’s price(ie.it means that you can afford the item), the function should return true
//         If the sum of the change is smaller than the item’s price(ie.it means that you cannot afford the item) the function should return false

//     Change will always be represented in the following order: quarters, dimes, nickels, pennies.

/**
 * Détermine si tu as assez de monnaie pour t’offrir un article.
 *
 * @param {number} itemPrice            Prix de l’article
 * @param {[number,number,number,number]} amountOfChange
 *        [nbQuarters, nbDimes, nbNickels, nbPennies]
 * @returns {boolean}                   true si tu peux payer, false sinon
 */
function changeEnough(itemPrice, amountOfChange) {
    // 1 quarter = 0.25$, 1 dime = 0.10$, 1 nickel = 0.05$, 1 penny = 0.01$
    const values = [0.25, 0.10, 0.05, 0.01];

    // Calcul de la somme totale
    let total = 0;
    for (let i = 0; i < values.length; i++) {
        total += amountOfChange[i] * values[i];
    }

    // Affichage debug (optionnel)
    console.log(`Tu as en poche : $${total.toFixed(2)}`);

    // Retourne vrai si tu peux payer, sinon faux
    return total >= itemPrice;
}

// 🧪 Tests
console.log(changeEnough(4.25, [25, 20, 5, 0]));   // true (tu as 8.50$)
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false (tu as 10.25$)
console.log(changeEnough(0.75, [0, 0, 20, 5]));   // true (tu as 1.05$)
