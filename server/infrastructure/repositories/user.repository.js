import {UserModel} from '../index.js';
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