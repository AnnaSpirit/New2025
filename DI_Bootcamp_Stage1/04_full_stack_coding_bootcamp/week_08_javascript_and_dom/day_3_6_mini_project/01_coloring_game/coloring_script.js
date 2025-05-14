// Couleur actuellement sélectionnée (aucune par défaut)
let color = null;

// Indique si la souris est enfoncée (pour colorier en maintenant)
let mousedown = false;

// Sélection du <body> de la page
let body = document.getElementsByTagName("body")[0];

// Sélection de tous les blocs de couleurs dans la sidebar
let color_blocks = document.querySelectorAll(".color-choice");

// Sélection de tous les blocs à remplir dans la zone principale
let fill_blocks = document.querySelectorAll("#main > div");

// Sélection du bouton pour effacer la grille
let clear_button = document.getElementById("clearButton");

// Quand on clique sur le bouton "clear", tous les blocs sont remis en blanc
clear_button.addEventListener("click", function () {
    for (fill_block of fill_blocks) {
        fill_block.style.backgroundColor = "white";
    }
});

// Quand on appuie sur un bouton de la souris n'importe où sur la page
body.addEventListener("mousedown", function () {
    mousedown = true;
})

// Quand on relâche le bouton de la souris
body.addEventListener("mouseup", function () {
    mousedown = false;
})

// Quand on clique sur une couleur dans la sidebar, on la sélectionne
for (color_block of color_blocks) {
    color_block.addEventListener("click", function (event) {
        color = event.target.style.backgroundColor;
    });
}

// Pour chaque case à colorier :
for (fill_block of fill_blocks) {
    // Clique = on colorie la case si une couleur est sélectionnée
    fill_block.addEventListener("mousedown", function (event) {
        if (color != null) event.target.style.backgroundColor = color;
    });

    // Passage de la souris en maintenant = on colorie aussi
    fill_block.addEventListener("mouseover", function (event) {
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}
// Bouton pour déplacer la palette
const toggleSidebarBtn = document.getElementById("toggleSidebar");

toggleSidebarBtn.addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");

    // Si la palette est à gauche, on la met à droite
    if (sidebar.style.float === "left" || sidebar.style.float === "") {
        sidebar.style.float = "right";
        main.style.padding = "5px 0 5px 5px"; // Ajuste la marge à gauche
    } else {
        sidebar.style.float = "left";
        main.style.padding = "5px 5px 5px 0"; // Remet la marge à droite
    }
});
