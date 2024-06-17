// import { Avatar, Badge, Box, Button, Divider, Grid, ListItemIcon, Menu, MenuItem, Stack, TextField, Typography } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";
// import MailIcon from '@mui/icons-material/Mail';
// import PersonIcon from '@mui/icons-material/Person';
// import { Logout, Settings } from "@mui/icons-material";
// function Header() {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//     return (
//         <>
//             <Box maxWidth='100%'>
//                 <Box sx={{ flexGrow: 1 }} padding="20px" bgcolor="#CCCCCC">
//                     <Grid container spacing={2} alignItems="center">
//                         <Grid
//                             item
//                             xs={3}
//                             sx={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 justifyContent: "center",
//                             }}
//                         >
//                             <Typography variant="h4">SmileCare</Typography>
//                             <Typography variant="h4" sx={{ color: "#0477CA", }} >Dental</Typography>
//                         </Grid>
//                         <Grid
//                             item
//                             xs={8}  // Sử dụng xs={4} để dành không gian cho nút bấm
//                             sx={{
//                                 display: "flex",
//                                 justifyContent: "flex-end",
//                             }}
//                         >
//                             <Link to="/sign" style={{ textDecoration: "none", color: 'white' }}>
//                                 <Button
//                                     variant="contained"
//                                     sx={{
//                                         backgroundColor: '#0477CA',
//                                         '&:hover': {
//                                             backgroundColor: '#000AFE',
//                                             color: 'white',
//                                         },
//                                     }}
//                                 >
//                                     Đăng ký thương hiệu

//                                 </Button>
//                             </Link>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Box>
//             <Box component="section" sx={{ flexGrow: 1 }} padding="20px" bgcolor="#0477CA">
//                 <Grid container justifyContent="center">
//                     <Grid item xs={12}>
//                         <Stack
//                             direction="row"
//                             justifyContent="space-around"
//                             alignItems="center"
//                             spacing={2}
//                         >
//                             <Link to="/Home" style={{ textDecoration: "none", color: "#FFFF" }}>
//                                 <Typography variant="h6">
//                                     Trang Chủ
//                                 </Typography>
//                             </Link>
//                             <Link to="/Introduce" style={{ textDecoration: "none", color: "#FFFF" }}>
//                                 <Typography variant="h6">
//                                     Giới thiệu
//                                 </Typography>
//                             </Link>
//                             <Link to="/Service" style={{ textDecoration: "none", color: "#FFFF" }}>
//                                 <Typography variant="h6">
//                                     Dịch vụ
//                                 </Typography>
//                             </Link>
//                             <Link to="/Clinic" style={{ textDecoration: "none", color: "#FFFF" }}>
//                                 <Typography variant="h6">
//                                     Đối tác
//                                 </Typography>
//                             </Link>
//                             <form>
//                                 <TextField label="Tìm kiếm" variant="outlined" size="small" />
//                             </form>
//                             <Stack direction="row" spacing={10} alignItems="center">
//                                 <Badge badgeContent={4} color="primary">
//                                     <MailIcon style={{ color: "#FFF" }} />
//                                 </Badge>
//                                 <Badge color="primary" style={{ color: "#FFF ", marginLeft: "40px" }}>
//                                     <PersonIcon
//                                         onClick={handleClick}
//                                         size="small"
//                                         sx={{ ml: 2 }}
//                                         aria-controls={open ? 'account-menu' : undefined}
//                                         aria-haspopup="true"
//                                         aria-expanded={open ? 'true' : undefined}
//                                         color="action"
//                                         style={{ color: "#FFF " }}
//                                     />
//                                 </Badge>
//                             </Stack>
//                         </Stack>
//                         <Menu
//                             anchorEl={anchorEl}
//                             id="account-menu"
//                             open={open}
//                             onClose={handleClose}
//                             onClick={handleClose}
//                             PaperProps={{
//                                 elevation: 0,
//                                 sx: {
//                                     overflow: 'visible',
//                                     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//                                     mt: 1.5,
//                                     '& .MuiAvatar-root': {
//                                         width: 32,
//                                         height: 32,
//                                         ml: -0.5,
//                                         mr: 1,
//                                     },
//                                     '&::before': {
//                                         content: '""',
//                                         display: 'block',
//                                         position: 'absolute',
//                                         top: 0,
//                                         right: 14,
//                                         width: 10,
//                                         height: 10,
//                                         bgcolor: 'background.paper',
//                                         transform: 'translateY(-50%) rotate(45deg)',
//                                         zIndex: 0,
//                                     },
//                                 },
//                             }}
//                             transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//                             anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//                         >
//                             <MenuItem onClick={handleClose}>
//                                 <Avatar /><Link to='/userinfo' style={{ textDecoration: "none", color: 'black' }}>  Thông tin cá nhân</Link>
//                             </MenuItem>
//                             <MenuItem onClick={handleClose}>
//                                 <Avatar /><Link to='/myaccount' style={{ textDecoration: "none", color: 'black' }}>  Tài khoản của tôi</Link>
//                             </MenuItem>
//                             <Divider />
//                             <MenuItem onClick={handleClose}>
//                                 <Avatar /><Link to='/dashboard' style={{ textDecoration: "none", color: 'black' }}>   Clinic Owner</Link>
//                             </MenuItem>
//                             <MenuItem onClick={handleClose}>
//                                 <Avatar /><Link to='/dashboardsystem' style={{ textDecoration: "none", color: 'black' }}>   Admin System</Link>
//                             </MenuItem>
//                             <MenuItem onClick={handleClose}>
//                                 <ListItemIcon>
//                                     <Settings fontSize="small" />
//                                 </ListItemIcon>
//                                 Cài đặt
//                             </MenuItem>
//                             <MenuItem onClick={handleClose}>
//                                 <ListItemIcon>
//                                     <Link to="/login" style={{ textDecoration: "none", color: 'black' }}>
//                                         <Logout fontSize="small" />
//                                         Đăng xuất
//                                     </Link>
//                                 </ListItemIcon>

//                             </MenuItem>
//                         </Menu>
//                     </Grid>
//                 </Grid>
//             </Box>
//         </>
//     );
// }

// export default Header;




import {
    Avatar,
    Badge,
    Box,
    Button,
    Divider,
    Grid,
    ListItemIcon,
    Menu,
    MenuItem,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { Link } from "react-router-dom";
  import MailIcon from "@mui/icons-material/Mail";
  import PersonIcon from "@mui/icons-material/Person";
  import { Logout, Settings } from "@mui/icons-material";
  
  function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
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
                <form>
                  <TextField
                    label="Tìm kiếm"
                    variant="outlined"
                    size="small"
                    sx={{
                      bgcolor: "white",
                      borderRadius: "4px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#FFF",
                        },
                        "&:hover fieldset": {
                          borderColor: "#FFF",
                        },
                      },
                    }}
                  />
                </form>
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
                onClick={handleClose}
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
                <MenuItem onClick={handleClose}>
                  <Avatar />
                  <Link to="/userinfo" style={{ textDecoration: "none", color: "black" }}>
                    Thông tin cá nhân
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar />
                  <Link to="/myaccount" style={{ textDecoration: "none", color: "black" }}>
                    Tài khoản của tôi
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <Avatar />
                  <Link to="/dashboard" style={{ textDecoration: "none", color: "black" }}>
                    Clinic Owner
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar />
                  <Link to="/dashboardsystem" style={{ textDecoration: "none", color: "black" }}>
                    Admin System
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Cài đặt
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                      <Logout fontSize="small" />
                      Đăng xuất
                    </Link>
                  </ListItemIcon>
                </MenuItem>
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
  