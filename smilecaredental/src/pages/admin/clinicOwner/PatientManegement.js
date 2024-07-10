import React, { useState } from 'react';
import {
  Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, 
  Dialog, DialogActions, DialogContent, DialogTitle, TextField, Select, MenuItem, 
  FormControl, InputLabel, IconButton
} from '@mui/material';
import { Close, Delete, Edit, Visibility } from '@mui/icons-material';
import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';

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

  const handleOpen = () => {
    setIsEdit(false);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleAddOrEdit = (values) => {
    if (isEdit && selectedPatient) {
      setPatients(patients.map(patient => (patient.id === selectedPatient.id ? { ...values, id: selectedPatient.id } : patient)));
    } else {
      setPatients([...patients, { ...values, id: patients.length + 1 }]);
    }
    handleClose();
  };

  const handleEdit = (patient) => {
    setSelectedPatient(patient);
    formik.setValues(patient);// Cập nhật giá trị của formik khi chỉnh sửa
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

  const formik = useFormik({
    initialValues: {
      fullName: '',
      gender: '',
      dateOfBirth: '',
      phone: '',
      email: '',
    },
    onSubmit: (values, props) => {
      handleAddOrEdit(values);
      setTimeout(() => {
        props.resetForm();
        props.setSubmitting(false);
      }, 2000);
    },
    validationSchema : Yup.object().shape({
      fullName: Yup.string().required('Vui lòng nhập Họ và tên'),
      gender: Yup.string().required('Vui lòng chọn Giới tính'),
      dateOfBirth: Yup.string().required('Vui lòng nhập Ngày sinh'),
      phone: Yup.number().required('Vui lòng nhập Điện thoại'),
      email: Yup.string().required('Vui lòng nhập Email').email('Email không hợp lệ'),
    }),

  });

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
          <Formik initialValues={formik.initialValues} validationSchema={formik.validationSchema} onSubmit={formik.handleSubmit}
          >
            {(props) => (
              <Form>
                <TextField
                  margin="dense"
                  label="Họ và tên"
                  name="fullName"
                  fullWidth
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                />
                {formik.touched.fullName && formik.errors.fullName && (<Typography variant="caption" color="red">{formik.errors.fullName}</Typography>)}
                <FormControl fullWidth margin="dense">
                  <InputLabel>Giới tính</InputLabel>
                  <Select
                    name="gender"
                    label="Giới tính"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    error={formik.touched.gender && Boolean(formik.errors.gender)}
                  >
                    <MenuItem value="">Chọn giới tính</MenuItem>
                    <MenuItem value="Nam">Nam</MenuItem>
                    <MenuItem value="Nữ">Nữ</MenuItem>
                  </Select>
                  {formik.touched.gender && formik.errors.gender && (<Typography variant="caption" color="red">{formik.errors.gender}</Typography>)}
                </FormControl>
                <TextField
                  margin="dense"
                  // label="Ngày sinh"
                  name="dateOfBirth"
                  type="date"
                  fullWidth
                  value={formik.values.dateOfBirth}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                  error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                  helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                  />
                <TextField
                  margin="dense"
                  label="Điện thoại"
                  name="phone"
                  fullWidth
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  />
                <TextField
                  margin="dense"
                  label="Email"
                  name="email"
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  />
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Hủy
                    </Button>
                    <Button onClick={props.handleSubmit} color="primary">
                    {isEdit ? 'Chỉnh sửa' : 'Thêm'}
                    </Button>
                  </DialogActions>
                </Form>
            )}
          </Formik>
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


