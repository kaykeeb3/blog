import { Request, Response } from "express";
import NewsService from "../services/NewsService";

class NewsController {
  async create(req: Request, res: Response) {
    try {
      const { title, description, area } = req.body;
      const newsService = new NewsService();
      const news = await newsService.createNews(title, description, area);
      res.json(news);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, description, area } = req.body;
      const newsService = new NewsService();
      const news = await newsService.updateNews({
        id,
        title,
        description,
        area,
      });
      res.json(news);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const newsService = new NewsService();
      await newsService.deleteNews(id);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const newsService = new NewsService();
      const news = await newsService.getAllNews();
      res.json(news);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default NewsController;
