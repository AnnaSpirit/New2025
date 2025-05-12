// Javascript code to color all diagonal table cells in red.

const rows = table.rows;

// Pour chaque ligne, on colorie la cellule i (diagonale principale)
for (let i = 0; i < rows.length; i++) {
    rows[i].cells[i].style.backgroundColor = 'rgb(255, 0, 0)';
}

// Pour chaque ligne, on colorie la cellule j (diagonale secondaire)

for (let j = 0; j < rows.length; j++) {
    rows[j].cells[rows.length - 1 - j].style.backgroundColor = "rgb(255, 111, 0)";
}

//+++++ GPT +++++

// 🌟 Le twist pour la cellule 3:3 (indice [2][2]) : mélange rouge ↔ orange
const mixCell = rows[2].cells[2];
// On efface la couleur unie
mixCell.style.backgroundColor = 'transparent';
// On applique un dégradé linéaire du rouge vers l’orange
mixCell.style.backgroundImage = 'linear-gradient(to bottom right, rgb(255, 0, 0), rgb(255, 111, 0))';
// On ajuste la couleur du texte pour rester lisible
mixCell.style.color = 'white';