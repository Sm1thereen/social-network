import {UsersRouter} from './users.router.js';
import {PostsRouter} from './posts.router.js';
import {followersController, postsController, usersController} from '../controllers/index.js';
import {FollowersRouter} from './followers.router.js';


export const usersRouter = new UsersRouter({usersController});
export const postsRouter = new PostsRouter({postsController});
export const followersRouter = new FollowersRouter({followersController});
