// script.js — AnnaSpirit
// 😎 Exo 1 Giphy API #3 : search & delete functionality

const API_KEY = 'lmduClpWyQzGEPXKUyTuJ014oxg50C1b'; // 🔑 Replace with your API key
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const deleteBtn = document.getElementById('delete-btn');
const container = document.getElementById('gifs-container');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    const query = input.value.trim();
    if (!query) {
        alert('⚠️ Please enter something to search!');
        return;
    }
    try {
        // On efface les anciens résultats
        container.innerHTML = '';
        // On fetch avec la recherche
        const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=10`);
        if (!res.ok) {
            throw new Error(`HTTP error ${res.status}`);
        }
        const { data } = await res.json();
        if (data.length === 0) {
            container.innerHTML = `<p>No GIFs found for “${query}” 😢</p>`;
            return;
        }
        // On parcourt et on crée les <img>
        data.forEach(item => {
            const url = item.images?.downsized_medium?.url;
            if (url) {
                const img = document.createElement('img');
                img.src = url;
                img.alt = item.title || query;
                container.appendChild(img);
            }
        });
    } catch (err) {
        console.error(err);
        alert(`😵‍💫 Oops, something went wrong: ${err.message}`);
    }
});

deleteBtn.addEventListener('click', () => {
    // Supprime tous les GIFs d’un coup
    container.innerHTML = '';
    input.value = '';
});
