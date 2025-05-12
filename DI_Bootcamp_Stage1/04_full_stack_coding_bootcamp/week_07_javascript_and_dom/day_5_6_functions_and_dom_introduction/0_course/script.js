// console.log(getFullName("John", "Doe")); // John Doe

/** WALK THROW THE DOM  +++ Cela permet de modifier le contenue dune page HTML/CSS (qui est la base (template) et les mofification sont des personnalisations : Facebook la structure de la page est identique mais le fil d'actu differere celon les gens.*/
//* 1. Select the element by ID


let myDiv = document.getElementById("div1");

console.log(myDiv);
myDiv.style.backgroundColor = "yellow";

//* 2. Select the element by Tag name */
let myDivs = document.getElementsByTagName("div");
console.log(myDivs); // HTMLCollection(2) [div#div1, div#div2]

//* 3. Select the element by class name


//* 4. Select the element by query selector

//* 5. Select the element by query selector all */


//* 6. Add an element to the DOM


//* 7. append an element to the DOM


