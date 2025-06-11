// Exercice 1 : Comparison
// ---------------------------------
// Crée une fonction compareToTen(num) qui renvoie une Promise.
// - resolve si num <= 10
// - reject si num > 10
function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`🎉 ${num} is less than or equal to 10`);
        } else {
            reject(`⚠️ ${num} is greater than 10`);
        }
    });
}

// Tests Exercice 1
compareToTen(15)
    .then(result => console.log('Exo1 (15):', result))
    .catch(error => console.log('Exo1 (15):', error));

compareToTen(8)
    .then(result => console.log('Exo1 (8):', result))
    .catch(error => console.log('Exo1 (8):', error));


// Exercice 2 : Promises auto-résolue
// ---------------------------------
// Crée une Promise qui se résout après 4 secondes avec la valeur "success".
const delayedSuccess = new Promise((resolve) => {
    setTimeout(() => resolve('success'), 4000);
});

// Test Exercice 2
delayedSuccess.then(result => console.log('Exo2:', result));


// Exercice 3 : Resolve & Reject
// ---------------------------------
// Utiliser Promise.resolve et Promise.reject
const promiseResolved = Promise.resolve(3);
const promiseRejected = Promise.reject('Boo!');

// Tests Exercice 3
promiseResolved
    .then(value => console.log('Exo3 (resolve):', value))
    .catch(err => console.log('Exo3 (resolve):', err));

promiseRejected
    .then(value => console.log('Exo3 (reject):', value))
    .catch(err => console.log('Exo3 (reject):', err));
