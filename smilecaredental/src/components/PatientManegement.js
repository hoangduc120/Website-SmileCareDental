import React, { useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

const PatientManagement = () => {
  const [patients] = useState([
    { id: 1, fullName: 'Bệnh nhân Lê Thị C', gender: 'Nữ', dateOfBirth: '1990-01-01', phone: '(028) 12345678', email: 'bnleC@example.com' },
    { id: 2, fullName: 'Bệnh nhân Dương Văn D', gender: 'Nam', dateOfBirth: '1985-05-20', phone: '(029) 87654321', email: 'bnduongD@example.com' },
    { id: 3, fullName: 'Bệnh nhân Lê Thị E', gender: 'Nữ', dateOfBirth: '1990-01-01', phone: '(028) 12345678', email: 'bnleE@example.com' },
    { id: 4, fullName: 'Bệnh nhân Dương Văn F', gender: 'Nam', dateOfBirth: '1985-05-20', phone: '(029) 87654321', email: 'bnduongF@example.com' },
    { id: 5, fullName: 'Bệnh nhân Lê Thị A', gender: 'Nữ', dateOfBirth: '1990-01-01', phone: '(028) 12345678', email: 'bnleA@example.com' },
    { id: 6, fullName: 'Bệnh nhân Dương Văn B', gender: 'Nam', dateOfBirth: '1985-05-20', phone: '(029) 87654321', email: 'bnduongB@example.com' },
    { id: 7, fullName: 'Bệnh nhân Lê Thị C', gender: 'Nữ', dateOfBirth: '1990-01-01', phone: '(028) 12345678', email: 'bnleC@example.com' },
    { id: 8, fullName: 'Bệnh nhân Dương Văn D', gender: 'Nam', dateOfBirth: '1985-05-20', phone: '(029) 87654321', email: 'bnduongD@example.com' },
  ]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
        Quản lý bệnh nhân
      </Typography>
      <Table sx={{ minWidth: 650, '& th': { backgroundColor: '#0D47A1', color: '#ffffff' } }}>
        <TableHead>
          <TableRow>
            <TableCell>Họ và tên</TableCell>
            <TableCell>Giới tính</TableCell>
            <TableCell>Ngày sinh</TableCell>
            <TableCell>Điện thoại</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient, index) => (
            <TableRow key={patient.id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff', '&:hover': { backgroundColor: '#eeeeee' } }}>
              <TableCell>{patient.fullName}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell>{patient.dateOfBirth}</TableCell>
              <TableCell>{patient.phone}</TableCell>
              <TableCell>{patient.email}</TableCell>
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
        Thêm bệnh nhân mới
      </Button>
    </Container>
  );
};

export default PatientManagement;
