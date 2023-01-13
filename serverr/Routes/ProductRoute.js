const express = require("express");
const route = express.Router();
const product = require("../Controller/ProductController");

route.post("/addProduct", product.addProduct);
route.get("/allProduct", product.allProduct);

module.exports = route;
