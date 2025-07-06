let hint;

fetch("http://localhost:3001/emojis")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const { randomEmoji, shuffleEmojis } = data;
    hint = randomEmoji
    renderGame(randomEmoji,shuffleEmojis)
  })
  .catch((e) => {
    console.log(e);
  });

function renderGame(emoji, options) {
  const html = options.map((item) => {
    return `<option>${item.name}</option>`;
  });
  document.getElementById("root").innerHTML =
    "options: <select>" + html.join() + "</select>" + " hint: " + emoji.emoji;
}


function guessTheEmoji(e) {
    e.preventDefault()
    const hintname = hint.name;
    const guess = e.target.guess.value

    fetch('http://localhost:3001/guess',{
        method:'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            hint: hintname,
            guess: guess
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}
