// date.js
// ✅ Calculate time left until January 1st
// ✅ Calcule le temps restant jusqu'au 1er janvier

function getTimeUntilNewYear() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(`${nextYear}-01-01T00:00:00`);

    const diffMs = newYear - now;
    const diffSeconds = Math.floor(diffMs / 1000);

    const days = Math.floor(diffSeconds / (3600 * 24));
    const hours = Math.floor((diffSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((diffSeconds % 3600) / 60);
    const seconds = diffSeconds % 60;

    return `🎆 January 1st is in ${days} days and ${hours}:${minutes}:${seconds} hours`;
}

module.exports = getTimeUntilNewYear;
