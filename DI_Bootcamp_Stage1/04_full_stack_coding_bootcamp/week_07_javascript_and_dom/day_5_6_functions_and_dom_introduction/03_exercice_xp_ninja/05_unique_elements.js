// Write a JS function that takes an array and returns a new array with only unique elements.

function uniqueElements(arr) {
    const uniqueArr = []; // Initialize an empty array to store unique elements

    for (let i = 0; i < arr.length; i++) { // Loop through each element in the input array
        if (!uniqueArr.includes(arr[i])) { // Check if the element is not already in the unique array
            uniqueArr.push(arr[i]); // If not, add it to the unique array
        }
    }

    return uniqueArr; // Return the array with unique elements
}
// Example usage:
const numbers = [1, 2, 3, 4, 5, 1, 2, 3];
const uniqueNumbers = uniqueElements(numbers);
// console.log("The unique elements in the array are: " + uniqueNumbers); // Output: The unique elements in the array are: 1,2,3,4,5
// Test with an empty array
const emptyArray = [];
const uniqueInEmptyArray = uniqueElements(emptyArray);
console.log("The unique elements in the empty array are: " + uniqueInEmptyArray); // Output: The unique elements in the empty array are:
// Test with an array of strings
const stringArray = ["apple", "banana", "apple", "orange", "banana"];
const uniqueStrings = uniqueElements(stringArray);
console.log("The unique elements in the string array are: " + uniqueStrings); // Output: The unique elements in the string array are: apple,banana,orange
// Test with an array of mixed types
const mixedArray = [1, "apple", 2, "banana", 1, true, 1, "apple"];
const uniqueMixed = uniqueElements(mixedArray);
console.log("The unique elements in the mixed array are: " + uniqueMixed); // Output: The unique elements in the mixed array are: 1,apple,2,banana,true