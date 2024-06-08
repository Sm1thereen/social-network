import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {commentsRouter} from './http/routes/index.js';

export class Server {
  _commonPrefix = '/api';
  _defaultPort = 5000;

  constructor({usersRouter, postsRouter, commentsRouter}) {
    this.usersRouter = usersRouter;
    this.postsRouter = postsRouter;
    this.commentsRouter = commentsRouter;
  }

  start = () => {
    const corsOption = {
      origin: '*',
    };

    const app = express();
    app.use(cors(corsOption));
    app.options('*', cors(corsOption));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(`${this._commonPrefix}/`, this.usersRouter.init());
    app.use(`${this._commonPrefix}/`, this.postsRouter.init());
    app.use(`${this._commonPrefix}/`, this.commentsRouter.init());

    if (!process.env.APP_PORT) {
      console.log(
        `App port is not specified. Default port ${this._defaultPort} is used`,
      );
    }


    app.listen(process.env.APP_PORT ?? this._defaultPort);
    app.use;
  };
}