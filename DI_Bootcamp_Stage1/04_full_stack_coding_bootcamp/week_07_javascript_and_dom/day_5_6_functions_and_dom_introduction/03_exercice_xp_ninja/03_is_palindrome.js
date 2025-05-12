// Write a JavaScript function that checks whether a string is a palindrome or not.

/**
 * Vérifie si une chaîne est un palindrome, en ignorant la casse, la ponctuation, les espaces et les accents.*/

function isPalindrome(str) {
    // 1) On passe en minuscule et on décompose les caractères Unicode (NFD)
    const lower = str.toLowerCase().normalize('NFD');

    // 2) On retire les diacritiques (accents) et tout ce qui n’est pas lettre/chiffre
    const cleaned = lower
        .replace(/[\u0300-\u036f]/g, '')   // supprime les marques d’accent
        .replace(/[^a-z0-9]/g, '');        // garde que a–z et 0–9

    // 3) On teste l’inversion
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Tests:
const userInput = prompt("Enter a word to check if it is a palindrome :");

// Si l’utilisateur n’a pas annulé
if (userInput !== null) {
    if (isPalindrome(userInput)) {
        alert(`"${userInput}" It is a palindrome ! 🎉`);
    } else {
        alert(`"${userInput}" It's not a palindrome. 😕`);
    }
} else {
    alert("You have cancelled the prompt.");
}

// Test cases
// Anna // true
// Oh! cela te perd, répéta l'écho // false but it is a palindrome.
// Oh cela te perd repeta lecho // false but it is a palindrome. CORRIGE
//In girum imus nocte ecce et consumimur igni // true