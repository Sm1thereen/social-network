import {Like} from '../../domain/like.js';
import {LikeModel} from '../index.js';

export class LikeRepository {
  createLike = async ({user_id, post_id}) => {
    try {
      const like = await LikeModel.create({user_id, post_id});
      return await LikeRepository.toDomain(like);
    } catch (error) {
      console.error('error', error);
    }
  };
  static toDomain = async (likeModel) => {
    return Like.create({
      id: likeModel.id,
      user_id: likeModel.user_id,
      post_id: likeModel.post_id,
    });
  };
}

