import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
  Link as MuiLink,
  Paper
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Login() {
  const initialValues = {
    username: '',
    password: '',
    remember: false
  };

  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Không để trống"),
    password: Yup.string().required("Không để trống")
  });

  return (
    <Grid container component="main" >
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

            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {(props) => (
                <Form>
                  <Stack spacing={3}>
                    <Field as={TextField} label='Tên tài khoản' name="username"
                      placeholder='Nhập tên tài khoản' fullWidth required
                      helperText={<ErrorMessage name="username" component="span" style={{ color: 'red' }} />}
                    />
                    <Field as={TextField} label='Mật khẩu' name="password"
                      placeholder='Nhập mật khẩu' type='password' fullWidth required
                      helperText={<ErrorMessage name="password" component="span" style={{ color: 'red' }} />}
                    />
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Field as={FormControlLabel}
                        name='remember'
                        control={
                          <Checkbox
                            color="primary"
                          />
                        }
                        label="Ghi nhớ tôi"
                      />
                      <Link to="/forgetpassword" underline="none">
                        <Typography variant="body2" color="primary">
                          Quên mật khẩu?
                        </Typography>
                      </Link>
                    </Stack>
                    <Button type="submit" variant="contained" fullWidth disabled={props.isSubmitting}>
                      Đăng nhập
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>

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
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{ textTransform: "none", mt: 2 }}
            >
              Đăng nhập với Google
            </Button>
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
