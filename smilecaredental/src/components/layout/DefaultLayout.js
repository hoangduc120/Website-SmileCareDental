import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";

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
            <Stack direction="row" spacing={10}>
              <Link to="/home" style={{ textDecoration: "none", color: "#2098D1", fontSize: "20px" }}>
                Trang Chủ
              </Link>
              <Link to="/Introduce" style={{ textDecoration: "none", color: "#2098D1", fontSize: "20px" }}>
                Giới Thiệu
              </Link>
              <Link to="/news" style={{ textDecoration: "none", color: "#2098D1", fontSize: "20px" }}>
                Tin Tức
              </Link>
              <Link to="/contact" style={{ textDecoration: "none", color: "#2098D1", fontSize: "20px" }}>
                Liên Hệ
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Outlet />

      {/* <Toolbar/> */}
    </>
  );
}

export default Header;
