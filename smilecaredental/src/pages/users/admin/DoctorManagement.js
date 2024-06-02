import React, { useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, fullName: 'Bác sĩ Nguyễn Văn A', specialization: 'Răng-hàm-mặt', phone: '(028) 12345678', email: 'bsnguyenA@example.com' },
    { id: 2, fullName: 'Bác sĩ Trần Thị B', specialization: 'Răng-hàm-mặt', phone: '(029) 87654321', email: 'bsTranB@example.com' },
    { id: 3, fullName: 'Bác sĩ Nguyễn Văn C', specialization: 'Răng-hàm-mặt', phone: '(028) 12345678', email: 'bsnguyenC@example.com' },
    { id: 4, fullName: 'Bác sĩ Trần Thị D', specialization: 'Răng-hàm-mặt', phone: '(029) 87654321', email: 'bsTranD@example.com' },
    { id: 5, fullName: 'Bác sĩ Nguyễn Văn E', specialization: 'Răng-hàm-mặt', phone: '(028) 12345678', email: 'bsnguyenE@example.com' },
    { id: 6, fullName: 'Bác sĩ Trần Thị F', specialization: 'Răng-hàm-mặt', phone: '(029) 87654321', email: 'bsTranF@example.com' },
    { id: 7, fullName: 'Bác sĩ Nguyễn Văn G', specialization: 'Răng-hàm-mặt', phone: '(028) 12345678', email: 'bsnguyenG@example.com' },
    { id: 8, fullName: 'Bác sĩ Trần Thị H', specialization: 'Răng-hàm-mặt', phone: '(029) 87654321', email: 'bsTranH@example.com' },
  ]);

  const [open, setOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [form, setForm] = useState({ fullName: '', specialization: '', phone: '', email: '' });
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setForm({ fullName: '', specialization: '', phone: '', email: '' });
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = () => {
    setDoctors([...doctors, { ...form, id: doctors.length + 1 }]);
    handleClose();
  };

  const handleDelete = (id) => setDoctors(doctors.filter(doctor => doctor.id !== id));

  const handleViewDetail = (doctor) => {
    setSelectedDoctor(doctor);
    setOpenDetail(true);
  };

  const handleDetailClose = () => setOpenDetail(false);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
        Quản lý bác sĩ
      </Typography>
      <Table sx={{ minWidth: 650, '& th': { backgroundColor: '#0D47A1', color: '#ffffff' } }}>
        <TableHead>
          <TableRow>
            <TableCell>Họ và tên</TableCell>
            <TableCell>Điện thoại</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctors.map((doctor, index) => (
            <TableRow key={doctor.id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff', '&:hover': { backgroundColor: '#eeeeee' } }}>
              <TableCell>{doctor.fullName}</TableCell>
              <TableCell>{doctor.phone}</TableCell>
              <TableCell>{doctor.email}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }} onClick={() => handleViewDetail(doctor)}>
                  Xem chi tiết
                </Button>
                <Button variant="outlined" color="error" size="small" sx={{ borderRadius: '8px', textTransform: 'none' }} onClick={() => handleDelete(doctor.id)}>
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        sx={{
          marginTop: '20px',
          height: 50,
          backgroundColor: '#1898F3',
          color: 'white',
          fontWeight: '700',
          fontSize: '14px',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#000AFE',
            color: 'white',
          },
          display: 'block',
          margin: '20px auto 0', // Center the button
        }}
        onClick={handleOpen}
      >
        Thêm bác sĩ mới
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Thêm bác sĩ mới</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Họ và tên"
            name="fullName"
            fullWidth
            value={form.fullName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Chuyên môn"
            name="specialization"
            fullWidth
            value={form.specialization}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Điện thoại"
            name="phone"
            fullWidth
            value={form.phone}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            fullWidth
            value={form.email}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy
          </Button>
          <Button onClick={handleAdd} color="primary">
            Thêm
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDetail} onClose={handleDetailClose}>
        <DialogTitle>Chi tiết bác sĩ</DialogTitle>
        <DialogContent>
          {selectedDoctor && (
            <>
              <Typography variant="h6">Họ và tên: {selectedDoctor.fullName}</Typography>
              <Typography variant="body1">Chuyên môn: {selectedDoctor.specialization}</Typography>
              <Typography variant="body1">Điện thoại: {selectedDoctor.phone}</Typography>
              <Typography variant="body1">Email: {selectedDoctor.email}</Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDetailClose} color="primary">
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DoctorManagement;
