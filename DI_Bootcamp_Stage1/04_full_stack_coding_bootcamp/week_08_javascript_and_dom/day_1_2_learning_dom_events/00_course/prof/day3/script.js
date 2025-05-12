/** DOM */
/** Document Object Model */

/** Find element / s int HTML page */

const root = document.getElementById("root");
console.log(root);

const myTags = document.getElementsByTagName("div");
console.log(myTags[0]);

const myClass = document.getElementsByClassName("main");
console.log(myClass[1]);

const divOne = document.querySelector("div.main");
console.log(divOne);

const allElems = document.querySelectorAll(".main");
console.log(allElems);

/** add text to element */
root.innerText = "Hello";
// root.textContent = '<h2>My div</h2>'
root.innerHTML = "<h2>Header</h2>";

/** tag / element attribute */
const divAttr = root.getAttribute("class");
console.log(divAttr);

const myImg = document.getElementsByTagName("img")[0];
console.log(myImg.src);

// myImg.src = 'https://developers.institute/wp-content/uploads/2023/11/img_main.png'

// myImg.setAttribute(
//   "src",
//   "https://developers.institute/wp-content/uploads/2023/11/img_main.png"
// );
// myImg.setAttribute("width", "200px");

// root.style.color = "red";
// root.style.backgroundColor = 'yellow'
// root.style.textAlign = 'center'

// root.classList.add('class1');
// root.classList.add("class2");
// root.classList.remove("main");

/** createElement */
const newElem = document.createElement("p");
// console.log(newElem);
// root.appendChild(newElem);
// newElem.textContent = "Lorum ipsum dulor sit amet";
// newElem.classList.add("class1");

// root.removeChild(newElem)

const body = document.getElementsByTagName("body")[0];
// document.body
// body.removeChild(myImg);

const ulList = document.getElementById("list");
const liOne = document.getElementById("lione");
const liTwo = document.getElementById("litwo");

console.log(ulList, liOne, liTwo);

ulList.replaceChild(liTwo, liOne);
ulList.appendChild(liOne);
