// Instructions

//     Create a function called createCalendar(year, month)
//     The function should create a calendar for the given year / month.
//     The calendar should be a table, where a week is < tr >, and a day is < td >.The table top should be < th > with weekday names: the first day should be Monday, and so on until Sunday.

// For instance, createCalendar(2012, 9) should generate the following calendar:

// Hint: There shouldn’t be any code in the HTML file.The table should be created from the JS file using the DOM.

function createCalendar(year, month) {
    const table = document.createElement('table'); // Create a table element
    const headerRow = document.createElement('tr'); // Create a row for the header

    // Array of weekday names
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Create header cells for each weekday
    weekdays.forEach(weekday => {
        const th = document.createElement('th'); // Create a header cell
        th.textContent = weekday; // Set the text content to the weekday name
        headerRow.appendChild(th); // Append the header cell to the header row
    });

    table.appendChild(headerRow); // Append the header row to the table

    const firstDayOfMonth = new Date(year, month - 1, 1); // Get the first day of the month
    const lastDayOfMonth = new Date(year, month, 0); // Get the last day of the month

    let currentDate = firstDayOfMonth; // Start from the first day of the month
    let weekRow; // Variable to hold the current week row

    while (currentDate <= lastDayOfMonth) { // Loop until we reach the last day of the month
        if (currentDate.getDay() === 1) { // If it's Monday, create a new week row
            weekRow = document.createElement('tr'); // Create a new row for the week
            table.appendChild(weekRow); // Append it to the table
        }

        const td = document.createElement('td'); // Create a cell for the current date
        td.textContent = currentDate.getDate(); // Set the text content to the date number
        weekRow.appendChild(td); // Append the cell to the current week row

        currentDate.setDate(currentDate.getDate() + 1); // Move to the next date
    }

    document.body.appendChild(table); // Append the table to the body of the document
}

console.log(createCalendar(2012, 9)); 
