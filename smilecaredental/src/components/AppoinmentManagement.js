import React, { useState } from 'react';

import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';



const AppointmentManagement = () => {
 
    const [appointments] = useState([
        { id: 1, patientName: 'Đoàn Trường', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-27',  time: '10:00 - 11:00 AM',  status: 'Pending',},
        { id: 2,  patientName: 'Văn Quốc', doctorName: 'Bác sĩ Hoàng Đức',  date: '2024-05-28',  time: '2:00 - 3:00 PM',  status: 'Confirmed',},
        { id: 3, patientName: 'Nguyễn Kiệt', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-27',  time: '9:00 - 10:00 AM',  status: 'Pending',},
        { id: 4,  patientName: 'Hoàng An', doctorName: 'Bác sĩ Hoàng Đức',  date: '2024-05-28',  time: '7:00 - 8:00 PM',  status: 'Confirmed',},
        { id: 5, patientName: 'Công Duy', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-27',  time: '10:00 - 11:00 AM',  status: 'Pending',},
        { id: 6,  patientName: 'Văn Quốc', doctorName: 'Bác sĩ Hoàng Đức',  date: '2024-05-28',  time: '4:00 - 5:00 PM',  status: 'Confirmed',},
        { id: 7, patientName: 'Đoàn Trường', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-27',  time: '9:00 - 10:00 AM',  status: 'Pending',},
        { id: 8,  patientName: 'Công Duy', doctorName: 'Bác sĩ Hoàng Đức',  date: '2024-05-28',  time: '6:00 - 7:00 PM',  status: 'Confirmed',},
    
      ]);
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" >Quản lý lịch hẹn</Typography>
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
      <Button variant="contained" color="primary" >
        Thêm lịch hẹn mới
      </Button>
    </Container>
  );
};

export default AppointmentManagement;
