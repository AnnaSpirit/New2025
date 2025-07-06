const express = require("express");
const { emojis } = require("./models/emojis.js");

// console.log(emojis);

const app = express();
/** body-parser */
app.use(express.json());

app.use("/", express.static(__dirname + "/public"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

app.get("/emojis", (req, res) => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];
  const shuffleEmojis = shuffleArray(emojis);
  res.json({ randomEmoji, shuffleEmojis });
});

let score = 0;
app.post("/guess", (req, res) => {
  const { hint, guess } = req.body;
  if (hint.toLowerCase() === guess.toLowerCase()) {
    score++;
    res.json({ msg: "Correct!!!", score });
    return;
  }
  res.json({ msg: "Try Again !!!" });
});
