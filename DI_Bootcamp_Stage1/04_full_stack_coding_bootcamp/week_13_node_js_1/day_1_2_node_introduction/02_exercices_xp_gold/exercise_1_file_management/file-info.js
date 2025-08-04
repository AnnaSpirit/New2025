// file-info.js
// 📁 Utility file to read information about example.txt
// 📁 Fichier utilitaire pour lire les informations sur example.txt

const fs = require('fs'); // Load the 'fs' module to access the file system
// Charger le module 'fs' pour accéder au système de fichiers

const path = require('path'); // Load the 'path' module to work with file paths
// Charger le module 'path' pour gérer les chemins de fichiers

// Build the full path to the 'example.txt' file using path.join
// Construire le chemin complet vers le fichier 'example.txt' avec path.join
const filePath = path.join(__dirname, 'data', 'example.txt');

// Define a function to display file information
// Définir une fonction pour afficher les informations du fichier
function displayFileInfo() {
    // Check if the file exists using fs.existsSync
    // Vérifie si le fichier existe avec fs.existsSync
    if (fs.existsSync(filePath)) {
        // Get file statistics like size and creation date
        // Récupérer les statistiques du fichier : taille, date de création, etc.
        const stats = fs.statSync(filePath);

        // Display file information in the terminal
        // Afficher les informations du fichier dans le terminal
        console.log('📁 File found!');
        console.log(`📏 Size: ${stats.size} bytes`);
        console.log(`📅 Created: ${stats.birthtime}`);
    } else {
        // Handle the case where the file does not exist
        // Gérer le cas où le fichier n'existe pas
        console.log('❌ File not found!');
    }
}

// Export the function to be used in other files
// Exporter la fonction pour qu'elle puisse être utilisée dans d'autres fichiers
module.exports = displayFileInfo;
