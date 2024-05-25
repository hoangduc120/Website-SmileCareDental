import { Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
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
              Đăng ký
            </Typography>
            <form>
              <Stack spacing={4} padding={'50px'}>
                <TextField
                  label="Nhập tên của bạn"
                  variant="outlined"
                  size="small"
                />

                <TextField
                  label="Nhập tên của bạn"
                  variant="outlined"
                  size="small"
                />

                <TextField
                  label="Nhập email của bạn"
                  variant="outlined"
                  size="small"
                />

                <TextField
                  label="Nhập sđt của bạn"
                  variant="outlined"
                  size="small"
                />

                <TextField
                  label="Tạo mật khẩu"
                  variant="outlined"
                  size="small"
                />

                <TextField
                  label="Nhập lại mật khẩu"
                  variant="outlined"
                  size="small"
                />

                <FormControlLabel control={<Checkbox />} label="Tôi đồng ý với mọi điều khoảng" />
                <Button variant="contained">Đăng Ký Ngay</Button>

                <Typography>Bạn đã có tài khoảng?  <Link to="/login" style={{ textDecoration: 'none' }}  >
                  Đăng Nhập
                </Link></Typography>
              </Stack>
            </form>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Register;
