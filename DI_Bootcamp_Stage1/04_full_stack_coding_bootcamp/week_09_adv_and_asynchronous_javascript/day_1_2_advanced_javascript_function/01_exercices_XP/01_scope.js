// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared
// with const instead of let ?










//**📘 Explications */

// #1

// Quand tu fais funcOne(), à l’entrée a vaut 5. La condition if (a > 1) est vraie, donc a passe à 3. L’alerte affichera “inside the funcOne function 3”.

// Si tu remplaces let a = 5; par const a = 5;, alors l’instruction a = 3; dans le if déclenchera une erreur TypeError: Assignment to constant variable, car on ne peut pas réassigner une constante.

// #2

// Initialement, la variable globale a vaut 0.

// funcThree() affiche “inside the funcThree function 0”.

// funcTwo() fait a = 5; : la variable globale est modifiée.

// À nouveau funcThree() affiche “inside the funcThree function 5”.

// Si tu choisis const a = 0;, alors l’assignation a = 5; dans funcTwo() lève une erreur TypeError: Assignment to constant variable, car on tente de modifier une constante.

// #3

// funcFour() exécute window.a = "hello", ce qui crée(ou écrase) la variable globale a.

// Ensuite funcFive() alerte “inside the funcFive function hello”, en piochant dans a au niveau global.

// #4

// On a en global let a = 1;. Dans funcSix(), on redéclare localement let a = "test";.

// Appeler funcSix() affiche “inside the funcSix function test”, grâce au shadowing(masquage) de la variable globale.

// Si tu utilises const a = "test"; dans la fonction, le comportement reste identique: la constante locale a vaut "test" et n’est pas réassignée, donc pas d’erreur.

// #5

// En global let a = 2;. Dans le bloc if, tu redéclares let a = 5;.

// L’alerte à l’intérieur du if donne “in the if block 5”.

// En dehors, elle donne “outside of the if block 2” : la a globale n’a pas été modifiée.

// Si tu remplaces let par const (pour la variable globale ou la variable de bloc), le code fonctionne exactement de la même façon, car on ne tente pas de réassigner ces constantes — le shadowing est toujours permis.

//** 📙 English */

// #1

// When you run funcOne(), a starts as 5. The if (a > 1) is true, so a becomes 3. The alert shows “inside the funcOne function 3”.

// If you declare a with const a = 5; instead of let, then a = 3; inside the if throws a TypeError: Assignment to constant variable, because you can’t reassign a constant.

// #2

// Globally, a is initialized to 0.

// funcThree() alerts “inside the funcThree function 0”.

// funcTwo() sets a = 5;, modifying the global.

// Calling funcThree() again alerts “inside the funcThree function 5”.

// If you use const a = 0;, then a = 5; in funcTwo() will throw a TypeError: Assignment to constant variable, since you can’t change a constant.

// #3

// funcFour() does window.a = "hello", creating(or overwriting) the global a.

// Then funcFive() alerts “inside the funcFive function hello”, reading the global variable.

// #4

// You have let a = 1; in the global scope.Inside funcSix(), you declare let a = "test"; locally.

// Calling funcSix() alerts “inside the funcSix function test”, thanks to shadowing: the local a hides the global one.

// If you use const a = "test"; inside the function, the behavior is identical: the local constant a is "test" and is never reassigned, so no error occurs.

// #5

// Globally let a = 2;. Inside the if block you declare let a = 5;.

// The alert inside the block shows “in the if block 5”.

// The alert outside shows “outside of the if block 2”, since the global a wasn’t changed.

// If you replace let with const (either for the global or the block variable), the code behaves the same way, because you never reassign those constants — shadowing still works.