import prisma from "../config/database";
import IUserRepository from "../interfaces/IUserRepository";
import CreateUserDTO from "../dtos/CreateUserDTO";

class PrismaUserRepository implements IUserRepository {
  async findByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  async createUser(data: CreateUserDTO) {
    return await prisma.user.create({ data });
  }
}

export default PrismaUserRepository;
