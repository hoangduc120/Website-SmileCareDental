import { Box, CardContent, CardMedia, Grid, Typography, Button, CardActionArea, CardActions, Stack, Container } from '@mui/material'
import React from 'react'
import { Services } from '../../../components/datatest/service/Service'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import { Doctors } from '../../../components/datatest/doctor/Doctors'
import DisplayButton from '../../../components/layout/DisplayButton';
import { brands } from '../../../components/datatest/brands/Brands';

function Home() {
    const listServices = [
        { name: 'RĂNG SỨ THẤM MỸ' },
        { name: 'TẨY TRẮNG' },
        { name: 'NIỀNG RĂNG' },
        { name: 'CẤY GHÉP IMPLANT' },
        { name: 'TỔNG QUÁT' },
        { name: 'NHỔ RĂNG THƯỜNG' },
        { name: 'NHỔ RĂNG KHÔN' },
        { name: 'TẪY TRẮNG RĂNG' },
    ]
    return (
        <>
            <Box textAlign="center" height="20vh">
                <Typography variant='h3' pt="25px" color="#0477CA">Dịch vụ tốt nhất ở nha khoa</Typography>
                <Box display="flex" justifyContent="center" pt="15px">
                    <Stack direction="row" spacing={3} >
                        <Typography>
                            <Link to="/Home" style={{ textDecoration: "none", color: "#0477CA" }}>
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
                    color={"#0477CA"}
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
                                            <Typography variant="h6" component="div" color="#0477CA">
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
                        variant="h4"
                        component="div"
                        align="center"
                        gutterBottom
                        color={"#0477CA"}
                    >
                        Đội ngũ y bác sĩ
                    </Typography>

                    <Container>
                        <Grid container spacing={2}>
                            {Doctors.map((doctor) => (
                                <Grid item xs={12} sm={6} md={4} key={doctor.id}>
                                    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', maxWidth: 450 }}>
                                        <CardActionArea sx={{ flex: '1 0 auto' }}>
                                            <CardMedia
                                                component="img"
                                                height="350"
                                                image={doctor.img}
                                                sx={{ objectFit: 'cover', objectPosition: 'top' }}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {doctor.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {doctor.detail}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions sx={{ justifyContent: 'center' }}>
                                            <Button
                                                size="large"
                                                color="primary"
                                                sx={{
                                                    width: '100%',
                                                    textDecoration: 'none',
                                                    color: 'white',
                                                    backgroundColor: '#136AEC',
                                                    '&:hover': { backgroundColor: '#000AFE' }
                                                }}
                                                component={Link}
                                                to="/clinic"
                                            >
                                                Đặt lịch
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </Container>

            <Container maxWidth="md">
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Thương hiệu nổi bật
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Danh sách thương hiệu nổi bật xuất hiện trên Booking Smile. Đây là các thương hiệu đã được xác minh bởi Booking Smile.
                    </Typography>
                    <Grid container spacing={2}>
                        {brands.map((brand, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ maxWidth: 345, margin: '20px' }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={brand.image}
                                        alt={brand.name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {brand.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Thời gian hoạt động:  {brand.time}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Cơ sở: {brand.location}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>


            <Box sx={{ backgroundColor: '#0477CA', padding: 2 }}>
                <Container>
                    <Grid container spacing={2}>
                        {listServices.map((listService, index) => (
                            <Grid item xs={6} sm={3} key={index}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        height: 60, backgroundColor: 'white', color: '#2261C0', fontWeight: "700", fontSize: "14px",
                                        '&:hover': {
                                            backgroundColor: 'lightgray',
                                        }
                                    }}
                                    href={listService.link}
                                    target="_blank"
                                    rel="white"
                                >
                                    {listService.name}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <hr />
            <Box>
                <DisplayButton />
            </Box>
        </>
    )
}
export default Home