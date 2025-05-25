// 📘 Tableau des robots fourni par l’énoncé
// 📙 Robots array provided in the assignment
const robots = [
    {
        id: 1,
        name: 'Leanne Sincere',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'images/rob01_pict.png'
    },
    {
        id: 2,
        name: 'Shanna Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'images/rob02_pict.png'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Bauch@yesenia.net',
        image: 'images/rob03_pict.png'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Patricia.OConner@kory.org',
        image: 'images/rob04_pict.png'
    },
    {
        id: 5,
        name: 'Chelsey Hettinger',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'images/rob05_pict.png'
    },
    {
        id: 6,
        name: 'Mrs. Karle Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'images/rob06_pict.png'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Kurtis.Hoeger@billy.biz',
        image: 'images/rob07_pict.png'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'images/rob08_pict.png'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_Glenna@dana.io',
        image: 'images/rob09_pict.png'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.DuBuque@karina.biz',
        image: 'images/rob10_pict.png'
    }
];

// 📘 Référence du DOM pour le conteneur de cards
// 📙 DOM reference for the card container
const container = document.getElementById('cardContainer');

// 📘 Fonction pour créer une carte robot et l’injecter dans le DOM
// 📙 Function to create a robot card and inject it into the DOM
// 📚 Expliquer en article technique comment DOM.createElement et appendChild fonctionnent
function createRobotCard(robot) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${robot.image}" alt="Robot ${robot.name}">
        <div class="info">
            <h2>${robot.name}</h2>
            <p>${robot.email}</p>
        </div>
    `;
    container.appendChild(card);
}

// 📘 Afficher toutes les cartes au chargement de la page
// 📙 Display all cards on page load
// 📚 Parler de l’événement DOMContentLoaded pour garantir que le HTML est parsé
window.addEventListener('DOMContentLoaded', () => {
    robots.forEach(createRobotCard);
});

// 📘 Filtrer les robots en fonction de la recherche
// 📙 Filter robots based on search input
// document.getElementById('searchBox').addEventListener('input', (e) => {
//     const term = e.target.value.toLowerCase();
//     container.innerHTML = ''; // 📘 On vide le conteneur
//     // 📙 Clear the container
//     robots
//         .filter(r => r.name.toLowerCase().includes(term))
//         .forEach(createRobotCard);
// });

//======================================
//**Avec ça, dès que l'on tape du texte, la recherche balaie tous les champs de ton robot ! */

document
    .getElementById('searchBox')
    .addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        container.innerHTML = '';

        robots
            .filter(robot => {
                // 📘 On transforme chaque valeur en chaîne et on cherche la term
                // 📙 We stringify every value and look for the term
                return Object.values(robot).some(val =>
                    String(val).toLowerCase().includes(term)
                );
            })
            .forEach(createRobotCard);
    });

