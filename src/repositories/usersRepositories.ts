import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/Users";

@EntityRepository(User)
class userRepositories extends Repository<User> {
  
}

export { userRepositories };
