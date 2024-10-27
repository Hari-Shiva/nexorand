import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/api/user/v1/register`, userData);
};

export const loginUser = async (credentials) => {
  return await axios.post(`${API_URL}/api/user/v1/login`, credentials);
};

export const getUsers = async () => {
  return await axios.get(`${API_URL}/api/user/v1/get-users`);
};

export const updatePoints = async (userId, points) => {
  return await axios.patch(`${API_URL}/api/user/v1/claim-points`, { userId, points });
};

export const getUserHistory = async (userId) => {
  return await axios.post(`${API_URL}/api/user/v1/your-history`, { userId });
};

export const getUserInfo = async () => {
  return await axios.get(`${API_URL}/api/user/v1/get-users-info-id`);
};
