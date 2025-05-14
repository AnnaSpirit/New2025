let train = document.getElementById('train')

// click event
train.addEventListener("click", trainPassing)

function trainPassing() {
    let start = Date.now(); // start date

    let timer = setInterval(function () {
        let timePassed = Date.now() - start;
        console.log(timePassed)
        train.style.left = timePassed / 5 + 'px';
        if (timePassed > 2000) {
            clearInterval(timer);
        }
    }, 20);
}