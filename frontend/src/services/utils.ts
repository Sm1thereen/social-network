import jwtDecode from 'jwt-decode';

export async function exitSession() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}

export async function formatDate(dateString: string): Promise<string> {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  return date.toLocaleString('en-US', options).replace(',', ' at');
}


export async function getUserIdFromToken() {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    return null;
  }
  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('Invalid JWT token');
  }
  const payload = parts[1];
  const base64Url = payload.replace(/-/g, '+').replace(/_/g, '/');
  const base64 = decodeURIComponent(atob(base64Url).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  const jsonPayload = JSON.parse(base64);
  return jsonPayload.userId;
}

