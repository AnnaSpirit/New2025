// for (var index = 0; index < 5; index++) {
//     console.log(index);
// }

// console.log(index);
// ce la no fonctionne pas car index est une variable de type var et elle est declarer dans le block scope et non pas dans le global scope.

// var b;
// let a;
// const b = 0;

// Daily challengerecap

// //not bad//
// let sentence = "The movie is not that bad, I like it.";

// let wordNot = sentence.indexOf("not");
// console.log(wordNot); // 10
// console.log("wordNot", wordNot); // 10

// let wordBad = sentence.indexOf("bad");
// console.log(wordBad); // 20
// console.log("wordBad", wordBad); // 20

// //Check wordNot !== -1
// //Check wordBad !== -1
// //Check wordBad > wordNot

// if (wordNot !== -1) {
//     console.log sentence
// }

// else if (wordBad !== -1) {
//     console.log sentence
// }

// else if (wordBad <= wordNot) {
//     console.log sentence
// }

// // Au lieu décrire le code de cette manière en 3 blocks, on peut le faire de cette manière :

// if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
//     // replace not ... bad to good
// } else {
//     console.log(sentence);
// }



// _________COURSE_________________________

/** Functions */

// function functionName() {
//     // logic of the function
// }

// function showMessage() {
//     console.log("Hello World!");
// }

// showMessage(); // Hello World!
// showMessage(); // Hello World!
// showMessage(); // Hello World!

// function sayHello(parameter) {
//     console.log("Hello " $/parameter: any + "!");
// }

// function sayHello(param param1) {
//     console.log("Hello ${ param } ${param1}");
// }

// //**Default PARAMETER */

// function sum(a, b) {
//     console.log(b); // undefined
//     if (b === undefined) {
//         b = 0;
//     }
//     else {
//         console.log(a+b); // 5
//     }
//     sum(2); // 2  Parce que a=2 et b=undefined 2+0=2

// // function sum(a=5, b=0)

//     let name = "John";

//     function getName() {
//         name = "Dan";
//         comsole.log(name); // Dan
//     }
    
//     getName(); // Dan


// ________RETURN STATEMENT__________
    
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
    }
    getFullName("John", "Doe"); // John Doe

let fullName = getFullName("John", "Doe"); // John Doe
console.log(fullName); // John Doe

//** */ return 2 valeurs :

function sumAndMultiple(a, b) {
    //**sum of a+b and a*b */
    return [a + b, a * b];
}
    let result = sumAndMultiple(5, 3);
    console.log(result); // [8, 15]

//** DECLARATION DE FONCTION */
function nameOne(params) {
    }

//** EXPRESSION DE FONCTION */
const getSum = function (params1) {
    } 
    
// on ne peut acceder a une  expression si elle est declarer avant l'appel de la fonction.



//**es6: ARROW FUNCTION */

    const getEmployee = () => {

    }

//** SPECIAL car on ecrit les parametre differenment selon leur nombre (1_sans parentheses) ou plusieur_avec les parentheses))*/
    