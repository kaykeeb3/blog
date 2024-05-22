import prisma from "../config/database";
import CreateNewsDTO from "../dtos/CreateNewsDTO";
import UpdateNewsDTO from "../dtos/UpdateNewsDTO";
import News from "../models/News";

class NewsRepository {
  async createNews(data: CreateNewsDTO): Promise<News> {
    return await prisma.news.create({ data });
  }

  async updateNews(data: UpdateNewsDTO): Promise<News | null> {
    const { id, ...updateData } = data;
    return await prisma.news.update({
      where: { id },
      data: updateData,
    });
  }

  async deleteNews(id: string): Promise<void> {
    await prisma.news.delete({ where: { id } });
  }

  async getAllNews(): Promise<News[]> {
    return await prisma.news.findMany();
  }
}

export default NewsRepository;
