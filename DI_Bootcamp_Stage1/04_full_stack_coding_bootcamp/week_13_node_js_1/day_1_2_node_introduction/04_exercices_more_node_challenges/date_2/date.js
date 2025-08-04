// date.js
// ✅ Calculate minutes lived since a birthdate
// ✅ Calcule les minutes vécues depuis une date de naissance

function getMinutesAndAgeDetails() {
    const birthDate = new Date('2017-02-27T12:00:00'); // ⬅️ Remplace ici par ta vraie date !
    const now = new Date();

    // 🔢 Diff en millisecondes → minutes
    const diffMs = now - birthDate;
    const minutesLived = Math.floor(diffMs / 1000 / 60);

    // 📆 Calcul détaillé : années, mois, jours
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    // 🧮 Corriger les valeurs négatives
    if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    return `👶 You’ve lived:
- ${minutesLived.toLocaleString()} minutes
- ${years} years, ${months} months and ${days} days`;
}

module.exports = getMinutesAndAgeDetails;