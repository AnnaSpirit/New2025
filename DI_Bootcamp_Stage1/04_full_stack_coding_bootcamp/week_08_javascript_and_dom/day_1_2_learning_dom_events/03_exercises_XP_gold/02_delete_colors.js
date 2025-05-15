

// Fonction qui supprime la couleur sélectionnée
function removecolor() {
    const colorSelect = document.getElementById('colorSelect');
    const message = document.getElementById('removeMessage');
    const selectedIndex = colorSelect.selectedIndex;

    // Vérifie qu'il y a au moins une option
    if (selectedIndex !== -1) {
        const removedColor = colorSelect.options[selectedIndex].text;
        colorSelect.remove(selectedIndex);

        // Message personnalisé
        message.textContent = `🌈 Goodbye beautiful color : ${removedColor} !`;
    } else {
        message.textContent = "🤷‍♀️ No more color to delete !";
    }
}

// Ajouter l'écouteur d'événement après que le DOM est prêt
window.onload = function () {
    const select = document.getElementById('genres');
    const output = document.getElementById('output');
    output.textContent = 'Selected: ' + select.value;

    const newOption = document.createElement('option');
    newOption.value = 'classic';
    newOption.text = 'Classic';
    newOption.selected = true;
    select.appendChild(newOption);
    output.textContent = 'Selected: ' + select.value;

    // 🎯 Ajout du bouton d'événement
    const removeButton = document.querySelector('input[type="button"]');
    removeButton.addEventListener('click', removecolor);
};
