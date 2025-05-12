// In the js file, create an array called allBooks.This is an array of objects.Each object is a book that has 4 keys(ie. 4 properties) :

// title,
//     author,
//     image : a url,
//         alreadyRead : which is a boolean(true or false).

// Initiate the array with 2 books of your choice(ie.Add manually 2 books objects in the array)

// Requirements: All the instructions below need to be coded in the js file:

//     Using the DOM, render each book inside a div(the div must be added to the < section > created in part 1).
//     For each book:
//         You have to display the book’s title and the book’s author.
//     Example: HarryPotter written by JKRolling.
//         The width of the image has to be set to 100px.
//         If the book is already read.Set the color of the book’s details to red.


// const allBooks = [title, author, image, alreadyRead]


const allBooks = [
    {
        title: "Comme la griffe d'un dragon",
        author: "Gérard Hubert-Richou",
        image: "https://static.fnac-static.com/multimedia/Images/FR/NR/a8/f7/0e/980904/1540-1/tsp20151027154649/Comme-la-griffe-du-dragon.jpg",
        alreadyRead: false
    },
    {
        title: "Demain les chats",
        author: "Bernard Werber",
        image: "https://media.senscritique.com/media/000016174389/source_big/Demain_les_chats.jpg",
        alreadyRead: true
    }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    //TITLE
    const title = document.createElement("h2");
    title.textContent = book.title;
    title.style.textDecoration = "underline";
    title.style.color = "green";

    const author = document.createElement("p");
    author.textContent = `Written by ${book.author}`;

    const image = document.createElement("img");
    image.src = book.image;
    image.style.width = "150px";

    // Si déjà lu, on colore tout en rouge
    if (book.alreadyRead) {
        bookDiv.style.color = "red";
    }
    // On assemble
    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(image);
    section.appendChild(bookDiv);
});
// On affiche le tout
console.log(allBooks);