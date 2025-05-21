let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
}

function cloneGroceries() {
    const clone = { ...groceries };
    clone.fruits = [...groceries.fruits];
    clone.vegetables = [...groceries.vegetables];
    return clone;
}


// Affiche les 3 fruits dans la console
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

// Clone les variables et montre l’effet des affectations
const cloneGroceries = () => {
    // Copie d'une primitive (string)
    let user = client;
    client = "Betty";
    console.log(`Après reassignment de client → client = ${client}, user = ${user}`);
    // user reste "John" car les primitives sont copiées par valeur

    // Copie d'un objet (référence)
    let shopping = groceries;
    shopping.totalPrice = "35$";
    console.log(`Après modification de shopping.totalPrice → groceries.totalPrice = ${groceries.totalPrice}, shopping.totalPrice = ${shopping.totalPrice}`);
    // les deux voient "35$" car shopping et groceries pointent vers le même objet

    shopping.other.paid = false;
    console.log(`Après modification de shopping.other.paid → groceries.other.paid = ${groceries.other.paid}, shopping.other.paid = ${shopping.other.paid}`);
    // pareil pour les propriétés imbriquées : même référence ⇒ même effet
};

// Invocation des fonctions
displayGroceries();
// Affiche dans la console :
// pear
// apple
// banana

cloneGroceries();
// Affiche dans la console les trois lignes démontrant les points ci-dessus


// Explication GPT

// 1. user = client

// Ici client est une primitive(une string).Quand on fait let user = client, on crée une copie de la valeur.

//     Plus tard, changer client = "Betty" n’affecte pas user, qui reste "John".

// 2. shopping = groceries

// groceries est un objet.Lui affecter une autre variable ne fait pas de copie: shopping devient une référence au même objet.

// Modifier shopping.totalPrice ou shopping.other.paid revient à modifier directement groceries.Les deux variables pointent sur la même structure en mémoire.

//Bravo! 🎉 Tu vois ainsi la différence entre copie par valeur(primitives) et copie par référence(objets) en JavaScript.