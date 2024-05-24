import * as React from 'react';
import { Box, CardContent, CardMedia, Grid, Typography, Stack, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import { ListIntros } from '../../../components/datatest/technology/Technology.js'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DisplayButton from '../../../components/DisplayButton.js';



function Introduce() {
    return (
        <>
            <Box textAlign="center" height="20vh">
                <Typography variant='h3' pt="25px" color="#64D3E3">Giới thiệu</Typography>
                <Box display="flex" justifyContent="center" pt="15px">
                    <Stack direction="row" spacing={2}  >
                        <Typography>
                            <Link to="/Home" style={{ textDecoration: "none", color: "#64D3E3" }}>
                                Trang chủ
                            </Link>
                        </Typography>
                        <ArrowForwardIosIcon sx={{ color: "#64D3E3", fontSize: "16px" }} />
                        <Typography>
                            <Link to="/Introduce" style={{ textDecoration: "none", color: "#64D3E3" }}>
                                Giới thiệu
                            </Link>
                        </Typography>
                    </Stack>
                </Box>
            </Box >
            <Box>
                <img
                    src={
                        "images/intro.png"
                    }
                    alt=""
                    loading="lazy"
                    width="100%"
                    height="auto"
                />
            </Box>
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
                        {ListIntros.map((ListIntro, index) => (
                            <Grid item xs={4} key={index}>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <CardMedia
                                        component="img"
                                        image={ListIntro.img}
                                        alt={ListIntro.name}
                                        height="200"
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="div" color="#2098D1">
                                            {ListIntro.name}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
            <hr />
            <Box>
                <DisplayButton />
            </Box>
        </>
    )
}
export default Introduce