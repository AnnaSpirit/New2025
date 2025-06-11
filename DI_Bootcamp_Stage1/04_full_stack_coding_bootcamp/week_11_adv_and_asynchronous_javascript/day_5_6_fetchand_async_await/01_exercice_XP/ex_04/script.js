// script.js
// Exercice 4 : analyser le comportement de asyncCall()
// AnnaSpirit

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');        // s’affiche immédiatement
    const result = await resolveAfter2Seconds();
    console.log(result);           // “resolved” après ~2 secondes
}

asyncCall();
