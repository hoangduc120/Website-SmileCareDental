import React, { useState } from 'react';

import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';


const ClinicManagement = () => {

  const [clinics] = useState([
    { id: 1, name: 'Phòng Tẩy trắng', address: 'Phòng 404', phone: '(028) 12345678', email: 'phongkhamA@example.com',},
    { id: 2, name: 'Phòng Niềng răng', address: 'Phòng 605', phone: '(028) 12345678', email: 'phongkhamA@example.com',},
    { id: 3, name: 'Phòng Tẩy trắng', address: 'Phòng 423', phone: '(028) 12345678', email: 'phongkhamA@example.com',},
    { id: 4, name: 'Phòng Răng sứ', address: 'Phòng 502', phone: '(028) 12345678', email: 'phongkhamA@example.com',},
    { id: 5, name: 'Phòng Tẩy trắng', address: 'Phòng 611', phone: '(028) 12345678', email: 'phongkhamA@example.com',},
    { id: 6, name: 'Phòng Niềng răng', address: 'Phòng 302', phone: '(028) 12345678', email: 'phongkhamA@example.com',},
    { id: 7, name: 'Phòng Tẩy trắng', address: 'Phòng 408', phone: '(028) 12345678', email: 'phongkhamA@example.com',},
  ]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" >Quản lý phòng khám</Typography>
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
                <Button variant="outlined" color="error" size="small">
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" >
        Thêm phòng khám mới
      </Button>
    </Container>
  );
};

export default ClinicManagement;
