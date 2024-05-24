import { Avatar, Badge, Box, Divider, Grid, ListItemIcon, Menu, MenuItem, Stack, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";



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
                        <Typography variant="h4" sx={{ color: "#2098D1", }} >Dental</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box component="section" sx={{ flexGrow: 10 }} padding="20px" bgcolor="#2098D1" >


                <Grid item xs={8}>
                    <Stack
                        direction="row"
                        spacing={20}
                        ml="50px"
                    >
                        <Link to="/Home" style={{ textDecoration: "none", color: "#FFFF" }}  >
                            <Typography variant="h4" >
                                Trang Chủ
                            </Typography>

                        </Link>
                        <Link to="/Introduce" style={{ textDecoration: "none", color: "#FFFF" }}>
                            <Typography variant="h4" >
                                Giới thiệu
                            </Typography>
                        </Link>
                        <Link to="/Service" style={{ textDecoration: "none", color: "#FFFF" }}>
                            <Typography variant="h4" >
                                Dịch vụ
                            </Typography>
                        </Link>
                        <Link to="/Price" style={{ textDecoration: "none", color: "#FFFF" }}>
                            <Typography variant="h4" >
                                Bảng giá
                            </Typography>
                        </Link>

                        <form >
                            <Stack padding={"0px"} >
                                <TextField label="Tìm kiếm" variant="outlined" size="small" />
                            </Stack>

                        </form>

                        <Grid item xs={1} container alignItems="center" spacing={10} >
                            <Badge badgeContent={4} color="primary" style={{ color: "#FFF " }} >
                                <MailIcon color="action" style={{ color: "#FFF " }} />
                            </Badge>
                            <Badge color="primary" style={{ color: "#FFF " , marginLeft: "40px"}}>
                                <PersonIcon
                                            onClick={handleClick}
                                            size="small"
                                            sx={{ ml: 2 }}
                                            aria-controls={open ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                 color="action" style={{ color: "#FFF " }} />
                            </Badge>
                        </Grid>
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
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                      width: 32,
                                      height: 32,
                                      ml: -0.5,
                                      mr: 1,
                                    },
                                    '&::before': {
                                      content: '""',
                                      display: 'block',
                                      position: 'absolute',
                                      top: 0,
                                      right: 14,
                                      width: 10,
                                      height: 10,
                                      bgcolor: 'background.paper',
                                      transform: 'translateY(-50%) rotate(45deg)',
                                      zIndex: 0,
                                    },
                                  },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                              >
                                <Link to='/profileuser' style={{ textDecoration: "none" }}> 
                                  <MenuItem onClick={handleClose}>
                                    <Avatar /> Thông tin cá nhân
                                  </MenuItem>
                                </Link>
                                <Link to='#' style={{ textDecoration: "none" }}>
                                  <MenuItem onClick={handleClose}>
                                    <Avatar /> Tài khoản của tôi
                                  </MenuItem>
                                </Link>
                                <Divider />
                                <Link to='#' style={{ textDecoration: "none" }}>
                                  <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                      <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Thêm tài khoản khác
                                  </MenuItem>
                                </Link >
                                <Link to='#' style={{ textDecoration: "none" }}>
                                  <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                      <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Cài đặt
                                  </MenuItem>
                                </Link>
                                <Link to='#' style={{ textDecoration: "none" }}>
                                  <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                      <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Đăng xuất
                                  </MenuItem>
                                </Link>
                      </Menu>

                </Grid >


            </Box >


            <Outlet />

            <Toolbar />
            <Box
              sx={{ left: 0, bottom: 0, right: 0, zIndex: "999" }}
              bgcolor="#0269BD"
              padding="20px"
              color="#ffffff"
            >
              <Grid container>
                
                <Grid item xs={4}>
                  <Typography variant="h6" fontWeight="bold">
                    Thông tin liên hệ
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <LocalPhoneIcon fontSize="small" sx={{ fontSize: 30 }} />
                    <span style={{ marginLeft: 8 }}>1900 2345</span>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <EmailIcon fontSize="small" sx={{ fontSize: 30 }} />
                    <span style={{ marginLeft: 8 }}>smilecaredental@gmail.com</span>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <FacebookTwoToneIcon fontSize="small" sx={{ fontSize: 30 }} />
                    <span style={{ marginLeft: 8 }}>
                      https://www.facebook.comshinichikun120
                    </span>
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Typography fontWeight={"bold"} variant="h6"  > Địa Chỉ: </Typography>
                  <Typography >
                  Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh
                  </Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant="h6" fontWeight="bold" style={{ textAlign: "center", paddingBottom:"10px" }}>
                        Bản đồ
                    </Typography>
                    {/* <div
                        style={{ display:"flex", justifyContent:"center", marginRight:" 20px", width:"100%"}}
                        dangerouslySetInnerHTML={{
                            __html: `<<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.609941891112!2d106.8050120759703!3d10.841132830463758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgVFAuIEhDTQ!5e0!3m2!1svi!2s!4v1716430356514!5m2!1svi!2s" width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>>`
                        }}
                    /> */}
                </Grid>
              </Grid>
            </Box>
            <Box 
              sx={{ left: 0, bottom: 0, right: 0, zIndex: "999" }}
              bgcolor="#ffffff"
              padding="20px"
              color="#0269BD"
            >
              <Typography style={{textAlign: "center"}}>
              CÔNG TY TNHH NHA KHOA SmileCareDental - Địa chỉ: Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh - Điện thoại: 1900 2345 - GPDKKD: 0304132304 do sở KH & ĐT TP.HCM cấp ngày: 06/12/2005
              </Typography>
            </Box>
        </>
    );
}

export default Header;