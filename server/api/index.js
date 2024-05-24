import {Server} from './server.js';
import {followersRouter, postsRouter, usersRouter} from './http/routes/index.js';


export const server = new Server({usersRouter, postsRouter, followersRouter});
