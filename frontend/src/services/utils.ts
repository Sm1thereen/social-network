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
