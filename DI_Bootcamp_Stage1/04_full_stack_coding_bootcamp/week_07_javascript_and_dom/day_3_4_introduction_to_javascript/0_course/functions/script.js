// /** not / bad */

// let sentence = "The movie is not that bad, I like it";

// let wordNot = sentence.indexOf("not");
// console.log("wordNot=>", wordNot);

// let wordBad = sentence.indexOf("bad");
// console.log("wordBad=>", wordBad);

// /** check wordNot !== -1 */
// /** check wordBad !== -1  */
// /** check wordBad > wordNot */
// if (wordNot === -1) {
//   console.log(sentence);
// } else if (wordBad === -1) {
//   console.log(sentence);
// } else if (wordBad <= wordNot) {
//   console.log(sentence);
// } else {
//     /** replace not ... bad to good */
//   let before = sentence.slice(0, wordNot)
//   console.log('before=>', before);

//   let after = sentence.slice(wordBad+ 3)
//   console.log('after=>', after);

//   let result = before + "good" + after
//   console.log(result);
// }

// if (wordNot !== 1 && wordBad !== -1 && wordBad > wordNot) {
//   /** replace not ... bad to good */
//   let before = sentence.slice(0, wordNot)
//   console.log('before=>', before);

//   let after = sentence.slice(wordBad+ 3)
//   console.log('after=>', after);

//   let result = before + "good" + after
//   console.log(result);
// } else {
//   console.log(sentence);
// }

/** Functions */

function functionName() {
  /** logic */
}

function showMessage() {
  console.log("Hello everyone!");
}

// showMessage()
// showMessage()
// showMessage()

function sayHello(param, param1) {
  console.log(`Hello ${param} ${param1}`);
}

// sayHello("John", "Due");

/** default parameters */

function sum(a = 5, b = 5) {
  //   console.log(b);
  /** type guard */
  //   if (typeof b === "undefined") {
  //     b = 0;
  //   }

  console.log(a + b);
}

// sum();

let name = "John";

function getName() {
  name = "Dan";
  console.log(name);
}

// console.log(name);

// getName();

/** return statement */

function getFullName(first, last) {
  return first + " " + last;
}

let fullname = getFullName("John", "Due");
// console.log(fullname);

function sumAndMultiple(a, b) {
  /** sum of a + b and a * b*/
  // return [a+b, a*b]
  // return {sum: a+b, multiple:a*b}
  return 10;
}

let result = sumAndMultiple(5, 3);
// console.log(result);

function testReturn() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    return 5;
  }
  return "end";
}

//  console.log(testReturn());

nameOne();
/** decleration */
function nameOne(params) {}

/** expression */
const getSum = function (param1) {};
getSum();

/** es6 arrow functions */
// let a = 7
let getEmployee = (param1, param2) => {
  return param1 + param2;
};
//  console.log(getEmployee);
let arr;
const show = (a) => a + 10;

console.log(show(5));
//  getEmployee = 'abc'
