export class PostsUseCase {
  constructor({postRepository}) {
    this.postRepository = postRepository;
  }

  createPost = async ({text, userId}) => {
    const post = await this.postRepository.createPost({text, userId});
    if (!post) {
      throw new Error('Post not found use-case');
    }
    return post;
  };
  getPostsByUserId = async ({userId}) => {
    const posts = await this.postRepository.getPostById({userId});
    if (!posts || posts.length === 0) {
      return [];
    }
    return posts.map((post) => post.unmarshal());
  };
  getAllPosts = async () => {
    const posts = await this.postRepository.getAllPosts();
    if (!posts || posts.length === 0) {
      throw new Error('No posts found');
    }
    return posts;
  };

}
