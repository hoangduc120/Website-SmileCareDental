import {  Box, Grid, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} padding="20px" bgcolor="#CCCCCC">
        <Grid container spacing={2} alignItems="center">
          <Grid itemxs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">SmileCare</Typography>
            <Typography variant="h4"sx={{ color: "#2098D1",}} >Dental</Typography>
          </Grid>
          <Grid item xs={8}>
            
              <Stack
                direction="row"
                spacing={10}
                sx={{ color:'#2098D1' }}
              >
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

      <Toolbar/>
      <Box
        sx={{ position: "fixed", left: 0, bottom: 0, right: 0, zIndex: "999" }}
        bgcolor="#CCCCCC"
        padding="20px"
      >
        <Grid container>
          <Grid item xs={4}>
            Thông tin
          </Grid>
          <Grid item xs={4}>
            Địa chỉ
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
