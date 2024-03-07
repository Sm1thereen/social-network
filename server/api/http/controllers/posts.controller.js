export class PostsController {
  constructor({postsUseCase}) {
    this.postsUseCase = postsUseCase;
  }

  createPost = async (req, res) => {
    console.log('req.body', req.body);
    const post = await this.postsUseCase.createPost({...req.body, userId: req.user.id});
    console.log('user.id', req.user.id);
    res.json({data: post.unmarshal(), status: 1});
  };
}

