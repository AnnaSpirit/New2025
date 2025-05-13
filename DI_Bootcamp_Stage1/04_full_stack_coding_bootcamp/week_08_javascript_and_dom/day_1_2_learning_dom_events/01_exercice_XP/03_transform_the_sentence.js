// Declare a global variable named allBoldItems.

// Create a function called getBoldItems() that takes no parameter.This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// Call the function highlight() on mouseover(ie.when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout(ie.when the mouse pointer is moved out of the paragraph).Look at this example

// Déclare une variable globale pour contenir tous les éléments <strong>
let allBoldItems;

// Récupère tous les <strong> dans le paragraphe et les assigne à allBoldItems
function getBoldItems() {
    // On cible tous les strong à l’intérieur du <p>
    allBoldItems = document.querySelectorAll('p strong');
}

// Change la couleur de tous les <strong> en bleu et taille 36px
function highlight() {
    allBoldItems.forEach(function (item) {
        item.style.color = 'blue';
        item.style.fontSize = '36px'; // Optionnel : augmente la taille de la police
    });
}

// ↪ Remet la valeur par défaut
function returnItemsToDefault() {
    allBoldItems.forEach(function (item) {
        item.style.color = 'black';
        item.style.fontSize = '';
    });
}

// Au chargement du DOM, on prépare tout
document.addEventListener('DOMContentLoaded', function () {
    // 1. On récupère nos <strong>
    getBoldItems();

    // 2. On cible le paragraphe
    const paragraph = document.querySelector('p');

    // 3. Au passage de la souris : on met en surbrillance
    paragraph.addEventListener('mouseover', highlight);

    // 4. Quand on sort la souris : on revient à la normale
    paragraph.addEventListener('mouseout', returnItemsToDefault);
});
