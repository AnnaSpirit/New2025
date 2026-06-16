// Import Express framework
const express = require("express");

// Create an Express application
const app = express();

// Define the port where the server will run
const PORT = 3000;

// Route: Home page
app.get("/", (request, response) => {
    response.send("🏠 Welcome to the homepage!");
});

// Route: About page
app.get("/about", (request, response) => {
    response.send("ℹ️ About Us page");
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});