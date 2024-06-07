import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Grid, Icon, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { CircleRounded, SquareRounded } from '@mui/icons-material';

dayjs.extend(isSameOrBefore);

const appointments = [
  { slot: '08:00-08:45', doctor: 'Doctor A', patients: 3, treatment: 1 },
  { slot: '08:45-09:30', doctor: 'Doctor A', patients: 1, treatment: 0 },
  { slot: '09:30-10:15', doctor: 'Doctor A', patients: 0, treatment: 1 },
  { slot: '10:15-11:00', doctor: 'Doctor A', patients: 3, treatment: 1 },
  { slot: '11:00-11:45', doctor: 'Doctor A', patients: 1, treatment: 0 },
  { slot: '11:45-12:30', doctor: 'Doctor A', patients: 0, treatment: 1 },
  { slot: '12:30-13:15', doctor: 'Doctor A', patients: 2, treatment: 0 },
  { slot: '13:15-14:00', doctor: 'Doctor A', patients: 1, treatment: 0 },
  { slot: '14:00-14:45', doctor: 'Doctor A', patients: 0, treatment: 1 },
  { slot: '14:45-15:30', doctor: 'Doctor A', patients: 3, treatment: 1 },
  { slot: '15:30-16:15', doctor: 'Doctor A', patients: 1, treatment: 0 },

  // Doctor B

{ slot: '08:00-08:45', doctor: 'Doctor B', patients: 3, treatment: 1 },
{ slot: '08:45-09:30', doctor: 'Doctor B', patients: 1, treatment: 0 },
{ slot: '09:30-10:15', doctor: 'Doctor B', patients: 0, treatment: 1 },
{ slot: '10:15-11:00', doctor: 'Doctor B', patients: 3, treatment: 1 },
{ slot: '11:00-11:45', doctor: 'Doctor B', patients: 1, treatment: 0 },
{ slot: '11:45-12:30', doctor: 'Doctor B', patients: 0, treatment: 1 },
{ slot: '12:30-13:15', doctor: 'Doctor B', patients: 2, treatment: 0 },
{ slot: '13:15-14:00', doctor: 'Doctor B', patients: 1, treatment: 0 },
{ slot: '14:00-14:45', doctor: 'Doctor B', patients: 0, treatment: 1 },
{ slot: '14:45-15:30', doctor: 'Doctor B', patients: 3, treatment: 1 },
{ slot: '15:30-16:15', doctor: 'Doctor B', patients: 1, treatment: 0 },

//Doctor C

{ slot: '08:00-08:45', doctor: 'Doctor C', patients: 3, treatment: 1 },
{ slot: '08:45-09:30', doctor: 'Doctor C', patients: 1, treatment: 0 },
{ slot: '09:30-10:15', doctor: 'Doctor C', patients: 0, treatment: 1 },
{ slot: '10:15-11:00', doctor: 'Doctor C', patients: 3, treatment: 1 },
{ slot: '11:00-11:45', doctor: 'Doctor C', patients: 1, treatment: 0 },
{ slot: '11:45-12:30', doctor: 'Doctor C', patients: 0, treatment: 1 },
{ slot: '12:30-13:15', doctor: 'Doctor C', patients: 2, treatment: 0 },
{ slot: '13:15-14:00', doctor: 'Doctor C', patients: 1, treatment: 0 },
{ slot: '14:00-14:45', doctor: 'Doctor C', patients: 0, treatment: 1 },
{ slot: '14:45-15:30', doctor: 'Doctor C', patients: 3, treatment: 1 },
{ slot: '15:30-16:15', doctor: 'Doctor C', patients: 1, treatment: 0 },

//Doctor D

{ slot: '08:00-08:45', doctor: 'Doctor D', patients: 3, treatment: 1 },
{ slot: '08:45-09:30', doctor: 'Doctor D', patients: 1, treatment: 0 },
{ slot: '09:30-10:15', doctor: 'Doctor D', patients: 0, treatment: 1 },
{ slot: '10:15-11:00', doctor: 'Doctor D', patients: 3, treatment: 1 },
{ slot: '11:00-11:45', doctor: 'Doctor D', patients: 1, treatment: 0 },
{ slot: '11:45-12:30', doctor: 'Doctor D', patients: 0, treatment: 1 },
{ slot: '12:30-13:15', doctor: 'Doctor D', patients: 2, treatment: 0 },
{ slot: '13:15-14:00', doctor: 'Doctor D', patients: 1, treatment: 0 },
{ slot: '14:00-14:45', doctor: 'Doctor D', patients: 0, treatment: 1 },
{ slot: '14:45-15:30', doctor: 'Doctor D', patients: 3, treatment: 1 },
{ slot: '15:30-16:15', doctor: 'Doctor D', patients: 1, treatment: 0 },

];

const generateTimeSlots = (start, end, interval) => {
  const slots = [];
  let currentTime = dayjs(start, 'HH:mm');
  const endTime = dayjs(end, 'HH:mm');

  while (currentTime.isSameOrBefore(endTime)) {
    const nextTime = currentTime.add(interval, 'minute');
    slots.push(`${currentTime.format('HH:mm')}-${nextTime.format('HH:mm')}`);
    currentTime = nextTime;
  }

  return slots;
};

const AppointmentManagement = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedAppointments, setSelectedAppointments] = useState([]);

  useEffect(() => {
    const timeSlots = generateTimeSlots('08:00', '17:00', 45);
    const groupedAppointments = timeSlots.map((slot) => {
      const slotAppointments = appointments.filter((appt) => appt.slot === slot);
      return {
        slot,
        appointments: slotAppointments.reduce((acc, appointment) => {
          acc[appointment.doctor] = acc[appointment.doctor] || [];
          acc[appointment.doctor].push(appointment);
          return acc;
        }, {})
      };
    });
    setSelectedAppointments(groupedAppointments);
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const renderPatientStatus = (appointments) => {
    const status = {
      'Doctor A': [],
      'Doctor B': [],
      'Doctor C': [],
      'Doctor D': [],
    };

    Object.keys(appointments || {}).forEach((doctor) => {
      appointments[doctor].forEach((appointment) => {
        if (appointment.patients > 0) {
          if (appointment.treatment) {
            status[doctor].push(
              <div key={`${doctor}-${appointment.slot}-treatment`} style={{ marginBottom: 2, borderRadius: 10, width: 20, height: 20, backgroundColor: 'blue' }} />
            );
          } else {
            for (let i = 0; i < 3; i++) {
              if (i < appointment.patients) {
                status[doctor].push(<div key={`${doctor}-${appointment.slot}-${i}`} style={{ marginBottom: 2, width: 20, height: 20, backgroundColor: 'red' }} />);
              } else {
                status[doctor].push(
                  <div key={`${doctor}-${appointment.slot}-${i}`} style={{ marginBottom: 2, width: 20, height: 20, backgroundColor: 'green' }} />
                );
              }
            }
          }
        }
      });
    });

    return status;
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
        Quản lý phòng khám
      </Typography>
      <Grid item xs={12} container justifyContent="flex-end" style={{padding: 20 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Chọn ngày"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} style={{ padding: 20 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, '& th': { backgroundColor: '#0D47A1', color: '#ffffff' } }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{textAlign:'center'}}>Slot</TableCell>
                <TableCell style={{textAlign:'center'}}>Bác sĩ Dương Văn A</TableCell>
                <TableCell style={{textAlign:'center'}}>Bác sĩ Dương Văn B</TableCell>
                <TableCell style={{textAlign:'center'}}>Bác sĩ Dương Văn C</TableCell>
                <TableCell style={{textAlign:'center'}}>Bác sĩ Dương Văn D</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedAppointments.map((appointment) => {
                const status = renderPatientStatus(appointment.appointments);
                return (
                  <TableRow key={appointment.slot} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell style={{textAlign:'center'}} component="th" scope="row">
                      {appointment.slot}
                    </TableCell>
                    <TableCell>{status['Doctor A']}</TableCell>
                    <TableCell>{status['Doctor B']}</TableCell>
                    <TableCell>{status['Doctor C']}</TableCell>
                    <TableCell>{status['Doctor D']}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid container justifyContent="flex-end" style={{ marginTop: 20 }}>
        <Grid item style={{ display: 'flex', alignItems: 'center', marginRight: 20 }}>
          <Icon style={{ color: 'blue' }}><CircleRounded /></Icon>
          <Typography> Bác sĩ đang có lịch điều trị</Typography>
        </Grid>
        <Grid item style={{ display: 'flex', alignItems: 'center', marginRight: 20 }}>
          <Icon style={{ color: 'red' }}><SquareRounded /></Icon>
          <Typography> Bác sĩ đang có lịch khám</Typography>
        </Grid>
        <Grid item style={{ display: 'flex', alignItems: 'center' }}>
          <Icon style={{ color: 'green' }}><SquareRounded /></Icon>
          <Typography> Bác sĩ không có lịch khám</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentManagement;
