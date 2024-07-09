import React, { useState } from 'react';
import { Grid, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button, TextField } from '@mui/material';
import ReappointmentDetailDialog from './ReappointmentDetailDialog';
import ResultDetailDialog from './ResultDetailDialog';
import CreateResultDialog from './CreateResultDialog';

const doctorSchedules = [
  {
    doctorName: 'Bác sĩ Nguyễn Văn A',
    appointments: [
      { 
        id: 1, 
        date: '2024-07-08', 
        time: '09:00 AM',  
        patient: 'Nguyễn Văn A', 
        address: '123 Đường ABC, Quận XYZ, TP HCM', 
        email: 'nguyenvana@example.com', 
        phone: '0987654321', 
        reappointmentDate: '2024-07-15', 
        isPeriodic: true, 
        periodicInterval: '1 tháng', 
        serviceId: 'Service A', 
        slotId: 'Slot 1',
        result: 'Kết quả khám: Bệnh nhân thiếu răng, cần trồng thêm răng.'
      },
      { 
        id: 2, 
        date: '2024-07-09', 
        time: '10:30 AM',  
        patient: 'Trần Thị B', 
        address: '456 Đường DEF, Quận UVW, Hà Nội', 
        email: 'tranthib@example.com', 
        phone: '0123456789', 
        reappointmentDate: '2024-07-20', 
        isPeriodic: false, 
        periodicInterval: '', 
        serviceId: 'Service B', 
        slotId: 'Slot 2',
        result: 'Kết quả khám: Bệnh nhân sâu răng, cần nhổ răng.'
      },
      { 
        id: 3, 
        date: '2024-07-10', 
        time: '02:00 PM', 
        patient: 'Phạm Văn C', 
        address: '789 Đường GHI, Quận MNO, Đà Nẵng', 
        email: 'phamvanc@example.com', 
        phone: '0909090909', 
        reappointmentDate: '2024-07-18', 
        isPeriodic: true, 
        periodicInterval: '2 tháng', 
        serviceId: 'Service C', 
        slotId: 'Slot 3',
        result: 'Kết quả khám: Bệnh nhân bị thiếu răng'
      },
    ]
  },
];

const ViewPatientList = () => {
  const [openReappointmentDialog, setOpenReappointmentDialog] = useState(false);
  const [openResultDialog, setOpenResultDialog] = useState(false);
  const [openCreateResultDialog, setOpenCreateResultDialog] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchName, setSearchName] = useState('');

  const handleViewResult = (appointment) => {
    setSelectedAppointment(appointment);
    setOpenResultDialog(true);
  };

  const handleReappointment = (appointment) => {
    setSelectedAppointment(appointment);
    setOpenReappointmentDialog(true);
  };

  const handleCreateResult = (appointment) => {
    setSelectedAppointment(appointment);
    setOpenCreateResultDialog(true);
  };

  const handleCloseReappointmentDialog = () => {
    setOpenReappointmentDialog(false);
  };

  const handleCloseResultDialog = () => {
    setOpenResultDialog(false);
  };

  const handleCloseCreateResultDialog = () => {
    setOpenCreateResultDialog(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const filterAppointments = (appointments) => {
    if (selectedDate && selectedDate !== '') {
      appointments = appointments.filter(appointment => appointment.date === selectedDate);
    }
    if (searchName.trim() !== '') {
      appointments = appointments.filter(appointment =>
        appointment.patient.toLowerCase().includes(searchName.trim().toLowerCase())
      );
    }
    return appointments;
  };

  const handleSaveResult = (appointment, result) => {
    // Logic to save the result goes here, for example, updating the state or making an API call
    console.log(`Saving result for appointment ID ${appointment.id}: ${result}`);
  };

  return (
    <Grid container spacing={3}>
      {doctorSchedules.map((doctorSchedule, index) => (
        <Grid item xs={12} key={index}>
          <Typography variant="h4" gutterBottom style={{ marginBottom: '16px' }}>
            Lịch khám và Danh sách bệnh nhân của {doctorSchedule.doctorName}
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <TextField
                label="Tìm kiếm theo tên bệnh nhân"
                variant="outlined"
                fullWidth
                value={searchName}
                onChange={handleSearchChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="date"
                label="Chọn ngày"
                type="date"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                onChange={(e) => handleDateChange(e.target.value)}
              />
            </Grid>
          </Grid>
          <TableContainer component={Paper} elevation={3} style={{ marginTop: '16px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Tên bệnh nhân</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Số điện thoại</TableCell>
                  <TableCell>Ngày</TableCell>
                  <TableCell>Hành động</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filterAppointments(doctorSchedule.appointments).map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.patient}</TableCell>
                    <TableCell>{appointment.email}</TableCell>
                    <TableCell>{appointment.phone}</TableCell>
                    <TableCell>{appointment.date}</TableCell>
                    <TableCell>
                      <Button 
                        variant="outlined" 
                        style={{ marginRight: '10px' }} 
                        onClick={() => handleViewResult(appointment)}
                      >
                        Xem kết quả
                      </Button>
                      <Button 
                        variant="outlined"
                        style={{ marginRight: '10px' }} 
                        onClick={() => handleReappointment({ ...appointment, doctorName: doctorSchedule.doctorName })}
                      >
                        Đặt lịch tái khám
                      </Button>
                      <Button 
                        variant="outlined"
                        onClick={() => handleCreateResult(appointment)}
                      >
                        Tạo kết quả khám
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      ))}
      <ReappointmentDetailDialog isOpen={openReappointmentDialog} onClose={handleCloseReappointmentDialog} appointment={selectedAppointment} />
      <ResultDetailDialog isOpen={openResultDialog} onClose={handleCloseResultDialog} appointment={selectedAppointment} />
      <CreateResultDialog isOpen={openCreateResultDialog} onClose={handleCloseCreateResultDialog} appointment={selectedAppointment} onSave={handleSaveResult} />
    </Grid>
  );
};

export default ViewPatientList;
