import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const registrationUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const data = JSON.stringify({name, email, password});
    console.log('data:', data);
    const response = await axios.post(`${API_BASE_URL}/auth/register`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};
export const LoginUser = async (email: string, password: string) => {
  try {
    const data = JSON.stringify({
      email,
      password,
    });
    console.log('data', data);
    const response = await axios.post(`${API_BASE_URL}/auth/login`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      console.log('Login successfull', response.data.token);
    } else {
      console.error('Login failed', response.status, response.data);
    }
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};
