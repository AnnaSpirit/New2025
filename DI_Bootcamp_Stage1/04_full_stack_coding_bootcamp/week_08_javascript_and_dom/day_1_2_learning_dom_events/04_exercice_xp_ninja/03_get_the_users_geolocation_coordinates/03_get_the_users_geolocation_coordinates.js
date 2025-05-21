
// Use HTML5 and Javascript for this exercise.
// Use everything we learned in class, and use all the resources linked in the course.
// This exercise is a bit tricky, search Google how to work with HTML5 and the navigator’s geolocation.
// Create a button



// Récupère les éléments du DOM
const locateBtn = document.getElementById('locateBtn');
const status = document.getElementById('status');
const result = document.getElementById('result');

// Écoute le clic sur le bouton
locateBtn.addEventListener('click', function () {
    // Vérification du support de l'API
    if (!navigator.geolocation) {
        status.textContent = 'Géolocalisation non supportée par ton navigateur.';
        return;
    }
    status.textContent = 'Recovery of the current position ...⏳';
    navigator.geolocation.getCurrentPosition(success, error);
});

// 🔥 En cas de succès, on affiche latitude et longitude
function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    status.textContent = 'Position récupérée ! 🎉';
    result.innerHTML = `Latitude : ${latitude} <br> Longitude : ${longitude}`;
}

// ⚠️ En cas d’erreur (refus, délai, etc.), on affiche le message
function error(err) {
    status.textContent = `Erreur (${err.code}) : ${err.message}`;
}