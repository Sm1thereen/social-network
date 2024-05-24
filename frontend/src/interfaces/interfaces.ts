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

export interface AuthorizationProps {
  toggleForm: () => void;
}

export interface Post {
  id: number;
  text: string;
  createdAt: string;
  user: User;
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
}

