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
  getCommentsByPostId = async ({postId}) => {
    try {
      const comments = await this.commentRepository.getCommentsByPostId({postId});
      if (!comments || comments.length === 0) {
        return [];
      }
      return comments.map((comment) => comment.unmarshal());
    } catch (error) {
      console.error('error', error);
    }
  };
}