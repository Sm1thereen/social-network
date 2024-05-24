import {FollowerModel} from '../index.js';
import {User} from '../../domain/user.js';
import {Follower} from '../../domain/follower.js';

export class FollowerRepository {
  createFollower = async (userId, followerId) => {
    try {
      const follower = await FollowerModel.create({userId, followerId});
      return await FollowerRepository.toDomain(follower);
    } catch (error) {

    }
  };
  static toDomain = async (followerModal) => {
    return Follower.create({
      id: followerModal.id,
      user_id: followerModal.user_id,
      follower_id: followerModal.follower_id,
    });
  };
}
