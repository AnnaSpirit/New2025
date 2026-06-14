/* .

Exercise 1 : Location

*/
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { name, location: { country, city, coordinates: [lat, lng] } } = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

/*OUTPUT = I am John Doe from Vancouver,Canada. Latitude(49.2827), Longitude(-123.1207)*/


/*

Exercise 2: Display Student Info

*/
function displayStudentInfo(objUser) {
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' });

// Output: 'Your full name is Elie Schoppik'

/*

Exercise 3: User & id

*/
const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArray = Object.entries(users);
console.log(usersArray);
// Output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

const usersArrayModified = Object.entries(users).map(([name, id]) => [name, id * 2]);
console.log(usersArrayModified);
// Output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member);

/*OUTPUT = object*/

/*

Exercise 5 : Dog class

*/
class Dog {
    constructor(name) {
        this.name = name;
    }
};
/*Analyze the options below. Which constructor will successfully extend the Dog class?
  // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};

  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};

  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};
ANSWER: 4.
*/
/*

Exercise 6 : Challenges

*/

[2] === [2] //True
{ } === {} //False

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number) //4
console.log(object3.number) //4
console.log(object4.number) //5



class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    sound(animalSound) {
        return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}!`;
    }
}

const farmerCow = new Mammal(
    "Lily",
    "cow",
    "brown and white"
);

console.log(farmerCow.sound("Moooo"));


// const farmerCow = new Mammal(
//     "Marguerite",
//     "cow",
//     "black, white and with one eye brown"
// );

// console.log(farmerCow.sound("Meeeuuhhh"));