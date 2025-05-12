// Instructions

// Let’s create functions that calculate your vacation’s costs:

//     Define a function called hotelCost().
//         It should ask the user for the number of nights they would like to stay in the hotel.
//         If the user doesn’t answer or if the answer is not a number, ask again.
//         The hotel costs $140 per night.The function should return the total price of the hotel.

//     Define a function called planeRideCost().
//         It should ask the user for their destination.
//         If the user doesn’t answer or if the answer is not a string, ask again.
//         The function should return a different price depending on the location.
//             “London”: 183$
//             “Paris” : 220$
//             All other destination: 300$

//     Define a function called rentalCarCost().
//         It should ask the user for the number of days they would like to rent the car.
//         If the user doesn’t answer or if the answer is not a number, ask again.
//         Calculate the cost to rent the car.The car costs $40 everyday.
//             If the user rents a car for more than 10 days, they get a 5 % discount.
//         The function should return the total price of the car rental.

//     Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//     Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//         Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

//     Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

function hotelCost() {
    let nights;
    do {
        nights = parseInt(prompt("How many nights would you like to stay in the hotel?"));
    } while (isNaN(nights) || nights <= 0);
    return nights * 140;
}

console.log(hotelCost());

function planeRideCost() {
    let destination;
    do {
        destination = prompt("What is your destination?");
    } while (typeof destination !== "string" || destination.trim() === "");

    switch (destination.toLowerCase()) {
        case "london":
            return 183;
        case "tel aviv":
            return 200;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

console.log(planeRideCost());

function rentalCarCost() {
    let days;
    do {
        days = parseInt(prompt("How many days would you like to rent the car?"));
    } while (isNaN(days) || days <= 0);

    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95; // Apply a 5% discount
    }
    return cost;
}

console.log(rentalCarCost());


function totalVacationCost() {
    const hotelCostValue = hotelCost();
    const planeRideCostValue = planeRideCost();
    const rentalCarCostValue = rentalCarCost();

    const totalCost = hotelCostValue + planeRideCostValue + rentalCarCostValue;

    console.log(`The car cost: $${rentalCarCostValue}, the hotel cost: $${hotelCostValue}, the plane tickets cost: $${planeRideCostValue}.`);
    return totalCost;
}

console.log(`Total vacation cost: $${totalVacationCost()}`);

// Bonus: 

function hotelCost(nights) {
    if (isNaN(nights) || nights <= 0) {
        return 0;
    }
    return nights * 140;
}
function planeRideCost(destination) {
    if (typeof destination !== "string" || destination.trim() === "") {
        return 0;
    }

    switch (destination.toLowerCase()) {
        case "london":
            return 183;
        case "tel aviv":
            return 200;
        case "paris":
            return 220;
        default:
            return 300;
    }
}
function rentalCarCost(days) {
    if (isNaN(days) || days <= 0) {
        return 0;
    }

    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95; // Apply a 5% discount
    }
    return cost;
}
function totalVacationCost() {
    let nights = parseInt(prompt("How many nights would you like to stay in the hotel?"));
    let destination = prompt("What is your destination?");
    let days = parseInt(prompt("How many days would you like to rent the car?"));

    const hotelCostValue = hotelCost(nights);
    const planeRideCostValue = planeRideCost(destination);
    const rentalCarCostValue = rentalCarCost(days);

    const totalCost = hotelCostValue + planeRideCostValue + rentalCarCostValue;

    console.log(`The car cost: $${rentalCarCostValue}, the hotel cost: $${hotelCostValue}, the plane tickets cost: $${planeRideCostValue}.`);
    return totalCost;
}

console.log(`Total vacation cost: $${totalVacationCost()}`);
