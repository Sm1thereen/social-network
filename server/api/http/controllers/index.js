import {UsersController} from './users.controller.js';
import {PostsController} from './posts.controller.js';
import {usersUseCase} from '../../../use-cases/index.js';
import {postsUseCase} from '../../../use-cases/index.js';

export const usersController = new UsersController(usersUseCase);
export const postsController = new PostsController({postsUseCase});