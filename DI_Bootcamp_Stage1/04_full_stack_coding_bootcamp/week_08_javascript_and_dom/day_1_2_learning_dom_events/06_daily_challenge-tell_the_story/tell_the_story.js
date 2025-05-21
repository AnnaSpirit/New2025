// Sélection des éléments du DOM
const form = document.getElementById('libform');
const nounInput = document.getElementById('noun');
const adjectiveInput = document.getElementById('adjective');
const personInput = document.getElementById('person');
const verbInput = document.getElementById('verb');
const placeInput = document.getElementById('place');
const storyDiv = document.getElementById('story');
const shuffleBtn = document.getElementById('shuffle-button');

// Tableau de templates d’histoires
const storyTemplates = [
    // chaque template utilise des placeholders qu’on remplacera
    "[person] went to the [place] to [verb] a very [adjective] [noun].",
    "One day, a [adjective] [noun] convinced [person] to [verb] at the [place].",
    "In the heart of the [place], [person] found a [noun] so [adjective] they had to [verb].",
    // — Nouvelles histoires —
    "At the [place], [person] discovered a [adjective] [noun] that could [verb] like never before.",
    "Never had a [noun] been so [adjective] that [person] would [verb] all the way to the [place]."
];

// Pour stocker les valeurs une fois soumises
let currentValues = null;

/**
 * Génère un texte d'histoire à partir d'un template aléatoire
 * @param {Object} vals - {noun, adjective, person, verb, place}
 * @returns {string}
 */
function generateStory(vals) {
    // Choix aléatoire d’un template
    const template = storyTemplates[
        Math.floor(Math.random() * storyTemplates.length)
    ];
    // Remplacement des placeholders
    return template
        .replace('[noun]', vals.noun)
        .replace('[adjective]', vals.adjective)
        .replace('[person]', vals.person)
        .replace('[verb]', vals.verb)
        .replace('[place]', vals.place);
}

/**
 * Affiche l’histoire dans le DOM
 * @param {string} text
 */
function displayStory(text) {
    storyDiv.textContent = text;
}

// 📋 Gestion de la soumission du formulaire
form.addEventListener('submit', function (event) {
    event.preventDefault(); // empêche le rechargement

    // Récupération et trimming des valeurs
    const noun = nounInput.value.trim();
    const adjective = adjectiveInput.value.trim();
    const person = personInput.value.trim();
    const verb = verbInput.value.trim();
    const place = placeInput.value.trim();

    // Vérification que rien n'est vide
    if (!noun || !adjective || !person || !verb || !place) {
        console.error("Tous les champs doivent être remplis !"); // vérifie la console
        alert("⚠️ Complète tous les champs avant de jouer !");
        return;
    }

    // Stockage des valeurs validées
    currentValues = { noun, adjective, person, verb, place };

    // Génération et affichage de l’histoire
    const storyText = generateStory(currentValues);
    displayStory(storyText);

    // Activation du bouton shuffle
    shuffleBtn.disabled = false;
});

/**
 * Recalcule une nouvelle histoire en gardant les mêmes valeurs
 */
shuffleBtn.addEventListener('click', function () {
    if (!currentValues) return;
    // Nouvelle histoire aléatoire
    const newStory = generateStory(currentValues);
    displayStory(newStory);
});
