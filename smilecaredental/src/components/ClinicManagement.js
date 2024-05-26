import React, { useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

const ClinicManagement = () => {
  const [clinics] = useState([
    { id: 1, name: 'Phòng Tẩy trắng', slot: '9:00 - 9:45', doctor: 'Bác sĩ Nguyễn Văn A' },
    { id: 2, name: 'Phòng Niềng răng', slot: '9:00 - 9:45', doctor: 'Bác sĩ Nguyễn Văn A' },
    { id: 3, name: 'Phòng Tẩy trắng', slot: '9:00 - 9:45', doctor: 'Bác sĩ Nguyễn Văn A' },
    { id: 4, name: 'Phòng Răng sứ', slot: '9:00 - 9:45', doctor: 'Bác sĩ Nguyễn Văn A' },
    { id: 5, name: 'Phòng Tẩy trắng', slot: '9:00 - 9:45', doctor: 'Bác sĩ Nguyễn Văn A' },
    { id: 6, name: 'Phòng Niềng răng', slot: '9:00 - 9:45', doctor: 'Bác sĩ Nguyễn Văn A' },
    { id: 7, name: 'Phòng Tẩy trắng', slot: '9:00 - 9:45', doctor: 'Bác sĩ Nguyễn Văn A' },
  ]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
        Quản lý phòng khám
      </Typography>
      <Table sx={{ minWidth: 650, '& th': { backgroundColor: '#0D47A1', color: '#ffffff' } }}>
        <TableHead>
          <TableRow>
            <TableCell>Tên</TableCell>
            <TableCell>Giờ khám</TableCell>
            <TableCell>Bác sĩ</TableCell>
            <TableCell>Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clinics.map((clinic, index) => (
            <TableRow key={clinic.id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff', '&:hover': { backgroundColor: '#eeeeee' } }}>
              <TableCell>{clinic.name}</TableCell>
              <TableCell>{clinic.slot}</TableCell>
              <TableCell>{clinic.doctor}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }}>
                  Xem chi tiết
                </Button>
                <Button variant="outlined" color="secondary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }}>
                  Chỉnh sửa
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
        Thêm phòng khám mới
      </Button>

    </Container>
  );
};

export default ClinicManagement;