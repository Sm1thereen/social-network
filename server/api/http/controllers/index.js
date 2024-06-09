import {UsersController} from './users.controller.js';
import {PostsController} from './posts.controller.js';
import {usersUseCase, postsUseCase, commentsUseCase, likesUseCase} from '../../../use-cases/index.js';
import {CommentsController} from './comments.controller.js';
import {LikesController} from './likes.controller.js';

export const usersController = new UsersController(usersUseCase);
export const postsController = new PostsController({postsUseCase});
export const commentsController = new CommentsController({commentsUseCase});
export const likesController = new LikesController({likesUseCase});
