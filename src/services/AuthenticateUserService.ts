import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {

  async execute({email, password}: IAuthenticateRequest) {
    const userRepositories = getCustomRepository (UsersRepositories);

    const user = await userRepositories.findOne({ email });
    if(!user){
      throw new Error("Email/Password Incorrect")
  }

  const passwordMatch = await compare(password, user.password);
  if(!passwordMatch) {
    throw new Error ("Email/Password Incorrect")}

    const token = sign({email: user.email},
      "c36c50396215415d85ecc3619b6f6866", 
      {subject: user.id,
      expiresIn: "2d"});

        return token;
  }
}

export { AuthenticateUserService}