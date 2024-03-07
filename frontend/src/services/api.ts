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
    const response = await axios.post(`${API_BASE_URL}/api/v1/registration`, data, {
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
    const response = await axios.post(`${API_BASE_URL}/api/v1/login`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      console.log('Login successfully', response.data.token);
    } else {
      console.error('Login failed', response.status, response.data);
    }
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const createPost = async (text: string) => {
  const authToken = localStorage.getItem('accessToken');
  try {
    const data = JSON.stringify({
      text,
    });
    const response = await axios.post(`${API_BASE_URL}/api/posts`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      console.log('Post created');
    } else {
      console.error('Error:', response.data);
    }
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};
export const getUserById = async () => {

  const authToken = localStorage.getItem('accessToken');
  try {
    if (!authToken) {
      console.log('authToken not found');
      return;
    }
    const response = await axios.get(`${API_BASE_URL}/api/v1/getUserById`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const user = response.data.user;
    console.log('user:', user);
    return user;
  } catch (error) {
    console.error('Error:', error);
  }
};