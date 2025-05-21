// script.js

(function (userName) {
    // Créé un <div> pour contenir la photo + le nom
    const userDiv = document.createElement('div');
    userDiv.id = 'user-info';

    // Photo de profil (chameleon pour l’exemple)
    const img = document.createElement('img');
    img.src = './profile.jpeg';
    img.alt = `${userName}'s profile picture`;
    img.classList.add('profile-pic');

    // Le nom de l’utilisateur
    const span = document.createElement('span');
    span.textContent = userName;

    // On assemble la structure
    userDiv.appendChild(img);
    userDiv.appendChild(span);

    // On injecte tout ça dans la navbar
    const navbar = document.getElementById('navbar');
    navbar.appendChild(userDiv);

})('John'); // ← Ici, tu mets le nom du user qui vient de se connecter


// Comment ça marche:

// On a une IIFE(Immediately Invoked Function Expression) qui s’appelle toute seule avec l’argument 'John'.

// Elle crée dynamiquement un < div > dans la navbar, y glisse une image + le nom, et BAM tu vois John apparaitre à droite!
