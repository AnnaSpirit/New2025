// script.js — AnnaSpirit

// ------------------------------
// Challenge 1: Promises chain
// ------------------------------

/**
 * makeAllCaps: prend un array of words,
 * si tous sont des strings, renvoie un array uppercased,
 * sinon rejette avec un message d'erreur.
 */
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        // 👉 astuce : vérifier le type de chaque élément
        const allAreStrings = words.every(item => typeof item === 'string');
        if (allAreStrings) {
            // transformer chaque mot en MAJ
            const uppercased = words.map(w => w.toUpperCase());
            resolve(uppercased);
        } else {
            reject('Error: Not all items are strings 👀');
        }
    });
}

/**
 * sortWords: prend un array of UPPERCASED words,
 * si length > 4, renvoie le tableau trié alphabétiquement,
 * sinon rejette avec raison.
 */
function sortWords(words) {
    return new Promise((resolve, reject) => {
        // 👉 astuce : vérifier la longueur avant de trier
        if (words.length > 4) {
            const sorted = [...words].sort(); // copie avant tri
            resolve(sorted);
        } else {
            reject('Error: Array length must be > 4 to sort 🎯');
        }
    });
}

// Fonction pour exécuter le challenge 1 et afficher
function runChallenge1() {
    const output = document.getElementById('output-ch1');
    output.textContent = ''; // reset

    // trois tests
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

// bind du bouton
document.getElementById('run-ch1').addEventListener('click', runChallenge1);


// ------------------------------
// Challenge 2: Morse converter
// ------------------------------

/**
 * toJs: convertit la chaîne JSON en objet JS.
 * rejette si l'objet est vide.
 */
function toJs(morseJsonStr) {
    return new Promise((resolve, reject) => {
        try {
            const obj = JSON.parse(morseJsonStr);
            // 👉 astuce : Object.keys pour vérifier viduité
            if (Object.keys(obj).length === 0) {
                reject('Error: Morse object is empty ⚠️');
            } else {
                resolve(obj);
            }
        } catch (e) {
            reject('Error: Invalid JSON string ❌');
        }
    });
}

/**
 * toMorse: demande à l'utilisateur une phrase via prompt,
 * traduit chaque caractère en morse ou rejette si un caractère inconnu.
 */
function toMorse(morseObj) {
    return new Promise((resolve, reject) => {
        const input = prompt('Enter a word or sentence:').toLowerCase();
        const translation = [];

        for (const ch of input) {
            if (ch === ' ') {
                // on peut gérer les espaces à part
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
 * joinWords: prend un array de codes morse,
 * affiche chaque code sur une nouvelle ligne dans le DOM.
 */
function joinWords(morseArr) {
    const outputDiv = document.getElementById('morse-output');
    outputDiv.innerHTML = ''; // reset
    morseArr.forEach(code => {
        const line = document.createElement('div');
        line.textContent = code;
        outputDiv.appendChild(line);
    });
}

// JSON string fournie
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
 * runChallenge2: chaîne les 3 fonctions avec gestion d'erreur.
 */
function runChallenge2() {
    toJs(morseJson)
        .then(obj => toMorse(obj))
        .then(arr => joinWords(arr))
        .catch(err => alert(err + ' 🤖'));  // humor + emoji
}

// bind du bouton
document.getElementById('run-ch2').addEventListener('click', runChallenge2);

