const boxElement = document.querySelectorAll(".box");
var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var xAttempts = [];
var oAttempts = [];
var click = 0;
var wonTheGame = 0;
const message = document.getElementById("message");
const gameResult = document.getElementById("result");
const restart = document.getElementById("button");

boxElement.forEach(box => {
    box.onclick = handleClick;
});

function handleClick(e) {
    const i = e.target.getAttribute('id');
    if (xAttempts.includes(parseInt(i - 1)) || oAttempts.includes(parseInt(i - 1))) {
        return; // Prevent clicking on already occupied boxes
    }

    const text = document.createElement('p');
    text.setAttribute('id', 'text');
    boxElement[i - 1].appendChild(text);
    oAttempts.push(parseInt(i - 1));
    text.innerHTML = "O";
    text.style.color = 'blue'; // Player's O color is blue
    result(winningCombinations, oAttempts, "Player");

    click++;
    if (wonTheGame === 0 && click < 9) {
        setTimeout(computerMove, 500); // Add a 500ms delay before the computer's move
    }

    if (click === 9 && wonTheGame === 0) {
        gameResult.style.visibility = "visible";
        message.innerHTML = "It's a tie 🤝 ";
    }
}

function computerMove() {
    let availableBoxes = [];
    boxElement.forEach((box, index) => {
        if (!xAttempts.includes(index) && !oAttempts.includes(index)) {
            availableBoxes.push(index);
        }
    });

    // Check for winning move
    for (let combo of winningCombinations) {
        let countX = combo.filter(index => xAttempts.includes(index)).length;
        let countEmpty = combo.filter(index => availableBoxes.includes(index)).length;
        if (countX === 2 && countEmpty === 1) {
            const winningMove = combo.find(index => availableBoxes.includes(index));
            makeMove(winningMove, "X", "green");
            return;
        }
    }

    // Check for blocking move
    for (let combo of winningCombinations) {
        let countO = combo.filter(index => oAttempts.includes(index)).length;
        let countEmpty = combo.filter(index => availableBoxes.includes(index)).length;
        if (countO === 2 && countEmpty === 1) {
            const blockingMove = combo.find(index => availableBoxes.includes(index));
            makeMove(blockingMove, "X", "green");
            return;
        }
    }

    // Random move if no winning or blocking move
    if (availableBoxes.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableBoxes.length);
        const i = availableBoxes[randomIndex];
        makeMove(i, "X", "green");
    }
}

function makeMove(index, symbol, color) {
    const text = document.createElement('p');
    text.setAttribute('id', 'text');
    boxElement[index].appendChild(text);
    xAttempts.push(index);
    text.innerHTML = symbol;
    text.style.color = color;
    result(winningCombinations, xAttempts, "Computer");
    click++;
}

function result(winningCombinations, attempts, player) {
    let flag = 0;
    let checker = [];
    for (var i = 0; i < winningCombinations.length; i++) {
        if (Array.isArray(winningCombinations[i])) {
            result(winningCombinations[i], attempts, player);
        } else {
            if (attempts.includes(winningCombinations[i])) {
                checker.push(true);
                flag++;
            } else {
                checker.push(false);
            }
        }
    }
    if (checker.every(check => check === true) && flag > 2) {
        gameResult.style.visibility = "visible";
        message.innerHTML = player + " " + " won the game!";
        wonTheGame = 1;
    }
}

restart.onclick = () => {
    location.reload();
};
