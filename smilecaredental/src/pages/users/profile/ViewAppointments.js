import React, { useState, useEffect } from 'react';
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Box, Container } from '@mui/material';
import { getAppsAndReasByCustomer } from "../../../api/api";

const ViewAppointments = () => {
  // State to manage appointments
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch appointments data from API
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await getAppsAndReasByCustomer();
        // Check if response is an array
        if (Array.isArray(response)) {
          setAppointments(response);
        } else {
          console.error("API response is not an array");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(appointments)) {
    return <div>Error: Expected appointments to be an array</div>;
  }

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
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Tên bác sĩ</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Giờ khám</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Ngày khám</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Cơ sở</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Loại khám</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment, index) => (
                <TableRow key={appointment.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{appointment.dentist.name}</TableCell>
                  <TableCell>{`${appointment.slot.start_time} - ${appointment.slot.end_time}`}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.clinic.name}</TableCell>
                  <TableCell>{appointment.type === "appointment" ? "Khám thường" : "Tái khám"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default ViewAppointments;
