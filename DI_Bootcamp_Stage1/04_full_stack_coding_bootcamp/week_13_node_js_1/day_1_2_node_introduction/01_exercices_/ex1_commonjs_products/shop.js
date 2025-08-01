// Import the array of products 👇
// Importer le tableau de produits depuis products.js

const products = require('./products');

// Function to find a product by name 👇
// Fonction pour rechercher un produit par son nom

function findProductByName(productName) {
    const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

    if (product) {
        console.log("🛒 Product found:");
        console.log(product);
    } else {
        console.log(`❌ Product "${productName}" not found.`);
    }
}

// Test the function with different product names 👇
// Tester la fonction avec différents noms de produits

findProductByName("Laptop");
findProductByName("Jeans");
findProductByName("Toaster"); // n'existe pas
