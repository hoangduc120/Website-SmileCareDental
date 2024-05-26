import React, { useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

const DoctorManagement = () => {
  const [doctors] = useState([
    { id: 1, fullName: 'Bác sĩ Nguyễn Văn A', specialization: 'Răng-hàm-mặt', phone: '(028) 12345678', email: 'bsnguyenA@example.com' },
    { id: 2, fullName: 'Bác sĩ Trần Thị B', specialization: 'Răng-hàm-mặt', phone: '(029) 87654321', email: 'bsTranB@example.com' },
    { id: 3, fullName: 'Bác sĩ Nguyễn Văn C', specialization: 'Răng-hàm-mặt', phone: '(028) 12345678', email: 'bsnguyenC@example.com' },
    { id: 4, fullName: 'Bác sĩ Trần Thị D', specialization: 'Răng-hàm-mặt', phone: '(029) 87654321', email: 'bsTranD@example.com' },
    { id: 5, fullName: 'Bác sĩ Nguyễn Văn E', specialization: 'Răng-hàm-mặt', phone: '(028) 12345678', email: 'bsnguyenE@example.com' },
    { id: 6, fullName: 'Bác sĩ Trần Thị F', specialization: 'Răng-hàm-mặt', phone: '(029) 87654321', email: 'bsTranF@example.com' },
    { id: 7, fullName: 'Bác sĩ Nguyễn Văn G', specialization: 'Răng-hàm-mặt', phone: '(028) 12345678', email: 'bsnguyenG@example.com' },
    { id: 8, fullName: 'Bác sĩ Trần Thị H', specialization: 'Răng-hàm-mặt', phone: '(029) 87654321', email: 'bsTranH@example.com' },
  ]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
        Quản lý bác sĩ
      </Typography>
      <Table sx={{ minWidth: 650, '& th': { backgroundColor: '#0D47A1', color: '#ffffff' } }}>
        <TableHead>
          <TableRow>
            <TableCell>Họ và tên</TableCell>
            <TableCell>Điện thoại</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctors.map((doctor, index) => (
            <TableRow key={doctor.id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff', '&:hover': { backgroundColor: '#eeeeee' } }}>
              <TableCell>{doctor.fullName}</TableCell>
              <TableCell>{doctor.phone}</TableCell>
              <TableCell>{doctor.email}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }}>
                  Xem chi tiết
                </Button>
                <Button variant="outlined" color="error" size="small" sx={{ borderRadius: '8px', textTransform: 'none' }}>
                  Xóa
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
        Thêm bác sĩ mới
      </Button>
    </Container>
  );
};

export default DoctorManagement;
