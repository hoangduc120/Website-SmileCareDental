import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { requestPasswordReset } from "../../../api/api";
function ForgetPassword() {
  // const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      // otp: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Hãy nhập định dạng emai').required("Không để trống"),
      // otp: Yup.string().required("Không để trống")
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await requestPasswordReset({
          email: values.email,
        })
        console.log("Reset password request successful", response.data);
        alert('Yêu cầu reset mật khẩu đã được gửi. Vui lòng kiểm tra email của bạn.'); // Hiển thị thông báo thành công
        resetForm();
        // navigate("/")
      } catch (error) {
        console.error("Reset password request failed", error.response ? error.response.data : error.message)
      } finally {
        setSubmitting(false)
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
          padding: "25px",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"

        >
          <ChangeCircleIcon fontSize="large" style={{ color: "#2098D1" }} />
        </Box>

        <Stack spacing={4}>
          <Typography variant="h4" color="#2098D1" textAlign={"center"}>
            Quên mật khẩu
          </Typography>


          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label='Email'
                name="email"
                placeholder='Nhập địa chỉ email'
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />

              {/* <TextField
                label='Mã OTP'
                name="otp"
                placeholder='Nhập mã OTP'
                fullWidth
                value={formik.values.otp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.otp && Boolean(formik.errors.otp)}
                helperText={formik.touched.otp && formik.errors.otp}
              /> */}
              <Button type="submit" variant="contained" fullWidth disabled={formik.isSubmitting}>
                {formik.isSubmitting ? 'Đang xử lý...' : 'Xác nhận'}
              </Button>
            </Stack>
          </form>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
            <Typography variant="body2">
              Quay lại đăng nhập?
            </Typography>
            <Link to="/login" underline="none">
              <Button variant="outlined">
                Đăng nhập
              </Button>
            </Link>
          </Stack>

        </Stack>
      </Grid>
    </Grid>
  );
}

export default ForgetPassword;
