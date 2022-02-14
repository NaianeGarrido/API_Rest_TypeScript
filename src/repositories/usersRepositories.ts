import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

/*repositorio customizado com os metodos extendidos padroes*/
@EntityRepository(User)
class UsersRepositories extends Repository<User> {
  static findOne: any;
}

export { UsersRepositories };
