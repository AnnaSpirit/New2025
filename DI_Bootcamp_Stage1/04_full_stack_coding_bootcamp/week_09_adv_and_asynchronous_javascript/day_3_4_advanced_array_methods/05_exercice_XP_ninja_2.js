// string_array_exercises.js

// =================================
// Exercise 1 : Menu
// =================================
function exercise1() {
    // Données de départ
    const menu = [
        { type: "starter", name: "Houmous with Pita" },
        { type: "starter", name: "Vegetable Soup with Houmous peas" },
        { type: "dessert", name: "Chocolate Cake" }
    ];

    // 1. Vérifier s'il y a au moins un dessert (méthode + opérateur ternaire)
    const hasDessert = menu.some(item => item.type === 'dessert') ? true : false;
    console.log('Is there a desert ?', hasDessert); // true

    // 2. Vérifier si tous les éléments sont des starters
    const allStarters = menu.every(item => item.type === 'starter');
    console.log('All starters ?', allStarters); // false

    // 3. Vérifier la présence d'un plat principal et en ajouter un si nécessaire
    const hasMain = menu.some(item => item.type === 'main');
    if (!hasMain) {
        // On choisit un plat principal à la volée
        menu.push({ type: "main", name: "Grilled Salmon with Lemon" });
    }
    console.log('Possible addition menu:', menu);

    // 4. Ajouter la clé “vegetarian” selon la liste des ingrédients végétariens
    const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];
    const updatedMenu = menu.map(item => {
        // On regarde si le nom du plat contient un ingrédient végétarien
        const isVeg = vegetarian.some(veg =>
            item.name.toLowerCase().includes(veg)
        );
        return {
            ...item,
            vegetarian: isVeg // true ou false
        };
    });

    console.log('Enriched menu of the Vegetarian key:', updatedMenu);
}

// =================================
// Exercise 2 : Chop into chunks
// =================================
function exercise2() {
    /**
     * Découpe une chaîne en morceaux de longueur donnée.
     * @param {string} str – La chaîne à découper.
     * @param {number} size – La taille de chaque morceau (doit être un entier > 0).
     * @returns {string[]} – Un tableau contenant les morceaux.
     */
    function stringChop(str, size) {
        // Vérifications d’entrée
        if (typeof str !== 'string') {
            throw new TypeError('The first argument must be a string.');
        }
        if (!Number.isInteger(size) || size <= 0) {
            throw new RangeError('The second argument should be an integer strictly greater than 0.');
        }

        const result = [];
        // On parcourt la chaîne par pas de size
        for (let i = 0; i < str.length; i += size) {
            // slice prend de i (inclus) à i+size (exclu ou jusqu’à la fin)
            result.push(str.slice(i, i + size));
        }
        return result;
    }

    // Tests
    console.log(stringChop('developers', 2)); // ["de", "ve", "lo", "pe", "rs"]
    console.log(stringChop('JavaScript', 3)); // ["Jav", "aSc", "rip", "t"]
    console.log(stringChop('AnnaSpirit', 4)); // ["Anna", "Spir", "it"]
}

// =================================
// Exercise 3 : You said string ?
// =================================
function exercise3() {
    /**   
    * @param { string } str – La chaîne de caractères dans laquelle chercher.
    * @param { string } word – Le mot à rechercher.
    * @returns { string } – Un message indiquant le nombre d’occurrences.
    */
    function searchWord(str, word) {
        // Validation des paramètres
        if (typeof str !== 'string') {
            throw new TypeError('Le premier argument doit être une string.');
        }
        if (typeof word !== 'string') {
            throw new TypeError('Le deuxième argument doit être une string.');
        }
        if (word === '') {
            return "Le mot à rechercher ne peut pas être vide.";
        }

        // Création d'une RegExp pour rechercher le mot entier, insensible à la casse
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        const matches = str.match(regex);
        const count = matches ? matches.length : 0;

        // Gestion du singulier/pluriel pour le message
        const timesLabel = count === 1 ? 'time' : 'times';
        return `'${word}' was found ${count} ${timesLabel}.`;
    }

    // Exemples de test
    console.log(searchWord('The quick brown fox', 'fox'));
    // "'fox' was found 1 time."

    console.log(searchWord('Foxes are clever. The fox jumped over the foxhole.', 'fox'));
    // "'fox' was found 2 times."

    console.log(searchWord('Hello world!', 'test'));
}

// =================================
// Exercise 4 : Reverse Array
// =================================
function exercise4() {
    /**
    @param { any[] } arr – Le tableau à inverser.
 * @returns { any[] } – Le même tableau, mais avec les éléments dans l’ordre inverse.
 */
    function reverseArray(arr) {
        if (!Array.isArray(arr)) {
            throw new TypeError('Le paramètre doit être un tableau.');
        }

        let start = 0;
        let end = arr.length - 1;

        // On échange les éléments de chaque côté jusqu’à se croiser
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // déstructuration pour swap
            start++;
            end--;
        }

        return arr;
    }
    console.log(reverseArray([1, 2, 3, 4, 5]));            // [5, 4, 3, 2, 1]
    console.log(reverseArray([1, 2]));                    // [2, 1]
    console.log(reverseArray([]));                        // []
    console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));    // [10,9,8,7,6,5,4,3,2,1]

}

// Appel des exercices
function runAllExercises() {
    console.log('--- Exercise 1: Menu ---'); exercise1();
    console.log('--- Exercise 2: Chop into chunks ---'); exercise2();
    console.log('--- Exercise 3: You said string? ---'); exercise3();
    console.log('--- Exercise 4: Reverse Array ---'); exercise4();
}

runAllExercises();
