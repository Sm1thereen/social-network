import {Token} from '../interfaces/interfaces';

export default async function setAccessToken(data: Token) {
  if (data.token.accessToken && data.token.refreshToken) {
    const accessToken = data.token.accessToken;
    const refreshToken = data.token.refreshToken;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    console.log('Token save in localstorage');
  }
}
