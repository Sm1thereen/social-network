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
      asyncHandlerWrapperUtil(this.usersController.userLogin),
    ).get(
      '/getUser',
      authMiddleware,
      asyncHandlerWrapperUtil(this.usersController.getUser),
    ).get(
      '/getUserById/:userId',
      authMiddleware,
      asyncHandlerWrapperUtil(this.usersController.getUserById),
    );
  };
}
