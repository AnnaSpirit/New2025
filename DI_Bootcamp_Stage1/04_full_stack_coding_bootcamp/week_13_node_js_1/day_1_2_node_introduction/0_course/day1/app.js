// const { hello, greeting } = require("./main.cjs");
import { hello, greeting } from "./main.cjs";

// const {multi, increment,decrement,divide} = require('./math/math.js')
import { multi, increment, decrement, divide } from "./math/math.js";
import a from "./math/math.js";

import axios from "axios";

// console.log(a);

// console.log(hello("Anne"), greeting("Donald"));

/**
 * Create a new Folder - math
 * Create a file math.js
 * create 4 function - multi, divide, plus, minus - 2 inputs parametes (a,b)
 * return the a * b, a / b, a + b, a -b
 * Test these functions
 * create a module from math.js
 * use those functions in app.js
 */
/** CommonJS module / require*/
/** ES6 type module - export import */
// console.log(multi(5, 3));
// console.log(increment(5, 3));
// console.log(decrement(5, 3));
// console.log(divide(5, 3));
// try {
//     console.log(divide(5, 0));
// } catch (error) {
//     console.log(error.message);
// }


const res = await axios.get('https://jsonplaceholder.typicode.com/users')
console.log(res.data);