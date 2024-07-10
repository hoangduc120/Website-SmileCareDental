import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Grid, Icon, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import {SquareRounded } from '@mui/icons-material';

dayjs.extend(isSameOrBefore);

const appointments = [
  // Doctor A
  { slot: '08:00-08:45', doctor: 'Doctor A', patients: [{ name: 'Patient 1', treatment: 0 }, { name: 'Patient 2', treatment: 0 }, { name: 'Patient 3', treatment: 0 }] },
  { slot: '08:45-09:30', doctor: 'Doctor A', patients: [{ name: 'Patient 4', treatment: 0 }] },
  { slot: '09:30-10:15', doctor: 'Doctor A', patients: [{ name: 'Patient 5', treatment: 1 }] },
  { slot: '10:15-11:00', doctor: 'Doctor A', patients: [{ name: 'Patient 6', treatment: 0 }, { name: 'Patient 7', treatment: 0 }] },
  { slot: '11:00-11:45', doctor: 'Doctor A', patients: [{ name: 'Patient 8', treatment: 0 }] },
  { slot: '11:45-12:30', doctor: 'Doctor A', patients: [] },
  { slot: '12:30-13:15', doctor: 'Doctor A', patients: [{ name: 'Patient 9', treatment: 0 }, { name: 'Patient 10', treatment: 0 }] },
  { slot: '13:15-14:00', doctor: 'Doctor A', patients: [{ name: 'Patient 11', treatment: 0 }] },
  { slot: '14:00-14:45', doctor: 'Doctor A', patients: [{ name: 'Patient 12', treatment: 1 }] },
  { slot: '14:45-15:30', doctor: 'Doctor A', patients: [{ name: 'Patient 13', treatment: 0 }, { name: 'Patient 14', treatment: 0 }] },
  { slot: '15:30-16:15', doctor: 'Doctor A', patients: [{ name: 'Patient 15', treatment: 0 }] },

  // Doctor B
  { slot: '08:00-08:45', doctor: 'Doctor B', patients: [{ name: 'Patient 16', treatment: 0 }, { name: 'Patient 17', treatment: 0 }] },
  { slot: '08:45-09:30', doctor: 'Doctor B', patients: [{ name: 'Patient 18', treatment: 0 }] },
  { slot: '09:30-10:15', doctor: 'Doctor B', patients: [{ name: 'Patient 19', treatment: 1 }] },
  { slot: '10:15-11:00', doctor: 'Doctor B', patients: [{ name: 'Patient 20', treatment: 0 }, { name: 'Patient 21', treatment: 0 }] },
  { slot: '11:00-11:45', doctor: 'Doctor B', patients: [{ name: 'Patient 22', treatment: 0 }] },
  { slot: '11:45-12:30', doctor: 'Doctor B', patients: [] },
  { slot: '12:30-13:15', doctor: 'Doctor B', patients: [{ name: 'Patient 23', treatment: 0 }, { name: 'Patient 24', treatment: 0 }] },
  { slot: '13:15-14:00', doctor: 'Doctor B', patients: [{ name: 'Patient 25', treatment: 0 }] },
  { slot: '14:00-14:45', doctor: 'Doctor B', patients: [{ name: 'Patient 26', treatment: 1 }] },
  { slot: '14:45-15:30', doctor: 'Doctor B', patients: [{ name: 'Patient 27', treatment: 0 }, { name: 'Patient 28', treatment: 0 }] },
  { slot: '15:30-16:15', doctor: 'Doctor B', patients: [{ name: 'Patient 29', treatment: 0 }] },

  // Doctor C
  { slot: '08:00-08:45', doctor: 'Doctor C', patients: [{ name: 'Patient 30', treatment: 0 }, { name: 'Patient 31', treatment: 0 }] },
  { slot: '08:45-09:30', doctor: 'Doctor C', patients: [{ name: 'Patient 32', treatment: 0 }] },
  { slot: '09:30-10:15', doctor: 'Doctor C', patients: [{ name: 'Patient 33', treatment: 1 }] },
  { slot: '10:15-11:00', doctor: 'Doctor C', patients: [{ name: 'Patient 34', treatment: 0 }, { name: 'Patient 35', treatment: 0 }] },
  { slot: '11:00-11:45', doctor: 'Doctor C', patients: [{ name: 'Patient 36', treatment: 0 }] },
  { slot: '11:45-12:30', doctor: 'Doctor C', patients: [] },
  { slot: '12:30-13:15', doctor: 'Doctor C', patients: [{ name: 'Patient 37', treatment: 0 }, { name: 'Patient 38', treatment: 0 }] },
  { slot: '13:15-14:00', doctor: 'Doctor C', patients: [{ name: 'Patient 39', treatment: 0 }] },
  { slot: '14:00-14:45', doctor: 'Doctor C', patients: [{ name: 'Patient 40', treatment: 1 }] },
  { slot: '14:45-15:30', doctor: 'Doctor C', patients: [{ name: 'Patient 41', treatment: 0 }, { name: 'Patient 42', treatment: 0 }] },
  { slot: '15:30-16:15', doctor: 'Doctor C', patients: [{ name: 'Patient 43', treatment: 0 }] },

  // Doctor D
  { slot: '08:00-08:45', doctor: 'Doctor D', patients: [{ name: 'Patient 44', treatment: 0 }, { name: 'Patient 45', treatment: 0 }] },
  { slot: '08:45-09:30', doctor: 'Doctor D', patients: [{ name: 'Patient 46', treatment: 0 }] },
  { slot: '09:30-10:15', doctor: 'Doctor D', patients: [{ name: 'Patient 47', treatment: 1 }] },
  { slot: '10:15-11:00', doctor: 'Doctor D', patients: [{ name: 'Patient 48', treatment: 0 }, { name: 'Patient 49', treatment: 0 }] },
  { slot: '11:00-11:45', doctor: 'Doctor D', patients: [{ name: 'Patient 50', treatment: 0 }] },
  { slot: '11:45-12:30', doctor: 'Doctor D', patients: [] },
  { slot: '12:30-13:15', doctor: 'Doctor D', patients: [{ name: 'Patient 51', treatment: 0 }, { name: 'Patient 52', treatment: 0 }] },
  { slot: '13:15-14:00', doctor: 'Doctor D', patients: [{ name: 'Patient 53', treatment: 0 }] },
  { slot: '14:00-14:45', doctor: 'Doctor D', patients: [{ name: 'Patient 54', treatment: 1 }] },
  { slot: '14:45-15:30', doctor: 'Doctor D', patients: [{ name: 'Patient 55', treatment: 0 }, { name: 'Patient 56', treatment: 0 }] },
  { slot: '15:30-16:15', doctor: 'Doctor D', patients: [{ name: 'Patient 57', treatment: 0 }] },
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
    const doctors = ['Doctor A', 'Doctor B', 'Doctor C', 'Doctor D'];
    const groupedAppointments = timeSlots.map((slot) => {
      const slotAppointments = doctors.map((doctor) => {
        const appointment = appointments.find((appt) => appt.slot === slot && appt.doctor === doctor);
        return appointment || { slot, doctor, patients: [] };
      });
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
        if (appointment.patients.some(patient => patient.treatment)) {
          //Nếu có bệnh nhân cần điều trị (blue)
          status[doctor].push(
            <div key={`${doctor}-${appointment.slot}-treatment`} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: 20, height: 20, backgroundColor: 'blue', marginRight: 5 }} />
              <Typography>{appointment.patients.find(patient => patient.treatment).name}</Typography>
            </div>
          );
        } else {
          //Xử lý bệnh nhân khám (red) và các chỗ còn trống (green)
          const patientElements = [];
          const numPatients = appointment.patients.length;

          for (let i = 0; i < 3; i++) {
            if (i < numPatients) {
              const patient = appointment.patients[i];
              const backgroundColor = 'red';
              patientElements.push(
                <div key={`${doctor}-${appointment.slot}-${i}`} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: 20, height: 20, backgroundColor, marginRight: 5 }} />
                  <Typography>{patient.name}</Typography>
                </div>
              );
            } else {
              patientElements.push(
                <div key={`${doctor}-${appointment.slot}-${i}`} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: 20, height: 20, backgroundColor: 'green', marginRight: 5 }} />
                  <Typography>Available</Typography>
                </div>
              );
            }
          }

          status[doctor].push(...patientElements);
        }
      });
    });

    return status;
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
        Quản lý lịch khám
      </Typography>
      <Grid item xs={12} container justifyContent="flex-end" style={{ padding: 20 }}>
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
                <TableCell style={{ textAlign: 'center' }}>Slot</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Bác sĩ Dương Văn A</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Bác sĩ Dương Văn B</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Bác sĩ Dương Văn C</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Bác sĩ Dương Văn D</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedAppointments.map((appointment) => {
                const status = renderPatientStatus(appointment.appointments);
                return (
                  <TableRow key={appointment.slot} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell style={{ textAlign: 'center' }} component="th" scope="row">
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
          <Icon style={{ color: 'blue' }}><SquareRounded /></Icon>
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
