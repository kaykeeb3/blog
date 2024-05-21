import CreateUserDTO from "../dtos/CreateUserDTO";

export default interface IUserService {
  createUser(name: string, email: string, password: string): Promise<any>;
}
