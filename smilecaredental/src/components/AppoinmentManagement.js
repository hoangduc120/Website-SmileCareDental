// import React, { useState } from 'react';
// import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const AppointmentManagement = () => {
//   const [appointments] = useState([
//     { id: 1, patientName: 'Đoàn Trường', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-27', time: '10:00 - 10:45 ', status: 'Pending' },
//     { id: 2, patientName: 'Văn Quốc', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-28', time: '14:00 - 14:45 ', status: 'Confirmed' },
//     { id: 3, patientName: 'Nguyễn Kiệt', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-27', time: '9:00 - 9:45 ', status: 'Pending' },
//     { id: 4, patientName: 'Hoàng An', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-28', time: '11:00 - 11:45 ', status: 'Confirmed' },
//     { id: 5, patientName: 'Công Duy', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-27', time: '15:00 - 15:45 ', status: 'Pending' },
//     { id: 6, patientName: 'Văn Quốc', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-28', time: '16:00 - 16:45 ', status: 'Confirmed' },
//     { id: 7, patientName: 'Đoàn Trường', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-27', time: '14:00 - 14:45 ', status: 'Pending' },
//     { id: 8, patientName: 'Công Duy', doctorName: 'Bác sĩ Hoàng Đức', date: '2024-05-28', time: '15:00 - 15:45 ', status: 'Confirmed' },
//   ]);

//   return (
//     <Container maxWidth="lg">
//       <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
//         Quản lý lịch hẹn
//       </Typography>
//       <Table sx={{ minWidth: 650, '& th': { backgroundColor: '#0D47A1', color: '#ffffff' } }}>
//         <TableHead>
//           <TableRow>
//             <TableCell>Bệnh nhân</TableCell>
//             <TableCell>Bác sĩ</TableCell>
//             <TableCell>Ngày hẹn</TableCell>
//             <TableCell>Giờ hẹn</TableCell>
//             <TableCell>Trạng thái</TableCell>
//             <TableCell>Thao tác</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {appointments.map((appointment, index) => (
//             <TableRow key={appointment.id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff', '&:hover': { backgroundColor: '#eeeeee' } }}>
//               <TableCell>{appointment.patientName}</TableCell>
//               <TableCell>{appointment.doctorName}</TableCell>
//               <TableCell>{appointment.date}</TableCell>
//               <TableCell>{appointment.time}</TableCell>
//               <TableCell>{appointment.status}</TableCell>
//               <TableCell>
//                 <Button variant="outlined" color="primary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }}>
//                   Xem chi tiết
//                 </Button>
//                 <Button variant="outlined" color="secondary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }}>
//                   Chỉnh sửa
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Button
//         variant="contained"
//         sx={{
//           marginTop: '20px',
//           height: 50,
//           backgroundColor: '#1898F3',
//           color: 'white',
//           fontWeight: '700',
//           fontSize: '14px',
//           borderRadius: '8px',
//           '&:hover': {
//             backgroundColor: '#000AFE',
//             color: 'white',
//           },
//           display: 'block',
//           margin: '20px auto 0', // Center the button
//         }}
//       >
//         <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
//           Thêm lịch hẹn mới
//         </Link>
//       </Button>
//     </Container>
//   );
// };

// export default AppointmentManagement;



// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { TextField } from '@mui/material';

// function createData(slot, doctorA, doctorB, doctorC, doctorD) {
//   return { slot, doctorA, doctorB, doctorC, doctorD };
// }

// const rows = [
//   createData('Slot 1 8:00-8:45', 'Dương Văn A', 'Dương Văn B', 'Dương Văn C', 'Dương Văn D'),
//   createData('Slot 2 8:45-9:30', 'Dương Văn B', 'Dương Văn C', 'Dương Văn D', 'Dương Văn E'),
//   createData('Slot 3 9:30-10:15', 'Dương Văn C', 'Dương Văn D', 'Dương Văn E', 'Dương Văn F'),
//   createData('Slot 4 10:15-11:00', 'Dương Văn D', 'Dương Văn E', 'Dương Văn F', 'Dương Văn G'),
//   createData('Slot 5 11:30-12:15', 'Dương Văn E', 'Dương Văn F', 'Dương Văn G', 'Dương Văn H'),
// ];

// export default function AppointmentManagement() {
//   const [selectedDate, setSelectedDate] = React.useState(new Date()); // State to store the selected date

//   const handleDateChange = (date) => {
//     setSelectedDate(date); // Update the state when the date changes
//   };

//   return (
//     <div>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker
//           label="Basic date picker"
//           value={selectedDate}
//           onChange={handleDateChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </LocalizationProvider>

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Slot</TableCell>
//               <TableCell align="right">Bác sĩ Dương Văn A</TableCell>
//               <TableCell align="right">Bác sĩ Dương Văn B</TableCell>
//               <TableCell align="right">Bác sĩ Dương Văn C</TableCell>
//               <TableCell align="right">Bác sĩ Dương Văn D</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row.slot} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//                 <TableCell component="th" scope="row">
//                   {row.slot}
//                 </TableCell>
//                 <TableCell align="right">{row.doctorA}</TableCell>
//                 <TableCell align="right">{row.doctorB}</TableCell>
//                 <TableCell align="right">{row.doctorC}</TableCell>
//                 <TableCell align="right">{row.doctorD}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }


import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(isSameOrBefore);

const appointments = [
  {
    slot: '8:00-8:45',
    doctorA: 'Nguyễn Văn A',
    doctorB: 'Nguyễn Văn B',
    doctorC: 'Nguyễn Văn C',
    doctorD: 'Nguyễn Văn D'
  },
  {
    slot: '8:45-9:30',
    doctorA: 'Nguyễn Văn B',
    doctorB: 'Nguyễn Văn C',
    doctorC: 'Nguyễn Văn D',
    doctorD: 'Nguyễn Văn E'
  },
  {
    slot: '9:30-10:15',
    doctorA: 'Nguyễn Văn C',
    doctorB: 'Nguyễn Văn D',
    doctorC: 'Nguyễn Văn E',
    doctorD: 'Nguyễn Văn F'
  },
  {
    slot: '10:15-11:00',
    doctorA: 'Nguyễn Văn D',
    doctorB: 'Nguyễn Văn E',
    doctorC: 'Nguyễn Văn F',
    doctorD: 'Nguyễn Văn G'
  },
  {
    slot: '11:30-12:15',
    doctorA: 'Nguyễn Văn E',
    doctorB: 'Nguyễn Văn F',
    doctorC: 'Nguyễn Văn G',
    doctorD: 'Nguyễn Văn H'
  }
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
    const timeSlots = generateTimeSlots('08:00', '16:15', 45);
    const filteredAppointments = timeSlots.map((slot) => {
      const appointment = appointments.find((appt) => appt.slot === slot) || {};
      return { slot, ...appointment };
    });
    setSelectedAppointments(filteredAppointments);
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Grid container>
      <Grid item xs={12} style={{ padding: 20 }}>
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
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Slot</TableCell>
                <TableCell align="right">Nguyễn Văn A</TableCell>
                <TableCell align="right">Nguyễn Văn B</TableCell>
                <TableCell align="right">Nguyễn Văn C</TableCell>
                <TableCell align="right">Nguyễn Văn D</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedAppointments.map((appointment) => (
                <TableRow key={appointment.slot} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {appointment.slot}
                  </TableCell>
                  <TableCell align="right">{appointment.doctorA }</TableCell>
                  <TableCell align="right">{appointment.doctorB }</TableCell>
                  <TableCell align="right">{appointment.doctorC }</TableCell>
                  <TableCell align="right">{appointment.doctorD }</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default AppointmentManagement;
