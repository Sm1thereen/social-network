import {Server} from './server.js';
import {usersRouter} from './http/routes/index.js';


export const server = new Server({usersRouter});
