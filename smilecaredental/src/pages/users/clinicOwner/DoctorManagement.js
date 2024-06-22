// import React, { useState } from 'react';
// import {
//   Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button,
//   Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton
// } from '@mui/material';
// import { Close, Delete, Visibility, Edit } from '@mui/icons-material';
// import { Formik, Form, useFormik } from 'formik';
// import * as Yup from 'yup';

// const DoctorManagement = () => {
//   const [doctors, setDoctors] = useState([
//     { id: 1, fullName: 'Bác sĩ Nguyễn Văn A', phone: '(028) 12345678', email: 'bsnguyenA@example.com' },
//     { id: 2, fullName: 'Bác sĩ Trần Thị B', phone: '(029) 87654321', email: 'bsTranB@example.com' },
//     { id: 3, fullName: 'Bác sĩ Nguyễn Văn C', phone: '(028) 12345678', email: 'bsnguyenC@example.com' },
//     { id: 4, fullName: 'Bác sĩ Trần Thị D', phone: '(029) 87654321', email: 'bsTranD@example.com' },
//     { id: 5, fullName: 'Bác sĩ Nguyễn Văn E', phone: '(028) 12345678', email: 'bsnguyenE@example.com' },
//     { id: 6, fullName: 'Bác sĩ Trần Thị F', phone: '(029) 87654321', email: 'bsTranF@example.com' },
//     { id: 7, fullName: 'Bác sĩ Nguyễn Văn G', phone: '(028) 12345678', email: 'bsnguyenG@example.com' },
//     { id: 8, fullName: 'Bác sĩ Trần Thị H', phone: '(029) 87654321', email: 'bsTranH@example.com' },
//   ]);

//   const [open, setOpen] = useState(false);
//   const [openDetail, setOpenDetail] = useState(false);
//   const [editingDoctor, setEditingDoctor] = useState(null);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
//   const [deletingDoctorId, setDeletingDoctorId] = useState(null);

//   const handleOpen = () => {
//     setOpen(true);
//     setEditingDoctor(null);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setEditingDoctor(null);
//   };

//   const handleDetailClose = () => setOpenDetail(false);

//   const handleAddOrEdit = (values) => {
//     if (editingDoctor) {
//       setDoctors(doctors.map(doctor => doctor.id === editingDoctor.id ? { ...editingDoctor, ...values } : doctor));
//     } else {
//       setDoctors([...doctors, { ...values, id: doctors.length + 1 }]);
//     }
//     handleClose();
//   };

//   const handleEdit = (doctor) => {
//     setEditingDoctor(doctor);
//     formik.setValues(doctor);// Cập nhật giá trị của formik khi chỉnh sửa
//     setOpen(true);
//   };

//   const handleDelete = (id) => {
//     setDeletingDoctorId(id);
//     setConfirmDeleteOpen(true);
//   };

//   const handleConfirmDelete = () => {
//     setDoctors(doctors.filter(doctor => doctor.id !== deletingDoctorId));
//     setConfirmDeleteOpen(false);
//     setDeletingDoctorId(null);
//   };

//   const handleViewDetail = (doctor) => {
//     setSelectedDoctor(doctor);
//     setOpenDetail(true);
//   };

//   const formik = useFormik({
//     initialValues : {
//       fullName: "",
//       phone: "",
//       email: "",
//     },
//     onSubmit: (values, props) => {
//       handleAddOrEdit(values);
//       setTimeout(() => {
//         props.resetForm();
//         props.setSubmitting(false);
//       }, 2000);
//     },
//     validationSchema : Yup.object().shape({
//       fullName: Yup.string().required('Vui lòng nhập Tên').min(5, 'Tên phải có ít nhất 5 ký tự'),
//       phone: Yup.number().required('Vui lòng nhập Số điện thoại'),
//       email: Yup.string().required('Vui lòng nhập Email').email('Email không hợp lệ'),
//     }),
//   });

//   return (
//     <Container maxWidth="lg">
//       <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
//         Quản lý bác sĩ
//       </Typography>
//       <Table sx={{ minWidth: 650, '& th': { backgroundColor: '#0D47A1', color: '#ffffff' } }}>
//         <TableHead>
//           <TableRow>
//             <TableCell>Họ và tên</TableCell>
//             <TableCell>Điện thoại</TableCell>
//             <TableCell>Email</TableCell>
//             <TableCell>Hành động</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {doctors.map((doctor, index) => (
//             <TableRow key={doctor.id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff', '&:hover': { backgroundColor: '#eeeeee' } }}>
//               <TableCell>{doctor.fullName}</TableCell>
//               <TableCell>{doctor.phone}</TableCell>
//               <TableCell>{doctor.email}</TableCell>
//               <TableCell>
//                 <Button variant="outlined" color="primary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }} onClick={() => handleViewDetail(doctor)}>
//                   <Visibility />
//                 </Button>
//                 <Button variant="outlined" color="secondary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }} onClick={() => handleEdit(doctor)}>
//                   <Edit />
//                 </Button>
//                 <Button variant="outlined" color="error" size="small" sx={{ borderRadius: '8px', textTransform: 'none' }} onClick={() => handleDelete(doctor.id)}>
//                   <Delete />
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Button
//         variant="contained"
//         sx={{
//           marginTop: '20px',
//           height: 50,
//           backgroundColor: '#1898F3',
//           color: 'white',
//           fontWeight: '700',
//           fontSize: '14px',
//           borderRadius: '8px',
//           '&:hover': {
//             backgroundColor: '#000AFE',
//             color: 'white',
//           },
//           display: 'block',
//           margin: '20px auto 0',
//         }}
//         onClick={handleOpen}
//       >
//         Thêm bác sĩ mới
//       </Button>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle style={{ backgroundColor: '#0D47A1', color: '#ffffff' }}>{editingDoctor ? 'Chỉnh sửa thông tin bác sĩ' : 'Thêm bác sĩ mới'}</DialogTitle>
//         <DialogContent>
//           <Formik initialValues={formik.initialValues} validationSchema={formik.validationSchema} onSubmit={formik.handleSubmit}>
//             {(props) => (
//               <Form>
//                 <TextField
//                   margin="dense"
//                   label="Họ và tên"
//                   name="fullName"
//                   fullWidth
//                   value={formik.values.fullName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur} 
//                   error={formik.touched.fullName && Boolean(formik.errors.fullName)}
//                   helperText={formik.touched.fullName && formik.errors.fullName}
//                 />
//                 <TextField
//                   margin="dense"
//                   label="Điện thoại"
//                   name="phone"
//                   fullWidth
//                   value={formik.values.phone}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur} 
//                   error={formik.touched.phone && Boolean(formik.errors.phone)}
//                   helperText={formik.touched.phone && formik.errors.phone}
//                 />
//                 <TextField
//                   margin="dense"
//                   label="Email"
//                   name="email"
//                   fullWidth
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur} 
//                   error={formik.touched.email && Boolean(formik.errors.email)}
//                   helperText={formik.touched.email && formik.errors.email}
//                 /> 
//                 <DialogActions>
//                   <Button onClick={handleClose} color="primary">
//                     Hủy
//                   </Button>
//                   <Button onClick={props.handleSubmit} color="primary">
//                     {editingDoctor ? 'Cập nhật' : 'Thêm'}
//                   </Button>
//                 </DialogActions>
//               </Form>
//             )}
//           </Formik>
//         </DialogContent>
//       </Dialog>

//       <Dialog open={openDetail} onClose={handleDetailClose} fullWidth maxWidth="sm">
//         <DialogTitle style={{ backgroundColor: '#0D47A1', color: '#ffffff' }}>
//           Chi tiết bác sĩ
//           <IconButton aria-label="close" onClick={handleDetailClose} sx={{ position: 'absolute', right: 8, top: 8, color: '#ffffff' }}>
//             <Close />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           {selectedDoctor && (
//             <div>
//               <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Họ và tên: {selectedDoctor.fullName}</Typography>
//               <Typography variant="body1" sx={{ marginBottom: 1 }}>Điện thoại: {selectedDoctor.phone}</Typography>
//               <Typography variant="body1">Email: {selectedDoctor.email}</Typography>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       <Dialog open={confirmDeleteOpen} onClose={() => setConfirmDeleteOpen(false)}>
//         <DialogTitle>Xác nhận</DialogTitle>
//         <DialogContent>Bạn có chắc chắn muốn xóa bác sĩ này?</DialogContent>
//         <DialogActions>
//           <Button onClick={() => setConfirmDeleteOpen(false)} color="primary">
//             Hủy
//           </Button>
//           <Button onClick={handleConfirmDelete} color="primary" autoFocus>
//             Xác nhận
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default DoctorManagement;








import React, { useState, useEffect } from 'react';
import {Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button,Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton} from '@mui/material';
import { Close, Delete, Visibility, Edit } from '@mui/icons-material';
import { Formik, Form, useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [deletingDoctorId, setDeletingDoctorId] = useState(null);

  const apiUrl = 'https://6671234ae083e62ee43a3684.mockapi.io/slots'; // Replace with your actual API URL

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get(`${apiUrl}/doctors`);
      setDoctors(response.data);
    } catch (error) {
      console.error('Failed to fetch doctors', error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    setEditingDoctor(null);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingDoctor(null);
  };

  const handleDetailClose = () => setOpenDetail(false);

  const handleAddOrEdit = async (values) => {
    try {
      if (editingDoctor) {
        await axios.put(`${apiUrl}/doctors/${editingDoctor.id}`, values);
      } else {
        await axios.post(`${apiUrl}/doctors`, values);
      }
      fetchDoctors();
      handleClose();
    } catch (error) {
      console.error('Failed to save doctor', error);
    }
  };

  const handleEdit = (doctor) => {
    setEditingDoctor(doctor);
    formik.setValues(doctor); // Cập nhật giá trị của formik khi chỉnh sửa
    setOpen(true);
  };

  const handleDelete = (id) => {
    setDeletingDoctorId(id);
    setConfirmDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`${apiUrl}/doctors/${deletingDoctorId}`);
      fetchDoctors();
      setConfirmDeleteOpen(false);
      setDeletingDoctorId(null);
    } catch (error) {
      console.error('Failed to delete doctor', error);
    }
  };

  const handleViewDetail = (doctor) => {
    setSelectedDoctor(doctor);
    setOpenDetail(true);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
    },
    onSubmit: (values, props) => {
      handleAddOrEdit(values);
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
                <Button variant="outlined" color="secondary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }} onClick={() => handleEdit(doctor)}>
                  <Edit />
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
                  <Button onClick={handleClose} color="primary">
                    Hủy
                  </Button>
                  <Button onClick={props.handleSubmit} color="primary">
                    {editingDoctor ? 'Cập nhật' : 'Thêm'}
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
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
            <div>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>Họ và tên: {selectedDoctor.fullName}</Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>Điện thoại: {selectedDoctor.phone}</Typography>
              <Typography variant="body1">Email: {selectedDoctor.email}</Typography>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={confirmDeleteOpen} onClose={() => setConfirmDeleteOpen(false)}>
        <DialogTitle>Xác nhận</DialogTitle>
        <DialogContent>Bạn có chắc chắn muốn xóa bác sĩ này?</DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDeleteOpen(false)} color="primary">
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

export default DoctorManagement;
