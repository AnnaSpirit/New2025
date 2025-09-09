// 📦 Required npm packages to install:
// npm install express
// (path is built-in in Node)

// 🇬🇧 Express server that serves static files under /public in the URL
// 🇫🇷 Serveur Express qui expose les fichiers statiques sous /public dans l’URL

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// ⭐ We mount the static folder at /public (URL shows the folder)
// ⭐ On monte le dossier statique sous /public (l’URL affiche le dossier)
app.use("/public", express.static(path.join(__dirname, "public")));

// Root -> views/index.html
// Racine -> views/index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
    console.log(`✅ Server listening on http://localhost:${PORT}`);
});

// AnnaSpirit
