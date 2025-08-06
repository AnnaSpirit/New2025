// data/dataService.js
const axios = require('axios');

// 🔄 Fonction pour récupérer les posts depuis JSONPlaceholder
async function fetchPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error("❌ Error fetching posts:", error.message);
        throw error;
    }
}

module.exports = { fetchPosts };
