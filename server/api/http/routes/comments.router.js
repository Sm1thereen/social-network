import {Router} from 'express';
import {authMiddleware} from '../middlewares/index.js';
import {asyncHandlerWrapperUtil} from '../../../utils/async-handler-wrapper.util.js';

export class CommentsRouter {
  constructor({commentsController}) {
    this.commentsController = commentsController;
  }

  init = () => {
    return new Router().post(
      '/createComment',
      authMiddleware,
      asyncHandlerWrapperUtil(this.commentsController.createComment),
    ).get(
      '/getCommentsByPostId/:postId',
      authMiddleware,
      asyncHandlerWrapperUtil(this.commentsController.getCommentsByPostId),
    );
  };
}