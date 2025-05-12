const solarSystem = [
    { name: "Mercury", moons: 0, color: "#a9a9a9" },
    { name: "Venus", moons: 0, color: "#ffcc00" },
    { name: "Earth", moons: 1, color: "#0077be" },
    { name: "Mars", moons: 2, color: "#b22222" },
    { name: "Jupiter", moons: 79, color: "#f5deb3" },
    { name: "Saturn", moons: 82, color: "#d2b48c" },
    { name: "Uranus", moons: 27, color: "#66cdaa" },
    { name: "Neptune", moons: 14, color: "#4169e1" },
];

//get the section
const section = document.querySelector(".listPlanets");

//**FOR EACH */
solarSystem.forEach((planet) => {
    //create a div for each planet
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.innerHTML = `<h2>${planet.name}</h2><p>Moons: ${planet.moons}</p>`;

    //add the div to the section
    section.appendChild(planetDiv);

    //add event listener to the div
    planetDiv.addEventListener("click", () => {
        alert(`You clicked on ${planet.name}`);
    });
}*/

///FOR LOOP for planets

for(let i = 0; i < solarSystem.length; i++) {
    //create a div for each planet
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = solarSystem[i].color;
    planetDiv.innerHTML = `<h2>${solarSystem[i].name}</h2><p>Moons: ${solarSystem[i].moons}</p>`;

    //add the div to the section
    section.appendChild(planetDiv);

    //add event listener to the div
    planetDiv.addEventListener("click", () => {
        alert(`You clicked on ${solarSystem[i].name}`);
    });
}

//FOR LOOPS for moons
for (let j = 0; j < solarSystem.moons; j++) {
    //create a div for each moon
    const moonDiv = document.createElement("div");
    moonDiv.classList.add("moon");
    moonDiv.style.backgroundColor = "#fff";
    moonDiv.innerHTML = `<h2>Moon ${j + 1}</h2>`;

    //add the div to the section
    section.appendChild(moonDiv);

    //add event listener to the div
    moonDiv.addEventListener("click", () => {
        alert(`You clicked on Moon ${j + 1}`);
    });
}

// random color:

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// ajouter condition pas de noir ni de couleurs identiques


