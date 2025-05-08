/** walk throw the DOM */

/** getElementById */
let myDiv = document.getElementById('div1');
// console.log(myDiv);
// myDiv.style.backgroundColor = 'yellow'

/** getElement s ByTagName */
let myDivs = document.getElementsByTagName('h1')
// console.log(myDivs[0]);

/** getElement s ByClassName */
let myElems = document.getElementsByClassName('header-2')
// console.log(myElems[0]);

/** querySelector - name of css property */
/** #idname, .classname, tagname, a.reddot */

let myElement = document.querySelector('div');
// console.log(myElement);

let myElements = document.querySelectorAll('.header-1')
// console.log(myElements);

/** Add an elemnt to the DOM */
/** createElement */

let newElement = document.createElement('h2');
console.log(newElement);

newElement.textContent = 'hello, I am the new div'
newElement.innerText = '<span>abc</span>'
newElement.innerHTML = '<span style="color:red;">abc</span>'

/** append */
const rootDiv = document.getElementById('div1');
rootDiv.appendChild(newElement)