// Using Javascript, in the < div >, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new < li > to the < ul >.

//     First, create a new < li > tag(use the createElement method).
//     Create a new text node with “Logout” as its specified text.
//     Append the text node to the newly created list node(<li>).
//         Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

//             Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

document.addEventListener("DOMContentLoaded", function () {
    // Change the id attribute of the div
    const navBar = document.querySelector("div");
    navBar.setAttribute("id", "socialNetworkNavigation");

    // Create a new li element
    const newLi = document.createElement("li");

    // Create a new text node with "Logout"
    const textNode = document.createTextNode("Logout");

    // Append the text node to the li element
    newLi.appendChild(textNode);

    // Append the li element to the ul
    const ul = document.querySelector("ul");
    ul.appendChild(newLi);

    // Retrieve the first and last li elements and display their text
    const firstLi = ul.firstElementChild;
    const lastLi = ul.lastElementChild;

    console.log("First li text:", firstLi.textContent);
    console.log("Last li text:", lastLi.textContent);
});