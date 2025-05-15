// Display the value of the selected option.

// Add an additional option to the select tag:
// <option value="classic">Classic</option>

// The newly added option should be selected by default.

// Le code s'exécute dès que tout est chargé dans le body
window.onload = function () {
    const select = document.getElementById('genres');
    const output = document.getElementById('output');

    // Afficher la valeur actuelle
    output.textContent = 'Selected: ' + select.value;

    // Créer la nouvelle option
    const newOption = document.createElement('option');
    newOption.value = 'classic';
    newOption.text = 'Classic';
    newOption.selected = true;

    // L’ajouter à la liste
    select.appendChild(newOption);

    // Mettre à jour l’affichage
    output.textContent = 'Selected: ' + select.value;
};