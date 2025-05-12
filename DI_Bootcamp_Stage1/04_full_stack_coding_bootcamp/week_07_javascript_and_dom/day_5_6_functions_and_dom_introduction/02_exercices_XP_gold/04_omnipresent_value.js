// Instructions

//     Create a function that determines whether an argument is omnipresent for a given array.
//     A value is omnipresent if it exists in every subarray inside the main array.

// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.

// Examples

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false

/**
 * @param {Array<Array<*>>} arr — tableau principal contenant des sous-tableaux
 * @param {*} val                — valeur à tester
 * @returns {boolean}  
 */

function isOmnipresent(arr, val) {
    return arr.every(subarr => subarr.includes(val));
}

// 🧪 Exemples de tests
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // → true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // → false
console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]], 3)); // → true
