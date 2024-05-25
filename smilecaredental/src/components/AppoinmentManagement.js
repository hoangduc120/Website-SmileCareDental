import React, { useState } from 'react';

import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';



const AppointmentManagement = () => {
 
  const [appointments] = useState([
    {
      id: 1,
      patientName: 'Đoàn Trường',
      doctorName: 'Dr. Hoàng Đức',
      date: '2024-05-27',
      time: '10:00 - 11:00 AM',
      status: 'Pending',
    },
    {
      id: 2,
      patientName: 'Văn Quốc',
      doctorName: 'Dr. Hoàng Đức',
      date: '2024-05-28',
      time: '2:00 - 3:00 PM',
      status: 'Confirmed',
    },

  ]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" >Quản lý lịch hẹn</Typography>
      <Button variant="contained" color="primary" >
        Thêm lịch hẹn mới
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Bệnh nhân</TableCell>
            <TableCell>Bác sĩ</TableCell>
            <TableCell>Ngày hẹn</TableCell>
            <TableCell>Giờ hẹn</TableCell>
            <TableCell>Trạng thái</TableCell>
            <TableCell>Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>{appointment.patientName}</TableCell>
              <TableCell>{appointment.doctorName}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>{appointment.status}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" size="small">
                  Xem chi tiết
                </Button>
                <Button variant="outlined" color="secondary" size="small">
                  Chỉnh sửa
                </Button>
                <Button variant="outlined" color="error" size="small">
                  Hủy
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default AppointmentManagement;
