//1. Write a JavaScript program that recreates the pattern below.
//2.Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
//3. Do this Daily Challenge by yourself, without looking at the answers on the internet.

//1.

let rows = 6;  // Le nombre de lignes

// Utiliser une seule boucle
for (let i = 1; i <= rows; i++) {  // On commence avec 1 étoile et on augmente à chaque ligne
    let stars = "";  // Réinitialise la chaîne pour chaque ligne

    // Ajouter les étoiles avec deux espaces entre chaque étoile
    for (let k = 1; k <= i; k++) {  // Ajouter une étoile par itération
        stars += "*";  // Ajouter une étoile
        if (k < i) {   // Ajouter deux espaces entre chaque étoile sauf après la dernière
            stars += "  ";  // Ajouter deux espaces
        }
    }

    console.log(stars);  // Afficher la ligne
}




//2.

let rows = 6;  // Le nombre de lignes

// Utiliser deux boucles imbriquées
for (let i = 1; i <= rows; i++) {  // Boucle pour chaque ligne, de 1 étoile à 6 étoiles
    let stars = "";  // Réinitialise la chaîne pour chaque ligne
    
    // Boucle interne pour ajouter les étoiles et les espaces
    for (let j = 1; j <= i; j++) {  // La boucle interne pour chaque étoile
        stars += "*";  // Ajouter une étoile
        if (j < i) {   // Ajouter deux espaces entre chaque étoile sauf après la dernière
            stars += "  ";  // Ajouter deux espaces
        }
    }
    
    console.log(stars);  // Afficher la ligne
}


