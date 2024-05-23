import {Router} from 'express';
import {asyncHandlerWrapperUtil} from '../../../utils/async-handler-wrapper.util.js';
import {authMiddleware} from '../middlewares/index.js';

export class PostsRouter {
  constructor({postsController}) {
    this.postsController = postsController;
  }

  
  init = () => {
    return new Router().post(
      '/posts',
      authMiddleware,
      asyncHandlerWrapperUtil(this.postsController.createPost),
    ).get(
      '/posts',
      authMiddleware,
      asyncHandlerWrapperUtil(this.postsController.getAllPosts),
    ).get(
      '/posts/:userId',
      authMiddleware,
      asyncHandlerWrapperUtil(this.postsController.getPostsByUserId),
    );
  };
}

