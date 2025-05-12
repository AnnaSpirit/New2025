
// Create a function that takes a string as an argument.
// Have the function return:
//     The string but all letters in even indexes should be capitalized.
//     The string but all letters in odd indexes should be capitalized.

function capitalizeEvenOdd(str) {
    let evenCapitalized = '';
    let oddCapitalized = '';

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenCapitalized += str[i].toUpperCase();
            oddCapitalized += str[i].toLowerCase();
        } else {
            evenCapitalized += str[i].toLowerCase();
            oddCapitalized += str[i].toUpperCase();
        }
    }

    return [evenCapitalized, oddCapitalized];
}
// Tests:
console.log(capitalizeEvenOdd("hello")); // ["HeLlO", "hElLo"]
console.log(capitalizeEvenOdd("world")); // ["WoRlD", "wOrLd"]
