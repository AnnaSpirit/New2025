/* 
1. Create a directory named file-operations.
2. Inside the file-operations directory, create a file named write-file.js.
3. In write-file.js, use the fs module to write a simple text content to a file named output.txt.
4. Create another file named read-file.js.
5. In read-file.js, use the fs module to read the content from the output.txt file and display it in the terminal.
6. Open a terminal in the file-operations directory.
7. Run node write-file.js to write content to the file.
8. Run node read-file.js to read and display the content from the file.
*/

// Import the built-in 'fs' module 👇
// Importer le module natif 'fs' pour les fichiers
//fs: To handle the file system operations
//fs: Pour gérer le système de fichiers

const fs = require('fs');

// Text content to write 👇
// Contenu texte à écrire dans le fichier

const content = "Hello Anna! 👋 This text was written using Node.js and the fs module.";
const content2 = "This is the second line of text added to the file.";

// Write the content to 'output.txt' 👇
// Écrire le contenu dans un fichier output.txt

fs.writeFile('output.txt', content, (err) => {
    if (err) {
        console.error("❌ Error writing file:", err);
    } else {
        console.log("✅ File written successfully!");
    }
});


//La fait de relancer le script, cela va ecraser le contenu du fichier output.txt donc si on veut ajouter du contenu sans écraser l'ancien, on peut utiliser fs.appendFile

// '\n' pour sauter une ligne

// Step 2: Append the second content

fs.appendFile('output.txt', '\n' + '\n' + content2 + '\n', (err) => {
    if (err) {
        console.error("❌ Error appending file:", err);
    } else {
        console.log("✅ Second content appended!");
    }
});