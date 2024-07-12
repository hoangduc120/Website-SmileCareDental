import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Visibility, Edit, Delete } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { getDentistsByClinic, updateDentist, deleteDentist, addDentist } from '../../../api/api';

const DoctorManagement = () => {
  const { id } = useParams();
  const [clinic, setClinic] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDentist, setSelectedDentist] = useState(null);

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

  const handleViewDetail = (dentist) => {
    setSelectedDentist(dentist);
    setIsEditMode(false);
    setOpenDialog(true);
  };

  const handleEditDentist = (dentist) => {
    setSelectedDentist(dentist);
    setIsEditMode(true);
    setOpenDialog(true);
  };

  const handleDeleteDentist = async (dentistId) => {
    try {
      await deleteDentist(dentistId);
      const response = await getDentistsByClinic();
      setClinic(response.data.clinic[0]);
      toast.success("Đã xóa bác sĩ thành công!");
    } catch (error) {
      console.error("Error deleting dentist:", error);
      toast.error("Đã xảy ra lỗi khi xóa bác sĩ!");
    }
  };

  const initialValues = selectedDentist ? {
    name: selectedDentist.dentist.name,
    phonenumber: selectedDentist.dentist.phonenumber,
    email: selectedDentist.dentist.email,
    degree: selectedDentist.degree,
    description: selectedDentist.description,
    status: selectedDentist.dentist.status ? 'true' : 'false' // Chuyển đổi boolean thành string 'true'/'false'
  } : {
    name: "",
    phonenumber: "",
    email: "",
    degree: "",
    description: "",
    status: 'false' // Giá trị mặc định khi thêm mới
  };


  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Vui lòng nhập Tên').min(5, 'Tên phải có ít nhất 5 ký tự'),
    phonenumber: Yup.string().required('Vui lòng nhập Số điện thoại'),
    email: Yup.string().required('Vui lòng nhập Email').email('Email không hợp lệ'),
    degree: Yup.string().required('Vui lòng nhập Bằng cấp'),
    description: Yup.string().required('Vui lòng nhập Mô tả'),
    status: Yup.string().required('Vui lòng nhập trạng thái'),
  });

  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      if (isEditMode) {
        // Nếu đang ở chế độ chỉnh sửa
        const dentistId = selectedDentist.dentist.id;
        const { name, phonenumber, email, degree, description, status } = values;

        const updatedDentist = {
          name,
          phonenumber,
          email,
          degree,
          description,
          status: status === 'true' // Chuyển đổi từ string 'true'/'false' thành boolean
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
        const { name, phonenumber, email, degree, description } = values;

        const newDentist = {
          name,
          password: '1234',
          phonenumber,
          email,
          degree,
          description,
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
          {clinic.dentist_infos.map((dentist_info) => (
            <TableRow key={dentist_info.id} sx={{ backgroundColor: dentist_info.id % 2 === 0 ? '#f5f5f5' : '#ffffff', '&:hover': { backgroundColor: '#eeeeee' } }}>
              <TableCell>{dentist_info.dentist.name}</TableCell>
              <TableCell>{dentist_info.degree}</TableCell>
              <TableCell>{dentist_info.dentist.email}</TableCell>
              <TableCell>{dentist_info.dentist.status ? 'Active' : 'Inactive'}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }} onClick={() => handleViewDetail(dentist_info)}>
                  <Visibility />
                </Button>
                <Button variant="outlined" color="secondary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }} onClick={() => handleEditDentist(dentist_info)}>
                  <Edit />
                </Button>
                <Button variant="outlined" color="error" size="small" sx={{ borderRadius: '8px', textTransform: 'none' }} onClick={() => handleDeleteDentist(dentist_info.dentist.id)}>
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
        onClick={() => {
          setSelectedDentist(null); // Đặt selectedDentist về null khi thêm mới
          setIsEditMode(true); // Đặt isEditMode về false khi thêm mới
          setOpenDialog(true);
        }}
      >
        Thêm bác sĩ mới
      </Button>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle style={{ backgroundColor: '#0D47A1', color: '#ffffff' }}>{isEditMode ? 'Chỉnh sửa thông tin bác sĩ' : 'Thông tin chi tiết bác sĩ'}</DialogTitle>
        <DialogContent>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(props) => (
              <Form>
                <TextField
                  margin="dense"
                  label="Họ và tên"
                  name="name"
                  fullWidth
                  value={props.values.name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.touched.name && Boolean(props.errors.name)}
                  helperText={props.touched.name && props.errors.name}
                  disabled={!isEditMode}
                />
                <TextField
                  margin="dense"
                  label="Điện thoại"
                  name="phonenumber"
                  fullWidth
                  value={props.values.phonenumber}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.touched.phonenumber && Boolean(props.errors.phonenumber)}
                  helperText={props.touched.phonenumber && props.errors.phonenumber}
                  disabled={!isEditMode}
                />
                <TextField
                  margin="dense"
                  label="Email"
                  name="email"
                  fullWidth
                  value={props.values.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.touched.email && Boolean(props.errors.email)}
                  helperText={props.touched.email && props.errors.email}
                  disabled={!isEditMode}
                />
                <TextField
                  margin="dense"
                  label="Bằng cấp"
                  name="degree"
                  fullWidth
                  value={props.values.degree}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.touched.degree && Boolean(props.errors.degree)}
                  helperText={props.touched.degree && props.errors.degree}
                  disabled={!isEditMode}
                />
                <TextField
                  margin="dense"
                  label="Mô tả"
                  name="description"
                  fullWidth
                  multiline
                  rows={4}
                  value={props.values.description}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.touched.description && Boolean(props.errors.description)}
                  helperText={props.touched.description && props.errors.description}
                  disabled={!isEditMode}
                />
                <TextField
                  margin="dense"
                  label="Trạng thái"
                  name="status"
                  fullWidth
                  value={props.values.status} // Điều chỉnh để phù hợp với initialValues và update
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.touched.status && Boolean(props.errors.status)}
                  helperText={props.touched.status && props.errors.status}
                  disabled={!isEditMode}
                />

                <DialogActions>
                  <Button onClick={() => setOpenDialog(false)} color="primary">
                    Hủy
                  </Button>
                  {isEditMode ? (
                    <Button type="submit" color="primary" disabled={!props.isValid || props.isSubmitting}>
                      Lưu
                    </Button>
                  ) : (
                    <Button onClick={() => setOpenDialog(false)} color="primary">
                      Đóng
                    </Button>
                  )}
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