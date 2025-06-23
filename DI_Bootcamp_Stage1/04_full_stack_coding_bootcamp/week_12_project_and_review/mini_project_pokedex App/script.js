// === RÉFÉRENCES DES ÉLÉMENTS DU DOM ===
const $input = document.querySelector(".seeker__input-item");
const $btn = document.querySelector(".seeker__serch");
const $img = document.querySelector(".img-container__image");
const $nameDetaills = document.querySelector(".name__paragraph");
const $descDetaills = document.querySelector(".desc__paragraph");
const $typeDetaills = document.querySelector(".type__paragraph");
const $dimensionsDetails = document.querySelector(".dimensions__paragraph");
const $state = document.querySelector(".state");
const $errors = document.querySelector(".errorMJ");

// === FONCTIONS D’APPEL À L’API ===
async function getData(pokemonName) {
    try {
        let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!result.ok) throw new Error("Pokemon not found");
        let json = await result.json();
        return json;
    } catch (error) {
        $errors.textContent = `Error: ${error.message || "An error occurred"}`;
    }
}

async function getDataSpecies(pokemonName) {
    try {
        let result = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);
        if (!result.ok) throw new Error("Pokemon not found");
        let json = await result.json();
        return json;
    } catch (error) {
        $errors.textContent = `Error: ${error.message || "An error occurred"}`;
    }
}

async function getEvoluted(url) {
    try {
        let result = await fetch(url);
        if (!result.ok) throw new Error("An error occurred");
        let json = await result.json();
        console.log("Connection successful");
        return json;
    } catch (error) {
        $errors.textContent = `Error: ${error.message || "An error occurred"}`;
    }
}

// === TRAITEMENT DES ÉVOLUTIONS ===
function listEvoluted(nodo) {
    const lista = [nodo.species.name];
    if (nodo.evolves_to.length > 0) {
        const next = nodo.evolves_to[0];
        const nextPokemon = listEvoluted(next);
        lista.push(...nextPokemon);
    }
    return lista;
}

async function viweEvolutions(listEv) {
    const container = document.querySelector(".detaills__figure");
    container.innerHTML = ``;
    for (let item of listEv) {
        const $figure = document.createElement("img");
        $figure.classList.add("pokemon-evolution");
        let data = await getData(item);
        let imageUrl = data.sprites.other.dream_world.front_default
            || data.sprites.other["official-artwork"].front_default
            || data.sprites.front_default
            || "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
        $figure.src = imageUrl;
        container.appendChild($figure);
    }
}

// === AFFICHAGE DES DONNÉES ===
function traverseTypes(arrayType) {
    const $container = document.querySelector(".type__paragraph");
    $container.innerHTML = ``;
    if (arrayType.length === 0) throw new Error("Array is empty");
    for (let item of arrayType) {
        let elem = document.createElement("p");
        elem.textContent = item.type.name;
        $container.appendChild(elem);
    }
}

function conversorHeight(height, weight) {
    let heightInCm = height * 10;
    let weightInKg = weight / 10;
    document.querySelector(".paragraph__height").textContent = `Height: ${heightInCm} cm`;
    document.querySelector(".paragraph__weight").textContent = `Weight: ${weightInKg} kg`;
}

function viwePokemonImg(data) {
    let imageUrl = data.sprites.other.dream_world.front_default
        || data.sprites.other["official-artwork"].front_default
        || data.sprites.front_default
        || "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
    $img.src = imageUrl;
}

function viwePokemonName(name) {
    $nameDetaills.textContent = name;
}

function viwePokemonDesc(description) {
    $descDetaills.textContent = description;
}

function displayPokemonInfo(data, dataSpecies, dataEvolution) {
    traverseTypes(data.types);
    conversorHeight(data.height, data.weight);
    viweEvolutions(listEvoluted(dataEvolution.chain));
    viwePokemonImg(data);
    viwePokemonName(`${data.species.name}(#${data.id})`);
    viwePokemonDesc(dataSpecies.flavor_text_entries[0].flavor_text);
}

// === COULEURS DYNAMIQUES SELON TYPE ===
const typeColors = { fire: "#F08030", water: "#6890F0", grass: "#78C850", electric: "#F8D030", psychic: "#F85888", ice: "#98D8D8", dragon: "#7038F8", dark: "#705848", fairy: "#EE99AC", normal: "#A8A878", fighting: "#C03028", flying: "#A890F0", poison: "#A040A0", ground: "#E0C068", rock: "#B8A038", bug: "#A8B820", ghost: "#705898", steel: "#B8B8D0" };
const typeColorsMain = { fire: "#8B2500", water: "#0B3D91", grass: "#1B5E20", electric: "#B8860B", psychic: "#8B008B", ice: "#4682B4", dark: "#1C1C1C", fairy: "#8B3A62", normal: "#4D4D4D", fighting: "#800000", flying: "#2F4F4F", poison: "#4B0082", ground: "#8B4513", rock: "#5C4033", bug: "#556B2F", ghost: "#2E0854", steel: "#3C3C3C" };

function setHeaderColorByType(type) {
    document.querySelector(".header").style.backgroundColor = typeColors[type] || "#000";
}
function setMainColorByType(type) {
    document.querySelector("body").style.backgroundColor = typeColorsMain[type] || "#000";
}

// === ERREURS & MESSAGES ===
function showErrorContainer() {
    document.querySelector(".container__error").style.display = "block";
}
function hideErrorContainer() {
    document.querySelector(".container__error").style.display = "none";
}
function recet() {
    $errors.textContent = "";
    $state.textContent = "";
}

// === ÉVÉNEMENT PRINCIPAL ===
document.addEventListener("submit", async e => {
    e.preventDefault();
    showErrorContainer();
    recet();

    let valor = $input.value.trim();
    if (valor === "") {
        throw new Error("Enter the Pokémon name or ID");
    }

    $state.textContent = "Loading...";
    try {
        let data = await getData(valor);
        let dataSpecies = await getDataSpecies(valor);
        let dataEvolution = await getEvoluted(dataSpecies.evolution_chain.url);
        setHeaderColorByType(data.types[0].type.name);
        setMainColorByType(data.types[0].type.name);

        displayPokemonInfo(data, dataSpecies, dataEvolution);
        recet();
        hideErrorContainer();
    } catch (error) {
        showErrorContainer();
        $errors.textContent = `Error: ${error.message || "Pokémon not found"}`;
        $state.textContent = "";
    }
});
