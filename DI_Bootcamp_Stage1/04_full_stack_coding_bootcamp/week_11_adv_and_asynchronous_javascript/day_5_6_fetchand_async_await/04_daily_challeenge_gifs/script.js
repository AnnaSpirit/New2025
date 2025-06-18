// Signature : AnnaSpirit

// Clé API perso, à adapter si besoin
const apiKey = "lmduClpWyQzGEPXKUyTuJ014oxg50C1b";

// Sélecteurs utiles
const form = document.getElementById("gifForm");
const input = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

// Gestion du formulaire
form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const query = input.value.trim();

    if (query === "") {
        alert("Please enter a category! 🧐");
        return;
    }

    try {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${query}&rating=g`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Oops, we can't fetch a gif 😢");
        }

        const data = await response.json();
        const imageUrl = data.data.images?.original?.url;

        if (!imageUrl) {
            alert("No GIF found 😕");
            return;
        }

        // Création des éléments
        const gifDiv = document.createElement("div");
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = query;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "DELETE 🗑️";
        deleteBtn.addEventListener("click", () => {
            gifDiv.remove();
        });

        gifDiv.appendChild(img);
        gifDiv.appendChild(deleteBtn);
        gifContainer.appendChild(gifDiv);

    } catch (error) {
        console.error("Fetch error:", error);
        alert("Something went wrong! 😵");
    }

    input.value = ""; // Reset champ
});

// Supprimer tous les GIFs
deleteAllBtn.addEventListener("click", () => {
    gifContainer.innerHTML = "";
});
