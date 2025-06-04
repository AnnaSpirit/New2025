/** JSON */
let user = {
  id: 1,
  name: "Lena Graham",
  username: "lena",
  getFullName: function () {
    return name;
  },
  age: undefined,
  password: 123456,
};

// console.log(user);

/**
 * JSON.stringify()
 * object,
 * optioanl - filter function
 * optional - indent / prety
 */

const filterMyJson = (key, value) => {
  if (key === "password") return undefined//"********";
  if(key === 'id') return value + '@#4567'
  return value;
};

let jsonUser = JSON.stringify(user, filterMyJson, 2);

// console.log(jsonUser);


let userFromJson = `{
  "id": "1",
  "name": "Lena Graham",
  "username": "lena"
}`

// console.log(userFromJson);

/** JSON.parse */
// console.log(JSON.parse(userFromJson));

/** Exeption */

/**
 * try & catch block
 * try {
 * 
 * }
 * catch(error) {
 * 
 * }
 */

// console.log('before');
// try{
//   a;
// }
// catch(error){
//   // console.log(error);
// }
// console.log('after');



function x(num) {
  // let a = 8
  if(num === undefined) {
    throw new Error('num is undefined')
  }

  try {
    return a * num
  }
  catch(e) {
    // console.log(e);
    throw new Error('opps... somthing went wrong in x function')
  }
}

function y() {
  try{
    console.log(x())
  }
  catch(e){
    console.log(e);
  }
}

y()

console.log('after');
