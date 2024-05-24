export class FollowerUseCase {
  constructor({followerRepository}) {
    this.followerRepository = followerRepository;
  }

  createFollower = async ({userId, followerId}) => {
    const follower = await this.followerRepository.createPost({userId, followerId});
    if (!follower) {
      throw new Error('Follower found use-case');
    }
    return follower;
  };
}