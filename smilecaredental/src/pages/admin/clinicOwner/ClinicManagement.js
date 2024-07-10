import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, Select, IconButton, MenuItem } from '@mui/material';
import { Close, Delete, Edit, Visibility } from '@mui/icons-material';
import { Formik, Form } from "formik";
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import axiosInstance from '../../../api/axiosInstance';

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
  const [clinics, setClinics] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [editingClinic, setEditingClinic] = useState(null);
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const apiBaseUrl = '/clinic-owner/clinic';

  useEffect(() => {
    axiosInstance.get(`${apiBaseUrl}/all`)
      .then(response => setClinics(response.data))
      .catch(error => console.error('Error fetching clinic data:', error));
  }, []);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setEditingClinic(null);
  };

  const handleAddOrEdit = (values) => {
    if (editingClinic) {
      axios.put(`${apiBaseUrl}/update`, { ...values, id: editingClinic.id })
        .then(response => {
          setClinics(clinics.map(clinic => clinic.id === editingClinic.id ? response.data : clinic));
          handleClose();
        })
        .catch(error => console.error('Error updating clinic:', error));
    } else {
      axios.post(`${apiBaseUrl}/create`, values)
        .then(response => {
          setClinics([...clinics, response.data]);
          handleClose();
        })
        .catch(error => console.error('Error adding clinic:', error));
    }
  };

  const handleDelete = (id) => {
    setSelectedClinic(id);
    setConfirmDialogOpen(true);
  };

  const handleEdit = (clinic) => {
    setEditingClinic(clinic);
    formik.setValues(clinic);
    handleOpen();
  };

  const handleViewDetail = (clinic) => {
    setSelectedClinic(clinic);
    setOpenDetail(true);
  };

  const handleConfirmDelete = () => {
    axios.delete(`${apiBaseUrl}/delete`, { data: { id: selectedClinic } })
      .then(() => {
        setClinics(clinics.filter(clinic => clinic.id !== selectedClinic));
        setConfirmDialogOpen(false);
      })
      .catch(error => console.error('Error deleting clinic:', error));
  };

  const handleCancelDelete = () => {
    setConfirmDialogOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      slot: "",
      doctor: "",
    },
    onSubmit: (values, props) => {
      handleAddOrEdit(values);
      setTimeout(() => {
        props.resetForm();
        props.setSubmitting(false);
      }, 2000);
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Vui lòng nhập Tên').min(5, 'Tên phòng khám phải có ít nhất 5 kí tự !'),
      slot: Yup.string().required('Vui lòng chọn Giờ khám'),
      doctor: Yup.string().required('Vui lòng nhập Bác sĩ').min(5, 'Tên bác sĩ phải có ít nhất 5 kí tự !'),
    }),
  });

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
          <Formik initialValues={formik.initialValues} onSubmit={formik.handleSubmit} validationSchema={formik.validationSchema}>
            {(props) => (
              <Form>
                <TextField fullWidth
                  name="name"
                  label="Tên phòng khám"
                  margin="dense"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <FormControl fullWidth sx={{ marginTop: '10px' }}>
                  <InputLabel id="slot-label">Giờ khám</InputLabel>
                  <Select
                    name="slot"
                    labelId="slot-label"
                    id="slot"
                    label="Giờ khám"
                    value={formik.values.slot}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.slot && Boolean(formik.errors.slot)}
                  >
                    {slots.map(slot => (
                      <MenuItem key={slot} value={slot}> {slot} </MenuItem>
                    ))}
                  </Select>
                  {formik.touched.slot && formik.errors.slot && (<Typography variant="caption" color="red">{formik.errors.slot}</Typography>)}
                </FormControl>
                <TextField fullWidth
                  name="doctor"
                  label="Bác sĩ"
                  margin="dense"
                  value={formik.values.doctor}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.doctor && Boolean(formik.errors.doctor)}
                  helperText={formik.touched.doctor && formik.errors.doctor}
                />
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Hủy
                  </Button>
                  <Button onClick={props.handleSubmit} color="primary">
                    {editingClinic ? 'Cập nhật' : 'Thêm'}
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>

      <Dialog open={openDetail} onClose={() => setOpenDetail(false)} fullWidth maxWidth="sm">
        <DialogTitle style={{ backgroundColor: '#0D47A1', color: '#ffffff' }}>
          Chi tiết phòng khám
          <IconButton aria-label="close" onClick={() => setOpenDetail(false)} sx={{ position: 'absolute', right: 8, top: 8, color: '#ffffff' }}>
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
