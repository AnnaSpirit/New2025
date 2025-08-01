// Import our custom file manager module 👇
// Importer notre module personnalisé de gestion de fichiers
const fs = require('fs');

const { readFile, writeFile } = require('./file_manager');

// Import the moment library for date formatting 👇
// Importer notre bibliothèque moment pour le formatage de date
const moment = require('moment');
const newMessage = "Writing instead of Bye World -->> See you soon World!!)";

// Read the content of "hello_world.txt" 👇
// Lire le contenu du fichier "hello_world.txt"

const inputContent = readFile('hello_world.txt');
console.log("📥 Content read from hello_world.txt:", inputContent);

// Prepare timestamped content 👇
// Préparer le contenu avec horodatage

const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
const entry = `[${timestamp}] ${newMessage}\n\n`;

// Write to "bye_world.txt" 👇
// Écrire dans "bye_world.txt"

// const newContent = "Writing to the file ✍️ (and overwriting old content)";
// writeFile('bye_world.txt', newContent);


// Append to bye_world.txt 👇
// Ajouter dans bye_world.txt sans écraser

fs.appendFileSync('bye_world.txt', entry, 'utf8');

console.log("✅ Appended entry with timestamp to bye_world.txt");