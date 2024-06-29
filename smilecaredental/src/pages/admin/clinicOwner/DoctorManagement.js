import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton } from '@mui/material';
import { Close, Delete, Visibility, Edit } from '@mui/icons-material';
import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { getDentistsByClinic } from '../../../api/api';

const DoctorManagement = () => {
  const { id } = useParams();
  const [clinic, setClinic] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);


  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await getDentistsByClinic(id)
        setClinic(response.data.clinics[0]);
      } catch (error) {
        console.error("Error fetching clinics:", error);
      }
    }
    fetchClinics()
  }, [id])

  // const handleAdd = () => {
  //   setIsEdit(false);
  //   formik.resetForm();
  //   setOpenDialog(true);
  // };

  // const handleEdit = (clinic) => {
  //   setIsEdit(true);
  //   formik.setValues(clinic);
  //   setOpenDialog(true);
  // };

  // const handleDelete = async (id) => {
  //   const confirm = window.confirm("Are you sure you want to delete");
  //   if (confirm) {
  //     try {
  //       await deleteUser(`${id}`);
  //       setClinic(clinic.filter(clinic => clinic.id !== id));
  //       toast.success("Data delete susccessfully!");
  //     } catch (error) {
  //       console.error('Failed to delete user', error);
  //     }
  //   }
  // };

  // const handleAddUser = async (values) => {
  //   try {
  //     const status = values.status === '1'; // Convert '1' to true, '0' to false
  //     const res = await createUser({
  //       ...values,
  //       status: status,
  //     });
  //     setClinic([...clinic, { ...values, id: res.data.clinic.id, status: status }]);
  //     setOpenDialog(false);
  //     toast.success("Thêm người dùng thành công!");
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Thêm người dùng thất bại!");
  //   }
  // };


  // const handleUpdateUser = async (values) => {
  //   try {
  //     const status = values.status === '1'; // Convert '1' to true, '0' to false
  //     await updateUser(values.id, {
  //       ...values,
  //       status: status,
  //     });
  //     setUsers(clinic.map(user => (clinic.id === values.id ? { ...values, status: status } : clinic)));
  //     setOpenDialog(false);
  //     toast.success("Cập nhật người dùng thành công!");
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Cập nhật người dùng thất bại!");
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
    },
    onSubmit: (values, props) => {
      // if (isEdit) {
      //   handleUpdateUser(values);
      // } else {
      //   handleAddUser(values);
      // }
      setTimeout(() => {
        props.resetForm();
        props.setSubmitting(false);
      }, 2000);
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().required('Vui lòng nhập Tên').min(5, 'Tên phải có ít nhất 5 ký tự'),
      phone: Yup.string().required('Vui lòng nhập Số điện thoại'),
      email: Yup.string().required('Vui lòng nhập Email').email('Email không hợp lệ'),
    }),
  });

  return (
    <Container maxWidth="lg">
      <ToastContainer />
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
          {clinic && clinic.dentist_infos.map((doctor) => (
            <TableRow key={doctor.id} sx={{ backgroundColor: doctor.id % 2 === 0 ? '#f5f5f5' : '#ffffff', '&:hover': { backgroundColor: '#eeeeee' } }}>
              <TableCell>{doctor.dentist.fullName}</TableCell>
              <TableCell>{doctor.dentist.phone}</TableCell>
              <TableCell>{doctor.dentist.email}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }}
                // onClick={() => handleViewDetail(clinic)}
                >
                  <Visibility />
                </Button>
                <Button variant="outlined" color="secondary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }}
                // onClick={() => handleEdit(clinic)}
                >
                  <Edit />
                </Button>
                <Button variant="outlined" color="error" size="small" sx={{ borderRadius: '8px', textTransform: 'none' }}
                // onClick={() => handleDelete(doctor.id)}
                >
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
        onClick={openDialog}
      >
        Thêm bác sĩ mới
      </Button>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle style={{ backgroundColor: '#0D47A1', color: '#ffffff' }}>{isEdit ? 'Chỉnh sửa thông tin bác sĩ' : 'Thêm bác sĩ mới'}</DialogTitle>
        <DialogContent>
          <Formik initialValues={formik.initialValues} validationSchema={formik.validationSchema} onSubmit={formik.handleSubmit}>
            {(props) => (
              <Form>
                <TextField
                  margin="dense"
                  label="Họ và tên"
                  name="fullName"
                  fullWidth
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                  helperText={formik.touched.fullName && formik.errors.fullName}
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
                  <Button onClick={() => setOpenDialog(false)} color="primary">
                    Hủy
                  </Button>
                  <Button onClick={props.handleSubmit} color="primary">
                    {isEdit ? 'Cập nhật' : 'Thêm'}
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default DoctorManagement;
