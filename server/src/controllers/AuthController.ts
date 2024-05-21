import { Request, Response } from "express";
import AuthService from "../services/AuthService";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const authService = new AuthService();
      const token = await authService.login(email, password);
      res.json({ token });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default AuthController;
