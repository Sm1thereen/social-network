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
  accessToken: string;
  refreshToken: string;
}
