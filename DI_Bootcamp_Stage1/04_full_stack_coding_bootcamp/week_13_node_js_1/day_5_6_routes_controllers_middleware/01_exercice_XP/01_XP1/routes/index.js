// Import Express
const express = require("express");

// Create a router object (mini application)
const router = express.Router();

// Route: Home page
router.get("/", (request, response) => {
    response.send("🏠 Welcome to the homepage from router!");
});

// Route: About page
router.get("/about", (request, response) => {
    response.send("ℹ️ About Us page from router!");
});

// Export the router so app.js can use it
module.exports = router;