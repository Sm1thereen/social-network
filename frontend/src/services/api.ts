import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';
const authToken = localStorage.getItem('accessToken');

export const postDataRequest = async (
  formData: {},
  url: string,
  contentType: 'application/json' | 'multipart/form-data' = 'application/json',
) => {
  try {
    const data = JSON.stringify(formData);
    console.log('data post', data);
    const response = await axios.post(`${API_BASE_URL}${url}`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': contentType,
      },
    });
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
  } catch (error: any) {
    console.log('Error message', error?.message);
  }
};

export const createPost = async (text: string) => {
  const authToken = localStorage.getItem('accessToken');
  try {
    const data = JSON.stringify({
      text,
    });
    const response = await axios.post(`${API_BASE_URL}/posts`, data, {
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
