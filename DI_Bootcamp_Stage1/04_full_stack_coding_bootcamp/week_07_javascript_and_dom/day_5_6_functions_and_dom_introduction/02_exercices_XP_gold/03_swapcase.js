// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example:

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.

/**
 * @param {string} str — la chaîne à traiter
 * @returns {string} — la chaîne avec majuscules/minuscules inversées
 */

function swapCase(str) {
    let result = "";
    for (const char of str) {
        if (char === char.toLowerCase() && char !== char.toUpperCase()) {
            result += char.toUpperCase();
        }
        else if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            result += char.toLowerCase();
        }
        // sinon (espaces, chiffres, ponctuation…), on laisse tel quel
        else {
            result += char;
        }
    }
    return result;
}

// 🧪 Test
console.log(swapCase('The Quick Brown Fox')); // → "tHE qUICK bROWN fOX"
console.log(swapCase('Hello World! 123'));    // → "hELLO wORLD! 123"
console.log(swapCase('iN tHE wOOD, tHERE ARE SOME fOXES, 3 FAMILIES.'));
