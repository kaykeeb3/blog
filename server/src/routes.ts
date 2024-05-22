// Em src/routes.ts

import { Router } from "express";
import AuthController from "./controllers/AuthController";
import UserController from "./controllers/UserController";
import HomeController from "./controllers/HomeController";
import NewsController from "./controllers/NewsController";
import authenticateToken from "./middlewares/authenticateToken";
import validateNews from "./middlewares/validateNews";

const routes = Router();
const authController = new AuthController();
const userController = new UserController();
const homeController = new HomeController();
const newsController = new NewsController();

routes.post("/login", authController.login);
routes.post("/register", userController.register);
routes.get("/home", authenticateToken, homeController.home);
routes.post("/news", authenticateToken, validateNews, newsController.create);
routes.put("/news/:id", authenticateToken, validateNews, newsController.update);
routes.delete("/news/:id", authenticateToken, newsController.delete);
routes.get("/news", authenticateToken, newsController.getAll);

export default routes;
