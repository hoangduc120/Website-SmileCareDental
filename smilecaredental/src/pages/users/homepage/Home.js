import {
  Box,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  Container,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import DisplayButton from "../../../components/layout/DisplayButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getPageAllClinics, getPageAllServices, getHomePage } from "../../../api/api";
import Banner from "../../../components/layout/Banner";

function Home() {
  const [services, setServices] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [dentists, setDentists] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = () => getPageAllServices();
  const fetchClinics = () => getPageAllClinics();
  const fetchDoctor = () => getHomePage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesResponse = await fetchServices();
        const clinicsResponse = await fetchClinics();
        const homePageResponse = await fetchDoctor();
        setServices(servicesResponse.data.services);
        setClinics(clinicsResponse.data.clinics);
        setDentists(homePageResponse.data);
      } catch (error) {
        console.error("Error fetching services, clinics, and homepage data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const topServices = services.slice(0, 6);
  const topDoctor = dentists.slice(0, 6);
  const bottomServices = services.slice(0, 8);

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
      <Banner />
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
            {topServices.map((service) => (
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
            {clinics.map((clinic) => (
              <Box key={clinic.id} px={2}>
                <Card sx={{ maxWidth: 300, margin: "20px", marginTop: "20px" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={clinic.image}
                    alt={clinic.name}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography gutterBottom variant="h6" component="div">
                      <strong>{clinic.name}</strong>
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
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Đặt Lịch
                    </Button>
                  </Box>
                </Card>
              </Box>
            ))}
          </Slider>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: '20px',
                height: 50,
                backgroundColor: '#1898F3',
                color: 'white',
                fontWeight: '700',
                fontSize: '14px',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#000AFE',
                  color: 'white',
                },
                display: 'block',
                margin: '20px auto 0',
              }}
            >
              <Link to="/clinic" style={{ textDecoration: "none", color: "#ffff" }}>
                Xem Thêm
              </Link>
            </Button>
          </div>
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
            Bác Sĩ Nổi Bật
          </Typography>
          <Slider {...settings}>
            {topDoctor.map((dentist) => (
              <Box key={dentist.dentist_id} px={2}>
                <Card sx={{ maxWidth: 300, margin: "20px", marginBottom: "20px" }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={dentist.image || "default-dentist-image.jpg"}
                    alt={dentist.name}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {dentist.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Số lần đặt lịch thành công: {dentist.completed_appointments}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {dentist.clinic_name}
                    </Typography>
                  </CardContent>
                  <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                    <Button
                      variant="outlined"
                      component={Link}
                      to={`/book-appointment/${dentist.id}`}
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Đặt Lịch
                    </Button>
                  </Box>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>

      <Box sx={{ backgroundColor: "#0477CA", padding: 2 }}>
        <Container>
          <Grid container spacing={2}>
            {bottomServices.map((service) => (
              <Grid item xs={6} sm={3} key={service.id}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    height: 60,
                    backgroundColor: "white",
                    color: "#0477CA",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#ddd",
                    },
                  }}
                  component={Link}
                  to={`/Service/${service.id}`}
                >
                  {service.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <DisplayButton />
    </>
  );
}

export default Home;
