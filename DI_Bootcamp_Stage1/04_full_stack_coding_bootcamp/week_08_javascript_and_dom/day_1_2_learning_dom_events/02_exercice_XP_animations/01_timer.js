// Part I
//     In your Javascript file, using setTimeout, call a function after 2 seconds.
//     The function will alert “Hello World”.

//💥💥💥 2 secondes = 2000 millisecondes!!!

// setTimeout(function () {
//     alert("Hello World");
// }, 2000);

// // Part II
// //     In your Javascript file, using setTimeout, call a function after 2 seconds.
// //     The function will add a new paragraph < p > Hello World</ > to the < div id = "container" >.

// setTimeout(function () {
//     const container = document.getElementById("container");
//     const newParagraph = document.createElement("p");
//     newParagraph.textContent = "Hello World";
//     container.appendChild(newParagraph);
// }, 2000);

// // Part III
// //     In your Javascript file, using setInterval, call a function every 2 seconds.
// //     The function will add a new paragraph < p > Hello World</ > to the < div id = "container" >.
// //     The interval will be cleared(ie.clearInterval), when the user will click on the button.

// ///     Instead of clicking on the button, the interval will be cleared(ie.clearInterval) as soon as there will be 5 paragraphs inside the < div id = "container" >.

// // On stocke l'ID de l'intervalle pour pouvoir le clear
// const intervalId = setInterval(function () {
//     const container = document.getElementById('container');
//     const paragraphs = container.getElementsByTagName('p');

//     if (paragraphs.length < 5) {
//         const newParagraph = document.createElement('p');
//         newParagraph.textContent = 'Hello World';
//         container.appendChild(newParagraph);
//     } else {
//         // Dès qu'on atteint 5, on stoppe l'intervalle
//         clearInterval(intervalId);
//         console.log('✨ Stop ! ✨');
//     }
// }, 2000);


//*BEST VERSION*/ 
// On attend que le DOM soit là pour éviter les null…
document.addEventListener('DOMContentLoaded', function () {
    // ─── Part I : alert après 2s ─────────────────────────────
    setTimeout(function () {
        alert('Hello World (Part I)');
    }, 2000);

    // ─── Part II : ajout d’un <p> après 2s ───────────────────
    setTimeout(function () {
        const container = document.getElementById('container');
        const p = document.createElement('p');
        p.textContent = 'Hello World (Part II)';
        container.appendChild(p);
    }, 2000);

    // ─── Part III : intervalle toutes les 2s, ajout de <p> ────
    const clearBtn = document.getElementById('clear');
    let intervalId = setInterval(function () {
        const container = document.getElementById('container');
        const paragraphs = container.getElementsByTagName('p');
        // Ajout
        const p = document.createElement('p');
        p.textContent = 'Hello World (Part III)';
        container.appendChild(p);
        // Arrêt auto à 5
        if (paragraphs.length >= 5) {
            clearInterval(intervalId);
            console.log('✨ Intervalle arrêté après 5 paragraphes.');
        }
    }, 2000);

    // Arrêt manuel via le bouton
    clearBtn.addEventListener('click', function () {
        clearInterval(intervalId);
        console.log('⏹️ Intervalle arrêté au clic.');
    });
});