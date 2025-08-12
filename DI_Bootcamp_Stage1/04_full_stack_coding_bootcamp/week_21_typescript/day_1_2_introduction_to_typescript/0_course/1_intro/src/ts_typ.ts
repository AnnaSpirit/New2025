//NUMBER
let num: number;
num = 0;
//num - true

//STRING
let str: string;
str = "abc";

//BOOLEAN
let bool: boolean;
bool = true;
bool = false;

//ANY  --Try not to use this type
let a: any;
a = 6;
a = "6";
a = true

//UNION TYPE
let strNum: string | number;
strNum = "abc";
strNum = 123;
// strNum = true; //error, not a string or number
// strNum = {}; //error, not a string or number

//ARRAY
// let arr: string[] = ["a", "b", "c", 1];
let arr: string[] = ["a", "b", "c"];
arr.push(1); //error, 1 is a number, not a string

let arr: number[] = [1, 2, 3];
arr.push(1); 

let arr2: (string | number)[] = ["a", 1];
arr2.push("b");

//OBJECT
let obj: { name: string; age: number };
obj = [] //error, obj should be an object, not an array


//TUPLE
type my Tuple = [string, number, string];
let myTuple: my Tuple = ["abc", 123, "def"];

/*
[19:37:43] Starting compilation in watch mode...

src/ts_typ.ts:30:5 - error TS2451: Cannot redeclare block-scoped variable 'arr'.

30 let arr: string[] = ["a", "b", "c"];
       ~~~

src/ts_typ.ts:31:10 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

31 arr.push(1); //error, 1 is a number, not a string
            ~

src/ts_typ.ts:33:5 - error TS2451: Cannot redeclare block-scoped variable 'arr'.

33 let arr: number[] = [1, 2, 3];
       ~~~

src/ts_typ.ts:34:10 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

34 arr.push(1);
            ~

src/ts_typ.ts:41:1 - error TS2739: Type 'never[]' is missing the following properties from type '{ name: string; age: number; }': name, age

41 obj = [] //error, obj should be an object, not an array
   ~~~

src/ts_typ.ts:45:9 - error TS1005: '=' expected.

45 type my Tuple = [string, number, string];
           ~~~~~

src/ts_typ.ts:45:9 - error TS2749: 'Tuple' refers to a value, but is being used as a type here. Did you mean 'typeof Tuple'?

45 type my Tuple = [string, number, string];
           ~~~~~

src/ts_typ.ts:45:15 - error TS1005: ';' expected.

45 type my Tuple = [string, number, string];
                 ~

src/ts_typ.ts:45:18 - error TS2693: 'string' only refers to a type, but is being used as a value here.

45 type my Tuple = [string, number, string];
                    ~~~~~~

src/ts_typ.ts:45:26 - error TS2693: 'number' only refers to a type, but is being used as a value here.

45 type my Tuple = [string, number, string];
                            ~~~~~~

src/ts_typ.ts:45:34 - error TS2693: 'string' only refers to a type, but is being used as a value here.

45 type my Tuple = [string, number, string];
                                    ~~~~~~

src/ts_typ.ts:46:17 - error TS1005: ',' expected.

46 let myTuple: my Tuple = ["abc", 123, "def"];
                   ~~~~~

[19:37:44] Found 12 errors. Watching for file changes.
*/


//on declare les type
type user = {
  name: string;
  age: number;
  gender?: string | number; //optionnel
};

//on peut créer un objet de ce type
let userJohn: user = {
  name: "John",
  age: 30,
};

let userMary: user = {
  name: "Mary",
    age: 25,
    gender: "F"
};

//TYPE | INTERFACE
//On peut utiliser type ou interface pour définir des types d'objets
///La différence principale est que les interfaces peuvent être étendues et implémentées, tandis que les types sont plus flexibles pour les unions et intersections.
interface User1 {
    name: string;
    age: number;
    gender?: string | number;
}
let userAlice: User1 = {
    name: "Alice",
    age: 31,
    gender: "F"
};

type strANDbool = string | boolean; //intersection type, not commonly used


//FUNCTIONS
const sum = (a: number, b: number): number => {
    return a + b;
}
const concat = (a: string, b: string): string => {
    return a + b;
}

sum(5, 7); //returns 12
concat("5", "7"); //returns 57


//TYPE Operation
type Operation = (a: number, b: number) => number;

const sum: Operation = (a, b) => {
    return a + b;
}

const decrement: Operation = (a, b) => {
    return a - b;
}

const multiply: Operation = (a, b) => {
    return a * b;
}
const divide: Operation = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
    }
    

    const operations: Operation[] = [sum, multiply, divide];
    // return a + b;
    // return a * b;
// return a / b;

operations.forEach(op => {
    console.log(op(10, 2));
    console.log(op(2, 10));
});
