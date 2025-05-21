// PART I

// Fonction externe qui reçoit la taille désirée du jus
// function makeJuice(size) {
//     // Fonction interne qui ajoute trois ingrédients et affiche le résultat dans le DOM
//     function addIngredients(ing1, ing2, ing3) {
//         const message = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
//         const p = document.createElement('p');
//         p.textContent = message;
//         document.body.appendChild(p);
//     }

//     // 👇 Invocation unique de la fonction interne avec tes ingrédients préférés
//     addIngredients('apple', 'banana', 'cherry');
// }

// // 👇 Invocation de la fonction externe dans le scope global
// makeJuice('large');


// La outer function makeJuice(size) garde en mémoire la size.

// La inner function addIngredients(...) peut accéder à size grâce au closure, et construit ta phrase.

// On crée dynamiquement un < p > et on l’ajoute au < body > pour voir le résultat.


// PART II

function makeJuice(size) {
    // Tableau vide pour stocker les ingrédients ajoutés
    const ingredients = [];

    // Fonction interne : ajoute trois ingrédients au tableau
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    // Nouvelle fonction interne : affiche le jus final dans le DOM
    function displayJuice() {
        const message = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        const p = document.createElement('p');
        p.textContent = message;
        document.body.appendChild(p);
    }

    // On invoque addIngredients DEUX FOIS pour obtenir 6 ingrédients
    addIngredients('apple', 'banana', 'cherry');
    addIngredients('kiwi', 'mango', 'orange');

    // Puis on affiche le résultat final
    displayJuice();
}

// Invocation globale avec la taille souhaitée
makeJuice('large');


// Comment ça roule ?

//     On crée d’abord un array ingredients dans makeJuice.

// addIngredients pousse 3 ingrédients à chaque appel, et on l’appelle deux fois pour avoir 6 ingrédients.

// displayJuice lit tout le tableau, assemble une phrase et l’injecte dans un < p > au sein du < body >.

// Grâce au closure, les deux inner functions voient bien size et ingredients.