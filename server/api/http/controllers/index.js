import {UsersController} from './users.controller.js';
import {PostsController} from './posts.controller.js';
import {usersUseCase, postsUseCase} from '../../../use-cases/index.js';

export const usersController = new UsersController(usersUseCase);
export const postsController = new PostsController({postsUseCase});
