// fetch.js
// ✅ Fetch data from a public API using axios
// ✅ Récupérer des données depuis une API publique avec axios

const axios = require('axios');

// Fonction pour récupérer et afficher une blague Chuck Norris 🤠
async function fetchData() {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log('🤣 Random Joke:', response.data.value);
    } catch (error) {
        console.error('❌ Failed to fetch data from API:', error.message);
    }
}

// Export de la fonction pour qu’elle soit utilisée dans index.js
module.exports = fetchData;
