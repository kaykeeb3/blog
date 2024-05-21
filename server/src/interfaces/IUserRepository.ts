import CreateUserDTO from "../dtos/CreateUserDTO";

export default interface IUserRepository {
  findByEmail(email: string): Promise<any>;
  createUser(data: CreateUserDTO): Promise<any>;
}
