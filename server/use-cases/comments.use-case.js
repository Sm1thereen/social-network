export class CommentsUseCase {
  constructor({commentRepository}) {
    this.commentRepository = commentRepository;
  }

  createComment = async ({content, user_id, post_id}) => {
    const comment = await this.commentRepository.createComment({content, user_id, post_id});
    if (!comment) {
      throw new Error('Comment not found');
    }
    return comment;
  };
}