

const express = require("express");
const routes = express.Router();
const authMiddleWare = require("../../../middleware/auth.middleware");
const productController = require("../controller/product.controller");

routes.post("/create", productController.createProduct);
routes.put("/update/:id", authMiddleWare.authMiddleWare ,productController.updateProduct);
routes.get("/detail/:id", productController.getDetailProduct);



module.exports = routes;