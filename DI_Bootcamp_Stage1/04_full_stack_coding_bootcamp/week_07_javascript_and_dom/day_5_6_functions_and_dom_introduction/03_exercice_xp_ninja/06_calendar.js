// Instructions

//     Create a function called createCalendar(year, month)
//     The function should create a calendar for the given year / month.
//     The calendar should be a table, where a week is < tr >, and a day is < td >.The table top should be < th > with weekday names: the first day should be Monday, and so on until Sunday.

// For instance, createCalendar(2012, 9) should generate the following calendar:

// Hint: There shouldn’t be any code in the HTML file.The table should be created from the JS file using the DOM.

function createCalendar(year, month) {
    const table = document.createElement('table');// Create a table element
    const headerRow = document.createElement('tr');// Create a row for the header

    // Weekday names, Monday first
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    weekdays.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const totalDays = lastDay.getDate();

    // mapping JS getDay() (0 = Sunday … 6 = Saturday) → index 0 = Monday … 6 = Sunday
    const getWeekdayIndex = date => (date.getDay() + 6) % 7;

    let row = document.createElement('tr');
    table.appendChild(row);

    // 1) cases vides avant le 1er
    const startIndex = getWeekdayIndex(firstDay);
    for (let i = 0; i < startIndex; i++) {
        row.appendChild(document.createElement('td'));
    }

    // 2) remplir les jours
    for (let dayNum = 1; dayNum <= totalDays; dayNum++) {
        const current = new Date(year, month - 1, dayNum);
        const cell = document.createElement('td');
        cell.textContent = dayNum;
        row.appendChild(cell);

        // quand on atteint dimanche, on repart sur une nouvelle ligne
        if (getWeekdayIndex(current) === 6 && dayNum !== totalDays) {
            row = document.createElement('tr');
            table.appendChild(row);
        }
    }

    // 3) compléter la dernière ligne (si le mois ne finit pas un dimanche)
    const endIndex = getWeekdayIndex(lastDay);
    for (let i = endIndex + 1; i < 7; i++) {
        row.appendChild(document.createElement('td'));
    }

    // attacher au DOM
    document.body.appendChild(table);
}

// Exemple d'utilisation
// createCalendar(2012, 9);
// createCalendar(2025, 6);
createCalendar(1947, 10);

