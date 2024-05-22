import { Badge, Box, Grid, Stack, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
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

                            <Badge color="primary" style={{ color: "#FFF ", marginLeft: "40px" }}>
                                <PersonIcon color="action" style={{ color: "#FFF " }} />
                            </Badge>
                        </Grid>
                    </Stack>

                </Grid >


            </Box >
            <Box>
                <img
                    src={
                        "images/banner.jpg"
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
