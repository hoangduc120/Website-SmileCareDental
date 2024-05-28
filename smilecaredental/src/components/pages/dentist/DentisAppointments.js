import React, { useState } from 'react';
import {Typography,TableContainer,Table,TableHead,TableRow,TableCell,TableBody,Paper,Box, Container,} from '@mui/material';


const DentisAppointments = () => {
  // Sample appointment data (replace with your actual data)
  const appointmentsData = [
    { patientName: 'Nguyen Van A', time: '10:00 - 10:45', date: '2024-05-28', },
    { patientName: 'Tran Thi B', time: '11:30 - 12:15', date: '2024-05-29', },
    { patientName: 'Le Van C', time: '14:00 - 14:45', date: '2024-05-30', },
  ];

  // State to manage appointments
  const [appointments] = useState(appointmentsData);

  return (
    <Container maxWidth='lg'>
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          style={{
            color: '#0477CA',
            display: 'flex',
            justifyContent: 'center',
            fontWeight: '400',
            margin: '30px 0',
          }}
        >
          Xem lịch khám
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>STT</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Tên bệnh nhân</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Giờ khám</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Ngày khám</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{appointment.patientName}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default DentisAppointments;
