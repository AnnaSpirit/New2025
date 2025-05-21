// Sélection de l’élément input
const letterInput = document.getElementById('letterInput');

// À chaque modification de la valeur...
letterInput.addEventListener('input', function () {
    // …on supprime tout ce qui n’est PAS une lettre (regex : ^ = début, [] = classes, a–zA–Z)
    // g = global, pour remplacer toutes les occurrences
    this.value = this.value.replace(/[^a-zA-Z]/g, '');
});


//**Option 2: */
// bloquer la frappe en amont(avant que le caractère n’apparaisse)

// letterInput.addEventListener('keypress', function (e) {
//     const char = String.fromCharCode(e.charCode);
//     if (!/[a-zA-Z]/.test(char)) {
//         // Empêche l’entrée si ce n’est pas une lettre
//         e.preventDefault();
//     }
// });