// 1) Déclaration de fonction
function kgToGrams(kg) {
    return kg * 1000;
}
console.log(kgToGrams(5)); // 5000

// 2) Expression de fonction
const kgToGramsExpr = function (kg) {
    return kg * 1000;
};
console.log(kgToGramsExpr(2.3)); // 2300

// La déclaration de fonction est « hoisted » (remontée) tandis qu'une expression de fonction n'est connue qu'après évaluation.

// 3) Arrow function en une seule ligne
const kgToGramsArrow = kg => kg * 1000;
console.log(kgToGramsArrow(1.75)); // 1750



//Explications
// La déclaration(function ...) existe dès le début du script, tu peux l’appeler avant même de l’écrire.

//     L’expression(const ... = function) n’est disponible qu’après sa définition.

//         L’arrow function te permet d’aller droit au but: pas de return ni d’accolades quand tout tient sur une ligne.