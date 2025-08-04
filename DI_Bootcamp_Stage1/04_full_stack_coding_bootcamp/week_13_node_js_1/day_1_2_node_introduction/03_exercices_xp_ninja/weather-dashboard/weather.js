// weather.js
// ✅ Fetch weather data from OpenWeatherMap API and format it
// ✅ Récupère les données météo et les affiche avec du style

const axios = require('axios');
const chalk = require('chalk');

// Fonction pour récupérer et afficher la météo d’une ville
async function getWeather(city) {
    const apiKey = '3ef28362429bd53d82881e010defa7d0'; // 🔁 Remplace par ta vraie clé API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        console.log(chalk.blue.bold(`🌤️ Weather in ${data.name}, ${data.sys.country}`));
        console.log(chalk.green(`🌡️ Temperature: ${data.main.temp} °C`));
        console.log(chalk.yellow(`☁️ Description: ${data.weather[0].description}`));
        console.log(chalk.cyan(`💨 Wind Speed: ${data.wind.speed} m/s`));
    } catch (error) {
        console.error(chalk.red(`❌ Error fetching weather: ${error.response?.data?.message || error.message}`));
    }
}

// Export de la fonction pour l’utiliser dans dashboard.js
module.exports = getWeather;
