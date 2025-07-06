const { multi, divide, plus, minus } = require('./math.js');

// Test the functions
const a = 10;
const b = 5;

console.log(`Multiplication of ${a} and ${b}:`, multi(a, b));
console.log(`Division of ${a} by ${b}:`, divide(a, b));
console.log(`Addition of ${a} and ${b}:`, plus(a, b));
console.log(`Subtraction of ${a} from ${b}:`, minus(a, b));

// Test division by zero
try {
    console.log(`Division of ${a} by 0:`, divide(a, 0));
} catch (error) {
    console.error(error.message);
}

