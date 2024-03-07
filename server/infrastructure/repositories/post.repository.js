import {PostModel} from '../index.js';
import {Post} from '../../domain/post.js';

export class PostRepository {
  createPost = async ({text, userId}) => {
    try {
      const post = await PostModel.create({text, user_id: userId});
      console.log('userIdRepo', userId);
      return await PostRepository.toDomain(post);
    } catch (error) {
      console.error('Error creating post', error);
    }
  };

  static toDomain = async (postModel) => {
    return Post.create({
      id: postModel.id,
      text: postModel.text,
      userId: postModel.userId,
    });
  };
}