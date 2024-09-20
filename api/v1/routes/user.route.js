

const express = require("express");
const routes = express.Router();

const userController = require("../controller/user.controller");

const authMiddleWare = require("../../../middleware/auth.middleware");
const authUserMiddleWare = require("../../../middleware/auth.middleware");

routes.post("/sign-up", userController.createUser);
routes.post("/sign-in", userController.loginUser);
routes.put("/update-user/:id", userController.updateUser);
routes.delete("/delete-user/:id", authMiddleWare.authMiddleWare ,userController.deleteUser);
routes.get("/getAll", authMiddleWare.authMiddleWare ,userController.getAllUser);
routes.get("/get-details/:id", authMiddleWare.authUserMiddleWare, userController.getDetailsUser);
routes.post("/refresh-token", userController.refreshToken);


module.exports = routes;