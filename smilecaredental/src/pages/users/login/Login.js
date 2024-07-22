import { Box, Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography, Link as MuiLink, Paper } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../../api/api';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from 'jwt-decode';

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false
    },

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const res = await login({
          email: values.email,
          password: values.password,
        });
        toast.success('Login successful');
        console.log('Login successful', res.data);
        localStorage.setItem('token', res.data.token);

        const user = jwtDecode(res.data.token);  
        console.log(user.name);
        localStorage.setItem('role', user.role);
        localStorage.setItem('name', user.name);
        if (user.role === 4) {
          localStorage.setItem('image', user.image);
        }

        if (user.role === 1) {
          navigate('/dashboardsystem');
        } else if (user.role === 4) {
          navigate('/dashboardclinic');
        } else if (user.role === 3) {
          navigate('/doctoraccount');
        } else {
          navigate('/home');
        }
        resetForm();
      } catch (err) {
        console.error('Login failed', err.response ? err.response.data : "lỗi");
      } finally {
        setSubmitting(false);
      }
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Không để trống").email("Email không hợp lệ"),
      password: Yup.string().required("Không để trống")
    }),
  });

  return (
    <Grid container component="main">
      <ToastContainer />
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: 'linear-gradient(135deg, #eceff1 30%, #e3f2fd 90%)',
          padding: "20px"
        }}
      >
        <Paper elevation={6} sx={{ padding: "50px", borderRadius: "12px", background: 'white', maxWidth: '600px', width: '100%' }}>
          <Stack spacing={4}>
            <Typography variant="h4" color="#2098D1" align="center">
              Chào mừng bạn
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  label='Email'
                  name="email"
                  placeholder='Nhập tên tài khoản'
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />

                <TextField
                  label='Mật khẩu'
                  name="password"
                  placeholder='Nhập mật khẩu'
                  type='password'
                  fullWidth
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="remember"
                        color="primary"
                        checked={formik.values.remember}
                        onChange={formik.handleChange}
                      />
                    }
                    label="Ghi nhớ tôi"
                  />
                  <MuiLink component={Link} to="/forgetpassword">
                    <Typography variant="body2" color="primary">
                      Quên mật khẩu?
                    </Typography>
                  </MuiLink>
                </Stack>
                <Button type="submit" variant="contained" fullWidth disabled={formik.isSubmitting}
                  sx={{
                    marginTop: '20px', height: 50, backgroundColor: '#1898F3', color: 'white', fontWeight: '700', fontSize: '14px', borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: '#000AFE', color: 'white',
                    },
                    display: 'block', margin: '20px auto 0',
                  }}>
                  {formik.isSubmitting ? 'Đang xử lý...' : 'Đăng nhập'}
                </Button>
              </Stack>
            </form>

            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
              <Typography variant="body2">
                Bạn chưa có tài khoản?
              </Typography>
              <Link to="/register" underline="none">
                <Button variant="outlined">
                  Đăng ký
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ height: "100%", display: "flex", alignItems: "center", background: "#e3f2fd" }}>
          <img
            src="https://www.inglewoodfamilydental.ca/wp-content/uploads/2023/10/choosing-the-right-dentist-for-your-dental-crown-procedure-scaled.jpg"
            alt="Login"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
