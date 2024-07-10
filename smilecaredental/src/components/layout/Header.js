import {
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import { Logout } from "@mui/icons-material";
import { logout } from "../../api/authService";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    logout();
    navigate('/login'); // Điều hướng về trang đăng nhập sau khi đăng xuất
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = JSON.parse(atob(token.split('.')[1]));
      setUserRole(user.role);
    } else {
      setUserRole(null);
    }
  }, []);
  return (
    <>
      <Box maxWidth="100%">
        <Box
          sx={{
            flexGrow: 1,
            padding: "20px",
            bgcolor: "linear-gradient(to right, #CCCCCC, #e0e0e0)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#0477CA",
                  fontWeight: "bold",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                  transition: "color 0.3s",
                  "&:hover": { color: "#034a7c" },
                }}
              >
                SmileCare
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "#0294FF",
                  fontWeight: "bold",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                  transition: "color 0.3s",
                  "&:hover": { color: "#0266cc" },
                }}
              >
                Dental
              </Typography>
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Link to="/sign" style={{ textDecoration: "none", color: "white" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0477CA",
                    transition: "background-color 0.3s, transform 0.3s",
                    "&:hover": {
                      backgroundColor: "#000AFE",
                      color: "white",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Đăng ký thương hiệu
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box component="section" sx={{ flexGrow: 1, padding: "20px", bgcolor: "#0477CA" }}>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={2}
              sx={{ animation: "fadeIn 1s ease-in-out" }}
            >
              <Link to="/Home" style={{ textDecoration: "none", color: "#FFFF" }}>
                <Typography
                  variant="h6"
                  sx={{ transition: "color 0.3s", "&:hover": { color: "#ffcc00" } }}
                >
                  Trang Chủ
                </Typography>
              </Link>
              <Link to="/Introduce" style={{ textDecoration: "none", color: "#FFFF" }}>
                <Typography
                  variant="h6"
                  sx={{ transition: "color 0.3s", "&:hover": { color: "#ffcc00" } }}
                >
                  Giới thiệu
                </Typography>
              </Link>
              <Link to="/Service" style={{ textDecoration: "none", color: "#FFFF" }}>
                <Typography
                  variant="h6"
                  sx={{ transition: "color 0.3s", "&:hover": { color: "#ffcc00" } }}
                >
                  Dịch vụ
                </Typography>
              </Link>
              <Link to="/Clinic" style={{ textDecoration: "none", color: "#FFFF" }}>
                <Typography
                  variant="h6"
                  sx={{ transition: "color 0.3s", "&:hover": { color: "#ffcc00" } }}
                >
                  Đối tác
                </Typography>
              </Link>
              <Stack direction="row" spacing={10} alignItems="center">
                <Badge badgeContent={4} color="primary">
                  <MailIcon style={{ color: "#FFF" }} />
                </Badge>
                <Badge color="primary" style={{ color: "#FFF ", marginLeft: "40px" }}>
                  <PersonIcon
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    color="action"
                    style={{ color: "#FFF " }}
                  />
                </Badge>
              </Stack>
            </Stack>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {!userRole ? (
                <MenuItem onClick={handleClose}>
                  <Avatar />
                  <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                    Đăng nhập
                  </Link>
                </MenuItem>
              ) : [
                userRole === 1 && (
                  <MenuItem key="admin-link" onClick={handleClose}>
                    <Avatar />
                    <Link to="/dashboardsystem" style={{ textDecoration: "none", color: "black" }}>
                      Admin System
                    </Link>
                  </MenuItem>
                ),
                userRole === 2 && (
                  <MenuItem key="profile-link" onClick={handleClose}>
                    <Avatar />
                    <Link to="/userinfo" style={{ textDecoration: "none", color: "black" }}>
                      Thông tin cá nhân
                    </Link>
                  </MenuItem>
                ),
                userRole === 3 && (
                  <MenuItem key="doctor-link" onClick={handleClose}>
                    <Avatar />
                    <Link to="/doctoraccount" style={{ textDecoration: "none", color: "black" }}>
                      Thông tin bác sĩ
                    </Link>
                  </MenuItem>
                ),
                userRole === 4 && (
                  <MenuItem key="clinic-link" onClick={handleClose}>
                    <Avatar />
                    <Link to="/dashboardclinic" style={{ textDecoration: "none", color: "black" }}>
                      Clinic Owner
                    </Link>
                  </MenuItem>
                ),
                <MenuItem key="logout" onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Đăng xuất
                </MenuItem>
              ]}
            </Menu>

          </Grid>
        </Grid>
      </Box>
      <style>
        {`
            @keyframes fadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
          `}
      </style>
    </>
  );
}

export default Header;
