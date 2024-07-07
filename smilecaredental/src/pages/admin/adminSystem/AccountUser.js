import React, { useEffect, useState } from 'react';
import {
  Typography, Button,
  Table, TableBody,
  TableCell, TableContainer,
  TableHead, TableRow,
  Paper, IconButton,
  Dialog, DialogActions, DialogContent,
  DialogTitle, TextField, FormControl,
  InputLabel, Select, MenuItem
} from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';
import { useFormik, Formik, Form } from 'formik';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { createUser, updateUser, deleteUser, getCustomersAndClinicOwners } from '../../../api/api'
const AccountUser = () => {
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getCustomersAndClinicOwners()
        setUsers(res.data || []);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsers();
  }, [])

  const handleAdd = () => {
    setIsEdit(false);
    formik.resetForm();
    setOpenDialog(true);
  };

  const handleEdit = (user) => {
    setIsEdit(true);
    formik.setValues(user);
    setOpenDialog(true);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      try {
        await deleteUser(`${id}`);
        setUsers(users.filter(user => user.id !== id));
        toast.success("Data delete susccessfully!");
      } catch (error) {
        console.error('Failed to delete user', error);
      }
    }
  };
  const handleAddUser = async (values) => {
    try {

      const res = await createUser(values)
      setUsers([...users, { ...values, id: res.data.user.id }]);
      setOpenDialog(false);
      toast.success("Thêm người dùng thành công!");
    } catch (error) {
      console.error(error);
      toast.error("Thêm người dùng thất bại!");
    }
  };
  const handleUpdateUser = async (values) => {
    try {

      await updateUser(values.id, values);
      setUsers(users.map(user => (user.id === values.id ? values : user)));
      setOpenDialog(false);
      toast.success("Cập nhật người dùng thành công!");
    } catch (error) {
      console.error(error);
      toast.error("Cập nhật người dùng thất bại!");
    }
  };

  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      status: '',
      phonenumber: '',
      email: '',
    },
    onSubmit: (values, props) => {
      if (isEdit) {
        handleUpdateUser(values);
      } else {
        handleAddUser(values);
      }
      setTimeout(() => {
        props.resetForm();
        props.setSubmitting(false);
      }, 2000);
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Vui lòng nhập Tên người dùng'),
      phonenumber: Yup.number().required('Vui lòng nhập Số điện thoại'),
      email: Yup.string().required('Vui lòng nhập Email').email('Email không hợp lệ'),
    }),
  });

  return (
    <div style={{ padding: '16px' }}>
      <ToastContainer />
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
              <TableCell>Trạng thái</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Số điện thoại</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.status ? 'Hoạt động' : 'Không hoạt động'}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phonenumber}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(user)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDelete(user.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
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
                <TextField
                  margin="dense"
                  label="Số điện thoại"
                  name="phonenumber"
                  fullWidth
                  value={formik.values.phonenumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phonenumber && Boolean(formik.errors.phonenumber)}
                  helperText={formik.touched.phonenumber && formik.errors.phonenumber}
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
                <FormControl fullWidth margin="dense">
                  <InputLabel>Trạng thái</InputLabel>
                  <Select
                    name="status"
                    label="Trạng thái"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.status && Boolean(formik.errors.status)}
                  >
                    <MenuItem value="">Chọn Trạng thái</MenuItem>
                    <MenuItem value="false">Hủy</MenuItem>
                    <MenuItem value="true">Kích hoạt</MenuItem>
                  </Select>
                </FormControl>
                <DialogActions>
                  <Button onClick={() => setOpenDialog(false)} color="secondary">
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
    </div>
  );
};

export default AccountUser;
