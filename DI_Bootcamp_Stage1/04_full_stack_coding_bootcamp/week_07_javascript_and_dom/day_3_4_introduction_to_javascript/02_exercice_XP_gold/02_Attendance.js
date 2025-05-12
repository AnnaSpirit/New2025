let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}


//1. Prompt the student for their name.

//2.If the name is in the object, console.log the name of the student and the country they come from. For example: "Hi! I'm [name], and I'm from [country]." Hint: You don’t need to use a for loop, just look up the statement if ... in

//3. If the name is not in the object, console.log: "Hi! I'm a guest."

let name = prompt("Please enter your name:").toLowerCase(); // Prompt the user for their name and convert it to lowercase
if (name in guestList) { // Check if the name is in the guestList object
    
    console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`); // If the name is found, log the message with the country
}
else { // If the name is not found in the guestList object
    console.log("Hi! I'm a guest."); // Log the message for guests
}
