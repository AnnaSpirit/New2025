//**JSON    */
let user = {
    id: 1,
    name: "John",
    username: "john_doe",
    password: "123456"
}

console.log(user);

//** JSON stringify method 
// object
// option 1 - filter function
// optional - indent / pretty print

// let userJSON = JSON.stringify(user);
// console.log(userJSON);

let userJSON = JSON.stringify(user, null, 2); // pretty print with 2 spaces
// option 2 - array of keys
console.log(userJSON);

const filterMyJson = (key, value) => {
    if (key === "password") {
        return "*********"; // replace password with asterisks
        return undefined; // or you can return undefined to remove the key
    }
    return value;
};

let userFronJson = {
    "id": 1,
    "name": "Lena Grahams",
    "username": "L_Grahams",
    "password": "123456"
}
console.log(userFronJson);
//** JSON parse method
let userFromJson = JSON.parse(userJSON, filterMyJson);

//**EXCEPTION */

//Try & Catch*/

// console.log("Start");
// a

// console.log("after");

// console.log("Before");
// try {
//     a;
// }
// catch (error) {
//     console.log("Error:", error);
// }

// console.log("after");

function x(Num) {
    try {
        return a * num
    }
    catch (e)) {
        console.log(e.message);
    }
}

function y() {
    console.log(x(/10))
}
y()
console.log("after");