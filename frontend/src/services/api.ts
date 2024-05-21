import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';
const authToken = localStorage.getItem('accessToken');

export const postDataRequest = async (
  formData: {},
  url: string,
  contentType: 'application/json' | 'multipart/form-data' = 'application/json',
) => {
  try {
    const data = JSON.stringify(formData);
    const response = await axios.post(`${API_BASE_URL}${url}`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': contentType,
      },
    });
    console.log('response', response.data);
    return response.data;
  } catch (error) {
    console.error('error', error);
  }
};
export const getDataRequest = async (url: string) => {
  try {
    if (!authToken) {
      console.error('AccessToken not found');
      return;
    }
    const response = await axios.get(`${API_BASE_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('error', error);
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