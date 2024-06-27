import React, { useState } from 'react';
import { Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';
import { useFormik, Formik, Form } from 'formik';
import * as Yup from 'yup';

const AccountUser = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Nguyễn Văn A',gender:'Nam', dateOfBirth:'1990-09-10', email: 'nguyenvana@gmail.com', phone: '0123456789' },
    { id: 2, name: 'Trần Thị B',gender:'Nam', dateOfBirth:'1990-09-10', email: 'tranthib@gmail.com', phone: '0987654321' },
    { id: 3, name: 'Nguyễn Văn A',gender:'Nam', dateOfBirth:'1990-09-10', email: 'nguyenvana@gmail.com', phone: '0123456789' },
    { id: 4, name: 'Trần Thị B',gender:'Nam', dateOfBirth:'1990-09-10', email: 'tranthib@gmail.com', phone: '0987654321' },
    { id: 5, name: 'Nguyễn Văn A',gender:'Nam', dateOfBirth:'1990-09-10', email: 'nguyenvana@gmail.com', phone: '0123456789' },
    { id: 6, name: 'Trần Thị B',gender:'Nam', dateOfBirth:'1990-09-10', email: 'tranthib@gmail.com', phone: '0987654321' },
  ]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [selectedDeleteId, setSelectedDeleteId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleAdd = () => {
    setIsEdit(false);
    formik.resetForm();
    setOpenEditDialog(true);
  };

  const handleEdit = (user) => {
    setIsEdit(true);
    formik.setValues(user);
    setOpenEditDialog(true);
  };

  const handleConfirmDelete = (id) => {
    setSelectedDeleteId(id);
    setOpenConfirmDialog(true);
  };

  const handleDelete = () => {
    setUsers(users.filter(user => user.id !== selectedDeleteId));
    setOpenConfirmDialog(false);
  };

  const handleAddOrEdit = (values) => {
    if (values.id) {
      setUsers(users.map(user => (user.id === values.id ? values : user)));
    } else {
      setUsers([...users, { ...values, id: users.length + 1 }]);
    }
    setOpenEditDialog(false);
  };

  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
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
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Vui lòng nhập Tên người dùng').min(5, 'Tên phải có ít nhất 5 ký tự'),
      gender: Yup.string().required('Vui lòng chọn Giới tính'),
      dateOfBirth: Yup.string().required('Vui lòng nhập Ngày sinh'),
      phone: Yup.number().required('Vui lòng nhập Số điện thoại'),
      email: Yup.string().required('Vui lòng nhập Email').email('Email không hợp lệ'),
    }),
  });

  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
        Quản lý tài khoản người dùng
      </Typography>
      <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleAdd} sx={{ marginBottom: '16px' }}>
        Thêm tài khoản người dùng mới
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Tên người dùng</TableCell>
              <TableCell>Giới tính</TableCell>
              <TableCell>Ngày sinh</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Số điện thoại</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.dateOfBirth}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(user)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleConfirmDelete(user.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle style={{ backgroundColor: '#0D47A1', color: '#ffffff' }}>{isEdit ? 'Chỉnh sửa tài khoản người dùng' : 'Thêm tài khoản người dùng mới'}</DialogTitle>
        <DialogContent>
          <Formik initialValues={formik.initialValues} validationSchema={formik.validationSchema} onSubmit={formik.handleSubmit}>
            {(props) => (
              <Form>
                <TextField
                  margin="dense"
                  label="Tên người dùng"
                  name="name"
                  fullWidth
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
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
                    {isEdit ? 'Chỉnh sửa' : 'Thêm'}
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
          <DialogContentText>
            Bạn có chắc chắn muốn xóa tài khoản người dùng này không?
          </DialogContentText>
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

export default AccountUser;