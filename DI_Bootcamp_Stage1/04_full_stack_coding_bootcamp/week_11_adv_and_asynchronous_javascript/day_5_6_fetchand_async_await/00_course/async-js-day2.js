// FETCH  = Methode GET
// ==============URL==============

const  ="https://jsonplaceholder.typicode.com/users"


let response = fetch(URL)

console.log(response);

//**respose.json() -> return promise
//**respose.text() -> return promise */


response.then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);
})

// =============XML===================

const XML = "https://zivuch.github.io/emails.xml"

let response = fetch(XML)

response.then((res) => {
    return res.text();
}).then((data) => {
    console.log(data);
})

function getUser(e) {
    e.preventDefault();
    console.log("submit the form");

}



//**ASYNC   // AWAIT (attends pour ressoudre une promise, seulement à l'interirur dune ASYNC fonction*/

function getx() {
    return 5
});
}
console.log(getx()); // ==>> 5  // normal function return value

async function getx() {
    return 5
});
}
console.log(getx()); //==>>  Promise {<fulfilled>: 5}  // async function always return a promise

getx()
    .then(val) => {
    console.log(val); //==>> 5
}).catch (err => {
    console.error(err);
});
console.log(getx()); //==>> Promise {<fulfilled>: 5} // async function always return a promise



