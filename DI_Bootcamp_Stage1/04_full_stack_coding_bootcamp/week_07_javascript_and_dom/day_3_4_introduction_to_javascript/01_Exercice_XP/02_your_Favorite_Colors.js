//1. Create an array called colors where the value is a list of your five favorite colors.

const colors = ["red", "blue", "green", "yellow", "purple"];

// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect…

for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`); // Log the color with its index
}

//3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number. Hint : create an array of suffixes to do the Bonus

const colors = ["red", "blue", "green", "yellow", "purple"];
const suffixes = ["st", "nd", "rd", "th", "th"];  // Les suffixes pour 1er, 2e, 3e, etc.

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}
// Output:
// My 1st choice is red
// My 2nd choice is blue
// My 3rd choice is green
// My 4th choice is yellow
// My 5th choice is purple
