import {UserRepository} from './user.repository.js';
import {PostRepository} from './post.repository.js';
import {FollowerRepository} from './follower.repository.js';


export const userRepository = new UserRepository();
export const postRepository = new PostRepository();
export const followerRepository = new FollowerRepository();
