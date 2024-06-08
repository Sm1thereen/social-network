import {PostModel} from '../index.js';
import {Post} from '../../domain/post.js';

export class PostRepository {
  createPost = async ({text, userId}) => {
    try {
      const post = await PostModel.create({text, user_id: userId});
      return await PostRepository.toDomain(post);
    } catch (error) {
      console.error('Error creating post', error);
    }
  };
  getPostById = async ({userId}) => {
    try {
      const posts = await PostModel.findAll({where: {user_id: userId}});
      if (!posts || posts.length === 0) {
        return null;
      }
      return await Promise.all(posts.map(post => PostRepository.toDomain(post)));
    } catch (error) {
      console.error('Error getting posts by userId', error);
      throw error;
    }
  };

  getAllPosts = async () => {
    try {
      const posts = await PostModel.findAll({include: 'user'});
      return await Promise.all(posts.map(PostRepository.toDomain));
    } catch (error) {
      console.error('Error getting all posts', error);
    }
  };

  static toDomain = async (postModel) => {
    return Post.create({
      id: postModel.id,
      text: postModel.text,
      createdAt: postModel.createdAt,
      user: postModel.user,
    });
  };
}
