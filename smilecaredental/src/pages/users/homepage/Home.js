import {
  Box,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import DisplayButton from "../../../components/layout/DisplayButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axiosInstance from "../../../api/axiosInstance";

function Home() {
  const [services, setServices] = useState([])
  const [clinics, setClinics] = useState([])

  useEffect(() => {
    axiosInstance.get("/all-services")
      .then(res => {
        setServices(res.data.services)
      })
      .catch(error => {
        console.error("...", error)
      })
    axiosInstance.get("/all-clinics")
    .then(res => {
      setClinics(res.data.clinics)
    })
    .catch(error => {
      console.error("...", error)
    })
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box textAlign="center" height="20vh">
        <Typography variant="h3" pt="25px" color="#0477CA">
          Dịch vụ tốt nhất ở nha khoa
        </Typography>
        <Box display="flex" justifyContent="center" pt="15px">
          <Stack direction="row" spacing={3}>
            <Typography>
              <Link to="/Home" style={{ textDecoration: "none", color: "#0477CA" }}>
                Trang chủ
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Box>
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
            {services.map((service) => (
              <Grid item xs={4} key={service.id}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.name}
                    height="200"
                  />
                  <CardContent>
                    <Link to={`/Service/${service.id}`} style={{ textDecoration: "none" }}>
                      <Typography variant="h6" component="div" color="#0477CA">
                        {service.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Giá: ${service.price}
                      </Typography>
                    </Link>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            gutterBottom
            color={"#0477CA"}
            padding={"30px"}
          >
            Thương Hiệu Tốt
          </Typography>
          <Typography variant="body1" gutterBottom>
            Danh sách thương hiệu nổi bật xuất hiện trên Booking Smile. Đây là
            các thương hiệu đã được xác minh bởi Booking Smile.
          </Typography>
          <Slider {...settings}>
            {clinics.map((clinic, index) => (
              <Box key={index} px={2}>
                <Card sx={{ maxWidth: 300, margin: "0 auto", marginBottom: "20px" }}>
                  <CardMedia
                    component="img"
                    height="150"
                    image={clinic.img}
                    alt={clinic.name}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {clinic.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Thời gian hoạt động: {clinic.time}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Cơ sở: {clinic.location}
                    </Typography>
                  </CardContent>
                  <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                    <Button
                      variant="outlined"
                      component={Link}
                      to={`/clinic/${clinic.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      Đặt Lịch
                    </Button>
                  </Box>
                </Card>
              </Box>
            ))}
          </Slider>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button variant="contained" color="primary">
              <Link to="/clinic" style={{ textDecoration: "none", color: "#ffff" }}>
                Xem Thêm
              </Link>
            </Button>
          </div>
        </Box>
      </Container>

      <Box sx={{ backgroundColor: "#0477CA", padding: 2 }}>
        <Container>
          <Grid container spacing={2}>
            {services.map((service) => (
              <Grid item xs={6} sm={3} key={service.id}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    height: 60,
                    backgroundColor: "white",
                    color: "#2261C0",
                    fontWeight: "700",
                    fontSize: "14px",
                    "&:hover": {
                      backgroundColor: "lightgray",
                    },
                  }}
                  href={service.link}
                  target="_blank"
                  rel="white"
                >
                  {service.name}
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
  );
}

export default Home;
