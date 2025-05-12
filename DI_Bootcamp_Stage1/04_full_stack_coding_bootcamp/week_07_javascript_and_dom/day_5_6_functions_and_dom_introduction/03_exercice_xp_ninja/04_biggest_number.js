//Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note: This function should work with any array;

function biggestNumberInArray(arrayNumber) {
    let biggestNumber = arrayNumber[0]; // Initialize the biggest number with the first element of the array

    for (let i = 1; i < arrayNumber.length; i++) { // Start from the second element
        if (arrayNumber[i] > biggestNumber) { // Compare with the current biggest number
            biggestNumber = arrayNumber[i]; // Update if a bigger number is found
        }
    }

    return biggestNumber; // Return the biggest number found
}
// Example usage:
const numbers = [3, 5, 7, 2, 8, 10, 1];
const biggestNumber = biggestNumberInArray(numbers);
console.log("The biggest number in the array is: " + biggestNumber); // Output: The biggest number in the array is: 10
// Test with an empty array
const emptyArray = [];
const biggestNumberInEmptyArray = biggestNumberInArray(emptyArray);
console.log("The biggest number in the empty array is: " + biggestNumberInEmptyArray); // Output: The biggest number in the empty array is: undefined
// Test with an array of negative numbers
const negativeNumbers = [-3, -5, -7, -2, -8, -10, -1];
const biggestNegativeNumber = biggestNumberInArray(negativeNumbers);
console.log("The biggest number in the array of negative numbers is: " + biggestNegativeNumber); // Output: The biggest number in the array of negative numbers is: -1