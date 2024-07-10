import * as React from 'react';
import { Box, Grid, Typography, Stack, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DisplayButton from "../../../components/Layout/DisplayButton";
import { ListServices } from '../../../components/datatest/service/ListService.js';
import CircleIcon from '@mui/icons-material/Circle'; // Thêm icon dấu chấm tròn
import { useState } from 'react';
import { useEffect } from 'react';
import axiosInstance from '../../../api/axiosInstance.js';

function Service() {
    const [services, setServices] = useState([])
    useEffect(() => {
        axiosInstance.get("/all-services")
            .then(res => {
                setServices(res.data.services)
            })
            .catch(error => {
                console.error("...", error)
            })
    },[])

    return (
        <>
            <Box textAlign="center" height="20vh">
                <Typography variant='h3' pt="25px" color="#0477CA">Dịch Vụ</Typography>
                <Box display="flex" justifyContent="center" pt="15px">
                    <Stack direction="row" alignItems="center" spacing={3} >
                        <Typography>
                            <Link to="/Home" style={{ textDecoration: "none", color: "#0477CA" }}>
                                Trang chủ
                            </Link>
                        </Typography>
                        <ArrowForwardIosIcon sx={{ color: "#0477CA", fontSize: "16px" }} />
                        <Typography>
                            <Link to="/Price" style={{ textDecoration: "none", color: "#0477CA" }}>
                                Dịch vụ
                            </Link>
                        </Typography>
                    </Stack>
                </Box>
            </Box >
            <Typography
                variant="h4"
                component="div"
                align="center"
                gutterBottom
                color={"#0477CA"}
                padding={"30px"}
                fontWeight={'700'}
            >
                CÁC DỊCH VỤ NHA KHOA
            </Typography>


            <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    {ListServices.map((value, index) => (
                        <Box key={index} sx={{ padding: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                    <Typography variant="h5" color={'#0477CA'} fontWeight={700}>{value.name}</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                    <Typography>{value.detail}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={value.img} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <List >
                                            <Typography variant='h5'>Lợi ích</Typography>
                                            {value.benefit.map((benefit, idx) => (
                                                <ListItem key={idx}>
                                                    <ListItemIcon>
                                                        <CircleIcon fontSize="small" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={benefit} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    ))}
                </Stack>
            </Box>
            <hr />
            <Box>
                <DisplayButton />
            </Box>
        </>
    )
}
export default Service