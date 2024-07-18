import { Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axiosInstance from '../../api/axiosInstance';

function Register() {
  const initialValues = {
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    agree: false,
  };

  const onSubmit = async (values, props) => {
    try {
      const res = await axiosInstance.post('/api/auth/register', {
        username: values.username,
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
      });
      console.log(res.data);
      props.resetForm();
      props.setSubmitting(false);
      alert('Đăng ký thành công', res.data.message);
    } catch (error) {
      console.error("Error", error.response ? error.response.data : error);
      props.setSubmitting(false);
      alert(error.response ? error.response.data.error : 'Error');
    }
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Tên không để trống!'),
    email: Yup.string().email('Hãy nhập định dạng email!').required("Không để trống!"),
    phoneNumber: Yup.number().typeError("Hãy nhập số điện thoại").required('Không để trống!'),
    password: Yup.string().required("Không để trống!").min(4, "Mật khẩu từ 4 ký tự trở lên"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mật khẩu phải trùng").required("Không để trống!"),
  });

  return (
    <div>
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
          <Stack spacing={4}>
            <Typography variant="h4" color="#2098D1" textAlign={"center"}>
              Đăng ký
            </Typography>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {(props) => (
                <Form>
                  <Stack spacing={4} padding={'50px'}>
                    <Field as={TextField} fullWidth name="username" label='Nhập tên tài khoản'
                      placeholder="hoangduc" helperText={<ErrorMessage name="username" component="span" style={{ color: 'red' }} />} />
                    <Field as={TextField} fullWidth name="email" label='Nhập email của bạn'
                      placeholder="hoangduc@example.com" helperText={<ErrorMessage name="email" component="span" style={{ color: 'red' }} />} />
                    <Field as={TextField} fullWidth name="phoneNumber" label='Nhập sđt của bạn'
                      placeholder="Nhập sđt của bạn" helperText={<ErrorMessage name="phoneNumber" component="span" style={{ color: 'red' }} />} />
                    <Field as={TextField} fullWidth name='password' type="password"
                      label='Tạo mật khẩu' placeholder="Tạo mật khẩu"
                      helperText={<ErrorMessage name="password" component="span" style={{ color: 'red' }} />} />
                    <Field as={TextField} fullWidth name="confirmPassword" type="password"
                      label='Nhập lại mật khẩu' placeholder="Nhập lại mật khẩu"
                      helperText={<ErrorMessage name="confirmPassword" component="span" style={{ color: 'red' }} />} />
                    <FormControlLabel control={<Field as={Checkbox} name="agree" />} label="Tôi đồng ý với mọi điều khoản" />
                    <Button type="submit" variant="contained" disabled={props.isSubmitting} sx={{
                      marginTop: '20px', height: 50, backgroundColor: '#1898F3', color: 'white', fontWeight: '700', fontSize: '14px', borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: '#000AFE', color: 'white',
                      },
                      display: 'block', margin: '20px auto 0',
                    }}>
                      {props.isSubmitting ? 'Đang xử lý...' : 'Đăng Ký Ngay'}
                    </Button>

                    <Typography>Bạn đã có tài khoản? <Link to="/login" style={{ textDecoration: 'none' }}>
                      Đăng Nhập
                    </Link></Typography>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Register;
