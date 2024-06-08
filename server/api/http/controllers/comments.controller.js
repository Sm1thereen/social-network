export class CommentsController {
  constructor({commentsUseCase}) {
    this.commentsUseCase = commentsUseCase;
  }

  createComment = async (req, res) => {
    console.log('req.body controller', req.body);
    return res.json({comment: await this.commentsUseCase.createComment(req.body), status: 1});
  };
}