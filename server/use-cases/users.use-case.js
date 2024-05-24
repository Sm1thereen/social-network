import jwt from 'jsonwebtoken';
import {UserRepository} from '../infrastructure/repositories/user.repository.js';


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
}


