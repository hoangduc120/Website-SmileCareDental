import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} padding="20px" bgcolor="#CCCCCC">
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">SmileCare</Typography>
            <Typography variant="h4" sx={{ color: "#2098D1" }}>
              Dental
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Stack direction="row" spacing={10} sx={{ color: "#2098D1" }}>
              <Link to="/home" style={{ textDecoration: "none" }}>
                Trang Chủ
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                Giới Thiệu
              </Link>
              <Link to="/news" style={{ textDecoration: "none" }}>
                Tin Tức
              </Link>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                Liên Hệ
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Outlet />

      {/* <Toolbar/> */}
      <Box
        sx={{ left: 0, bottom: 0, right: 0, zIndex: "999" }}
        bgcolor="#CCCCCC"
        padding="20px"
      >
        <Grid container>
          <Grid item xs={4}>
            <Typography variant="h6" fontWeight="bold">
              Thông tin liên hệ
            </Typography>
            <Box display="flex" alignItems="center">
              <LocalPhoneIcon fontSize="small" sx={{ fontSize: 21 }} />
              <span style={{ marginLeft: 8 }}>1900 2345</span>
            </Box>
            <Box display="flex" alignItems="center">
              <EmailIcon fontSize="small" sx={{ fontSize: 21 }} />
              <span style={{ marginLeft: 8 }}>dentalclinic@gmail.com</span>
            </Box>
            <Box display="flex" alignItems="center">
              <FacebookTwoToneIcon fontSize="small" sx={{ fontSize: 21 }} />
              <span style={{ marginLeft: 8 }}>
                https://www.facebook.comshinichikun120
              </span>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Typography fontWeight={"700"}> Địa Chỉ: </Typography>
          </Grid>
          <Grid item xs={4}>
            Image map
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Header;
