import React, { useState } from 'react';
import {
  Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button,
  Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton
} from '@mui/material';
import { Close, Delete, Visibility } from '@mui/icons-material';

const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, fullName: 'Bác sĩ Nguyễn Văn A', phone: '(028) 12345678', email: 'bsnguyenA@example.com' },
    { id: 2, fullName: 'Bác sĩ Trần Thị B', phone: '(029) 87654321', email: 'bsTranB@example.com' },
    { id: 3, fullName: 'Bác sĩ Nguyễn Văn C', phone: '(028) 12345678', email: 'bsnguyenC@example.com' },
    { id: 4, fullName: 'Bác sĩ Trần Thị D', phone: '(029) 87654321', email: 'bsTranD@example.com' },
    { id: 5, fullName: 'Bác sĩ Nguyễn Văn E', phone: '(028) 12345678', email: 'bsnguyenE@example.com' },
    { id: 6, fullName: 'Bác sĩ Trần Thị F', phone: '(029) 87654321', email: 'bsTranF@example.com' },
    { id: 7, fullName: 'Bác sĩ Nguyễn Văn G', phone: '(028) 12345678', email: 'bsnguyenG@example.com' },
    { id: 8, fullName: 'Bác sĩ Trần Thị H', phone: '(029) 87654321', email: 'bsTranH@example.com' },
  ]);

  const [open, setOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [deletingDoctorId, setDeletingDoctorId] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
  });

  const handleOpen = () => {
    setFormData({ fullName: '', phone: '', email: '' });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingDoctor(null);
    setFormData({ fullName: '', phone: '', email: '' });
  };

  const handleDetailClose = () => setOpenDetail(false);

  const handleAddOrEdit = () => {
    if (editingDoctor) {
      setDoctors(doctors.map(doctor => doctor.id === editingDoctor.id ? { ...editingDoctor, ...formData } : doctor));
    } else {
      setDoctors([...doctors, { ...formData, id: doctors.length + 1 }]);
    }
    handleClose();
  };

  const handleConfirmDeleteOpen = (id) => {
    setDeletingDoctorId(id);
    setConfirmDeleteOpen(true);
  };

  const handleConfirmDeleteClose = () => {
    setDeletingDoctorId(null);
    setConfirmDeleteOpen(false);
  };

  const handleDelete = (id) => {
    handleConfirmDeleteOpen(id);
  };

  const handleConfirmDelete = () => {
    setDoctors(doctors.filter(doctor => doctor.id !== deletingDoctorId));
    handleConfirmDeleteClose();
  };

  const handleViewDetail = (doctor) => {
    setSelectedDoctor(doctor);
    setOpenDetail(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
            <TableCell>Hành động</TableCell>
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
                  <Visibility />
                </Button>
                <Button variant="outlined" color="error" size="small" sx={{ borderRadius: '8px', textTransform: 'none' }} onClick={() => handleDelete(doctor.id)}>
                  <Delete />
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
          margin: '20px auto 0',
        }}
        onClick={handleOpen}
      >
        Thêm bác sĩ mới
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ backgroundColor: '#0D47A1', color: '#ffffff' }}>{editingDoctor ? 'Chỉnh sửa thông tin bác sĩ' : 'Thêm bác sĩ mới'}</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              margin="dense"
              label="Họ và tên"
              name="fullName"
              fullWidth
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Điện thoại"
              name="phone"
              fullWidth
              value={formData.phone}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Email"
              name="email"
              fullWidth
              value={formData.email}
              onChange={handleInputChange}
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Hủy
              </Button>
              <Button onClick={handleAddOrEdit} color="primary">
                {editingDoctor ? 'Cập nhật' : 'Thêm'}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={openDetail} onClose={handleDetailClose} fullWidth maxWidth="sm">
        <DialogTitle style={{ backgroundColor: '#0D47A1', color: '#ffffff' }}>
          Chi tiết bác sĩ
          <IconButton aria-label="close" onClick={handleDetailClose} sx={{ position: 'absolute', right: 8, top: 8, color: '#ffffff' }}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedDoctor && (
            <>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Họ và tên: {selectedDoctor.fullName}</Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>Điện thoại: {selectedDoctor.phone}</Typography>
              <Typography variant="body1">Email: {selectedDoctor.email}</Typography>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={confirmDeleteOpen} onClose={handleConfirmDeleteClose}>
        <DialogTitle>Xác nhận</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Bạn có chắc chắn muốn xóa bác sĩ này?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmDeleteClose} color="primary">Hủy</Button>
          <Button onClick={handleConfirmDelete} color="primary">Xác nhận</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DoctorManagement;
