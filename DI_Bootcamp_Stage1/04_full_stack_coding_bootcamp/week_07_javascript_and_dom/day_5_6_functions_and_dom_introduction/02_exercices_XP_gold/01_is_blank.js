// Write a program to check whether a string is blank or not.

function isBlank(str) {
    // Check if the string is empty or contains only whitespace characters
    return str.trim().length === 0;
}
// Test cases
console.log(isBlank(''));      // → true  : chaîne vide
console.log(isBlank('abc'));   // → false : du contenu
console.log(isBlank('   '));   // → true  : que des espaces, c’est considéré blank