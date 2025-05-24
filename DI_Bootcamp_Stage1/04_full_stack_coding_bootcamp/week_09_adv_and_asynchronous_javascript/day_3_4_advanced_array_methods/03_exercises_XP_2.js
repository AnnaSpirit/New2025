//===============================
// Exercise 1: Sum elements
// ===============================
function exercise1() {
    const numbers = [1, 2, 3, 4, 5]; // Example array
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum); // Output: 15
}
// ===============================
// Exercise 2: Remove Duplicates
// ===============================
function exercise2() {
    // TODO: Écrire un programme JS pour supprimer les doublons dans un

    const array = [1, 2, 2, 3, 4, 4, 5]; // Example array with duplicates
    const uniqueArray = [...new Set(array)];
    console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
}

// =========================================
// Exercise 3: Remove certain values
// =========================================
function exercise3() {
    // TODO: Écrire une fonction JS pour enlever null, 0, "", false, undefined et NaN
    // Sample : [NaN, 0, 15, false, -22, '', undefined, 47, null]
    // Expected : [15, -22, 47]

} function exercise3() {
    const array = [NaN, 0, 15, false, -22, '', undefined, 47, null]; // Sample array
    const filteredArray = array.filter(value =>
        value !== null && value !== 0 && value !== false && value !== undefined && value !== '' && !Number.isNaN(value)
    );
    console.log(filteredArray); // Expected: [15, -22, 47]
}

// ===============================
// Exercise 4: Repeat please !
// ===============================
function exercise4() {
    // TODO: Écrire une fonction JS repeat(str, n = 1) pour concaténer une chaîne n fois
    // Ex : repeat('Ha!', 3) -> 'Ha!Ha!Ha!'
    function repeat(str, n = 1) {
        return str.repeat(n);
    }

    console.log(repeat('Ha!', 3)); // Output: 'Ha!Ha!Ha!'
}

// ===============================
// Exercise 5: Turtle & Rabbit
// ===============================
function exercise5() {
    // TODO: Aligner la tortue et le lapin sur la ligne de départ
    // const startLine = '     ||<- Start line';
    // let turtle = '🐢'; let rabbit = '🐇';
    // Observer l'effet de turtle.trim().padEnd(9, '=');
    const startLine = '     ||<- Start line';
    // Nos coureurs
    let turtle = '🐢';
    let rabbit = '🐇';

    // Calcul de la position à laquelle on veut que l'animal apparaisse
    // startLine.indexOf('<') renvoie l'index du caractère '<', on ajoute 1 pour être pile avant
    const position = startLine.indexOf('<') + 1;

    // 1) On affiche d'abord la ligne vide (pour voir la différence)
    console.log(startLine);

    // 2) On aligne la tortue et le lapin au même endroit
    console.log(
        turtle
            .trim()              // on enlève d'éventuels espaces autour (ici aucun, mais bonne habitude)
            .padStart(position)  // on complète avec des espaces en début pour atteindre 'position' caractères
        + startLine           // puis on colle la ligne de départ
    );
    console.log(
        rabbit
            .trim()
            .padStart(position)
        + startLine
    );

    // 3) Bonus : observe l'effet de padEnd
    //    ici, on prend la tortue et on la complète à droite avec des '=' pour atteindre 9 caractères
    console.log(turtle.trim().padEnd(9, '='));
}

// ===============================
// Execute all exercises
// ===============================
function runAllExercises() {
    console.log('--- Exercise 1 ---'); exercise1();
    console.log('--- Exercise 2 ---'); exercise2();
    console.log('--- Exercise 3 ---'); exercise3();
    console.log('--- Exercise 4 ---'); exercise4();
    console.log('--- Exercise 5 ---'); exercise5();
}

// Lancer toutes les fonctions
runAllExercises();
