import { userRepositories } from "../repositories/usersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  adimin?: boolean;
}

class CreateUserService {
  async execute({ name, email, adimin }: IUserRequest) {
    const userRepository = new userRepositories()
if(!email){
  throw new Error("Email incorrect")
}
    const  userAlreadyExists = await userRepository.findOne({
      email
    })
    if(userAlreadyExists){
      throw new Error("User already exists")
    }
  }
}
export { CreateUserService };
