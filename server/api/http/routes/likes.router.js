import {Router} from 'express';
import {authMiddleware} from '../middlewares/index.js';
import {asyncHandlerWrapperUtil} from '../../../utils/async-handler-wrapper.util.js';

export class LikesRouter {
  constructor({likesController}) {
    this.likesController = likesController;
  }

  init = () => {
    return new Router().post(
      '/createLike',
      authMiddleware,
      asyncHandlerWrapperUtil(this.likesController.createLike),
    );
  };
}