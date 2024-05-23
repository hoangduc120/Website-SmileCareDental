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

function Login() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack spacing={4}>
            <Typography variant="h4" color="#2098D1">
              Chào mừng bạn
            </Typography>
            <form>
              <Stack spacing={4}>
                <TextField
                  label=" Nhập email "
                  variant="outlined"
                  size="small"
                />
                <Stack direction="row" alignItems="center" spacing={4}>
                  <TextField label="Mật khẩu" variant="outlined" size="small" />
                  <Typography>
                    <Link
                      to="/forgetpassword"
                      style={{ textDecoration: "none" }}
                    >
                      Quên mật khẩu
                    </Link>
                  </Typography>
                </Stack>

                <FormControlLabel control={<Checkbox />} label="Ghi nhớ tôi" />

                <Stack direction="row" alignItems="center" spacing={4}>
                  <Button variant="contained">Đăng nhập</Button>

                  <Button variant="outlined">
                    <Link to="/register" style={{ textDecoration: "none" }}>
                      Đăng ký
                    </Link>
                  </Button>
                </Stack>
                <Stack direction="row" alignItems="center" >
                  <Button
                    variant="outlined" 
                    startIcon={<GoogleIcon />} 
                    sx={{ color: "black",textTransform: "none", }}
                  >
                    Đăng nhập với google
                  </Button>
                </Stack>
              </Stack>
            </form>
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
    </div>
  );
}

export default Login;
