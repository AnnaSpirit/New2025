// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form(ie.submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the < ul class="usersAnswer" ></ >, below the form.

// Attendre que le DOM soit prêt
document.addEventListener('DOMContentLoaded', () => {
    // 1. Récupérer le formulaire et l'afficher
    const form = document.querySelector('form');
    console.log('Form element:', form);

    // 2. Récupérer les inputs par leur id et les afficher
    const firstNameById = document.getElementById('fname');
    const lastNameById = document.getElementById('lname');
    console.log('First name by id:', firstNameById);
    console.log('Last name  by id:', lastNameById);

    // 3. Récupérer les mêmes inputs par leur attribut name et les afficher
    const firstNameByName = document.getElementsByName('firstname')[0];
    const lastNameByName = document.getElementsByName('lastname')[0];
    console.log('First name by name:', firstNameByName);
    console.log('Last name  by name:', lastNameByName);

    // 4. Quand l'utilisateur soumet le formulaire...
    form.addEventListener('submit', (event) => {
        // Empêche la page de recharger (sinon ton afficher se volatilise)  
        event.preventDefault();

        // Récupérer et nettoyer les valeurs
        const values = [
            { label: 'Prénom', value: firstNameById.value.trim() },
            { label: 'Nom', value: lastNameById.value.trim() }
        ];

        // Sélectionner la liste pour y planter nos li
        const ul = document.querySelector('.usersAnswer');
        ul.innerHTML = ''; // on vide pour ne pas accumuler à l’infini

        // Boucler sur chaque champ pour créer un li
        values.forEach(field => {
            if (field.value === '') {
                console.warn(`${field.label} est vide, on skip…`);
                return; // ne rien faire s’il n’y a pas de texte
            }
            const li = document.createElement('li');
            li.textContent = `${field.label} : ${field.value}`;
            ul.appendChild(li);
        });

        // Message de coaching
        console.log('✅ Tes réponses ont été ajoutées, bravo ! Keep coding 🔥');
    });
});
