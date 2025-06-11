/**
 * Vérifie que tous les paramètres passés sont truthy.
 * @param  {...any} args — Les valeurs à tester.
 * @returns {boolean} — true si toutes les valeurs sont truthy, false sinon.
 */
function allTruthy(...args) {
    // La méthode every() renvoie true seulement si la fonction de test
    // (ici Boolean) renvoie true pour chaque élément du tableau.
    return args.every(Boolean);
}

// Exemples d’utilisation
console.log(allTruthy(true, true, true));    // → true
console.log(allTruthy(true, false, true));   // → false
console.log(allTruthy(5, 4, 3, 2, 1, 0));    // → false




// **Signature de la fonction

// On utilise un paramètre rest(...args) pour récupérer tous les arguments sous forme de tableau.

// **Test de truthiness

// Boolean(value) renvoie false pour 0, "", null, undefined, NaN ou false, et true pour tout le reste.
//     args.every(Boolean) parcourt chaque élément et retourne true uniquement si Boolean(elem) est true pour tous les éléments.

//     Résultat

// Si au moins un argument est falsy, every renvoie false, donc la fonction renvoie false.
//     Sinon, elle renvoie true.*/