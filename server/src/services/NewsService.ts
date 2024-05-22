import NewsRepository from "../repositories/NewsRepository";
import CreateNewsDTO from "../dtos/CreateNewsDTO";
import UpdateNewsDTO from "../dtos/UpdateNewsDTO";
import News from "../models/News";

class NewsService {
  private newsRepository: NewsRepository;

  constructor() {
    this.newsRepository = new NewsRepository();
  }

  async createNews(
    title: string,
    description: string,
    area: string
  ): Promise<News> {
    const data: CreateNewsDTO = { title, description, area };
    return await this.newsRepository.createNews(data);
  }

  async updateNews(data: UpdateNewsDTO): Promise<News | null> {
    return await this.newsRepository.updateNews(data);
  }

  async deleteNews(id: string): Promise<void> {
    return await this.newsRepository.deleteNews(id);
  }

  async getAllNews(): Promise<News[]> {
    return await this.newsRepository.getAllNews();
  }
}

export default NewsService;
