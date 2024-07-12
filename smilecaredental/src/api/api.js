import axiosInstance from './axiosInstance';
const moment = require('moment');


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
  return axiosInstance.get('/clinic-owner/clinic/dentists');
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
  return axiosInstance.get(`/dentists/${dentistId}/available-slots?date=${selectedDate}`, {
    // params: {
    //   date: selectedDate,

    // }
  });
}
export const createAppointment = async (appointmentData) => {
  return axiosInstance.post('/customer/create-appointment', appointmentData);
}


export const confirmAppointment = async () => {
  return axiosInstance.get('/appointments/confirm/:appointmentId');
}

// Dentist 
export const getSchedule = async (selectedDate) => {
  try {
    // Đảm bảo định dạng ngày là YYYY-MM-DD
    const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
    const response = await axiosInstance.get(`/dentist/schedule?date=${formattedDate}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching schedule:", error);
    throw error;
  }
}; 

export const getPatients = async () => {
  return axiosInstance.get('/dentist/patients')
}

export const getHistory = async (id) => {
  return axiosInstance.get(`/dentist/patients/${id}/history`)
}

export const postReappointment = async () => {
  return axiosInstance.post('/dentist/reappointment')
}

export const createExaminationResult = async (appointmentId, result) => {
  return axiosInstance.post('/dentist/examination-result', { appointmentId, result })
}

export const getAvailable = async (id) => {
  return axiosInstance.get(`/dentists/${id}/available-slots`)
}

export const getAppsAndReasByCustomer = async () => {
  try {
    const response = await axiosInstance.get(`/customer/appointments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error;
  }
};

export const getResultByCustomer = async () => {
  try {
    const response = await axiosInstance.get(`/customer/histories`)
    return response.data;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error;
  }
}

export const createFeedbackByCustomer = async (examinationResultId, feedbackContent, rating) => {
  try {
    const response = await axiosInstance.post(`/customer/feedback/${examinationResultId}`, {
      rating,
      feedback_text: feedbackContent
    });
    return response.data;
  } catch (error) {
    console.error("Error create feedback:", error);
    throw error;
  }
};

export const updateFeedbackByCustomer = async (examinationResultId, feedbackContent, rating) => {
  try {
    const response = await axiosInstance.put(`/customer/feedback/${examinationResultId}`, {
      rating,
      feedback_text: feedbackContent
    });
    return response.data;
  } catch (error) {
    console.error("Error update feedback:", error);
    throw error;
  }
};

export const updateDentist = async (dentistId, updatedDentistInfo) => {
  try {
    const response = await axiosInstance.put(`/clinic-owner/clinic/dentists/${dentistId}`, updatedDentistInfo);
    return response.data;
  } catch (error) {
    console.error("Error updating dentist:", error);
    throw error;
  }
}; 

export const deleteDentist = async (dentistId) => {
  try {
    const response = await axiosInstance.delete(`/clinic-owner/clinic/dentists/${dentistId}`);
    return response.data;
  } catch (error) {
    console.error("Error delete dentist:", error);
    throw error;
  }
}; 

export const addDentist = async (formData) => {
  try {
      const response = await axiosInstance.post(`/clinic-owner/clinic/dentists`, formData);
      return response.data;
  } catch (error) {
      console.error("Error adding dentist:", error);
      throw error;
  }
};
