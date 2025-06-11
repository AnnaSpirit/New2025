// script.js
// Exercice 2 : fetch de 10 GIFs “sun” avec offset=2
// AnnaSpirit

const sunApiUrl = 'https://api.giphy.com/v1/gifs/search'
    + '?q=sun'
    + '&limit=10'
    + '&offset=2'
    + '&rating=g'
    + '&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

async function fetchSunGifs() {
    try {
        const res = await fetch(sunApiUrl);
        if (!res.ok) {
            throw new Error(`Erreur réseau : ${res.status}`);
        }
        const json = await res.json();
        console.log('Sun GIFs data:', json);
    } catch (err) {
        console.error('Fetch error:', err);
    }
}

fetchSunGifs();
