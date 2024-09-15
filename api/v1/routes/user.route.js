

const express = require("express");
const routes = express.Router();

const userController = require("../controller/user.controller");

routes.post("/sign-up", userController.createUser);
routes.post("/sign-in", userController.loginUser);


module.exports = routes;