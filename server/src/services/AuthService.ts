import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import IUserRepository from "../interfaces/IUserRepository";
import IAuthService from "../interfaces/IAuthService";
import PrismaUserRepository from "../repositories/PrismaUserRepository";

dotenv.config();

class AuthService implements IAuthService {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new PrismaUserRepository();
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new Error("User not found");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error("Invalid password");

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    return token;
  }
}

export default AuthService;
