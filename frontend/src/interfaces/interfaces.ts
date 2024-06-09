import {util} from 'zod';
import noUndefined = util.noUndefined;

export interface Login {
  email: string;
  password: string;
}

export interface Registration {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface Token {
  token: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface User {
  id?: number;
  first_name: string;
  last_name: string;
}

export interface Likes {
  user_id: number;
  post_id: number;
}

export interface AuthorizationProps {
  toggleForm: () => void;
}

export interface Post {
  id: number;
  text: string;
  createdAt: string;
  user: User;
  likes: any;
}

export interface CardInfoPostProps {
  post: Post;
}

export interface CardPostProfileProps {
  post: Post;
  user: User | null;
}

export interface CardUserProfileProps {
  user: User | null;
  textButton: string;
  setTextButton: (text: string) => void;
}

export interface ButtonProps {
  text?: string;
  onClick?: () => void;
  style?: string;
  width?: number;
  height?: number;
  padding?: string;
  type?: 'submit' | 'button' | 'reset';

}
