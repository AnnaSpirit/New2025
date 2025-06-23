// console.log("hi");
// let array = [1, 2, 3, 4, 5, 6];
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element);
// }

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => console.log(e));

/** NodeJS Module System */
/**
 * 1. Module that you create
 * 2. NPM - Node Package Manager
 * 3. Core modules - fs, http and more
 */

const greeting = (name) => {
    return `Welcome ${name} to NodeJS`;
}

const hello = name => {2
    return `Hello ${name}`;
}
// console.log(module.exports);

const a = 10
module.exports = {
    greeting,
    hello,
    a
}