export default async function exitSession() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}