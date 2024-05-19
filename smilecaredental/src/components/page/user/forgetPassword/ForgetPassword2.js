import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function ForgetPassword2() {
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

        <Stack spacing={4}>
          <Typography variant="h4" color="#2098D1" textAlign={"center"}>
            Nhập lại mật khẩu
          </Typography>

          <form>
            <Stack spacing={4} padding={"50px"}>
              <TextField label="Tạo lại mật khẩu mới" variant="outlined" size="small" />
              <TextField label="Nhập lại mật khẩu mới" variant="outlined" size="small" />
              <Button variant="contained">
                <Link to="/Login" style={{ textDecoration: "none" }}>
                  Xác Nhận
                </Link>
              </Button>
            </Stack>
          </form>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ForgetPassword2