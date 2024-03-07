import {Router} from 'express';
import {asyncHandlerWrapperUtil} from '../../../utils/async-handler-wrapper.util.js';
import {authMiddleware} from '../middlewares/index.js';

export class UsersRouter {
  constructor({usersController}) {
    this.usersController = usersController;
  }

  init = () => {
    return new Router().post(
      '/registration',
      asyncHandlerWrapperUtil(this.usersController.createUser),
    ).post(
      '/login',
      asyncHandlerWrapperUtil(this.usersController.getUser),
    ).get(
      '/getUserById',
      authMiddleware,
      asyncHandlerWrapperUtil(this.usersController.getUserById),
    );
  };
}