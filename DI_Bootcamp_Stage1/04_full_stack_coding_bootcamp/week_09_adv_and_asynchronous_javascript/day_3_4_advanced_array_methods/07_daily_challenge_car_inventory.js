// Partie I : récupérer la première Honda et formater la réponse
function getCarHonda(carInventory) {
    // 1. find() renvoie le premier élément dont car_make === "Honda"
    const firstHonda = carInventory.find(car => car.car_make === "Honda");

    // 2. On s’assure qu’on a bien trouvé une Honda
    if (!firstHonda) {
        return "No Honda in inventory.";
    }

    // 3. On retourne la phrase demandée
    return `This is a ${firstHonda.car_make} ${firstHonda.car_model} from ${firstHonda.car_year}.`;
}

const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

console.log(getCarHonda(inventory));
// → "This is a Honda Accord from 1983."


// Partie II : trier l’inventaire par car_year (ordre croissant)
function sortCarInventoryByYear(carInventory) {
    // 1. On copie le tableau d’origine pour ne pas le modifier
    const sortedInventory = [...carInventory];

    // 2. On utilise sort() avec une fonction de comparaison sur car_year
    sortedInventory.sort((a, b) => a.car_year - b.car_year);

    // 3. On renvoie le nouveau tableau trié
    return sortedInventory;
}


console.log(sortCarInventoryByYear(inventory));
