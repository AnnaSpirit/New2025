/**
 * Create a new Folder - math
 * Create a file math.js
 * create 4 function - multi, divide, plus, minus - 2 inputs parametes (a,b)
 * return the a * b, a / b, a + b, a -b
 * Test these functions
 * create a module from math.js
 * use this functions in app.js
 */

function multi(a, b) {
    return a * b;
}
// const multi = (a, b) => a * b;

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
function plus(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}

// Export the functions as a module
module.exports = {
    multi,
    divide,
    plus,
    minus
};