import {UsersUseCase} from './users.use-case.js';
import {userRepository} from '../infrastructure/repositories/index.js';
import {postRepository} from '../infrastructure/repositories/index.js';
import {PostsUseCase} from './posts.use-case.js';

export const usersUseCase = new UsersUseCase(
  {userRepository},
);
export const postsUseCase = new PostsUseCase({postRepository});