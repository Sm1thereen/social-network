export class PostsController {
  constructor({postsUseCase}) {
    this.postsUseCase = postsUseCase;
  }

  createPost = async (req, res) => {
    const post = await this.postsUseCase.createPost({...req.body, userId: req.user.id});
    res.json({data: post.unmarshal(), status: 1});
  };
  getPostsByUserId = async (req, res) => {
    try {
      const posts = await this.postsUseCase.getPostsByUserId({userId: req.user.id});
      res.json({data: posts, status: 1});
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  };
  
  getAllPosts = async (req, res) => {
    try {
      const posts = await this.postsUseCase.getAllPosts();
      res.json({data: posts.map(post => post.unmarshal()), status: 1});
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  };
}


