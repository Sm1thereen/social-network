import {UsersUseCase} from './users.use-case.js';
import {userRepository} from '../infrastructure/repositories/index.js';

export const usersUseCase = new UsersUseCase(
  {userRepository});