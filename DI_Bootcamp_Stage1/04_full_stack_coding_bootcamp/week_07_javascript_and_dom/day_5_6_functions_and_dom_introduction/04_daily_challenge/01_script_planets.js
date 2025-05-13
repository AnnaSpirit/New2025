// Create an array which value is the planets of the solar system.
// For each planet in the array, create a < div > using createElement.This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background - color).
// Finally append each div to the < section > in the HTML(presented below).
//     Bonus: Do the same process to create the moons.
//     Be careful, each planet has a certain amount of moons.How should you display them ?
//     Should you still use an array for the planets ? Or an array of objects ?

const planets = [
    { name: "Mercury", moons: 0, color: "#a9a9a9" },
    { name: "Venus", moons: 0, color: "#f5deb3" },
    { name: "Earth", moons: 1, color: "#2e8b57" },
    { name: "Mars", moons: 2, color: "#ff4500" },
    { name: "Jupiter", moons: 95, color: "#d2b48c" },
    { name: "Saturn", moons: 274, color: "#ffe4b5" },
    { name: "Uranus", moons: 28, color: "#afeeee" },
    { name: "Neptune", moons: 16, color: "#4169e1" }
];

// — Constantes de configuration
const MAX_MOONS_DISPLAY = 25;  // nombre max de lunes à afficher
const MOON_SPACING = 25;  // écart horizontal entre chaque lune
const MOON_MARGIN = 10;  // marge entre le bord de la planète et la première lune

// — Set pour mémoriser les couleurs déjà utilisées
const usedColors = new Set();

// — Générateur de couleur aléatoire
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// — Générateur de couleur unique et non noire
function getUniqueRandomColor() {
    let color;
    do {
        color = getRandomColor();
    } while (color === "#000000" || usedColors.has(color));
    usedColors.add(color);
    return color;
}

// — Référence à la section du DOM qui contiendra les planètes
const section = document.querySelector(".listPlanets");

// — Boucle de création des planètes, des lunes et du listener de clic
planets.forEach(p => {
    // 1) Création de la div planète
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = p.color;
    planetDiv.innerHTML = `<h2>${p.name}</h2>`;

    // 2) Événement clic pour changer la couleur de fond
    planetDiv.addEventListener("click", () => {
        const newColor = getUniqueRandomColor();
        planetDiv.style.backgroundColor = newColor;
        p.color = newColor;
    });

    // 3) On ajoute immédiatement au DOM pour mesurer sa largeur réelle
    section.appendChild(planetDiv);

    // 4) Calcul du nombre de lunes à afficher (limitée)
    const moonsToDisplay = Math.min(p.moons, MAX_MOONS_DISPLAY);

    // 5) Calcul de la position de départ (hors du cercle)
    let leftPos = planetDiv.offsetWidth + MOON_MARGIN;

    // 6) Création des lunes décalées sur la même ligne
    for (let j = 0; j < moonsToDisplay; j++) {
        const moon = document.createElement("div");
        moon.classList.add("moon");
        moon.style.left = `${leftPos}px`;            // position horizontale
        moon.style.backgroundColor = getRandomColor();
        planetDiv.appendChild(moon);
        leftPos += MOON_SPACING;
    }

    // 7) Si la planète a plus que MAX_MOONS_DISPLAY lunes, on affiche "+X"
    if (p.moons > MAX_MOONS_DISPLAY) {
        const more = document.createElement("span");
        more.classList.add("more");
        more.textContent = `+${p.moons - MAX_MOONS_DISPLAY}`;
        more.style.left = `${leftPos}px`;            // juste après la dernière lune
        planetDiv.appendChild(more);
    }
});