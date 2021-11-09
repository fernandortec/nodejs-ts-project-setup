import { inject, injectable } from 'tsyringe';

import { User } from '../../entities/User';
import { UserRepository } from '../../repositories/UserRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository
  ) {}

  async createUser(): Promise<User> {
    const user = new User();

    return user;
  }
}

export { CreateUserUseCase };
