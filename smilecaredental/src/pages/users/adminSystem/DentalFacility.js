import React, { useState } from 'react';
import { Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';
import { useFormik, Formik, Form } from 'formik';
import * as Yup from 'yup';

const DentalFacility = () => {
  const [facilities, setFacilities] = useState([
    { id: 1, name: 'Nha Khoa Hoàn Mỹ', address: '123 Đường A, Quận 1, TP HCM', phone: '0123456789', email: 'hoanmy@example.com' },
    { id: 2, name: 'Nha Khoa Việt Đức', address: '456 Đường B, Quận 9, TPHCM', phone: '0987654321', email: 'vietduc@example.com' },
    { id: 3, name: 'Nha Khoa Hoàng An', address: '123 Đường A, Quận 1, TP HCM', phone: '0123456789', email: 'hoangan@example.com' },
    { id: 4, name: 'Nha Khoa Kim', address: '456 Đường B, Quận 9, TPHCM', phone: '0987654321', email: 'kim@example.com' },
  ]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedDeleteId, setSelectedDeleteId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const handleAdd = () => {
    setIsEdit(false);
    formik.resetForm();
    setOpenEditDialog(true);
  };

  const handleEdit = (facility) => {
    setIsEdit(true);
    formik.setValues(facility);
    setOpenEditDialog(true);
  };

  const handleConfirmDelete = (id) => {
    setSelectedDeleteId(id);
    setOpenConfirmDialog(true);
  };

  const handleDelete = () => {
    setFacilities(facilities.filter((facility) => facility.id !== selectedDeleteId));
    setOpenConfirmDialog(false);
  };

  const handleAddOrEdit = (values) => {
    if (values.id) {
      setFacilities(facilities.map((facility) => (facility.id === values.id ? values : facility)));
    } else {
      setFacilities([...facilities, { ...values, id: facilities.length + 1 }]);
    }
    setOpenEditDialog(false);
  };

  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      address: '',
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
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Vui lòng nhập tên cơ sở nha khoa!').min(5, 'Tên phải có ít nhất 5 kí tự!'),
      address: Yup.string().required('Vui lòng nhập địa chỉ của cơ sở!'),
      phone: Yup.string().required('Vui lòng nhập số điện thoại !'),
      email: Yup.string().required('Vui lòng nhập email!').email('Email không hợp lệ!'),
    }),
  });

  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
        Quản lí cơ sở nha khoa
      </Typography>
      <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleAdd} sx={{ marginBottom: '16px' }}>
        Thêm cơ sở nha khoa
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Tên cơ sở</TableCell>
              <TableCell>Địa chỉ</TableCell>
              <TableCell>Số điện thoại</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {facilities.map((facility) => (
              <TableRow key={facility.id}>
                <TableCell>{facility.name}</TableCell>
                <TableCell>{facility.address}</TableCell>
                <TableCell>{facility.phone}</TableCell>
                <TableCell>{facility.email}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(facility)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleConfirmDelete(facility.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle style={{ backgroundColor: '#0D47A1', color: '#ffffff' }}>
          {isEdit ? 'Chỉnh sửa cơ sở nha khoa' : 'Thêm cơ sở nha khoa'}
        </DialogTitle>
        <DialogContent>
          <Formik initialValues={formik.initialValues} validationSchema={formik.validationSchema} onSubmit={formik.handleSubmit}>
            {(props) => (
              <Form>
                <TextField
                  margin="dense"
                  label="Tên cơ sở"
                  name="name"
                  fullWidth
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  margin="dense"
                  label="Địa chỉ"
                  name="address"
                  fullWidth
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.address && Boolean(formik.errors.address)}
                  helperText={formik.touched.address && formik.errors.address}
                />
                <TextField
                  margin="dense"
                  label="Số điện thoại"
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
                  <Button onClick={() => setOpenEditDialog(false)} color="secondary">
                    Hủy
                  </Button>
                  <Button onClick={props.handleSubmit} color="primary">
                    {isEdit ? 'Cập nhật' : 'Tạo'}
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>

      <Dialog open={openConfirmDialog} onClose={() => setOpenConfirmDialog(false)}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>
          <DialogContentText>Bạn có chắc chắn muốn xóa cơ sở nha khoa này không ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirmDialog(false)} color="primary">
            Hủy
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DentalFacility;
