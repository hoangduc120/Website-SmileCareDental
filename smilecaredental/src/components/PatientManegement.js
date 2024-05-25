import React, { useState } from 'react';

import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';


const PatientManagement = () => {

    const [patients] = useState([
        { id: 1, fullName: 'Bệnh nhân Lê Thị C', gender: 'Nữ', dateOfBirth: '1990-01-01', phone: '(028) 12345678', email: 'bnleC@example.com',},
        { id: 2, fullName: 'Bệnh nhân  Dương Văn D', gender: 'Nam', dateOfBirth: '1985-05-20', phone: '(029) 87654321', email: 'bnduongD@example.com',},
        { id: 1, fullName: 'Bệnh nhân Lê Thị E', gender: 'Nữ', dateOfBirth: '1990-01-01', phone: '(028) 12345678', email: 'bnleE@example.com',},
        { id: 2, fullName: 'Bệnh nhân  Dương Văn F', gender: 'Nam', dateOfBirth: '1985-05-20', phone: '(029) 87654321', email: 'bnduongF@example.com',},
        { id: 1, fullName: 'Bệnh nhân Lê Thị A', gender: 'Nữ', dateOfBirth: '1990-01-01', phone: '(028) 12345678', email: 'bnleA@example.com',},
        { id: 2, fullName: 'Bệnh nhân  Dương Văn B', gender: 'Nam', dateOfBirth: '1985-05-20', phone: '(029) 87654321', email: 'bnduongB@example.com',},
        { id: 1, fullName: 'Bệnh nhân Lê Thị C', gender: 'Nữ', dateOfBirth: '1990-01-01', phone: '(028) 12345678', email: 'bnleC@example.com',},
        { id: 2, fullName: 'Bệnh nhân  Dương Văn D', gender: 'Nam', dateOfBirth: '1985-05-20', phone: '(029) 87654321', email: 'bnduongD@example.com',},
      ]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4">Quản lý bệnh nhân</Typography>
      <Table>
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
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.fullName}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell>{patient.dateOfBirth}</TableCell>
              <TableCell>{patient.phone}</TableCell>
              <TableCell>{patient.email}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" size="small">
                  Xem chi tiết
                </Button>
                <Button variant="outlined" color="secondary" size="small">
                  Chỉnh sửa
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" >
        Thêm bệnh nhân mới
      </Button>
    </Container>
  );
};

export default PatientManagement;
