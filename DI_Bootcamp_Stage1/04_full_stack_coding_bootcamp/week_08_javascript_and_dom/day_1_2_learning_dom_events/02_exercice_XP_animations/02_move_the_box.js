// In your Javascript file, use setInterval to move the < div id = "animate" > to the right side of the < div id = "container" >, when the button is clicked on.

//     The < div id = "animate" > should move 1px to the right every milisecond, until it reaches the end of the < div id = "container" >.
//         Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint: check out the demonstration in the Course Noted named JS Functions


// Définir globalement la fonction myMove() pour l’inline onclick du bouton
// window.myMove = function () {
//     // Récupération de la boîte et du conteneur
//     const box = document.getElementById('animate');
//     const container = document.getElementById('container');

//     // Position initiale
//     let pos = 0;

//     // Calcul de la position maximale (largeur conteneur − largeur boîte)
//     const maxPos = container.clientWidth - box.clientWidth;

//     // Lancement de l’intervalle : déplacer de 1px toutes les millisecondes
//     const intervalId = setInterval(function () {
//         if (pos >= maxPos) {
//             // Arrêt de l’animation quand on atteint le bord
//             clearInterval(intervalId);
//             console.log('🚀 The box has arrived at destination ! 🏁 ');
//         } else {
//             pos++;
//             box.style.left = pos + 'px';
//         }
//     }, 1);
// };

//*MOVE VERTICALLY AFTER Click other button

window.myMove = function () {
    const box = document.getElementById('animate');
    const container = document.getElementById('container');
    const downBtn = document.getElementById('downBtn');

    // mettre à 0 au cas où
    box.style.left = '0px';
    box.style.top = '0px';

    // ─── Phase 1 : glissement horizontal ──────────────────────
    let pos = 0;
    const maxPos = container.clientWidth - box.clientWidth;
    const intervalId = setInterval(function () {
        if (pos >= maxPos) {
            clearInterval(intervalId);
            console.log('🚀 La boîte est arrivée à droite !');
            alert('Click now on : "Push me down"');
            // active enfin le bouton
            downBtn.disabled = false;
            // on prépare l'écouteur pour la phase 2
            downBtn.addEventListener('click', verticalMove);
        } else {
            pos++;
            box.style.left = pos + 'px';
        }
    }, 1);

    // ─── Phase 2 : descente verticale au clic ─────────────────
    function verticalMove() {
        downBtn.removeEventListener('click', verticalMove);
        downBtn.disabled = true; // optionnel, pour plus de clarté

        let topPos = 0;
        const maxTop = container.clientHeight - box.clientHeight;
        const downIntervalId = setInterval(function () {
            if (topPos >= maxTop) {
                clearInterval(downIntervalId);
                console.log('📥 Descente terminée !');
            } else {
                topPos++;
                box.style.top = topPos + 'px';
            }
        }, 1);
    }
};