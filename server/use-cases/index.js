import {UsersUseCase} from './users.use-case.js';
import {followerRepository, userRepository} from '../infrastructure/repositories/index.js';
import {postRepository} from '../infrastructure/repositories/index.js';
import {PostsUseCase} from './posts.use-case.js';
import {FollowersController} from '../api/http/controllers/followers.controller.js';

export const usersUseCase = new UsersUseCase(
  {userRepository},
);
export const postsUseCase = new PostsUseCase({postRepository});
export const followersUseCase = new FollowersController({followerRepository});