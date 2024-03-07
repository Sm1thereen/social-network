import {UserModel} from '../index.js';
import {User} from '../../domain/user.js';
import jwt from 'jsonwebtoken';

export class UserRepository {
  createUser = async ({first_name, last_name, email, password}) => {
    try {
      const user = await UserModel.create({first_name, last_name, email, password});
      return await UserRepository.toDomain(user);
    } catch (error) {
      console.error('Error creating user', error);
    }
  };
  getUser = async ({email, password}) => {
    const user = await UserModel.findOne({where: {email, password}});
    if (!user) {
      return null;
    }
    return await UserRepository.toDomain(user);
  };
  getUserById = async ({userId}) => {
    const user = await UserModel.findByPk(userId);
    if (!user) {
      return null;
    }
    return await UserRepository.toDomain(user);
  };

  userUpdate = async (user, {refreshToken}) => {
    const ID = user.id;
    await UserModel.update({refreshToken}, {where: {id: ID}});
    user.refreshToken = refreshToken;
    console.log(user.refreshToken);
    return await UserRepository.toDomain(user);
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