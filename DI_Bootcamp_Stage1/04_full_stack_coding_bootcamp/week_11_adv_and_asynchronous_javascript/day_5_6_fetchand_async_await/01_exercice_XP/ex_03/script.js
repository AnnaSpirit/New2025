// script.js
// Exercice 3 : récupérer un starship SWAPI avec async/await
// AnnaSpirit

const starshipUrl = 'https://www.swapi.tech/api/starships/9/';

async function fetchStarship() {
    try {
        const response = await fetch(starshipUrl);
        if (!response.ok) {
            throw new Error(`HTTP error ! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Starship data:', data.result);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchStarship();
