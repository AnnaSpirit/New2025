const { products } = require("../models/products.js");

const getAllProducts = (req, res) => {
  res.json(products);
};

module.exports = {
    getAllProducts
}