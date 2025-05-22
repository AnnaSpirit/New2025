// =======================
// 🌟 Exercice 1 : Colors
// =======================
function exercise1() {
    const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

    colors.forEach((color, index) => {
        console.log(`${index + 1}# choice is ${color}.`);
    });
}
// Display the colors in order
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// Check if "Violet" is in the array
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}

// ============================
// 🌟 Exercice 2 : Colors #2
// ============================
function exercise2() {
    const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
    const ordinal = ["th", "st", "nd", "rd"];

    colors.forEach((color, index) => {
        let ord;
        if ((index + 1) === 1) {
            ord = ordinal[1];
        } else if ((index + 1) === 2) {
            ord = ordinal[2];
        } else if ((index + 1) === 3) {
            ord = ordinal[3];
        } else {
            ord = ordinal[0];
        }
        console.log(`${index + 1}${ord} choice is ${color}.`);
    });
}

// ======================
// Exercice 3 : Analyzing// 
// ======================
function exercise3() {
    ------1------
const fruits = ["apple", "orange"];
    const vegetables = ["carrot", "potato"];

    const result = ['bread', ...vegetables, 'chicken', ...fruits];
    console.log(result);

    ------2------
const country = "USA";
    console.log([...country]);

    ------Bonus------
        let newArray = [...[, ,]];
    console.log(newArray);

    // 1. Merge array with the Spread ...
    // ["bread", "carrot", "potato", "chicken", "apple", "orange"]

    // 2. Chain a character string
    // ["U", "S", "A"]

    // Bonus.Expression[,,] creates a hollow array(sparse array) of length 2, without defined values.I visit the two indexes(0 and 1).
    // But as there are no values, each "hole" regenerates in Undefined.
    // [undefined, undefined]
}

// =======================
// 🌟 Exercice 4 : Employees
// =======================
function exercise4() {
    const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

    const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

    // Using filter() to create a new array with only Full Stack Residents
    const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
    console.log(fullStackResidents);

    // Chain filter and map to get only last names of Full Stack Residents
    const fullStackLastNames = users
        .filter(user => user.role === 'Full Stack Resident')
        .map(user => user.lastName);
    console.log(fullStackLastNames);
}

// ====================
// 🌟 Exercice 5 : Star Wars
// ====================
function exercise5() {
    const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

    // Use reduce to combine all elements into a single string
    const story = epic.reduce((acc, word) => acc + ' ' + word);
    console.log(story);
}

// =============================
// 🌟 Exercice 6 : Employees #2
// =============================
function exercise6() {
    const students = [{ name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }];

    // 1. Create a new array with students that passed
    const passedStudents = students.filter(student => student.isPassed);
    console.log(passedStudents);

    // 2. Bonus: Congratulate each student who passed
    passedStudents.forEach(student => {
        console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
    });
}
// =============================
// Exécuter tous les exercices - Execute All Exercises
// =============================
function runAllExercises() {
    exercise1();
    exercise2();
    exercise3();
    exercise4();
    exercise5();
    exercise6();
}

// Lancer l'exécution
runAllExercises();
