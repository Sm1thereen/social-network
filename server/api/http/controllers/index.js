import {UsersController} from './users.controller.js';
import {PostsController} from './posts.controller.js';
import {followersUseCase, usersUseCase, postsUseCase} from '../../../use-cases/index.js';
import {FollowersController} from './followers.controller.js';

export const usersController = new UsersController(usersUseCase);
export const postsController = new PostsController({postsUseCase});
export const followersController = new FollowersController({followersUseCase});