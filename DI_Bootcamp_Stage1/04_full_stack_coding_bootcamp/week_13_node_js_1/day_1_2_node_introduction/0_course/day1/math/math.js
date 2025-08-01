export const multi = (a, b) => a * b;
export const increment = (a, b) => a + b;
export const decrement = (a, b) => a - b;
export const divide = (a, b) => {
  if (b === 0) throw new Error("Division by zero not allowed");
  return a / b;
};

export default decrement;

// console.log(multi(5, 3));
// console.log(increment(5, 3));
// console.log(decrement(5, 3));
// console.log(divide(5, 3));
// console.log(divide(5, 0));
// module.exports = {
//   multi,
//   increment,
//   decrement,
//   divide,
// };
