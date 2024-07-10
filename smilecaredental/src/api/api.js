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

export const getCustomersAndClinicOwners = async () => {
  return axiosInstance.get('/admin/users/customers-clinicowners');
}
export const getAllClinics = async () => {
  return axiosInstance.get('/admin/clinics');
}
export const getAllDentists = async () => {
  return axiosInstance.get('/admin/dentists');
}

export const getAvailableSlotsForDate = async (dentistId, selectedDate) => {
  return axiosInstance.get(`/dentists/${dentistId}/available-slots`, {
    params: {
      date: selectedDate,
    }
  });
}
export const createAppointment = async (appointmentData) => {
  return axiosInstance.post('/customer/create-appointment', appointmentData);
}


export const confirmAppointment = async () => {
  return axiosInstance.get('/appointments/confirm/:appointmentId');
}

// Dentist 
export const getSchedule = async () => {
  return axiosInstance.get('/dentist/schedule')
}
export const getPatients = async () => {
  return axiosInstance.get('/dentist/patients')
}

export const getHistory = async (id) => {
  return axiosInstance.get(`/dentist/patients/${id}/history`)
}

export const getReappointment = async () => {
  return axiosInstance.post('/dentist/reappointment')
}

export const getResult = async () => {
  return axiosInstance.post('/dentist/examination-result')
}

export const getAvailable = async (id) => {
  return axiosInstance.get(`/dentists/${id}/available-slots`)
}