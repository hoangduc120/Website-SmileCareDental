import * as React from 'react';
import { Box, CardContent, CardMedia, Grid, Typography, Stack } from '@mui/material'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ListIntros } from '../../../components/datatest/technology/Technology.js'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Service() {
    return (
        <>
            <Box textAlign="center" height="20vh">
                <Typography variant='h3' pt="25px" color="#64D3E3">Dịch Vụ</Typography>
                <Box display="flex" justifyContent="center" pt="15px">
                    <Stack direction="row" alignItems="center" spacing={3} >
                        <Typography>
                            <Link to="/Home" style={{ textDecoration: "none", color: "#64D3E3" }}>
                                Trang chủ
                            </Link>
                        </Typography>
                        <ArrowForwardIosIcon sx={{ color: "#64D3E3", fontSize: "16px" }} />
                        <Typography>
                            <Link to="/Price" style={{ textDecoration: "none", color: "#64D3E3" }}>
                                Dịch vụ
                            </Link>
                        </Typography>
                    </Stack>
                </Box>
            </Box >
        </>
    )
}
export default Service