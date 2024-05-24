export class FollowersController {
  constructor(followersUseCase) {
    this.followersUseCase = followersUseCase;
  }

  createFollower = async (req, res) => {
    return res.json({
      follower: await this.followersUseCase.createFollower(req.body),
      status: 1,
    });
  };

  getAllUsers = async (req, res) => {
    try {
      const users = await this.followersUseCase.getAllUsers();
      res.json({data: users.map(user => user.unmarshal()), status: 1});
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  };

}