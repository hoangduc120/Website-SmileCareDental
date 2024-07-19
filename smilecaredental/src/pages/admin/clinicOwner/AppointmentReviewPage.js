import React, { useState, useEffect } from 'react';
import AppointmentFilter from './AppointmentFilter';

const AppointmentReviewPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [filters, setFilters] = useState({ doctor: '', status: '' });

  useEffect(() => {
    //  API để lấy danh sách lịch hẹn với các filter
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h1>Xét duyệt lịch hẹn</h1>
      <AppointmentFilter onFilterChange={handleFilterChange} />
      <div>
        {appointments.map(appointment => (
          <div key={appointment.id}>
            <p>Bác sĩ: {appointment.doctorName}</p>
            <p>Trạng thái: {appointment.status}</p>
            <p>Ngày hẹn: {appointment.date}</p>
            {/* Các thông tin khác của lịch hẹn */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentReviewPage;
