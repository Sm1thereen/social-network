import {Router} from 'express';
import {authMiddleware} from '../middlewares/index.js';

export class FollowersRouter {
  constructor({followersController}) {
    this.followersController = followersController;
  }


  init = () => {
    return new Router().post(
      '/followers',
      authMiddleware,
      this.followersController.createFollower,
    );
  };
}

