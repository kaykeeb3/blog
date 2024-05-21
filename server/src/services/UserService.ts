import bcrypt from "bcryptjs";
import IUserService from "../interfaces/IUserService";
import IUserRepository from "../interfaces/IUserRepository";
import CreateUserDTO from "../dtos/CreateUserDTO";
import PrismaUserRepository from "../repositories/PrismaUserRepository";

class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new PrismaUserRepository();
  }

  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<any> {
    const userExists = await this.userRepository.findByEmail(email);
    if (userExists) throw new Error("Email already registered");

    const hashedPassword = await bcrypt.hash(password, 10);
    const userData: CreateUserDTO = { name, email, password: hashedPassword };
    const newUser = await this.userRepository.createUser(userData);
    return newUser;
  }
}

export default UserService;
