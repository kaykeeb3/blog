import LoginDTO from "../dtos/LoginDTO";

export default interface IAuthService {
  login(email: string, password: string): Promise<string>;
}
