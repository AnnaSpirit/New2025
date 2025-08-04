// fetch-data.js
// 📡 Module that fetches and displays post titles from an API
// 📡 Module qui récupère et affiche les titres de publications depuis une API

const axios = require('axios'); // Import axios for making HTTP requests
// Importer axios pour effectuer des requêtes HTTP

// Define the function to fetch and display post titles
// Définir la fonction pour récupérer et afficher les titres
async function fetchPostTitles() {
    try {
        // Send GET request to the JSONPlaceholder API
        // Envoyer une requête GET à l'API JSONPlaceholder
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        /*API d'une fausse base de donnees pour test, 100 faux posts
        chaque post contient un userId, un title (ce que tu vois affiché), un body (du texte de paragraphe). */

        // Loop through the data and display each title
        // Parcourir les données et afficher chaque titre
        response.data.forEach(post => {
            console.log(`📝 ${post.title}`);
        });
    } catch (error) {
        // Handle any errors from the API request
        // Gérer les erreurs liées à la requête API
        console.error('❌ Error fetching posts:', error.message);
    }
}

// Export the function to use it in another file
// Exporter la fonction pour l’utiliser dans un autre fichier
module.exports = fetchPostTitles;
