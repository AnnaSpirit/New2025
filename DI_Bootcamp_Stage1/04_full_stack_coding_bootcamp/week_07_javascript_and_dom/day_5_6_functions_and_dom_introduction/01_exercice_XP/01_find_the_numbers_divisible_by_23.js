// Create a function call displayNumbersDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Bonus: Add a parameter divisor to the function.

// Affiche dans la console tous les nombres de 0 à 500 divisibles par 'divisor'
// et renvoie la somme. Si pas de paramètre, divisor vaut 23.


// Affiche dans la console tous les nombres de 0 à 500 divisibles par 23
// puis affiche la somme finale
function displayNumbersDivisible() {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum of numbers divisible by 23: " + sum);
    return sum;
}

// 👉 Appel pour tester la fonction sans paramètre
displayNumbersDivisible();


// Affiche dans la console tous les nombres de 0 à 500 divisibles par 'divisor'
// puis affiche la somme finale
function displayNumbersDivisibleBy(divisor) {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log(`Sum of numbers divisible by ${divisor}: ${sum}`);
    return sum;
}

// 👉 Appel bonus, par exemple pour 7
displayNumbersDivisibleBy(3); //Sum of numbers divisible by 3: 41583
displayNumbersDivisibleBy(45); // Sum of numbers divisible by 45: 2970