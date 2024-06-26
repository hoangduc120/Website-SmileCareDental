// Footer.js
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";

function Footer() {
    return (
        <>
            <Box
                sx={{ left: 0, bottom: 0, right: 0, zIndex: "999" }}
                bgcolor="#0477CA"
                padding="10px"
                color="#ffffff"
            >
                <Grid container >
                    <Grid item xs={4} marginLeft="50px">
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
                                https://www.facebook.com/shinichikun120
                            </span>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography fontWeight={"bold"} variant="h6"  > Địa Chỉ: </Typography>
                        <Typography >
                            Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" fontWeight="bold" style={{ textAlign: "center", paddingBottom: "10px" }}>
                            Bản đồ
                        </Typography>
                    </Grid>
                </Grid>

                <Typography style={{ textAlign: "center", marginTop: "15px" }}>
                    CÔNG TY TNHH NHA KHOA SmileCareDental - Địa chỉ: Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh - Điện thoại: 1900 2345 - GPDKKD: 0304132304 do sở KH & ĐT TP.HCM cấp ngày: 06/12/2005
                </Typography>

            </Box >
        </>
    );
}

export default Footer;
