import {UsersRouter} from './users.router.js';
import {PostsRouter} from './posts.router.js';
import {postsController, usersController} from '../controllers/index.js';


export const usersRouter = new UsersRouter({usersController});
export const postsRouter = new PostsRouter({postsController});



