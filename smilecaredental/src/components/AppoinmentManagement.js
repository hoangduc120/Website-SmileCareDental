import React, { useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AppointmentManagement = () => {
  const [appointments] = useState([
    { id: 1, patientName: 'Đoàn Trường', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-27', time: '10:00 - 10:45 ', status: 'Pending' },
    { id: 2, patientName: 'Văn Quốc', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-28', time: '14:00 - 14:45 ', status: 'Confirmed' },
    { id: 3, patientName: 'Nguyễn Kiệt', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-27', time: '9:00 - 9:45 ', status: 'Pending' },
    { id: 4, patientName: 'Hoàng An', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-28', time: '11:00 - 11:45 ', status: 'Confirmed' },
    { id: 5, patientName: 'Công Duy', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-27', time: '15:00 - 15:45 ', status: 'Pending' },
    { id: 6, patientName: 'Văn Quốc', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-28', time: '16:00 - 16:45 ', status: 'Confirmed' },
    { id: 7, patientName: 'Đoàn Trường', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-27', time: '14:00 - 14:45 ', status: 'Pending' },
    { id: 8, patientName: 'Công Duy', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-28', time: '15:00 - 15:45 ', status: 'Confirmed' },
  ]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
        Quản lý lịch hẹn
      </Typography>
      <Table sx={{ minWidth: 650, '& th': { backgroundColor: '#0D47A1', color: '#ffffff' } }}>
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
          {appointments.map((appointment, index) => (
            <TableRow key={appointment.id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff', '&:hover': { backgroundColor: '#eeeeee' } }}>
              <TableCell>{appointment.patientName}</TableCell>
              <TableCell>{appointment.doctorName}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>{appointment.status}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }}>
                  Xem chi tiết
                </Button>
                <Button variant="outlined" color="secondary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }}>
                  Chỉnh sửa
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        sx={{
          marginTop: '20px',
          height: 50,
          backgroundColor: '#1898F3',
          color: 'white',
          fontWeight: '700',
          fontSize: '14px',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#000AFE',
            color: 'white',
          },
          display: 'block',
          margin: '20px auto 0', // Center the button
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Thêm lịch hẹn mới
        </Link>
      </Button>
    </Container>
  );
};

export default AppointmentManagement;
