/*
Exercice 1 : print Full Name
*/

function printFullName({ first, last }) {
    return `Your full name is ${first} ${last}`;
}
console.log(printFullName({ first: 'Elie', last: 'Schoppik' }));


/*
Exercice 2 : keys and values
*/
//[ [keys triées], [valeurs correspondantes] ]


function keysAndValues(object) {
    const keys = Object.keys(object).sort();
    const values = keys.map(key => object[key]);

    return [keys, values];
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// [["a", "b", "c"], [1, 2, 3]]

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
// [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
// [["key1", "key2", "key3"], [true, false, undefined]]


/*
Exercice 3 : Counter class
*/

class Counter {
    constructor() {
        this.count = 0;
    }
    //counterOne.count = 0

    increment() {
        this.count++;
    }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

//counterOne.count = 2

const counterTwo = counterOne;
counterTwo.increment();
//counterOne = counterTwo //= 2
console.log(counterOne.count);
//3
