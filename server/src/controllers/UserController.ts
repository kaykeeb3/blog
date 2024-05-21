import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const userService = new UserService();
      const user = await userService.createUser(name, email, password);
      res.json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default UserController;
