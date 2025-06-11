// script.js
// Exercice 1 : fetch des GIFs “hilarious” via Giphy API
// AnnaSpirit

const apiUrl = 'https://api.giphy.com/v1/gifs/search'
    + '?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

async function fetchHilariousGifs() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Network response was not OK: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchHilariousGifs();
