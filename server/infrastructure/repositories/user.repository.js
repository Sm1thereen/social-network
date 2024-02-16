import {UserModel} from '../index';


export class UserRepository {
  createUser = async ({firstName, lastName, email, password}) => {
    try {
      const user = await UserModel.create({firstName, lastName, email, password});
      return await UserRepository.toDomain(user);
    } catch (error) {
      console.error('Error creating user', error);
    }

  };
  static toDomain = async (userModel) => {
    return User.create({
      id: userModel.id,
      password: userModel.password,
      name: userModel.name,
      email: userModel.email,
    });
  };
}