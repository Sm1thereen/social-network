export class LikesController {
  constructor({likesUseCase}) {
    this.likesUseCase = likesUseCase;
  }

  createLike = async (req, res) => {
    console.log('req.body', req.body);
    const like = await this.likesUseCase.createLike({...req.body});
    return res.json({data: like.unmarshal(), status: 1});
  };
}