// Clean the room function
// Cette fonction trie un tableau en groupes ordonnés selon le type (number ou string)
function cleanRoom(arr) {
    // Séparer les nombres et les chaines
    const numbers = arr.filter(item => typeof item === 'number');
    const strings = arr.filter(item => typeof item === 'string');

    function groupAndSort(items) {
        const counts = items.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {});
        const result = [];
        Object.keys(counts)
            .map(key => (typeof items[0] === 'number' ? Number(key) : key))
            .sort((a, b) => (typeof a === 'number' ? a - b : a.localeCompare(b)))
            .forEach(value => {
                const count = counts[value];
                if (count > 1) {
                    result.push(Array(count).fill(value));
                } else {
                    result.push(value);
                }
            });
        return result;
    }

    const sortedNumbers = groupAndSort(numbers);
    const sortedStrings = groupAndSort(strings);

    // Combiner les deux types, nombres en premier puis chaines
    return [...sortedNumbers, ...sortedStrings];
}

// Two-sum function
// Cette fonction trouve deux nombres dont la somme correspond à la cible
function twoSum(arr, target) {
    const seen = {};
    for (let num of arr) {
        const complement = target - num;
        if (seen[complement]) {
            return [complement, num];
        }
        seen[num] = true;
    }
    return null; // pas de solution trouvée
}

// Conversion HEX ≠ RGB et vice-versa
// Cette fonction détecte automatiquement le format d'entrée
function convertColor(input) {
    // Si format RGB: "rgb(r, g, b)"
    const rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
    const hexRegex = /^#?([0-9a-f]{6})$/i;

    let match;

    if ((match = input.match(rgbRegex))) {
        // RGB -> HEX
        const r = parseInt(match[1]);
        const g = parseInt(match[2]);
        const b = parseInt(match[3]);
        const toHex = n => n.toString(16).padStart(2, '0');
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    } else if ((match = input.match(hexRegex))) {
        // HEX -> RGB
        const hex = match[1];
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return `rgb(${r}, ${g}, ${b})`;
    } else {
        throw new Error('Format de couleur non reconnu');
    }
}

// Export des fonctions si utilisation en module
// export { cleanRoom, twoSum, convertColor };
