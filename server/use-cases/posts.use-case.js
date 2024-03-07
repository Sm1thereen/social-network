export class PostsUseCase {
  constructor({postRepository}) {
    this.postRepository = postRepository;
  }

  createPost = async ({text, userId}) => {
    const post = await this.postRepository.createPost({text, userId});
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  };
}
