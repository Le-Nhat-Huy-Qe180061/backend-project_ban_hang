

const express = require("express");
const routes = express.Router();

const userController = require("../controller/user.controller");

routes.post("/sign-up", userController.createUser);
routes.post("/sign-in", userController.loginUser);
routes.put("/update-user/:id", userController.updateUser);


module.exports = routes;