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

export const updateClinic = async (clinicData) => {
  return axiosInstance.put(`/clinic-owner/clinic/update`, clinicData);
};

export const createClinic = async (clinicData) => {
  return axiosInstance.post(`/clinic-owner/clinic/create`, clinicData);
};

export const deleteClinicById = async (clinicId) => {
  return axiosInstance.delete(`/clinic-owner/clinic/delete`, { data: { id: clinicId } });
};

export const searchDentistsByName = async (name) => {
  return axiosInstance.get(`/clinic-owner/dentist/searchdentist`, { params: { name } });
};