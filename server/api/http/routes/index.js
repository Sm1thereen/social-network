import {UsersRouter} from './users.router.js';
import {PostsRouter} from './posts.router.js';
import {commentsController, postsController, usersController} from '../controllers/index.js';
import {CommentsRouter} from './comments.router.js';


export const usersRouter = new UsersRouter({usersController});
export const postsRouter = new PostsRouter({postsController});
export const commentsRouter = new CommentsRouter({commentsController});

