export interface ILogin {
  email: string;
  password: string;
}

export interface IRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IToken {
  token: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface IUser {
  firstName: string;
  lastName: string;
}