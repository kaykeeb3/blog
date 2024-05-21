import { Request, Response } from "express";

class HomeController {
  async home(req: Request, res: Response) {
    res.json({
      message: "Bem-vindo à tela inicial 😉! Você está autenticado.",
    });
  }
}

export default HomeController;
