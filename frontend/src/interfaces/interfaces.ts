export interface Login {
  email: string;
  password: string;
}

export interface Registration {
  firstName: string;
  lastName: string;
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
  firstName: string;
  lastName: string;
}

export interface AuthorizationProps {
  toggleForm: () => void;
}
