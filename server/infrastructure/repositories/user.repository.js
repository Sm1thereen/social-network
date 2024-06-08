import {FollowerModel, UserModel} from '../index.js';
import {User} from '../../domain/user.js';

export class UserRepository {
  createUser = async ({first_name, last_name, email, password}) => {
    try {
      const user = await UserModel.create({first_name, last_name, email, password});
      return await UserRepository.toDomain(user);
    } catch (error) {
      console.error('Error creating user', error);
    }
  };
  userLogin = async ({email, password}) => {
    const user = await UserModel.findOne({where: {email, password}});
    if (!user) {
      return null;
    }
    return await UserRepository.toDomain(user);
  };
  getUser = async ({userId}) => {
    const user = await UserModel.findByPk(userId);
    if (!user) {
      return null;
    }
    return await UserRepository.toDomain(user);
  };
  getUserById = async ({userId}) => {
    try {
      const user = await UserModel.findByPk(userId);
      if (!user) {
        return null;
      }
      return await UserRepository.toDomain(user);
    } catch (error) {
      console.error('error user repository', error);
    }

  };
  userUpdate = async (user, {refreshToken}) => {
    const ID = user.id;
    await UserModel.update({refreshToken}, {where: {id: ID}});
    user.refreshToken = refreshToken;
    console.log(user.refreshToken);
    return await UserRepository.toDomain(user);
  };
  getAllUsers = async () => {
    try {
      const users = await UserModel.findAll();
      return await Promise.all(users.map(UserRepository.toDomain));
    } catch (error) {
      console.error('Error getting all users', error);
      return [];
    }
  };
  createFollower = async ({userId, followerId}) => {
    try {
      await FollowerModel.create({follow_from: userId, follow_to: followerId});
    } catch (error) {
      console.error('error', error);
    }
  };
  getFollowingById = async ({userId}) => {
    console.log('userID reposss', userId);
    try {
      const user = await UserModel.findOne({where: {id: userId}, include: 'following'});
      return Promise.all(user.following.map(following => UserRepository.toDomain(following)));
    } catch (error) {
      console.error('Error getting following', error);
    }
  };
  getFollowersById = async ({userId}) => {
    try {
      console.log('userID repo', userId);
      const user = await UserModel.findOne({where: {id: userId}, include: 'followers'});
      return Promise.all(user.followers.map(followers => UserRepository.toDomain(followers)));
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  unFollowById = async ({userId, followerId}) => {
    try {
      const result = await FollowerModel.destroy({
        where: {follow_from: userId, follow_to: followerId},
      });
      if (!result) {
        console.error('Error deleting user', error);
      }
      return true;
    } catch (error) {
      console.error('Error', error.message);
      return false;
    }
  };

  static toDomain = async (userModel) => {
    return User.create({
      id: userModel.id,
      first_name: userModel.first_name,
      last_name: userModel.last_name,
      email: userModel.email,
      password: userModel.password,
    });
  };
}