import axiosInstance from './axiosInstance';

// Authentication API
export const register = async (userData) => {
  return axiosInstance.post('/api/auth/register', userData);
};

export const login = async (userData) => {
  return axiosInstance.post('/api/auth/login', userData);
};

export const verifyEmail = async (userId) => {
  return axiosInstance.get(`/api/auth/verify/${userId}`);
};

export const requestPasswordReset = async (email) => {
  return axiosInstance.post('/api/auth/request-password-reset', { email });
};

export const resetPassword = async (data) => {
  return axiosInstance.post('/api/auth/reset-password', data);
};

// Home API
export const getPageAllClinics = async () => {
  return axiosInstance.get('/all-clinics');
};

export const getPageAllDoctors = async () => {
  return axiosInstance.get('/all-doctors');
};

export const getPageAllServices = async () => {
  return axiosInstance.get('/all-services');
};

export const getPageForPatients = async () => {
  return axiosInstance.get('/for-patients');
};

export const getPageForDoctors = async () => {
  return axiosInstance.get('/for-doctors');
};

export const postSearchHomePage = async (searchData) => {
  return axiosInstance.post('/search-homepage', searchData);
};

export const getHomePage = async () => {
  return axiosInstance.get('/');
};

export const getDetailServicePage = async (id) => {
  return axiosInstance.get(`/detail/service/${id}`);
};

export const getDetailDoctorPage = async (id) => {
  return axiosInstance.get(`/detail/doctor/${id}`);
};

export const postBookingDoctorPageWithoutFiles = async (bookingData) => {
  return axiosInstance.post('/booking-doctor-without-files/create', bookingData);
};

export const postBookingDoctorPageNormal = async (bookingData) => {
  return axiosInstance.post('/booking-doctor-normal/create', bookingData);
};

export const getDetailClinicPage = async (id) => {
  return axiosInstance.get(`/detail/clinic/${id}`);
};

export const getDentistsByClinic = async (id) => {
  return axiosInstance.get(`/clinic/${id}/dentists`);
};


// Clinic Owner API
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

// export const getUsers = async () => {
//   return axiosInstance.get('/admin/users/customers-clinicowners');
// };

// Admin API
export const createUser = async (userData) => {
  return axiosInstance.post('/admin/users', userData);
};

export const updateUser = async (userId, userData) => {
  return axiosInstance.put(`/admin/users/${userId}`, userData);
};

export const deleteUser = async (userId) => {
  return axiosInstance.delete(`/admin/users/${userId}`);
};

export const searchUsersByName = async (name) => {
  return axiosInstance.get('/admin/users/search', { params: { name } });
};