import jwt from 'jsonwebtoken';


const secretKeyAccess = 'FASF124FAS';
const secretKeyRefresh = 'TS644';

const generateAccessToken = (userId) => {
  return jwt.sign({userId}, secretKeyAccess, {expiresIn: '1h'});
};

const generateRefreshToken = (userId) => {
  return jwt.sign({userId}, secretKeyRefresh, {expiresIn: '7d'});
};

export class UsersUseCase {
  constructor({userRepository}) {
    this.userRepository = userRepository;
  }

  createUser = async ({first_name, last_name, email, password}) => {
    const user = await this.userRepository.createUser({
      first_name, last_name, email, password,
    });
    if (!user) {
      throw new Error('User not found');
    }
    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);
    await this.userRepository.userUpdate(user, {refreshToken});
    return {accessToken, refreshToken};
  };
  userLogin = async ({email, password}) => {
    const user = await this.userRepository.userLogin({email, password});
    if (!user) {
      throw new Error('User not found');
    }
    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateAccessToken(user.id);
    return {accessToken, refreshToken};
  };

  getUser = async ({userId}) => {
    const user = await this.userRepository.getUser({userId});
    if (!user) {
      return null;
    }
    return user.unmarshal();
  };
  getUserById = async ({userId}) => {
    const user = await this.userRepository.getUserById({userId});
    if (!user) {
      return null;
    }
    return user.unmarshal();
  };
  getAllUsers = async () => {
    const users = await this.userRepository.getAllUsers();
    if (!users) {
      return null;
    }
    return users;
  };
  createFollower = async ({userId, followerId}) => {
    await this.userRepository.createFollower({userId, followerId});
  };
  getFollowingById = async ({userId}) => {
    const followings = await this.userRepository.getFollowingById({userId});
    if (!followings) {
      throw new Error('Following not found');
    }
    return followings;
  };
  getFollowersById = async ({userId}) => {
    const followings = await this.userRepository.getFollowersById({userId});
    if (!followings) {
      throw new Error('Followers not found');
    }
    return followings;
  };

  unFollowById = async ({userId, followerId}) => {
    await this.userRepository.unFollowById({userId, followerId});
  };

}


