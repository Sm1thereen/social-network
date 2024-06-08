import {UserRepository} from './user.repository.js';
import {PostRepository} from './post.repository.js';
import {CommentRepository} from './comment.repository.js';


export const userRepository = new UserRepository();
export const postRepository = new PostRepository();
export const commentRepository = new CommentRepository();
