import axiosInstance from './axiosInstance';

export const register = async (userData) => {
  return axiosInstance.post('/register', userData);
};

export const login = async (userData) => {
  return axiosInstance.post('/login', userData);
};

export const verifyEmail = async (userId) => {
  return axiosInstance.get(`/verify-email/${userId}`);
};

export const requestPasswordReset = async (email) => {
  return axiosInstance.post('/request-password-reset', { email });
};

export const resetPassword = async (data) => {
  return axiosInstance.post('/reset-password', data);
};
