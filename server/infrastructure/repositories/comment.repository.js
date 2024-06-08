import {User} from '../../domain/user.js';
import {CommentModel} from '../index.js';

export class CommentRepository {
  createComment = async ({content, user_id, post_id}) => {
    try {
      const comment = CommentModel.create({content, user_id, post_id});
      return await CommentRepository.toDomain(comment);
    } catch (error) {
      console.error('Error creating comment', error);
    }
  };
  static toDomain = async (CommentModel) => {
    return User.create({
      id: CommentModel.id,
      content: CommentModel.comment,
      user_id: CommentModel.user_id,
      post_id: CommentModel.post_id,
    });
  };
}