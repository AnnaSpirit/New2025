// script.js — AnnaSpirit
// ✨ Code de base pour chaque exercice. Complète et ajoute tes fonctions.

// Exercice 1: Giphy API #2
const fetchGifBtn = document.getElementById('fetch-gif-btn');
const gifContainer = document.getElementById('gif-container');

fetchGifBtn.addEventListener('click', async () => {
    try {
        // 🔑 Remplace YOUR_API_KEY par ta clé
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=lmduClpWyQzGEPXKUyTuJ014oxg50C1b`);
        if (!res.ok) throw new Error('Erreur réseau lors de la requête Giphy');
        const { data } = await res.json();
        const url = data.images?.downsized_medium.url;
        if (!url) throw new Error('URL du GIF introuvable');
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Random GIF';
        gifContainer.innerHTML = '';
        gifContainer.appendChild(img);
    } catch (err) {
        console.error(err);
        alert(`⚠️ Oops, something went wrong: ${err.message}`);
    }
});

async function getData() {
    try {
        const dataPromises = urls.map(async url => {
            const res = await fetch(url);
            if (!res.ok) throw new Error(res.status);
            return await res.json();
        });
        const [users, posts, albums] = await Promise.all(dataPromises);
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch {
        console.log('ooooooops');
    }
}
getData();

