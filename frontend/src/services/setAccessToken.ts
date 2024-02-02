import {IToken} from '../interfaces/interfaces';

export default async function setAccessToken(data: IToken) {
  if (data.accessToken) {
    const accessToken = data.accessToken;
    const refreshToken = data.refreshToken;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    console.log('Token save in localstorage');
  }
}
