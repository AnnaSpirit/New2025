// script.js — AnnaSpirit

// ------------------------------
// Challenge 1: Promises chain
// ------------------------------

/**
 * makeAllCaps: prend un array of words,
 * si tous sont des strings, renvoie un array uppercased,
 * sinon rejette avec un message d'erreur précis.
 */
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        const allAreStrings = words.every(item => typeof item === 'string');
        if (!allAreStrings) {
            reject('Error: Not all items in the array are strings 🛑');
            return;
        }
        const uppercased = words.map(w => w.toUpperCase());
        resolve(uppercased);
    });
}

/**
 * sortWords: prend un array of UPPERCASED words,
 * si length > 4, renvoie le tableau trié alphabétiquement,
 * sinon rejette avec un message clair.
 */
function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length <= 4) {
            reject('Error: Array length must be greater than 4 for sorting 📑');
            return;
        }
        const sorted = [...words].sort();
        resolve(sorted);
    });
}

/**
 * runChallenge1: exécute les 3 tests et affiche dans #output-ch1
 */
function runChallenge1() {
    const output = document.getElementById('output-ch1');
    output.textContent = '';

    const tests = [
        [1, 'pear', 'banana'],
        ['apple', 'pear', 'banana'],
        ['apple', 'pear', 'banana', 'melon', 'kiwi']
    ];

    tests.forEach((testArr, idx) => {
        makeAllCaps(testArr)
            .then(arr => sortWords(arr))
            .then(sorted => {
                output.textContent += `Test ${idx + 1}: SUCCESS → ${JSON.stringify(sorted)}\n`;
            })
            .catch(err => {
                output.textContent += `Test ${idx + 1}: FAILED → ${err}\n`;
            });
    });
}

document.getElementById('run-ch1').addEventListener('click', runChallenge1);

// ------------------------------
// Challenge 2: Morse converter
// ------------------------------

/**
 * toJs: convertit la chaîne JSON en objet JS,
 * rejette si vide ou JSON invalide.
 */
function toJs(morseJsonStr) {
    return new Promise((resolve, reject) => {
        try {
            const obj = JSON.parse(morseJsonStr);
            if (Object.keys(obj).length === 0) {
                reject('Error: Morse object is empty ⚠️');
                return;
            }
            resolve(obj);
        } catch {
            reject('Error: Invalid JSON string ❌');
        }
    });
}

/**
 * toMorse: récupère la saisie utilisateur depuis #morse-input,
 * valide qu’elle n’est pas vide, traduit caractère par caractère,
 * et rejette si un caractère est introuvable.
 */
function toMorse(morseObj) {
    return new Promise((resolve, reject) => {
        const raw = document.getElementById('morse-input').value.trim();
        if (!raw) {
            reject('Error: No input provided 🚫');
            return;
        }

        const translation = [];
        for (const ch of raw.toLowerCase()) {
            if (ch === ' ') {
                translation.push('\n');
            } else if (morseObj[ch]) {
                translation.push(morseObj[ch]);
            } else {
                reject(`Error: Character "${ch}" not in Morse dictionary 🙅‍♀️`);
                return;
            }
        }
        resolve(translation);
    });
}

/**
 * joinWords: affiche chaque code morse sur une ligne dans #morse-output.
 * Garde en mémoire la robustesse contre inputs invalides.
 */
function joinWords(morseArr) {
    const outputDiv = document.getElementById('morse-output');
    outputDiv.innerHTML = '';

    if (!Array.isArray(morseArr)) {
        console.warn('joinWords: expected an array, got', morseArr);
        outputDiv.textContent = 'Error: Invalid Morse translation result.';
        return;
    }

    morseArr.forEach(code => {
        const line = document.createElement('div');
        line.textContent = code;
        outputDiv.appendChild(line);
    });
}

const morseJson = `{
    "0": "-----", "1": ".----", "2": "..---",
    "3": "...--", "4": "....-", "5": ".....",
    "6": "-....", "7": "--...", "8": "---..",
    "9": "----.", "a": ".-", "b": "-...",
    "c": "-.-.", "d": "-..", "e": ".",
    "f": "..-.", "g": "--.", "h": "....",
    "i": "..", "j": ".---", "k": "-.-",
    "l": ".-..", "m": "--", "n": "-.",
    "o": "---", "p": ".--.", "q": "--.-",
    "r": ".-.", "s": "...", "t": "-",
    "u": "..-", "v": "...-", "w": ".--",
    "x": "-..-", "y": "-.--", "z": "--..",
    ".": ".-.-.-", ",": "--..--", "?": "..--..",
    "!": "-.-.--", "-": "-....-", "/": "-..-.",
    "@": ".--.-.", "(": "-.--.", ")": "-.--.-"
  }`;

/**
 * runChallenge2: chaîne toJs → toMorse → joinWords
 * capture toutes les erreurs et les affiche via alert().
 */
function runChallenge2() {
    toJs(morseJson)
        .then(obj => toMorse(obj))
        .then(arr => joinWords(arr))
        .catch(err => alert(err + ' 🤖'));
}

document.getElementById('run-ch2').addEventListener('click', runChallenge2);
