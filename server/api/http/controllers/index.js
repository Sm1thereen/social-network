import {UsersController} from './users.controller.js';
import {usersUseCase} from '../../../use-cases/index.js';

export const usersController = new UsersController(usersUseCase);