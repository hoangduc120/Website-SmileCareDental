import React, { useContext, useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { Logout } from "@mui/icons-material";
import { AuthContext } from '../../authContext/AuthContext';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { user, logout, menuItems } = useContext(AuthContext);

  useEffect(() => {
  }, [user]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      item === 'Logout' ? (
        <MenuItem key={index} onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      ) : (
        <MenuItem key={index} onClick={handleClose}>
          <Avatar />
          <Link to={
            item === 'Admin System' ? "/dashboardsystem" :
              item === 'Thông tin cá nhân' ? "/userinfo" :
                item === 'Thông tin bác sĩ' ? "/doctoraccount" :
                  "/dashboardclinic"
          } style={{ textDecoration: "none", color: "black" }}>
            {item}
          </Link>
        </MenuItem>
      )
    ));
  };
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
                  "& .MuiAvatar-root": { width: 32, height: 32, ml: -0.5, mr: 1 },
                  "&:before": {
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
              {renderMenuItems()}
            </Menu>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Header;
