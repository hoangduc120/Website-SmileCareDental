import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { Link } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from 'yup'
function ForgetPassword() {
  const initialValues = {
    email: '',
    otp: '',
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Hãy nhập định dạng emai').required("Không để trống"),
    otp: Yup.string().required("Không để trống")
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
            Quên mật khẩu
          </Typography>

          <Formik initialValues={initialValues} validationSchema={validationSchema}>
            {(props) => (
              <Form>
                <Stack spacing={4} padding={"50px"}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px' }}>
                    <Field as={TextField} label='Nhập Email' name="email"
                      placeholder='hoangduc@example.com' fullWidth required
                      helperText={<ErrorMessage name="email" component="span" style={{ color: 'red' }} />}
                      style={{ flex: 1 }}
                    />
                    <Button>
                      <SendIcon />
                    </Button>
                  </div>
                  <Field as={TextField} fullWidth name="otp" label='Nhập mã code'
                    placeholder="Nhập OTP" helperText={<ErrorMessage name="name" component="span" style={{ color: 'red' }} />} />
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

export default ForgetPassword;
