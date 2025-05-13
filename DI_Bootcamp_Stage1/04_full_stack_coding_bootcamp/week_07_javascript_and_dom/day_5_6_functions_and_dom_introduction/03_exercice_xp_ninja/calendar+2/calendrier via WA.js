//  1. Ouvre n’importe quelle page web (tant qu’il y a un <body>).
// 2. Ouvre la console(F12 ou Ctrl + Shift + I).
// 3. Colle le code de createCalendar. (message suivant)
// 4.Tape createCalendar(année, mois); et valide(entree).

function createCalendar(year, month) {
    const table = document.createElement('table');
    const captions = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    const caption = document.createElement('caption');
    caption.textContent = captions[month - 1] + ' ' + year;
    table.appendChild(caption);

    const headerRow = document.createElement('tr');
    const weekdays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    weekdays.forEach(jour => {
        const th = document.createElement('th');
        th.textContent = jour;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const totalDays = lastDay.getDate();
    const getIdx = date => (date.getDay() + 6) % 7;

    let row = document.createElement('tr');
    table.appendChild(row);

    // cases vides avant le 1er jour
    for (let i = 0; i < getIdx(firstDay); i++) {
        row.appendChild(document.createElement('td'));
    }

    // remplissage des jours
    for (let d = 1; d <= totalDays; d++) {
        const cur = new Date(year, month - 1, d);
        const td = document.createElement('td');
        td.textContent = d;
        row.appendChild(td);

        if (getIdx(cur) === 6 && d !== totalDays) {
            row = document.createElement('tr');
            table.appendChild(row);
        }
    }

    // compléter la dernière rangée
    const endIdx = getIdx(lastDay);
    for (let i = endIdx + 1; i < 7; i++) {
        row.appendChild(document.createElement('td'));
    }

    document.body.appendChild(table);
}

createCalendar(année, mois);