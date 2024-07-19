import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { resetPassword } from "../../../api/api";
function ForgetPassword2() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().required("Không để trống!").min(4, "Mật khẩu từ 4 ký tụ trở lên"),
      confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mật khẩu phải trùng").required("Không để trống!"),
    }),
    onSubmit: async (values, { setSubmiting, resetForm }) => {
      try {
        const res = await resetPassword({
          password: values.password,
          confirmPassword: values.confirmPassword,
        });
        console.log('Password reset successful', res.data)
        resetForm()
        navigate('/login')
      } catch (error) {
        console.error('Password reset failed', error.res ? error.res.data : 'Lỗi')
      } finally {
        setSubmiting(false)
      }
    }
  })

  return (
    <Grid
      container
      sx={{
        // borderRadius: 1,
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
