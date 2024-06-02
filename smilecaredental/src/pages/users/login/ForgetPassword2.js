import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'
function ForgetPassword2() {
  const initialValues = {
    password: '',
    confirmPassword: '',
  }

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Không để trống!").min(4, "Mật khẩu từ 4 ký tụ trở lên"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mật khẩu phải trùng").required("Không để trống!"),
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
        xs="6"
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
          <Formik initialValues={initialValues} validationSchema={validationSchema}>
            {(props) => (
              <Form>
                <Stack spacing={4} padding={"50px"}>
                  <Field as={TextField} fullWidth name='password' type="password"
                    label='Tạo mật khẩu mới' placeholder="Tạo mật khẩu mới"
                    helperText={<ErrorMessage name="password" component="span" style={{ color: 'red' }} />} />
                  <Field as={TextField} fullWidth name="confirmPassword" type="password"
                    label='Nhập lại mật khẩu mới' placeholder="Nhập lại mật khẩu mới"
                    helperText={<ErrorMessage name="confirmPassword" component="span" style={{ color: 'red' }} />} />
                  <Link to="/forgetpassword2" style={{ textDecoration: "none" }}>
                    <Button variant="contained" fullWidth>
                      Xác Nhận
                    </Button>
                  </Link>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ForgetPassword2;
