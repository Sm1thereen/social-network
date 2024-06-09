export class UsersController {
  constructor(usersUseCase) {
    this.usersUseCase = usersUseCase;
  }

  createUser = async (req, res) => {
    return res.json({
      token: await this.usersUseCase.createUser(req.body),
      status: 1,
    });
  };
  userLogin = async (req, res) => {
    return res.json({
      token: await this.usersUseCase.userLogin(req.body),
      status: 1,
    });
  };
  getUser = async (req, res) => {
    return res.json({
      user: await this.usersUseCase.getUser({userId: req.user.id}),
    });
  };
  getUserById = async (req, res) => {
    return res.json({
      user: await this.usersUseCase.getUserById({userId: req.params.userId}),
      status: 1,
    });
  };
  getAllUsers = async (req, res) => {
    try {
      const users = await this.usersUseCase.getAllUsers();
      res.json({users: users.map(user => user.unmarshal()), status: 1});
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  };
  createFollower = async (req, res) => {
    await this.usersUseCase.createFollower({
      userId: req.user.id,
      followerId: req.body.followerId,
    });
    return res.json({
      status: 1,
    });
  };
  getFollowingById = async (req, res) => {
    try {
      const followings = await this.usersUseCase.getFollowingById({userId: req.params.userId});
      res.json({data: followings.map(following => following.unmarshal())});
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  };
  getFollowersById = async (req, res) => {
    try {
      const followers = await this.usersUseCase.getFollowersById({userId: req.params.userId});
      res.json({data: followers.map(follower => follower.unmarshal())});
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  };
  unFollowById = async (req, res) => {
    try {
      await this.usersUseCase.unFollowById({
        userId: req.user.id,
        followerId: req.body.followerId,
      });
      return res.json({
        status: 1,
      });
    } catch (error) {
      console.error('error', error.message);
    }
  };
}