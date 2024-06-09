import {Comment} from '../../domain/comment.js';
import {CommentModel} from '../index.js';

export class CommentRepository {
  createComment = async ({content, user_id, post_id}) => {
    try {
      const comment = await CommentModel.create({content, user_id, post_id});
      return await CommentRepository.toDomain(comment);
    } catch (error) {
      console.error('Error creating comment', error);
    }
  };
  getCommentsByPostId = async ({postId}) => {
    try {
      console.log('postId repo', postId);
      const comments = await CommentModel.findAll({where: {post_id: postId}});
      if (!comments) {
        return null;
      }
      return await Promise.all(comments.map(comment => CommentRepository.toDomain(comment)));
    } catch (error) {
      console.error('Error creating comment', error);
    }
  };
  static toDomain = async (CommentModel) => {
    return Comment.create({
      id: CommentModel.id,
      content: CommentModel.comment,
      user_id: CommentModel.user_id,
      post_id: CommentModel.post_id,
    });
  };
}