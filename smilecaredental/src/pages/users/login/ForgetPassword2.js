import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { resetPassword } from "../../../api/api";

function ForgetPassword2() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const token = query.get('token');
  const email = query.get('email');


  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().required("Không để trống!").min(4, "Mật khẩu từ 4 ký tụ trở lên"),
      confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mật khẩu phải trùng").required("Không để trống!"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const res = await resetPassword({
          email,
          token,
          newPassword: values.password,
        });
        console.log('API Response:', res); 
        alert('Mật khẩu đã được cập nhật thành công');
        resetForm();
        navigate('/login'); 
      } catch (error) {
        console.error('Password reset failed', error.response ? error.response.data : 'Lỗi');
        alert('Cập nhật mật khẩu thất bại'); 
      } finally {
        setSubmitting(false);
      }
    },
  });


  return (
    <Grid
      container
      sx={{
        bgcolor: "#2098D1",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          borderRadius: 1,
          bgcolor: "#fff",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="25px"
        >
          <ChangeCircleIcon fontSize="large" style={{ color: "#2098D1" }} />
        </Box>

        <Stack spacing={4}>
          <Typography variant="h4" color="#2098D1" textAlign={"center"}>
            Nhập lại mật khẩu
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4} padding={"50px"}>
              <TextField
                label='Tạo mật khẩu mới'
                name='password'
                type="password"
                placeholder="Tạo mật khẩu mới"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                label='Nhập lại mật khẩu mới'
                name="confirmPassword"
                type="password"
                placeholder="Nhập lại mật khẩu mới"
                fullWidth
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              />
              <Button type="submit" variant="contained" fullWidth disabled={formik.isSubmitting}>
                {formik.isSubmitting ? 'Đang xử lý...' : 'Xác Nhận'}
              </Button>
            </Stack>
          </form>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ForgetPassword2;