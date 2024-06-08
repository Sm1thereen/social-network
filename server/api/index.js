import {Server} from './server.js';
import {commentsRouter, postsRouter, usersRouter} from './http/routes/index.js';


export const server = new Server({usersRouter, postsRouter, commentsRouter});
