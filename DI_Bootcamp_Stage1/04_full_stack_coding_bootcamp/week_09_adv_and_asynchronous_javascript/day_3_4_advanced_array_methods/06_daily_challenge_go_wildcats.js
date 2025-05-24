// 1. Déclaration du tableau gameInfo
const gameInfo = [
    {
        username: "John",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "Becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "Susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "Tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    }
    // ,
    // {
    //     username: "Tyron",
    //     team: "blue",
    //     score: 78,
    //     items: ["ball", "book", "pen", "eraser"]
    // }
];  // ← ici on ferme le tableau

// 2. Étape 1 : construire usernames avec "!"
const usernames = [];
gameInfo.forEach(user => {
    usernames.push(user.username + "!");
});
console.log(usernames);

// 3. Étape 2 : construire winners pour score > 5
const winners = [];
gameInfo.forEach(user => {
    if (user.score > 5) {
        winners.push(user.username);
    }
});
console.log(winners);

// 4. Étape 3 : sommer tous les scores
let totalScore = 0;
gameInfo.forEach(user => {
    totalScore += user.score;
});
console.log(totalScore);

// Bonus (un seul reduce pour tout faire en une ligne)
const total = gameInfo.reduce((acc, user) => acc + user.score, 0);
console.log(total);
