// ✨ Récupération des éléments du DOM
const btn = document.getElementById("btn");
const loadingDiv = document.getElementById("loading");
const infoDiv = document.getElementById("info");
const errorDiv = document.getElementById("error");

const nameEl = document.getElementById("name");
const heightEl = document.getElementById("height");
const genderEl = document.getElementById("gender");
const birthEl = document.getElementById("birth_year");
const homeworldEl = document.getElementById("homeworld");

// 🔁 Fonction principale
btn.addEventListener("click", async () => {
    const id = Math.floor(Math.random() * 83) + 1;

    showLoading();

    try {
        const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
        if (!res.ok) throw new Error("Fetch failed");

        const data = await res.json();
        const person = data.result.properties;

        const homeworldData = await fetch(person.homeworld);
        const homeworld = await homeworldData.json();

        displayCharacter(person, homeworld.result.properties.name);
    } catch (error) {
        showError();
    }
});

// 🎭 Fonctions d'affichage
function showLoading() {
    infoDiv.classList.add("hidden");
    errorDiv.classList.add("hidden");
    loadingDiv.classList.remove("hidden");
}

function displayCharacter(person, homeworldName) {
    nameEl.textContent = person.name;
    heightEl.textContent = person.height + " cm";
    genderEl.textContent = person.gender;
    birthEl.textContent = person.birth_year;
    homeworldEl.textContent = homeworldName;

    loadingDiv.classList.add("hidden");
    errorDiv.classList.add("hidden");
    infoDiv.classList.remove("hidden");
}

function showError() {
    loadingDiv.classList.add("hidden");
    infoDiv.classList.add("hidden");
    errorDiv.classList.remove("hidden");
}
