import { Request, Response, NextFunction } from "express";

const validateNews = (req: Request, res: Response, next: NextFunction) => {
  const { title, description, area } = req.body;

  if (!title || typeof title !== "string" || title.trim() === "") {
    return res
      .status(400)
      .json({ error: "Título é obrigatório e deve ser uma string." });
  }

  if (
    !description ||
    typeof description !== "string" ||
    description.trim() === ""
  ) {
    return res
      .status(400)
      .json({ error: "Descrição é obrigatória e deve ser uma string." });
  }

  if (!area || typeof area !== "string" || area.trim() === "") {
    return res
      .status(400)
      .json({ error: "Área é obrigatória e deve ser uma string." });
  }

  next();
};

export default validateNews;
