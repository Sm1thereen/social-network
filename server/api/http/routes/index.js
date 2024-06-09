import {UsersRouter} from './users.router.js';
import {PostsRouter} from './posts.router.js';
import {commentsController, likesController, postsController, usersController} from '../controllers/index.js';
import {CommentsRouter} from './comments.router.js';
import {LikesRouter} from './likes.router.js';


export const usersRouter = new UsersRouter({usersController});
export const postsRouter = new PostsRouter({postsController});
export const commentsRouter = new CommentsRouter({commentsController});
export const likesRouter = new LikesRouter({likesController});

