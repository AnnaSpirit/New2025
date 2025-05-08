//1. Prompt the user for a number. Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

//2. While the number is smaller than 10 continue asking the user for a new number. Tip : Which while loop is more relevant for this situation?

let userInput = prompt("Please enter a number:"); // Prompt the user for a number
console.log(typeof userInput); // Check the data type of the input (string)

if (isNaN(userInput)) {
  console.log("Please enter a valid number."); // Check if the input is a number
}
else {
  while (userInput < 10) {
    userInput = prompt("Please enter a number greater than or equal to 10:"); // Prompt the user for a new number
    console.log(typeof userInput); // Check the data type of the input (string)
  }
}

