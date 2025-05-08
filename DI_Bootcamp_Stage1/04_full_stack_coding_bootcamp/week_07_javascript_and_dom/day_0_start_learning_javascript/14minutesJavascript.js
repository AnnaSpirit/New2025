alert('Hello World!')
//* = pop up alert box with the message "Hello World!"*/

// alert() is a native JavaScript function here with the 'Hello World!' argument. it's requires only one argument

// cet argument est du type string, il est donc entre guillemets doubles.

// autre type: les numbers(ElementInternals, decimaux, calculés, etc.)

alert(9+5 * 3)
//* = pop up alert box with the message 24*/
// On a utiliser le + et le * pour faire une addition et une multiplication.
// les espaces entre les operateurs et les nombres sont facultatifs, juste utile pour la lecture.

//Browser dimensions  */

alert(window.innerWidth)
//* = pop up alert box with the message 1184 (ThinkVision), Dell (666), Acer (832.)*/

//* ASTUCE:  en utlisant dans console la fleche 'Haut'on peut recuperer les alertes precedentes.*/

// pour la largeur de la fenetre, on peut aussi utiliser window.innerWidth et window.innerHeight pour la hauteur de la fenetre.

//Ici window est du type object, et innerWidth et innerHeight sont des propriétés de cet objet.
// La propriete d'un objet peut aussi cet objet lui meme. Inception 🎬 - Étant donné que window.location est un objet aussi, il a ses propres propriétés. Pour accéder à ces propriétés, il suffit d'ajouter un autre point . et le nom de la propriété. par exemple href:

alert(window.location.href)
//* = pop up alert box with the message https://jgthms.com/javascript-in-14-minutes/*/

//* METHODS*/

// Quand la propriété d'un objet est une fonction, elle est appelée une méthode à la place. En fait, la fonction alerte() que nous avons utilisé jusqu'à présent est une méthode de l'objet de fenêtre.

window.alert('OMG')
//* = pop up alert box with the message OMG*/

// Puisque window est l'objet de premier niveau dans le navigateur, vous pouvez accéder directement à toutes ses propriétés et méthodes.

// C'est pourquoi taper location.href est la même chose que taper window.location.href. Pourquoi alert() est équivalent à window.alert():

// Les objets sont utiles pour regrouper plusieurs propriétés sous le même nom et la même portée, et définir une hiérarchie dans les données.

//*Type ARRAY (♒tableau)*/

// ARRAY est un type qui peut contenir plusieurs valeurs, comme si elles étaient dans une liste ordonnée.

alert(['What', 'is', 'up'])
//* = pop up alert box with the message What,is,up*/

//*Function:*/
// structure           alert(argument)
// ici nous avions 3 arguments, mais on peut en mettre autant qu'on veut. On peut aussi mettre des arguments de type différent dans le même tableau.

alert([2 + 5, 'samurai', true])
//* = pop up alert box with the message 7,samurai,true*/

//* BOLEANS*/
// Le type boolean est un type qui ne peut avoir que deux valeurs: true ou false.
// En combinant la fonction alert() et le tableau de 3 éléments sur une seule ligne, il rend notre code moins lisible.
// On va le diviser en 2: Alert (la function), puis l'Array sur sa propre ligne de code.

//* VARIABLES*/
// On va deplacer l'array dans une variable, et l'utiliser dans la fonction alert().
// Une variable est un conteneur qui stocke une certaine valeur. Il a un nom (afin que vous puissiez l'identifier et le réutiliser), et il a une valeur (afin que vous puissiez le mettre à jour plus tard).

var my_things = [2 + 5, 'samurai', true];

///my_things est le  nom de la variable, [2 + 5, 'samurai', true] est la valeur de la variable.

// 💥 le = ici est un operateur d'assignement.
// Il assigne la valeur de droite à la variable de gauche. Il ne s'agit pas d'une équation mathématique, mais d'une assignation de valeur à une variable.

var my_things = [2 + 5, 'samurai', true];
alert(my_things);
//* = pop up alert box with the message 7,samurai,true*/

// En complement de var, nous avons let et const.

// let et const sont des variables de portée de bloc, ce qui signifie qu'elles ne sont accessibles que dans le bloc où elles ont été déclarées. var est une variable de portée globale, ce qui signifie qu'elle est accessible dans tout le code.

//* INDEX

// Pour accéder à un élément spécifique d'un array, vous devez d'abord connaître son index (ou sa position) dans le tableau. Vous devez ensuite emballer cet index entre crochets.

var my_things = [2 + 5, 'samurai', true];
alert(my_things[1]);
///* = pop up alert box with the message samurai*/
// Le premier élément d'un tableau a l'index 0, le deuxième a l'index 1, et ainsi de suite.

// Il s'avère que les variables sont aussi des objets. Ce qui signifie que les variables ont également des propriétés et des méthodes.

var my_things = [2 + 5, 'samurai', true];
alert(my_things.length);
//* = pop up alert box with the message 3*/
// La propriété length est une méthode qui renvoie le nombre d'éléments. Il s'agit d'une propriété de l'objet my_things, qui est un array.

var my_things = [2 + 5, 'samurai', true];
alert(my_things.length);
/** = pop up alert box with the message 3
On peut modifier le nombre en y en ajoutant ou supprimant des elements. Les VARIABLES sont editables. 

var my_things = [2 + 5, 'samurai', true];
alert(my_things);
my_things = [2 + 5, 'samurai', true, 'LOVE'];
alert(my_things);
//* = pop up alert box with the message 7,samurai,true*/
//* = pop up alert box with the message 7,samurai,true,LOVE*/

// la deuxième fois que nous attribuons une valeur à my-things, nous n'utilisons pas le mot-clé var: c'est parce que nous éditons la variable de my_things défini deux lignes au-dessus.

//💥 Vous n'utilisez le mot-clé var que lorsque vous créez une nouvelle variable, pas quand vous en éditez (modifier) une.

//**PUSH() Methode pour editer un array */

var my_things = [2 + 5, 'samurai', true];
alert(my_things);
my_things.push('The Button');
alert(my_things);
//* = pop up alert box with the message 7,samurai,true,The Button*/

//**INCLUDES() Methode pour recherche une valeur dans l'array */

var my_things = [2 + 5, 'samurai', true];
alert(my_things.includes('ninja'));
//* = pop up alert box with the message false*/

// les booléens existent à la suite d'un appel de fonction (comme inclut()) ou d'une comparaison ( >= )  et sont assez Rare.

//**Conditional statements */

//Les déclarations conditionnelles sont l'un des concepts les plus importants de la programmation. Ils permettent à votre code d'effectuer certaines commandes uniquement si certaines conditions sont remplies. Ces conditions peuvent par example être basées sur:

    // la saisie d'un utilisateur (le mot de passe est-il correctement entré?)
    // l'état actuel (est-ce que c'est le jour ou la nuit?)
    // la valeur d'un certain élément (est-ce que cette personne est-elle âgée de plus de 18 ans?)

//ASTUCES:  appuyez sur Shift-Enter pour ajouter des sauts de ligne dans la console.
    
// Nous faisons une autre comparaison ici, mais avec l'opérateur "égale à" == à la place.

if (window.location.hostname == 'jgthms.com') {
  alert('Welcome on my domain! 🤗')
}
//* = No alert box* 🔘On est pas sur le site. */

// Pour gérer le cas contraire, lorsque le nom d'hôte n'est pas 'jgthms.com', nous pouvons utiliser l'opérateur "pas égal à" !=:

if (window.location.hostname != 'jgthms.com') {
  alert('Please come back! 😢')
}
//* = pop up alert box with the message Please come back! 😢*/

// Avec cette configuration conditionnelle, nous pouvons être sûrs que:
//     une seule des deux alertes sera déclenchée, mais jamais les deux
//     au moins une des deux alertes sera déclenchée, parce que nous couvrons tous les cas

// Bien que ELSE utile pour couvrir tous les cas restants, vous voulez parfois traiter plus de deux cas.

// En utilisant ELSE IF si vous pouvez ajouter des déclarations intermédiaires et traiter plusieurs cas :

if (window.innerWidth > 2000) {
  alert('Big screen! 🔥')
} else if (window.innerWidth < 600) {
  alert('Probably a mobile phone 📱')
} else {
  alert('Decent size 👍')
}
//* = pop up alert box with the message Decent size 👍*/

//**LOOPS */
// Boucles sont des structures de code qui vous permettent d'exécuter le même code plusieurs fois, sans avoir à le réécrire à chaque fois. Il existe plusieurs types de boucles, mais la plus courante est la boucle for.

for (var i = 0; i < 3; i++) {
  alert(i);
}
// * = 3 pop up alert box: with the message 0 puis une autre avec 1 et une autre avec 2*/

    // var i = 0 is the initial state
    // Before the loop even starts, the variable i is assigned a value of zero 0.
    // i < 3 is the conditional statement
    // On every iteration of the loop, we check this comparison.
    // If it's true, we execute the code in the block.
    // If it's false, we exit the loop.
    // i++ is the increment expression
    // If the block of code is executed, this expression is executed.
    // In this case, the value of i is incremented by 1.

// turn 1: value of i = 0, test: 0 < 3 = true, execute the code in the block, increment i by 1 (i = 1)
// turn 2: value of i = 1, test: 1 < 3 = true, execute the code in the block, increment i by 1(i = 2)
// turn 3: value of i = 2, test: 2 < 3 = true, execute the code in the block, increment i by 1(i = 3)
// turn 4: value of i = 3, test: 3 < 3 = false, exit the loop.

//**Looping through arrays */

// Arrays are a perfect candidate for loops, because in programming we often want to repeat the same action for each item of an array.

// Let's say we wanted to trigger an alert box for each item of an array. While we could write as many alert() statements as there are items in the array (😰), this solution is cumbersome and ineffective! It would be prone to errors, and wouldn't scale at all with bigger arrays.

// Since programming languages are here to help us simplify our work, let's figure out a better way. We already know a few things:

//     We know how to get an array's length
//     We know how to access an array's item by using the index
//     We have access to the variable i, which conveniently increments 1 by 1

// By combining these informations, we can devise the following snippet: 


var my_things = [2 + 5, 'samurai', true];
for (var i = 0; i < my_things.length; i++) {
  alert(my_things[i]);
}
// * = 3 pop up alert box: with the message 7 puis une autre avec samurai et une autre avec true*/

// Alors que l'utilisation d'une boucle simplifie le processus de traverser chaque élément d'un tableau, nous devions encore créer un pour bloc manuellement et créer une nouvelle variable i dont le seul but était d'incrémenter après chaque boucle.

//**forEach loop  Methode qui permet d'effectuer une tâche pour chaque élément du array*/

var my_things = [2 + 5, 'samurai', true];
my_things.forEach(function(item) {
  alert(item);
});
// * = 3 pop up alert box: with the message 7 puis une autre avec samurai et une autre avec true*/

//  Note a few improvements:

//     There is no i variable involved
//     We don't need to access the array's length
//     We don't need to use the index with my_thing[i] to access the item

// Remember the syntax of the alert() function? It was alert(argument).

// If you look carefully, you can see that forEach() has the exact same syntax! It's forEach(argument) but where the argument happens to be a function that spans 3 lines.

// So far, we've used a few functions and methods:

//     the alert() function (or window method)
//     the push() array method
//     the includes() array method
//     the forEach() array method

// We know how to call a function, but how do you actually create one?

//**Creating a custom function  */

//  The power of programming languages is the ability to create your own functions, that fit your needs.

// Remember the keyword/parentheses combination that we used for if/else and for? Well, guess what: it's almost the same pattern here!

// I'm saying "almost" because the only difference is that a function needs a name!

// Let's create a function called greet(), with 1 parameter called name, and then immediately call it:

function greet(name) {
  var message = 'Hey there ' + name;
  alert(message);
}
greet('Alex');

//* greet('Alex', 'John', 'Doe'); CA NE FONCTIONNE PAS AVEC PLUSIEURS ARGUMENTS! */

//  Unless we call the greet() function at the end, nothing happens! That's because the alert() call is inside the scope of greet() so it's not triggered unless the parent function greet() itself is called!

// Basically, by creating greet(), you're only telling the browser: "Hey! I've created this new function. So if at some point I call it, please execute whatever is inside!".

// That's why, when you call greet() at the end, the browser executes its content, which happens to be calling alert().

// It's important to understand that functions are a 2-step process: creating it first, calling it afterwards.

// As a matter of fact, the alert() function we've used all along was already created beforehand. It just exists somewhere inside your browser. 




//**KEYWORDS: */
// if/else/else if