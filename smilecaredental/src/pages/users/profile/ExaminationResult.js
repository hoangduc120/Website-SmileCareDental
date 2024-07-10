import React, { useState } from 'react';
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Box, Container, Button, TextField, Rating, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const ExaminationResult = () => {
  const appointmentsData = [
    { doctorName: 'Nguyen Van A', time: '10:00 - 10:45', date: '2024-05-28', address: 'Nha khoa Kim' },
    { doctorName: 'Tran Thi B', time: '11:30 - 12:15', date: '2024-05-29', address: 'Nha khoa ClinicDental' },
    { doctorName: 'Le Van C', time: '14:00 - 14:45', date: '2024-05-30', address: 'Nha khoa SmileCare' },
  ];

  const [appointments, setAppointments] = useState(appointmentsData);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [reviewContent, setReviewContent] = useState('');
  const [rating, setRating] = useState(0);
  const [open, setOpen] = useState(false);

  const handleWriteReview = (appointment) => {
    setSelectedAppointment(appointment);
    setOpen(true);
  };

  const handleChangeReviewContent = (event) => {
    setReviewContent(event.target.value);
  };

  const handleSubmitReview = () => {
    const updatedAppointments = appointments.map(app =>
      app === selectedAppointment ? { ...app, reviewContent, rating } : app
    );
    setAppointments(updatedAppointments);
    setOpen(false);
    setSelectedAppointment(null);
    setReviewContent('');
    setRating(0);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAppointment(null);
    setReviewContent('');
    setRating(0);
  };

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
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Đánh giá</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{appointment.doctorName}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.address}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => handleWriteReview(appointment)}>
                      Đánh giá
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Dialog open={open} onClose={handleClose}
             maxWidth="sm" // Adjust the width as per your need
             fullWidth
      >
        <DialogTitle variant="h6" style={{ mb: 1, fontWeight: "bold" }}>Đánh Giá</DialogTitle>
        <DialogContent sx={{ borderBottom: "2px solid #9FD7F9", paddingBottom: "20px" }}>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            sx={{ marginBottom: "10px" }}
          />
          <TextField
            label="Viết đánh giá của bạn"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={reviewContent}
            onChange={handleChangeReviewContent}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Hủy</Button>
          <Button onClick={handleSubmitReview} variant="contained" color="primary">Gửi Đánh Giá</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ExaminationResult;
