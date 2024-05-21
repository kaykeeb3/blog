import { Router } from "express";
import AuthController from "./controllers/AuthController";
import UserController from "./controllers/UserController";
import HomeController from "./controllers/HomeController";
import authenticateToken from "./middlewares/authenticateToken";

const routes = Router();
const authController = new AuthController();
const userController = new UserController();
const homeController = new HomeController();
routes.post("/login", authController.login);
routes.post("/register", userController.register);
routes.get("/home", authenticateToken, homeController.home);

export default routes;
