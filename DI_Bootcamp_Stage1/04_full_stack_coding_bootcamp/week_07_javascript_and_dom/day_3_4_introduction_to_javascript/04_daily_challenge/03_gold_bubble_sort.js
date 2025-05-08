const numbers = [5,0,9,1,7,4,2,6,3,8];

//1.Using the .toString() method convert the array to a string.
//2.Using the .join()method convert the array to a string. Try passing different values into the join. Eg .join(“+”), .join(” “), .join(“”)
//3. Bonus : To do this Bonus look up how to work with nested for loops - Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods). The output should be: [9,8,7,6,5,4,3,2,1,0] Hint: The algorithm is called “Bubble Sort”
   //..Use a temporary variable to swap values in the array.
    //..Use 2 “nested” for loops (Nested means one inside the other).
//..Add comments and console.log the result for each step, this will help you understand.     Requirement: Don’t copy paste solutions from Google
    
//**Convert Array into String with toString()*/

// Convertir l'array en une chaîne de caractères
let arrayToString = numbers.toString();

console.log(arrayToString);  // Affiche "5,0,9,1,7,4,2,6,3,8"

//**Convert Array into String with join() */
// Utilisation de .join() avec différents séparateurs

let joinedWithPlus = numbers.join("+");  // Séparateur "+"
console.log(joinedWithPlus);  // Affiche "5+0+9+1+7+4+2+6+3+8"

let joinedWithSpace = numbers.join(" ");  // Séparateur " "
console.log(joinedWithSpace);  // Affiche "5 0 9 1 7 4 2 6 3 8"

let joinedWithoutSeparator = numbers.join("");  // Pas de séparateur
console.log(joinedWithoutSeparator);  // Affiche "5091742638"

//**Bonus Sort the Array with Bubble */

// Bubble Sort - Trier array en ordre décroissant
for (let i = 0; i < numbers.length; i++) {  // Boucle externe
    for (let j = 0; j < numbers.length - 1 - i; j++) {  // Boucle interne
        // Comparer les éléments voisins
        if (numbers[j] < numbers[j + 1]) {  // Si l'élément à gauche est plus petit
            // Échanger les éléments avec une variable temporaire
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
    console.log(`Étape ${i + 1}: `, numbers);  // Afficher le tableau à chaque étape
}

// Afficher le tableau trié final
console.log("Tableau trié (ordre décroissant) : ", numbers);


// Output: Étape 1: [9, 5, 0, 7, 4, 2, 6, 3, 1, 8]
// Étape 2: [9, 8, 5, 0, 7, 4, 2, 6, 3, 1]
// Étape 3: [9, 8, 7, 5, 0, 4, 2, 6, 3, 1]
// Étape 4: [9, 8, 7, 6, 5, 4, 2, 0, 3, 1]
// Étape 5: [9, 8, 7, 6, 5, 4, 3, 2, 0, 1]
// Étape 6: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// Tableau trié (ordre décroissant) : [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
