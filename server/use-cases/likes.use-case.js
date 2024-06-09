export class LikesUseCase {
  constructor({likeRepository}) {
    this.likeRepository = likeRepository;
  }

  createLike = async ({user_id, post_id}) => {
    const like = await this.likeRepository.createLike({user_id, post_id});
    if (!like) {
      throw new Error('Like not found');
    }
    return like;
  };
}