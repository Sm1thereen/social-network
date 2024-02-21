import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const registrationUser = async (
  first_name: string,
  last_name: string,
  email: string,
  password: string,
) => {
  try {
    const data = JSON.stringify({first_name, last_name, email, password});
    console.log('data:', data);
    const response = await axios.post(`${API_BASE_URL}/api/v1/users`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data.token;
  } catch (error) {
    console.error('Error:', error);
  }
};
export const loginUser = async (email: string, password: string) => {
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
