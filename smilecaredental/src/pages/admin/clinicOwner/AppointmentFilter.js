import React, { useState, useEffect } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const AppointmentFilter = ({ onFilterChange }) => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    //  API để lấy danh sách bác sĩ
    });

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
    onFilterChange({ doctor: event.target.value, status });
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    onFilterChange({ doctor: selectedDoctor, status: event.target.value });
  };

  return (
    <div>
      <FormControl fullWidth margin="normal">
        <InputLabel id="doctor-label">Bác sĩ</InputLabel>
        <Select
          labelId="doctor-label"
          value={selectedDoctor}
          onChange={handleDoctorChange}
        >
          {doctors.map(doctor => (
            <MenuItem key={doctor.id} value={doctor.id}>
              {doctor.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel id="status-label">Trạng thái</InputLabel>
        <Select
          labelId="status-label"
          value={status}
          onChange={handleStatusChange}
        >
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Cancelled">Cancelled</MenuItem>
          <MenuItem value="Confirmed">Confirmed</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default AppointmentFilter;
