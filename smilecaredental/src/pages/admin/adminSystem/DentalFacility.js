import React, { useEffect, useState } from 'react';
import { Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, TablePagination } from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';
import { useFormik, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { createUser, deleteUser, getAllClinics, updateUser } from '../../../api/api';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const DentalFacility = () => {
  const [facilities, setFacilities] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Hiển thị 5 hàng mỗi trang

  useEffect(() => {
    const fetchDentals = async () => {
      try {
        const res = await getAllClinics()
        setFacilities(res.data || []);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDentals();
  }, [])
  const handleAdd = () => {
    setIsEdit(false);
    formik.resetForm();
    setOpenDialog(true);
  };

  const handleEdit = (facility) => {
    setIsEdit(true);
    formik.setValues(facility);
    setOpenDialog(true);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      try {
        await deleteUser(`${id}`);
        setFacilities(facilities.filter(facilities => facilities.id !== id));
        toast.success("Data delete susccessfully!");
      } catch (error) {
        console.error('Failed to delete user', error);
      }
    }
  };
  const handleAddDental = async (values) => {
    try {
      const status = values.status === '1'; // Convert '1' to true, '0' to false
      const res = await createUser({
        ...values,
        status: status,
      });
      setFacilities([...facilities, { ...values, id: res.data.facilities.id, status: status }]);
      setOpenDialog(false);
      toast.success("Thêm người dùng thành công!");
    } catch (error) {
      console.error(error);
      toast.error("Thêm người dùng thất bại!");
    }
  };
  const handleUpdateDental = async (values) => {
    try {
      const status = values.status === '1'; // Convert '1' to true, '0' to false
      await updateUser(values.id, {
        ...values,
        status: status,
      });
      setFacilities(facilities.map(facilities => (facilities.id === values.id ? { ...values, status: status } : facilities)));
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
      address: '',
      phone: '',
      email: '',
    },
    onSubmit: (values, props) => {
      if (isEdit) {
        handleUpdateDental(values);
      } else {
        handleAddDental(values);
      }
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{ padding: '16px' }}>
      <ToastContainer />
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
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {facilities.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((facility) => (
              <TableRow key={facility.id}>
                <TableCell>{facility.name}</TableCell>
                <TableCell>{facility.address}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(facility)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDelete(facility.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={facilities.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
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
                  <Button onClick={() => setOpenDialog(false)} color="secondary">
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
    </div>
  );
};

export default DentalFacility;
