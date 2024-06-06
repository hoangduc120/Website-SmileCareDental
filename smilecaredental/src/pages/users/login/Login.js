import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
function Login() {
  const initialValues = {
    email: '',
    password: '',
    remember: false
  }
  const onSubmit = (values, props) => {
    console.log(values)
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)

  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Hãy nhập định dạng emai').required("Không để trống"),
    password: Yup.string().required("Không để trống")
  })
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
        >
          <Stack spacing={5} sx={{ width: "100%", maxWidth: "600px" }}>
            <Typography variant="h4" color="#2098D1" align="center">
              Chào mừng bạn
            </Typography>

            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {(props) => (
                <Form>
                  <Stack spacing={4}>
                    <Field as={TextField} label='Email' name="email"
                      placeholder='Nhập email' fullWidth required
                      helperText={<ErrorMessage name="email" component="span" style={{ color: 'red' }} />}
                    />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px' }}>
                      <Field as={TextField} label='Mật khẩu' name="password"
                        placeholder='Nhập mật khẩu' type='password' fullWidth required
                        style={{ flex: 1 }}
                        helperText={<ErrorMessage name="password" component="span" style={{ color: 'red' }} />} />
                      <Link
                        to="/forgetpassword"
                        style={{ textDecoration: "none" }}
                      >
                        <Button>
                          Quên mật khẩu?
                        </Button>
                      </Link>
                    </div>
                    <Field as={FormControlLabel}
                      name='remember'
                      control={
                        <Checkbox
                          color="primary"
                        />
                      }
                      label="Ghi nhớ tôi"
                      style={{ marginTop: '16px' }}
                    />
                  </Stack>
                </Form>
              )}
            </Formik>
            <Stack direction="row" alignItems="center" spacing={4}>
              <Button variant="contained">Đăng nhập</Button>

              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button variant="outlined">
                  Đăng ký
                </Button>
              </Link>
            </Stack>
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{ textTransform: "none", }}
            >
              Đăng nhập với google
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <img
              src={
                "https://www.inglewoodfamilydental.ca/wp-content/uploads/2023/10/choosing-the-right-dentist-for-your-dental-crown-procedure-scaled.jpg"
              }
              alt=" image_login "
              loading="lazy"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
