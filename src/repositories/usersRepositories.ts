import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/Users";

/*repositorio customizado com os metodos extendidos padroes*/
@EntityRepository(User)
class userRepositories extends Repository<User> {}

export { userRepositories };
