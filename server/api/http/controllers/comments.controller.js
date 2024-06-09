export class CommentsController {
  constructor({commentsUseCase}) {
    this.commentsUseCase = commentsUseCase;
  }

  createComment = async (req, res) => {
    const comment = await this.commentsUseCase.createComment({...req.body});
    return res.json({data: comment.unmarshal(), status: 1});
  };
  getCommentsByPostId = async (req, res) => {
    const comments = await this.commentsUseCase.getCommentsByPostId({postId: req.params.postId});
    return res.json({data: comments, status: 1});
  };
}