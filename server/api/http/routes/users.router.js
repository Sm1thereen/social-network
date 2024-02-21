import {Router} from 'express';
import {asyncHandlerWrapperUtil} from '../../../utils/async-handler-wrapper.util.js';

export class UsersRouter {
  constructor({usersController}) {
    this.usersController = usersController;
  }

  init = () => {
    return new Router().post(
      '/users',
      asyncHandlerWrapperUtil(this.usersController.createUser),
    );
  };
}
