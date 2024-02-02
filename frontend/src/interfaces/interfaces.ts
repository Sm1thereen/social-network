export interface ILogin {
  email: string;
  password: string;
}
export interface IRegistration {
  name: string;
  email: string;
  password: string;
}

export interface IToken {
  accessToken: string;
  refreshToken: string;
}
