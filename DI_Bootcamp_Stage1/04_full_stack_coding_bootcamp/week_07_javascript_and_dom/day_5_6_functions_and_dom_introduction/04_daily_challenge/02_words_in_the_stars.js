// 1. Prompt the user for several words(separated by commas).
// 2. Put the words into an array.
//     Console.log the words one per line, in a rectangular frame as seen below.
// 3. Check out the Hints and Requirements below.


// Demande à l'utilisateur d'entrer des mots séparés par des virgules
let userInput = prompt("Wrote several words (separated by commas) :");

// Met chaque mot dans un tableau et supprime les espaces superflus
{
    const words = userInput
        .split(",")
        .map(word => word.trim()) //enlève les espaces autour de chaque mot
        .filter(word => word.length > 0); // enlève les entrées vides si l'utilisateur a mis ", ,"

    // Détermine la longueur du mot le plus long
    const maxLength = words.reduce((max, word) => Math.max(max, word.length), 0);

    // Identifie tous les mots qui ont cette longueur maximale
    const longestWords = words.filter(word => word.length === maxLength);

    // Crée la bordure du haut et du bas (longueur du mot + 8 pour les espaces et les étoiles)
    const border = "*".repeat(maxLength + 8);

    // Affiche la bordure supérieure
    console.log(border);

    // Pour chaque mot, calcule le remplissage nécessaire et l'affiche dans le cadre
    words.forEach(word => {
        const padding = " ".repeat(maxLength - word.length);
        console.log(`* ${word}${padding} *`);
    });

    // Affiche la bordure inférieure
    console.log(border);


    // Test: Je, suis, la, plus, geniale, des, codeurs, sur, Javascript, !

    // ****************** 
    // * Je * 
    // * suis * 
    // * la * 
    // * plus * 
    // * geniale * 
    // * des * 
    // * codeurs * 
    // * sur * 
    // * Javascript *
    // * !              * 
    // ******************

    // 🏆 Affiche le(s) mot(s) le(s) plus long(s)
    console.log(`Longest word (${maxLength} letters) : ${longestWords.join(", ")}`);
}
//Longest word (10 letters) : Javascript