import { Router } from "express";
import AuthController from "./controllers/AuthController";
import UserController from "./controllers/UserController";
import HomeController from "./controllers/HomeController";
import NewsController from "./controllers/NewsController";
import ProfileController from "./controllers/ProfileController";
import authenticateToken from "./middlewares/authenticateToken";
import validateNews from "./middlewares/validateNews";
import { validateProfile } from "./middlewares/validateProfile";

const routes = Router();
const authController = new AuthController();
const userController = new UserController();
const homeController = new HomeController();
const newsController = new NewsController();
const profileController = new ProfileController();

routes.post("/login", authController.login);
routes.post("/register", userController.register);
routes.get("/home", authenticateToken, homeController.home);
routes.post("/news", authenticateToken, validateNews, newsController.create);
routes.put("/news/:id", authenticateToken, validateNews, newsController.update);
routes.delete("/news/:id", authenticateToken, newsController.delete);
routes.get("/news", authenticateToken, newsController.getAll);

// Rotas de perfil
routes.post(
  "/profile",
  authenticateToken,
  validateProfile,
  profileController.createOrUpdate
);
routes.get("/profile", authenticateToken, profileController.getProfile);

export default routes;
