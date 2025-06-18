// 🎉 Fonction principale pour gérer l'événement du formulaire
document.getElementById("sunrise-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    // 🎯 Récupération des valeurs
    const lat1 = document.getElementById("lat1").value;
    const lng1 = document.getElementById("lng1").value;
    const lat2 = document.getElementById("lat2").value;
    const lng2 = document.getElementById("lng2").value;

    // 🧼 Validation rapide
    if (!lat1 || !lng1 || !lat2 || !lng2) {
        alert("😱 Please fill in all the coordinates!");
        return;
    }

    const url1 = `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lng1}&formatted=0`;
    const url2 = `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}&formatted=0`;

    try {
        // ⏳ On attend que les 2 appels soient terminés
        const [response1, response2] = await Promise.all([
            fetch(url1),
            fetch(url2)
        ]);

        // 🛑 Vérification des statuts
        if (!response1.ok || !response2.ok) {
            throw new Error("⛔ One of the API calls failed!");
        }

        // 🥡 Extraction des données
        const data1 = await response1.json();
        const data2 = await response2.json();

        // 🕐 Extraction des heures de lever de soleil
        const sunrise1 = new Date(data1.results.sunrise).toLocaleTimeString();
        const sunrise2 = new Date(data2.results.sunrise).toLocaleTimeString();

        // 🎊 Affichage
        document.getElementById("city1-result").textContent = `☀️ City 1 sunrise: ${sunrise1}`;
        document.getElementById("city2-result").textContent = `🌞 City 2 sunrise: ${sunrise2}`;
    } catch (error) {
        console.error("Oops:", error);
        alert("🤖 Something went wrong... Did the sun hide?");
    }
});
// AnnaSpirit
