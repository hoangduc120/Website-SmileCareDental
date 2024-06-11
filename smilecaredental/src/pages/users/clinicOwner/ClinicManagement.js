import React, { useState } from 'react';
import {
  Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button,
  TextField, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel,
  Select, MenuItem, IconButton
} from '@mui/material';
import { Close, Delete, Edit, Visibility } from '@mui/icons-material';

const slots = [
  '8:00 - 8:45',
  '8:45 - 9:30',
  '9:30 - 10:15',
  '10:15 - 11:00',
  '11:00 - 11:45',
  '11:45 - 12:30',
  '12:30 - 13:15',
  '13:15 - 14:00',
  '14:00 - 14:45',
  '14:45 - 15:30',
  '15:30 - 16:15',
  '16:15 - 17:00',
];

const ClinicManagement = () => {
  const [clinics, setClinics] = useState([
    { id: 1, name: 'Phòng Tẩy trắng', slot: '9:00 - 9:45', doctor: 'Bác sĩ Nguyễn Văn A' },
    { id: 2, name: 'Phòng Niềng răng', slot: '9:00 - 9:45', doctor: 'Bác sĩ Nguyễn Văn A' },
    { id: 3, name: 'Phòng Tẩy trắng', slot: '9:00 - 9:45', doctor: 'Bác sĩ Nguyễn Văn A' },
    { id: 4, name: 'Phòng Răng sứ', slot: '9:00 - 9:45', doctor: 'Bác sĩ Nguyễn Văn A' },
    { id: 5, name: 'Phòng Tẩy trắng', slot: '9:00 - 9:45', doctor: 'Bác sĩ Nguyễn Văn A' },
    { id: 6, name: 'Phòng Niềng răng', slot: '9:00 - 9:45', doctor: 'Bác sĩ Nguyễn Văn A' },
    { id: 7, name: 'Phòng Tẩy trắng', slot: '9:00 - 9:45', doctor: 'Bác sĩ Nguyễn Văn A' },
  ]);

  const [open, setOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [editingClinic, setEditingClinic] = useState(null);
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', slot: '', doctor: '' });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditingClinic(null);
    setFormData({ name: '', slot: '', doctor: '' });
  };

  const handleDetailClose = () => setOpenDetail(false);

  const handleAddOrEdit = () => {
    if (editingClinic) {
      setClinics(clinics.map(clinic => clinic.id === editingClinic.id ? { ...editingClinic, ...formData } : clinic));
    } else {
      setClinics([...clinics, { ...formData, id: clinics.length + 1 }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setSelectedClinic(id);
    setConfirmDialogOpen(true);
  };

  const handleEdit = (clinic) => {
    setEditingClinic(clinic);
    setFormData(clinic);
    handleOpen();
  };

  const handleViewDetail = (clinic) => {
    setSelectedClinic(clinic);
    setOpenDetail(true);
  };

  const handleConfirmDelete = () => {
    setClinics(clinics.filter(clinic => clinic.id !== selectedClinic));
    setConfirmDialogOpen(false);
  };

  const handleCancelDelete = () => {
    setConfirmDialogOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
        Quản lý phòng khám
      </Typography>
      <Table sx={{ minWidth: 650, '& th': { backgroundColor: '#0D47A1', color: '#ffffff' } }}>
        <TableHead>
          <TableRow>
            <TableCell>Tên</TableCell>
            <TableCell>Giờ khám</TableCell>
            <TableCell>Bác sĩ</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clinics.map((clinic, index) => (
            <TableRow key={clinic.id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff', '&:hover': { backgroundColor: '#eeeeee' } }}>
              <TableCell>{clinic.name}</TableCell>
              <TableCell>{clinic.slot}</TableCell>
              <TableCell>{clinic.doctor}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }} onClick={() => handleViewDetail(clinic)}>
                  <Visibility />
                </Button>
                <Button variant="outlined" color="secondary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }} onClick={() => handleEdit(clinic)}>
                  <Edit />
                </Button>
                <Button variant="outlined" color="error" size="small" sx={{ borderRadius: '8px', textTransform: 'none' }} onClick={() => handleDelete(clinic.id)}>
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
        Thêm phòng khám mới
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ backgroundColor: '#0D47A1', color: '#ffffff' }}>{editingClinic ? 'Chỉnh sửa phòng khám' : 'Thêm phòng khám mới'}</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              margin="dense"
              label="Tên"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
            />
            <FormControl fullWidth sx={{ marginTop: '10px' }}>
              <InputLabel id="slot-label">Giờ khám</InputLabel>
              <Select
                labelId="slot-label"
                id="slot"
                name="slot"
                value={formData.slot}
                onChange={handleInputChange}
                label="Giờ khám"
              >
                {slots.map(slot => (
                  <MenuItem key={slot} value={slot}>{slot}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              label="Bác sĩ"
              name="doctor"
              fullWidth
              value={formData.doctor}
              onChange={handleInputChange}
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Hủy
              </Button>
              <Button onClick={handleAddOrEdit} color="primary">
                {editingClinic ? 'Cập nhật' : 'Thêm'}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={openDetail} onClose={handleDetailClose} fullWidth maxWidth="sm">
        <DialogTitle style={{ backgroundColor: '#0D47A1', color: '#ffffff' }}>
          Chi tiết phòng khám
          <IconButton aria-label="close" onClick={handleDetailClose} sx={{ position: 'absolute', right: 8, top: 8, color: '#ffffff' }}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedClinic && (
            <div>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Tên: {selectedClinic.name}</Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>Giờ khám: {selectedClinic.slot}</Typography>
              <Typography variant="body1">Bác sĩ: {selectedClinic.doctor}</Typography>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={confirmDialogOpen} onClose={handleCancelDelete}>
        <DialogTitle>Xác nhận</DialogTitle>
        <DialogContent>Bạn có chắc chắn muốn xóa phòng khám này?</DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Hủy
          </Button>
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>

    </Container>
  );
};

export default ClinicManagement;
