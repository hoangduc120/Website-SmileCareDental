import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, 
  Dialog, DialogActions, DialogContent, DialogTitle, TextField, Select, MenuItem, 
  FormControl, InputLabel, IconButton
} from '@mui/material';
import { Close, Delete, Edit, Visibility } from '@mui/icons-material';

const PatientManagement = () => {
  const [patients, setPatients] = useState([
    { id: 1, fullName: 'Bệnh nhân Lê Thị C', gender: 'Nữ', dateOfBirth: '1990-01-01', phone: '(028) 12345678', email: 'bnleC@example.com' },
    { id: 2, fullName: 'Bệnh nhân Dương Văn D', gender: 'Nam', dateOfBirth: '1985-05-20', phone: '(029) 87654321', email: 'bnduongD@example.com' },
    { id: 3, fullName: 'Bệnh nhân Lê Thị E', gender: 'Nữ', dateOfBirth: '1990-01-01', phone: '(028) 12345678', email: 'bnleE@example.com' },
    { id: 4, fullName: 'Bệnh nhân Dương Văn F', gender: 'Nam', dateOfBirth: '1985-05-20', phone: '(029) 87654321', email: 'bnduongF@example.com' },
    { id: 5, fullName: 'Bệnh nhân Lê Thị A', gender: 'Nữ', dateOfBirth: '1990-01-01', phone: '(028) 12345678', email: 'bnleA@example.com' },
    { id: 6, fullName: 'Bệnh nhân Dương Văn B', gender: 'Nam', dateOfBirth: '1985-05-20', phone: '(029) 87654321', email: 'bnduongB@example.com' },
    { id: 7, fullName: 'Bệnh nhân Lê Thị C', gender: 'Nữ', dateOfBirth: '1990-01-01', phone: '(028) 12345678', email: 'bnleC@example.com' },
    { id: 8, fullName: 'Bệnh nhân Dương Văn D', gender: 'Nam', dateOfBirth: '1985-05-20', phone: '(029) 87654321', email: 'bnduongD@example.com' },
  ]);

  const [open, setOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    phone: '',
    email: '',
  });

  const handleOpen = () => {
    setFormData({ fullName: '', gender: '', dateOfBirth: '', phone: '', email: '' });
    setIsEdit(false);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleAddOrEdit = () => {
    if (isEdit && selectedPatient) {
      setPatients(patients.map(patient => (patient.id === selectedPatient.id ? { ...formData, id: selectedPatient.id } : patient)));
    } else {
      setPatients([...patients, { ...formData, id: patients.length + 1 }]);
    }
    handleClose();
  };

  const handleEdit = (patient) => {
    setSelectedPatient(patient);
    setFormData(patient);
    setIsEdit(true);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setPatients(patients.filter(patient => patient.id !== id));
    setOpenDelete(false);
  };

  const handleViewDetail = (patient) => {
    setSelectedPatient(patient);
    setOpenDetail(true);
  };

  const handleDetailClose = () => setOpenDetail(false);

  const handleDeleteOpen = (patient) => {
    setSelectedPatient(patient);
    setOpenDelete(true);
  };

  const handleDeleteClose = () => setOpenDelete(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (isEdit && selectedPatient) {
      setFormData(selectedPatient);
    }
  }, [selectedPatient, isEdit]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
        Quản lý bệnh nhân
      </Typography>
      <Table sx={{ minWidth: 650, '& th': { backgroundColor: '#0D47A1', color: '#ffffff' } }}>
        <TableHead>
          <TableRow>
            <TableCell>Họ và tên</TableCell>
            <TableCell>Giới tính</TableCell>
            <TableCell>Ngày sinh</TableCell>
            <TableCell>Điện thoại</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient, index) => (
            <TableRow key={patient.id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff', '&:hover': { backgroundColor: '#eeeeee' } }}>
              <TableCell>{patient.fullName}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell>{patient.dateOfBirth}</TableCell>
              <TableCell>{patient.phone}</TableCell>
              <TableCell>{patient.email}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }} onClick={() => handleViewDetail(patient)}>
                  <Visibility />
                </Button>
                <Button variant="outlined" color="secondary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }} onClick={() => handleEdit(patient)}>
                  <Edit />
                </Button>
                <Button variant="outlined" color="error" size="small" sx={{ borderRadius: '8px', textTransform: 'none' }} onClick={() => handleDeleteOpen(patient)}>
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
        Thêm bệnh nhân mới
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ backgroundColor: '#0D47A1', color: '#ffffff' }}>{isEdit ? 'Chỉnh sửa bệnh nhân' : 'Thêm bệnh nhân mới'}</DialogTitle>
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
            <FormControl fullWidth margin="dense">
              <InputLabel>Giới tính</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <MenuItem value="Nam">Nam</MenuItem>
                <MenuItem value="Nữ">Nữ</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              label="Ngày sinh"
              name="dateOfBirth"
              fullWidth
              value={formData.dateOfBirth}
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
                {isEdit ? 'Chỉnh sửa' : 'Thêm'}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={openDetail} onClose={handleDetailClose}>
        <DialogTitle style={{ backgroundColor: '#0D47A1', color: '#ffffff' }}>
          Chi tiết bệnh nhân
          <IconButton aria-label="close" onClick={handleDetailClose} sx={{ position: 'absolute', right: 8, top: 8, color: '#ffffff' }}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedPatient && (
            <>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Họ và tên: {selectedPatient.fullName}</Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>Giới tính: {selectedPatient.gender}</Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>Ngày sinh: {selectedPatient.dateOfBirth}</Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>Điện thoại: {selectedPatient.phone}</Typography>
              <Typography variant="body1">Email: {selectedPatient.email}</Typography>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={openDelete} onClose={handleDeleteClose}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>
          <Typography>Bạn có chắc chắn muốn xóa bệnh nhân {selectedPatient && selectedPatient.fullName}?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} color="primary">
            Hủy
          </Button>
          <Button onClick={() => handleDelete(selectedPatient.id)} color="error">
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default PatientManagement;
