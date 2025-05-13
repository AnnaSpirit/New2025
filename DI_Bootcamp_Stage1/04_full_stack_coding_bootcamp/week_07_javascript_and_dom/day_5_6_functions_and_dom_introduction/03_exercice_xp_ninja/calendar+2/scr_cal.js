const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// Génère et retourne un <table> pour un mois donné
function createCalendarTable(year, month) {
    const table = document.createElement('table');

    // Légende au-dessus
    const caption = document.createElement('caption');
    caption.textContent = `${monthNames[month - 1]} ${year}`;
    table.appendChild(caption);

    // En-têtes des jours (lundi → dimanche)
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const headerRow = document.createElement('tr');
    weekdays.forEach(d => {
        const th = document.createElement('th');
        th.textContent = d;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Calculs de début/fin
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const totalDays = lastDay.getDate();

    // index 0 = lundi … 6 = dimanche
    const getIdx = date => (date.getDay() + 6) % 7;

    let row = document.createElement('tr');
    table.appendChild(row);

    // cellules vides avant le premier jour
    for (let i = 0; i < getIdx(firstDay); i++) {
        row.appendChild(document.createElement('td'));
    }

    // remplir les numéros
    for (let d = 1; d <= totalDays; d++) {
        const cur = new Date(year, month - 1, d);
        const td = document.createElement('td');
        td.textContent = d;
        row.appendChild(td);

        // si on atteint dimanche, on passe à la ligne suivante
        if (getIdx(cur) === 6 && d !== totalDays) {
            row = document.createElement('tr');
            table.appendChild(row);
        }
    }

    // cellules vides après le dernier jour pour compléter la rangée
    const endIdx = getIdx(lastDay);
    for (let i = endIdx + 1; i < 7; i++) {
        row.appendChild(document.createElement('td'));
    }

    return table;
}

// Affiche plusieurs calendriers dans #calendars
function displayMultipleCalendars(year, monthsArray) {
    const container = document.getElementById('calendars');
    monthsArray.forEach(m => {
        const cal = createCalendarTable(year, m);
        container.appendChild(cal);
    });
}

// Exemple : afficher juin (6) et août (8) 2025
// displayMultipleCalendars(2025, [6, 8]);

displayMultipleCalendars(2025, [7, 8]);