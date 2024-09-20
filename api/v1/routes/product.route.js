

const express = require("express");
const routes = express.Router();
const productController = require("../controller/product.controller");

routes.post("/create", productController.createProduct);
// routes.pat("/update", productController.updateProduct);



module.exports = routes;