// dashboard.js
// ✅ Prompt user for a city and fetch weather data
// ✅ Demande à l’utilisateur une ville et affiche la météo

const readline = require('readline');
const getWeather = require('./weather');

// Interface readline pour lire le nom de la ville dans le terminal
function startDashboard() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('🏙️ Enter a city name: ', (city) => {
        if (!city.trim()) {
            console.log('⚠️ You must enter a city name! / Tu dois entrer un nom de ville !');
        } else {
            getWeather(city);
        }
        rl.close();
    });
}

// Export pour l’utiliser dans index.js
module.exports = startDashboard;
