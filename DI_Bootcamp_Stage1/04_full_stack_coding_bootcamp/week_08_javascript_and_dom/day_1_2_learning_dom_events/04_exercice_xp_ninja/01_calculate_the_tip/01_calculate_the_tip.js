// Sélection des éléments DOM (une seule fois, au top)
const billInput = document.getElementById("billamt");
const serviceSelect = document.getElementById("serviceQual");
const peopleInput = document.getElementById("peopleamt");
const eachText = document.getElementById("each");
const totalTipDiv = document.getElementById("totalTip");
const tipSpan = document.getElementById("tip");
const detailsDiv = document.getElementById("details");

// Au démarrage, tout reste caché
totalTipDiv.style.display = "none";
detailsDiv.style.display = "none";

// Fonction de calcul du tip
function calculateTip() {
    // Récupère et convertit
    const billAmount = parseFloat(billInput.value);
    const serviceQuality = parseFloat(serviceSelect.value);
    let numberOfPeople = parseInt(peopleInput.value, 10);

    // Vérification rapide
    if (isNaN(billAmount) || serviceQuality === 0) {
        alert("Oops! You miss the amount or quality of service!");
        return;
    }

    // Si pas de partage ou <1, on met 1 et on cache "each"
    if (isNaN(numberOfPeople) || numberOfPeople < 1) {
        numberOfPeople = 1;
        eachText.style.display = "none";
    } else {
        eachText.style.display = "inline";
    }

    // Calculs
    const tipTotal = billAmount * serviceQuality;
    const tipTotalFixed = tipTotal.toFixed(2);
    const totalWithTip = (billAmount + tipTotal).toFixed(2);
    const tipPerPerson = (tipTotal / numberOfPeople).toFixed(2);
    const totalPerPerson = (totalWithTip / numberOfPeople).toFixed(2);

    // Affichage du tip par personne
    tipSpan.textContent = tipPerPerson;
    totalTipDiv.style.display = "block";

    // Construction du détail
    let html = `
    <p>Montant de la facture : $${billAmount.toFixed(2)}</p>
    <p>Pourboire total (${(serviceQuality * 100).toFixed(0)}%) : $${tipTotalFixed}</p>
    <p>Total à payer : $${totalWithTip}</p>
  `;
    if (numberOfPeople > 1) {
        html += `<p>Total par personne : $${totalPerPerson}</p>`;
    }

    detailsDiv.innerHTML = html;
    detailsDiv.style.display = "block";
}

// Listener pour le bouton reset
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
    billInput.value = "";
    serviceSelect.value = "0";
    peopleInput.value = "";
    totalTipDiv.style.display = "none";
    detailsDiv.style.display = "none";
    eachText.style.display = "inline";
});
