import React, { useState } from 'react';

import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';


const ClinicManagement = () => {

  const [clinics] = useState([
    {
      id: 1,
      name: 'Phòng Tẩy trắng',
      address: 'Phòng 404',
      phone: '(028) 12345678',
      email: 'phongkhamA@example.com',
    },
    {
      id: 2,
      name: 'Phòng Niềng răng ',
      address: 'Phòng 602',
      phone: '(029) 87654321',
      email: 'phongkhamB@example.com',
    },
    // Add more clinics as needed
  ]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" >Quản lý phòng khám</Typography>
      <Button variant="contained" color="primary" >
        Thêm phòng khám mới
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tên</TableCell>
            <TableCell>Số phòng</TableCell>
            <TableCell>Điện thoại</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clinics.map((clinic) => (
            <TableRow key={clinic.id}>
              <TableCell>{clinic.name}</TableCell>
              <TableCell>{clinic.address}</TableCell>
              <TableCell>{clinic.phone}</TableCell>
              <TableCell>{clinic.email}</TableCell>
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
    </Container>
  );
};

export default ClinicManagement;
