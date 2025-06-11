// Exercise 1: Promise.all()
// Utilise Promise.all pour exécuter trois promesses et afficher [3, 42, "foo"].
// Si l’une d’elles échoue, on capture l’erreur.

const promise1 = Promise.resolve(3);
const promise2 = 42; // traité comme Promise.resolve(42)
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 3000, 'foo');
});

// Commentaire : Promise.all prend un tableau de « thenables » et
// renvoie une promesse qui se résout quand toutes sont résolues,
// avec un tableau de leurs valeurs dans le même ordre.
// En cas de rejet, elle rejette immédiatement avec cette erreur.

Promise.all([promise1, promise2, promise3])
    .then(values => console.log('Exercise 1 result:', values))    // → [3, 42, "foo"]
    .catch(err => console.error('Exercise 1 error:', err));


// Exercise 2: Analyzing Promise.all()
// Crée un tableau de promesses qui multiplient par deux,
// puis passe-le à Promise.all().

function timesTwoAsync(x) {
    return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
    .then(result => console.log('Exercise 2 result:', result))  // → [2, 4, 6]
    .catch(err => console.error('Exercise 2 error:', err));

/*
  Explication :
  - timesTwoAsync renvoie une promesse résolue avec x * 2.
  - arr.map génère [Promise(2), Promise(4), Promise(6)].
  - Promise.all attend la résolution de toutes et renvoie [2, 4, 6].
*/
