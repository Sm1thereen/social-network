import {UsersRouter} from './users.router.js';
import {usersController} from '../controllers/index.js';


export const usersRouter = new UsersRouter({usersController});