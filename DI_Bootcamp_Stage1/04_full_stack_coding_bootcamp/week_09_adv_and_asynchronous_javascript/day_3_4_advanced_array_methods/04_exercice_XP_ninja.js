// practice_exercises.js

// ================================================
// Exercise 1 : Dog age to Human years
function exercise1() {
    // On part des données de base
    const data = [
        { name: 'Butters', age: 3, type: 'dog' },
        { name: 'Cuty', age: 5, type: 'rabbit' },
        { name: 'Lizzy', age: 6, type: 'dog' },
        { name: 'Red', age: 1, type: 'cat' },
        { name: 'Joey', age: 3, type: 'dog' },
        { name: 'Rex', age: 10, type: 'dog' },
    ];

    // 1) **Avec une boucle** for...of
    let sumHumanYears = 0; // Ici, on accumulera le total
    for (const pet of data) {
        if (pet.type === 'dog') {
            // Chaque année de chien = 7 années humaines
            sumHumanYears += pet.age * 7;
        }
    }
    console.log(`🦴 Total avec boucle : ${sumHumanYears} années humaines`);

    // 2) **Avec la méthode reduce()**
    const totalHumanYears = data.reduce((accumulator, pet) => {
        // Si c'est un chien, on convertit ses années et on ajoute
        if (pet.type === 'dog') {
            return accumulator + pet.age * 7;
        }
        // Sinon, on ne change rien
        return accumulator;
    }, 0);

    console.log(`🐶 Total avec reduce : ${totalHumanYears} années humaines`);
    // → Affiche : "🐶 Total avec reduce : 147 années humaines"

}

// ===============================
// Exercise 2 : Email
// On enlève les espaces avant et après l’email en une seule commande
const cleanedEmail = userEmail3.trim();
console.log(cleanedEmail);
    // → 'cannotfillemailformcorrectly@gmail.com'
}

// =========================================
// Exercise 3 : Employees #3

function exercise3() {
    const users = [
        { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
        { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
        { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
        { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
        { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
        { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
        { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
    ];

    // 1) Méthode classique avec une boucle
    let employeeRoles = {}; // on crée l'objet vide

    for (const user of users) {
        // on construit la clé "Prénom Nom"
        const fullName = `${user.firstName} ${user.lastName}`;
        // on assigne le rôle en valeur
        employeeRoles[fullName] = user.role;
    }

    console.log(employeeRoles);
    // → {
    //     'Bradley Bouley': 'Full Stack Resident',
    //     'Chloe Alnaji':   'Full Stack Resident',
    //     'Jonathan Baughn':'Enterprise Instructor',
    //     …
    //   }

    // 2) Avec reduce() pour la même chose en une seule passe
    const employeeRolesWithReduce = users.reduce((acc, { firstName, lastName, role }) => {
        // on ajoute dynamiquement une propriété à l'accumulateur
        acc[`${firstName} ${lastName}`] = role;
        return acc;
    }, {});

    console.log(employeeRolesWithReduce);
    // → même résultat qu'avec la boucle 🚀
}

// =========================================
// Exercise 4 : Array to Object

function exercise4() {
    // Méthode 1 : avec une boucle for...of
    const letters = ['x', 'y', 'z', 'z'];
    let countWithLoop = {}; // Création d’un objet vide pour stocker les comptes

    for (const letter of letters) {
        if (countWithLoop[letter]) {
            countWithLoop[letter]++;      // Si la clé existe, on incrémente
        } else {
            countWithLoop[letter] = 1;     // Sinon, on initialise à 1
        }
    }

    console.log(countWithLoop);
    // → { x: 1, y: 1, z: 2 }

    // Méthode 2 : avec reduce()
    const countWithReduce = letters.reduce((accumulator, letter) => {
        // Pour chaque lettre, on ajoute 1 à sa valeur dans l’accumulateur
        accumulator[letter] = (accumulator[letter] || 0) + 1;
        return accumulator;               // N’oublie pas de renvoyer l’accumulateur !
    }, {});                              // On part d’un objet vide

    console.log(countWithReduce);
    // → { x: 1, y: 1, z: 2 }

}

// Run all exercises
function runAllExercises() {
    exercise1();
    exercise2();
    exercise3();
    exercise4();
}

runAllExercises();
