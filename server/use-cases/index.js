import {UsersUseCase} from './users.use-case.js';
import {commentRepository, likeRepository, userRepository} from '../infrastructure/repositories/index.js';
import {postRepository} from '../infrastructure/repositories/index.js';
import {PostsUseCase} from './posts.use-case.js';
import {CommentsUseCase} from './comments.use-case.js';
import {LikesUseCase} from './likes.use-case.js';

export const usersUseCase = new UsersUseCase({userRepository});
export const postsUseCase = new PostsUseCase({postRepository});
export const commentsUseCase = new CommentsUseCase({commentRepository});
export const likesUseCase = new LikesUseCase({likeRepository});