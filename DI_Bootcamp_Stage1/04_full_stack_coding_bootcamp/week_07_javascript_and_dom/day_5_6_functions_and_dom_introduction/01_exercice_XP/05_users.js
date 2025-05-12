//     Retrieve the div and console.log it
//     Change the name “Pete” to “Richard”.
//     Delete the second < li > of the second < ul >.
//     Change the name of the first < li > of each < ul > to your name. (Hint : use a loop)

// Using Javascript:

//     Add a class called student_list to both of the < ul > 's.
//     Add the classes university and attendance to the first < ul >.

// Using Javascript:

//     Add a “light blue” background color and some padding to the < div >.
//     Do not display the < li > that contains the text node “Dan”.(the last < li > of the first < ul >)
//     Add a border to the < li > that contains the text node “Richard”.(the second < li > of the < ul >)
//     Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

document.addEventListener("DOMContentLoaded", () => {
    const containerDiv = document.getElementById("container");
    console.log(containerDiv);

    document.querySelectorAll("li").forEach(li => {
        if (li.textContent === "Pete") {
            li.textContent = "Richard";
        }
    });

    console.log(containerDiv);


    const uls = document.querySelectorAll('ul');
    if (uls[1] && uls[1].children[1]) {
        uls[1].removeChild(uls[1].children[1]);
    }

    console.log(uls);

    const myName = 'Anna';
    uls.forEach(ul => {
        if (ul.children[0]) ul.children[0].textContent = myName;
    });

    // Seul le premier li du premier ul est change: DOES NOT WORK
    // document.addEventListener('DOMContentLoaded', () => {
    //     const uls = document.querySelectorAll('ul.list');
    //     const myName = 'Anna';

    //     // 🔥 Au lieu de "uls.forEach(...)", on cible uniquement le 1ᵉʳ <ul> :
    //     if (uls[0]) {
    //         const firstLi = uls[0].querySelector('li:first-child');
    //         if (firstLi) firstLi.textContent = myName;
    //     }
    // });


    uls.forEach(ul => ul.classList.add('student_list'));

    if (uls[0]) uls[0].classList.add('university', 'attendance');

    containerDiv.style.backgroundColor = 'lightblue';
    containerDiv.style.padding = '10px';

    console.log(containerDiv);

    document.querySelectorAll('li').forEach(li => {
        if (li.textContent.trim() === 'Dan') {
            li.style.display = 'none';
        }
    });

    document.querySelectorAll('li').forEach(li => {
        if (li.textContent.trim() === 'Richard') {
            li.style.border = '1px solid black';
        }
    });

    document.body.style.fontSize = '18px';

    if (containerDiv.style.backgroundColor === 'lightblue') {
        // On prend les deux premières <li> du 1ᵉʳ <ul>
        const [u1, u2] = Array.from(uls[0].children).slice(0, 2).map(li => li.textContent);
        alert(`Hello ${u1} and ${u2} !`);
    }
});


