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
    ).get(
      '/getAllUsers',
      authMiddleware,
      asyncHandlerWrapperUtil(this.usersController.getAllUsers),
    ).post(
      '/follow',
      authMiddleware,
      asyncHandlerWrapperUtil(this.usersController.createFollower),
    ).get(
      '/following/:userId',
      authMiddleware,
      asyncHandlerWrapperUtil(this.usersController.getFollowingById),
    ).get(
      '/followers/:userId',
      authMiddleware,
      asyncHandlerWrapperUtil(this.usersController.getFollowersById),
    ).post(
      '/unfollow',
      authMiddleware,
      asyncHandlerWrapperUtil(this.usersController.unFollowById),
    );
  };
}
