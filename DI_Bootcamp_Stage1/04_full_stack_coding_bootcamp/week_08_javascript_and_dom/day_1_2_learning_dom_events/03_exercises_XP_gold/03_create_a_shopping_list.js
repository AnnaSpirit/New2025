// Create an empty array.For example: let shoppingList = [].
// Create a form containing: a text input field and an “AddItem” button.Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button(Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.

// 🛒 Liste de courses vide au départ
let shoppingList = [];

// 🔧 Créer le formulaire dynamiquement
const root = document.getElementById('root');

const form = document.createElement('form');

const input = document.createElement('input');
input.type = 'text';
input.placeholder = "Add an article...";

const addButton = document.createElement('button');
addButton.textContent = "AddItem";
addButton.type = "submit";

const clearButton = document.createElement('button');
clearButton.textContent = "ClearAll";
clearButton.type = "button";

const listDisplay = document.createElement('ul'); // Affichage dynamique de la liste

// 👇 Ajouter tous les éléments dans le DOM
form.appendChild(input);
form.appendChild(addButton);
form.appendChild(clearButton);
root.appendChild(form);
root.appendChild(listDisplay);

// ➕ Fonction pour ajouter un item
function addItem(event) {
    event.preventDefault(); // Empêche le refresh du formulaire
    const item = input.value.trim();
    if (item !== '') {
        shoppingList.push(item);
        updateList();
        input.value = ''; // Réinitialise le champ
    }
}

// ♻️ Fonction pour réafficher la liste à jour
function updateList() {
    listDisplay.innerHTML = ''; // Vide l'affichage
    shoppingList.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `🛍️ ${item}`;
        listDisplay.appendChild(li);
    });
}

// 🧹 Fonction pour tout effacer
function clearAll() {
    shoppingList = [];
    updateList();
}

// 🎯 Événements
form.addEventListener('submit', addItem);
clearButton.addEventListener('click', clearAll);