// // date.js
// // ✅ Show today's date and time left until next holiday
// // ✅ Affiche la date actuelle et le temps restant jusqu'à la prochaine fête

// function getNextHoliday() {
//     const now = new Date();

//     // 🔒 Holiday hardcodé (exemple : 31 octobre à 00h)
//     const holidayName = "Halloween";
//     const nextHoliday = new Date(`${now.getFullYear()}-10-31T00:00:00`);

//     // 👻 Si on est déjà après le 31/10, on vise l’année suivante
//     if (now > nextHoliday) {
//         nextHoliday.setFullYear(nextHoliday.getFullYear() + 1);
//     }

//     const diffMs = nextHoliday - now;
//     const diffSeconds = Math.floor(diffMs / 1000);

//     const days = Math.floor(diffSeconds / (3600 * 24));
//     const hours = Math.floor((diffSeconds % (3600 * 24)) / 3600);
//     const minutes = Math.floor((diffSeconds % 3600) / 60);
//     const seconds = diffSeconds % 60;

//     return `📆 Today is ${now.toDateString()}.
// 🎉 The next holiday is ${holidayName} in ${days} days and ${hours}:${minutes}:${seconds} hours.`;
// }

// module.exports = getNextHoliday;

// date.js
// ✅ Show today's date and time left until next real holiday (via date-holidays)
// ✅ Affiche le prochain jour férié avec calcul automatique



//WITH BONUS: Utilise la librairie date-holidays pour gérer les jours fériés

const Holidays = require('date-holidays');

function getNextHoliday() {
    const hd = new Holidays('IL'); // 🇫🇷 ou 'US', 'IL', etc.
    const now = new Date();

    // 📅 Obtenir tous les jours fériés à venir
    const upcoming = hd.getHolidays(now.getFullYear()).filter(h => new Date(h.date) > now);

    // 👀 Si plus rien cette année, chercher dans l’année suivante
    if (upcoming.length === 0) {
        const nextYear = now.getFullYear() + 1;
        upcoming.push(...hd.getHolidays(nextYear));
    }

    const next = upcoming[0];
    const holidayDate = new Date(next.date);
    const diffMs = holidayDate - now;
    const diffSeconds = Math.floor(diffMs / 1000);

    const days = Math.floor(diffSeconds / (3600 * 24));
    const hours = Math.floor((diffSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((diffSeconds % 3600) / 60);
    const seconds = diffSeconds % 60;

    return `📆 Today is ${now.toDateString()}.
🎉 The next holiday is ${next.name} (${next.date}) in ${days} days and ${hours}:${minutes}:${seconds} hours.`;
}

module.exports = getNextHoliday;
