import { Box, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import { Services } from '../../../components/datatest/service/Service'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <Box textAlign="center" height="20vh">
                <Typography variant='h3' pt="25px" color="#64D3E3">Dịch vụ tốt nhất ở nha khoa</Typography>
                <Box display="flex" justifyContent="center" pt="15px">
                    <Stack direction="row" spacing={3} >
                        <Typography>
                            <Link to="/Home" style={{ textDecoration: "none", color: "#64D3E3" }}>
                                Trang chủ
                            </Link>
                        </Typography>
                    </Stack>
                </Box>
            </Box >
            <Container>
                <Typography
                    variant="h4"
                    component="div"
                    align="center"
                    gutterBottom
                    color={"#2098D1"}
                    padding={"30px"}
                >
                    Dịch vụ tốt nhất ở nha khoa
                </Typography>
                <Box sx={{ paddingX: "15px" }}>
                    <Grid container spacing={2}>
                        {Services.map((service, index) => (
                            <Grid item xs={4} key={index}>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <CardMedia
                                        component="img"
                                        image={service.image}
                                        alt={service.alt}
                                        height="200"
                                    />
                                    <CardContent>
                                        <Link to="/Service" style={{ textDecoration: 'none' }}>
                                            <Typography variant="h6" component="div" color="#2098D1">
                                                {service.title}
                                            </Typography>
                                        </Link>
                                    </CardContent>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ paddingX: "15px", marginTop: 4 }}>
                    <Typography
                        variant="h5"
                        component="div"
                        align="center"
                        gutterBottom
                        color={"#2098D1"}
                    >
                        Đội ngũ y bác sĩ
                    </Typography>
                    {/* You can add additional content for "Đội ngũ y bác sĩ" here */}
                </Box>
            </Container>
        </>
    )
}
export default Home