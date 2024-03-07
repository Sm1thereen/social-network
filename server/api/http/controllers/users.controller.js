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
  getUser = async (req, res) => {
    return res.json({
      token: await this.usersUseCase.userLogin(req.body),
      status: 1,
    });
  };
  getUserById = async (req, res) => {
    return res.json({
      user: await this.usersUseCase.getUserById({userId: req.user.id}),
    });
  };
}