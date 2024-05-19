import { Box, Grid, Stack, TextField, Toolbar, Typography } from "@mui/material";
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
                        <Typography variant="h4" sx={{ color: "#2098D1", }} >Dental</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box component="section" sx={{ flexGrow: 10 }} padding="20px" bgcolor="#2098D1" >


                <Grid item xs={8}>
                    <Stack
                        direction="row"
                        spacing={20}
                        sx={{ color: '#2098D1' }}
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

                        <form>
                            <Stack padding={"0px"} >
                                <TextField label="Tìm kiếm" variant="outlined" size="small" />
                            </Stack>

                        </form>
                    </Stack>

                </Grid >

            </Box >

            <img
                src="../public/images/banner.jpg"
                alt="Mô tả hình ảnh"
                width={200}
                height={150}
            />




            <Outlet />

            <Toolbar />
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
