STRUCTURE: 
        // switch (expression) {
        // case valeur1:
            // Code à exécuter si expression === valeur1
        //     break;
        // case valeur2:
            // Code à exécuter si expression === valeur2
        //     break;
        // default:
            // Code à exécuter si aucune des valeurs ne correspond
        // }



// EXERCICE :
// 1. Write as comments the steps of the resolution of this piece of code
// 2. Guess what will be the result before checking it

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break; //Not valid step, we go to the next
  case 4:
    alert( 'Exactly!' );
    break; //Valid step, expected result
  case 5:
    alert( 'Too large' );
    break; //Step ignored, result already obtained
  default:
    alert( "I don't know such values" );
}

// So a = 4, so the result will be "Exactly!"

let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break; // Valid step, expected result

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break; //These two boxes are grouped together. In other words, if A corresponds a to 3 or 5, the same block of code is executed.

  default:
    alert('The result is strange. Really.');
}

// So a = 4, so the result will be "Right!"