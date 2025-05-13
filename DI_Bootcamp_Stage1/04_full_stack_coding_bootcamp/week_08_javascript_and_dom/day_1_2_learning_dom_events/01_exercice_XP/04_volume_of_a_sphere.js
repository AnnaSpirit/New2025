// Attendre que la page soit prête
// document.addEventListener('DOMContentLoaded', function () {
//     // Récupérer le formulaire et les champs
//     const form = document.getElementById('MyForm');
//     const radiusInput = document.getElementById('radius');
//     const volumeInput = document.getElementById('volume');

//     // À la soumission, on calcule sans recharger la page
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();  // on bloque le rechargement

//         // Récupérer la valeur, accepter aussi la virgule
//         const r = parseFloat(radiusInput.value.replace(',', '.'));
//         // Validation rapide
//         if (isNaN(r) || r < 0) {
//             alert('⚠️ Please use a valid radius (positive number) !');
//             return;
//         }

//         // Formule : V = 4/3 × π × r³
//         const volume = (4 / 3) * Math.PI * Math.pow(r, 3);

//         // Afficher le résultat arrondi à 2 décimales
//         volumeInput.value = volume.toFixed(2);
//         console.log('Volume calculé:', volume);
//     });
// });


//ADD enter a volume and get the radius

// ↪ Prépare tout au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("MyForm");
    const radiusInput = document.getElementById("radius");
    const volumeInput = document.getElementById("volume");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // on reste sur place

        const rValue = radiusInput.value.trim().replace(",", ".");
        const vValue = volumeInput.value.trim().replace(",", ".");

        // Si l'utilisateur a saisi un rayon, on calcule le volume
        if (rValue !== "" && vValue === "") {
            const r = parseFloat(rValue);
            if (isNaN(r) || r < 0) {
                alert("⚠️ Rayon invalide ! Entre un nombre positif.");
                return;
            }
            const volume = (4 / 3) * Math.PI * Math.pow(r, 3);
            volumeInput.value = volume.toFixed(2);
            console.log("Volume calculé:", volume);

            // Sinon, s'il a saisi un volume, on en déduit le rayon
        } else if (vValue !== "" && rValue === "") {
            const V = parseFloat(vValue);
            if (isNaN(V) || V < 0) {
                alert("⚠️ Volume invalide ! Entre un nombre positif.");
                return;
            }
            // Formule inverse : r = cuberoot(3V / (4π))
            const radius = Math.cbrt((3 * V) / (4 * Math.PI));
            radiusInput.value = radius.toFixed(2);
            console.log("Rayon calculé:", radius);

        } else {
            alert("ℹ️ Pour calculer, saisis soit un rayon, soit un volume (pas les deux).");
        }
    });
});