//1.Create an object called family with a few key value pairs.

const family = {
    father: "Luc",
    mother: "Lea",
    son: "Louis",
    daughter: "Lina",
    pet: "Lion"
}

//2.Using a for in loop, console.log the keys of the object.

for (let key in family) {
  console.log(key);  // Affiche chaque clé de l'objet family
}


//3.Using a for in loop, console.log the values of the object.

for (let key in family) {
  console.log(family[key]); // Affiche chaque valeur de l'objet family
}

