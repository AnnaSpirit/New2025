// IIFE qui prend 4 arguments : number of children, partner’s name, geographic location, job title
(function (numChildren, partnerName, geoLocation, jobTitle) {
    // On compose la phrase magique
    const message = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;

    // On crée un élément <p>, on lui met le texte, puis on l'ajoute au <body>
    const p = document.createElement('p');
    p.textContent = message;
    document.body.appendChild(p);

    // 👇 Ici tu définis tes propres arguments : modifie à ta sauce !
})(3, 'Alex', 'Paris', 'Full Stack Developer');


// Explications	`

// C'est une Immediately Invoked Function Expression (IIFE) : elle se définit entre parenthèses puis s'exécute toute seule avec les arguments que tu fournis.

// On construit ta prédiction dans la variable message, en utilisant un template literal pour interpoler tes 4 valeurs.

//     Ensuite, on crée un paragraphe < p > qu’on injecte direct dans le DOM pour que ton avenir s’affiche sous tes yeux.