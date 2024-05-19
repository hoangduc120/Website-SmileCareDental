import { Badge, Box, Grid, Stack, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import Banner from "./Banner";


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

                        <Grid item xs={2}  >
                            <Badge badgeContent={4} color="primary" style={{ color: "#FFF " }} >
                                <MailIcon color="action" style={{ color: "#FFF " }} />
                            </Badge>
                            <Badge color="primary" style={{ color: "#FFF " }}>
                                <PersonIcon color="action" style={{ color: "#FFF " }} />
                            </Badge>
                        </Grid>
                    </Stack>

                </Grid >


            </Box >
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

        </>
    );
}

export default Header;
