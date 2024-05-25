import {
  Badge,
  Box,
  Grid,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";

function Header() {
    // useNavigate dùng để chuyển hướng 
  const navigate = useNavigate();

  const handlePersonIconClick = () => {
    navigate("/login");
  };

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
        </Grid>
      </Box>
      <Box
        component="section"
        sx={{ flexGrow: 10 }}
        padding="20px"
        bgcolor="#2098D1"
      >
        <Grid item xs={8}>
          <Stack direction="row" spacing={10} ml="50px">
            <Link to="/Home" style={{ textDecoration: "none", color: "#FFFF" }}>
              <Typography variant="h6">Trang Chủ</Typography>
            </Link>
            <Link
              to="/Introduce"
              style={{ textDecoration: "none", color: "#FFFF" }}
            >
              <Typography variant="h6">Giới thiệu</Typography>
            </Link>
            <Link
              to="/Service"
              style={{ textDecoration: "none", color: "#FFFF" }}
            >
              <Typography variant="h6">Dịch vụ</Typography>
            </Link>
            <Link
              to="/Price"
              style={{ textDecoration: "none", color: "#FFFF" }}
            >
              <Typography variant="h6">Bảng giá</Typography>
            </Link>

            <form>
              <Stack padding={"0px"}>
                <TextField label="Tìm kiếm" variant="outlined" size="small" />
              </Stack>
            </form>

            <Grid item xs={1} container alignItems="center" spacing={10}>
              <Badge
                badgeContent={4}
                color="primary"
                style={{ color: "#FFF " }}
              >
                <MailIcon color="action" style={{ color: "#FFF " }} />
              </Badge>

              <Badge
                color="primary"
                style={{ color: "#FFF ", marginLeft: "40px" }}
              >
                <PersonIcon 
                // click incons from login
                color="action"
                 style={{ color: "#FFF ", cursor:'pointer' }}
                 onClick={handlePersonIconClick} />
              </Badge>
            </Grid>
          </Stack>
        </Grid>
      </Box>
      <Box>
        <img
          src={
            "https://content.pancake.vn/1/s1000x500/8e/b2/f4/f4/91d7206d6bd21531b6f4ecee3e726615d7e17ac32c6755ad8004f49b.png"
          }
          alt=""
          loading="lazy"
          width="100%"
          height="auto"
        />
      </Box>

      <Outlet />

      <Toolbar />

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
            <Typography fontWeight={"bold"} variant="h6">
              {" "}
              Địa Chỉ:{" "}
            </Typography>
            <Typography>
              Phòng 602,Nhà Văn Hóa Sinh Viên,Lưu Hữu Phước,Đông Hòa,Dĩ An,Bình
              Dương
            </Typography>
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
