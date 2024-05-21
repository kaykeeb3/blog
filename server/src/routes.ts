import { Router } from "express";
import AuthController from "./controllers/AuthController";
import UserController from "./controllers/UserController";

const routes = Router();
const authController = new AuthController();
const userController = new UserController();

routes.post("/login", authController.login);
routes.post("/register", userController.register);

export default routes;
