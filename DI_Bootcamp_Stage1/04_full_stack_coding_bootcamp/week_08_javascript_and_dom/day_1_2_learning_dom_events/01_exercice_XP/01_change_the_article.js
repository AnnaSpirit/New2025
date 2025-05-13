
// Using a DOM property, retrieve the h1 and console.log it.

// Using DOM methods, remove the last paragraph in the < article > tag.

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// Add an event listener which will hide the h3 when it’s clicked on(use the display: none property).

// Add a < button > to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

//     BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS: When you hover on the 2nd paragraph, it should fade out(Check out “fade css animation” on Google)

const h1 = document.querySelector('h1');
console.log(h1);

const article = document.querySelector('article');
const lastParagraph = article.querySelector('p:last-of-type');
lastParagraph.remove();

const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
    h2.style.backgroundColor = 'red';
});

const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
    h3.style.display = 'none';
});

const button = document.createElement('button');
button.textContent = 'Make paragraphs bold';
document.body.appendChild(button);
const paragraphs = document.querySelectorAll('p');
button.addEventListener('click', () => {
    paragraphs.forEach(paragraph => {
        paragraph.style.fontWeight = 'bold';
    });
});

h1.addEventListener('mouseover', () => {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = `${randomSize}px`;
});

const secondParagraph = document.querySelector('p:nth-of-type(2)');
secondParagraph.addEventListener('mouseover', () => {
    secondParagraph.style.transition = 'opacity 0.5s';
    secondParagraph.style.opacity = '0';
});


