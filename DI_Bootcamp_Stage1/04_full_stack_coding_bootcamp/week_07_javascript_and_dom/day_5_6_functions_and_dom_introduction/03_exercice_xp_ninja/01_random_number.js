// Get a random number between 1 and 100.

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Console.log all even numbers from 0 to the random number.

function logEvenNumbers() {
    const randomNumber = getRandomNumber();
    console.log("Random number: ${randomNumber}");

    console.log("Even numbers from 0 to ${randomNumber}:");
    for (let i = 0; i <= randomNumber; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// On déclenche l’affichage
logEvenNumbers();
