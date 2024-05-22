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