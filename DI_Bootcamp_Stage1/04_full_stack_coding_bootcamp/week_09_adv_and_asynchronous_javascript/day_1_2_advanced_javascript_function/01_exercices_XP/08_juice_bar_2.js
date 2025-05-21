// Fonction de mélange (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Choisit un index aléatoire entre 0 et i
        const j = Math.floor(Math.random() * (i + 1));
        // Échange array[i] et array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('juice-form');
    const messageDiv = document.getElementById('message');
    const checkboxes = Array.from(
        form.querySelectorAll('input[name="ingredients"]')
    );

    // Bloque au-delà de 6 cochés
    function updateCheckboxState() {
        const checkedCount = checkboxes.filter(cb => cb.checked).length;
        checkboxes
            .filter(cb => !cb.checked)
            .forEach(cb => { cb.disabled = checkedCount >= 6; });
    }
    checkboxes.forEach(cb => cb.addEventListener('change', updateCheckboxState));

    form.addEventListener('submit', event => {
        event.preventDefault();

        const size = form.size.value;
        let selected = checkboxes
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        if (selected.length < 2) {
            alert('Choose at least 2 ingredients, please !');
            return;
        }

        // Mélange l’ordre des ingrédients sélectionnés
        selected = shuffleArray(selected);

        // Construis la phrase finale
        const finalMessage = `Here’s your ${size} juice packed with ${selected.join(', ')}.`;

        // Affiche dans le DOM
        messageDiv.textContent = finalMessage;
    });
});
