// BMI : Body Mass Index **BMI = Mass / (Height * Height)

//1.Create two objects, each object should hold a person’s details. Here are the details: FullName, Mass, Height
    
// BMI(Body Mass Index) = Mass / (Height * Height)

const person1 = {
    fullName: "John Doe",
    mass: 70, // in kg
    height: 1.75 // in meters
};

const person2 = {
    fullName: "Jane Smith",
    mass: 60, // in kg
    height: 1.65 // in meters
};

//2.Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

const calculateBMI = function() {
    return this.mass / (this.height * this.height);
}

person1.calculateBMI = calculateBMI;
person2.calculateBMI = calculateBMI;

//3.Outside of the objects, create a JS function that compares the BMI of both objects.

const compareBMI = function(personA, personB) {
    const bmiA = personA.calculateBMI(); 
    const bmiB = personB.calculateBMI();

    if (bmiA > bmiB) {
        console.log(`${personA.fullName} has a higher BMI (${bmiA.toFixed(2)}) than ${personB.fullName} (${bmiB.toFixed(2)})`);
    } else if (bmiA < bmiB) {
        console.log(`${personB.fullName} has a higher BMI (${bmiB.toFixed(2)}) than ${personA.fullName} (${bmiA.toFixed(2)})`);
    } else {
        console.log(`${personA.fullName} and ${personB.fullName} have the same BMI (${bmiA.toFixed(2)})`);
    }
}

//4.    Display the name of the person who has the largest BMI.


compareBMI(person1, person2);
// Output: "John Doe has a higher BMI (22.86) than Jane Smith (22.04)"
