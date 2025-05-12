const people = ["Greg", "Mary", "Devon", "James"];

//**Part 1 - Review about arrays */

//1. Write code to remove “Greg” from the people array.

people.shift(); // Remove the first element of the array (Greg)
console.log(people); // ["Mary", "Devon", "James"]

//2. Write code to replace “James” to “Jason”.

people[people.length - 1] = "Jason"; // Replace the last element of the array (James) with Jason
console.log(people); // ["Mary", "Devon", "Jason"]

//3. Write code to add your name to the end of the people array.

people.push("Anna"); // Add your name to the end of the array
console.log(people); // ["Mary", "Devon", "Jason", "Anna"]

//4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log(people.indexOf("Mary")); // 0 (Mary is at index 0 in the array)

//5. Write code to make a copy of the people array using the slice method. 1. The copy should NOT include “Mary” or your name. Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"]; Hint: Check out the documentation for the slice method

people.slice(1, people.length - 1); // Create a copy of the array excluding the first and last elements (Mary and Anna)
console.log(people); // ["Devon", "Jason"]

//6. Write code that gives the index of “Foo”. Why does it return -1 ?

console.log(people.indexOf("Foo")); // -1 (Foo is not in the array, so it returns -1)

//7. Create a variable called last which value is the last element of the array. Hint: What is the relationship between the index of the last element in the array and the length of the array?

const last = people[people.length - 1]; // Get the last element of the array (Jason)
console.log(last); // "Jason"

// The index of the last element is always one less than the length of the array. For example, if the length is 4, the last index is 3 (0, 1, 2, 3).

//**Part 2 - Loops */

//1. Using a loop, iterate through the people array and console.log each person.

for (let i = 0; i < people.length; i++) {
  console.log(people[i]); // Log each person in the array
}

//2. Using a loop, iterate through the people array and exit the loop after you console.log “Devon” . Hint: take a look at the break statement in the lesson.

for (let i = 0; i < people.length; i++) {
  if (people[i] === "Devon") {
    console.log(people[i]); // Log "Devon"
    break; // Exit the loop after logging "Devon"
  }
}
