import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { getDentistsByClinic, updateDentist, deleteDentist, addDentist } from '../../../api/api';
import { TablePagination } from '@mui/material';

const DoctorManagement = () => {
  const { id } = useParams();
  const [clinic, setClinic] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedDentist, setSelectedDentist] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Hiển thị 5 hàng mỗi trang
  const [dentistToDelete, setDentistToDelete] = useState(null);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await getDentistsByClinic();
        setClinic(response.data.clinic[0]);
      } catch (error) {
        console.error("Error fetching clinics:", error);
      }
    }
    fetchClinics();
  }, [id]);

  const handleEditDentist = (dentist) => {
    setSelectedDentist(dentist);
    setIsEditMode(true);
    setOpenDialog(true);
  };

  const handleOpenDeleteDialog = (dentistId) => {
    setDentistToDelete(dentistId);
    setOpenDeleteDialog(true);
  };

  const handleDeleteDentist = async () => {
    try {
      await deleteDentist(dentistToDelete);
      const response = await getDentistsByClinic();
      setClinic(response.data.clinic[0]);
      toast.success("Đã xóa bác sĩ thành công!");
      setOpenDeleteDialog(false);
    } catch (error) {
      console.error("Error deleting dentist:", error);
      toast.error("Đã xảy ra lỗi khi xóa bác sĩ!");
      setOpenDeleteDialog(false);
    }
  };

  const initialValues = selectedDentist ? {
    name: selectedDentist.dentist.name,
    phonenumber: selectedDentist.dentist.phonenumber,
    email: selectedDentist.dentist.email,
    degree: selectedDentist.degree,
    description: selectedDentist.description,
    status: selectedDentist.dentist.status ? 'true' : 'false', 
    image: selectedDentist.dentist.image || '' 
  } : {
    name: "",
    phonenumber: "",
    email: "",
    degree: "",
    description: "",
    status: 'true', 
    image: '' 
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Vui lòng nhập Tên').min(5, 'Tên phải có ít nhất 5 ký tự'),
    phonenumber: Yup.string().required('Vui lòng nhập Số điện thoại'),
    email: Yup.string().required('Vui lòng nhập Email').email('Email không hợp lệ'),
    degree: Yup.string().required('Vui lòng nhập Bằng cấp'),
    description: Yup.string().required('Vui lòng nhập Mô tả'),
    status: Yup.string().required('Vui lòng nhập trạng thái'),
    image: Yup.string().url('URL không hợp lệ') // Thêm trường URL của hình ảnh
  });

  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      if (isEditMode) {
        // Nếu đang ở chế độ chỉnh sửa
        const dentistId = selectedDentist.dentist.id;
        const { name, phonenumber, email, degree, description, status, image } = values;

        const updatedDentist = {
          name,
          phonenumber,
          email,
          degree,
          description,
          status: status === 'true', // Chuyển đổi từ string 'true'/'false' thành boolean
          image // Thêm trường URL của hình ảnh
        };

        await updateDentist(dentistId, updatedDentist);

        const response = await getDentistsByClinic();
        setClinic(response.data.clinic[0]);

        resetForm();
        setSubmitting(false);
        setOpenDialog(false);
        toast.success("Đã cập nhật thông tin bác sĩ thành công!");
      } else {
        // Nếu đang ở chế độ thêm mới
        const { name, phonenumber, email, degree, description, image } = values;

        const newDentist = {
          name,
          password: '1234',
          phonenumber,
          email,
          degree,
          description,
          image // Thêm trường URL của hình ảnh
        };

        await addDentist(newDentist);

        const response = await getDentistsByClinic();
        setClinic(response.data.clinic[0]);

        resetForm();
        setSubmitting(false);
        setOpenDialog(false);
        toast.success("Đã thêm mới bác sĩ thành công!");
      }
    } catch (error) {
      console.error(isEditMode ? "Error updating dentist:" : "Error adding new dentist:", error);
      setSubmitting(false);
      toast.error(`Đã xảy ra lỗi khi ${isEditMode ? 'cập nhật thông tin bác sĩ' : 'thêm mới bác sĩ'}`);
    }
  };

  if (!clinic) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
            <TableCell>Bằng cấp</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Trạng thái</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clinic.dentist_infos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((dentist_info) => (
              <TableRow key={dentist_info.id} sx={{ backgroundColor: dentist_info.id % 2 === 0 ? '#f5f5f5' : '#ffffff', '&:hover': { backgroundColor: '#eeeeee' } }}>
                <TableCell>{dentist_info.dentist.name}</TableCell>
                <TableCell>{dentist_info.degree}</TableCell>
                <TableCell>{dentist_info.dentist.email}</TableCell>
                <TableCell>{dentist_info.dentist.status ? 'Active' : 'Inactive'}</TableCell> {/* Hiển thị trạng thái dưới dạng Active/Inactive */}
                <TableCell>
                  <Button variant="outlined" color="secondary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }} onClick={() => handleEditDentist(dentist_info)}>
                    <Edit />
                  </Button>
                  <Button variant="outlined" color="error" size="small" sx={{ borderRadius: '8px', textTransform: 'none' }} onClick={() => handleOpenDeleteDialog(dentist_info.dentist.id)}>
                    <Delete />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={clinic.dentist_infos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
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
        onClick={() => {
          setIsEditMode(false);
          setSelectedDentist(null);
          setOpenDialog(true);
        }}
      >
        Thêm bác sĩ mới
      </Button>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{isEditMode ? 'Chỉnh sửa thông tin bác sĩ' : 'Thêm mới bác sĩ'}</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <TextField
                  name="name"
                  label="Họ và tên"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  name="phonenumber"
                  label="Số điện thoại"
                  value={values.phonenumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phonenumber && Boolean(errors.phonenumber)}
                  helperText={touched.phonenumber && errors.phonenumber}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  name="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  name="degree"
                  label="Bằng cấp"
                  value={values.degree}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.degree && Boolean(errors.degree)}
                  helperText={touched.degree && errors.degree}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  name="description"
                  label="Mô tả"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  name="status"
                  label="Trạng thái"
                  value={values.status}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.status && Boolean(errors.status)}
                  helperText={touched.status && errors.status}
                  fullWidth
                  margin="normal"
                  select
                  SelectProps={{ native: true }}
                >
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </TextField>
                <TextField
                  name="image"
                  label="URL của hình ảnh"
                  value={values.image}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.image && Boolean(errors.image)}
                  helperText={touched.image && errors.image}
                  fullWidth
                  margin="normal"
                />
                <DialogActions>
                  <Button onClick={() => setOpenDialog(false)} color="primary">
                    Hủy
                  </Button>
                  <Button type="submit" color="primary" disabled={isSubmitting}>
                    {isEditMode ? 'Lưu thay đổi' : 'Thêm mới'}
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>
          <Typography>Bạn có chắc chắn muốn xóa bác sĩ này?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="primary">
            Hủy
          </Button>
          <Button onClick={handleDeleteDentist} color="primary">
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DoctorManagement;
