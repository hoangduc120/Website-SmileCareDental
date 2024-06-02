
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
import React from "react";
import { Services } from "../../../components/datatest/service/Service";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import DisplayButton from "../../../components/layout/DisplayButton";
import { Brands } from "../../../components/datatest/brands/Brands";

function Home() {
    const listServices = [
        { name: "RĂNG SỨ THẨM MỸ" },
        { name: "TẨY TRẮNG" },
        { name: "NIỀNG RĂNG" },
        { name: "CẤY GHÉP IMPLANT" },
        { name: "TỔNG QUÁT" },
        { name: "NHỔ RĂNG THƯỜNG" },
        { name: "NHỔ RĂNG KHÔN" },
        { name: "TẨY TRẮNG RĂNG" },
    ];

    const [page, setPage] = React.useState(1);
    const brandsPerPage = 3;
    const totalPages = Math.ceil(Brands.length / brandsPerPage);

    const startIndex = (page - 1) * brandsPerPage;
    const endIndex = startIndex + brandsPerPage;
    const currentBrands = Brands.slice(startIndex, endIndex);
    return (
        <>
            <Box textAlign="center" height="20vh">
                <Typography variant="h3" pt="25px" color="#0477CA">
                    Dịch vụ tốt nhất ở nha khoa
                </Typography>
                <Box display="flex" justifyContent="center" pt="15px">
                    <Stack direction="row" spacing={3}>
                        <Typography>
                            <Link
                                to="/Home"
                                style={{ textDecoration: "none", color: "#0477CA" }}
                            >
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
                                        <Link to="/Service" style={{ textDecoration: "none" }}>
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
                    <div style={{ overflowX: "auto" }}>
                        <Grid container spacing={2}>
                            {currentBrands.map((brand, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        sx={{
                                            maxWidth: 300,
                                            margin: "0 auto",
                                            marginBottom: "20px",
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="150"
                                            image={brand.image}
                                            alt={brand.name}
                                        />
                                        <CardContent sx={{ textAlign: "center" }}>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {brand.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Thời gian hoạt động: {brand.time}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Cơ sở: {brand.location}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                    {/* Pagination */}
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <Button
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                            variant="contained"
                            color="primary"
                        >
                            Trang trước
                        </Button>{" "}
                        <Button
                            disabled={page === totalPages}
                            onClick={() => setPage(page + 1)}
                            variant="contained"
                            color="primary"
                        >
                            Trang tiếp theo
                        </Button>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <Button variant="contained" color="primary">
                            <Link
                                to="/clinic"
                                style={{ textDecoration: "none", color: "#ffff" }}
                            >
                                Xem Thêm
                            </Link>
                        </Button>
                    </div>
                </Box>
            </Container>


            <Box sx={{ backgroundColor: "#0477CA", padding: 2 }}>
                <Container>
                    <Grid container spacing={2}>
                        {listServices.map((listService, index) => (
                            <Grid item xs={6} sm={3} key={index}>
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
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"

            >
                <DisplayButton />
            </Box>
            {/* Quảng cáo bên trái */}
            <Box
                component="img"
                src="https://nhakhoawilson.vn/wp-content/uploads/2024/04/BANNER-WEB-MB.jpg"
                alt="Quảng cáo trái"
                sx={{
                    position: 'fixed',
                    top: '50%',
                    left: 0,
                    transform: 'translateY(-50%)',
                    zIndex: 1000,
                    width: '350px',
                    height: 'auto'
                }}

            />

            {/* Quảng cáo bên phải */}
            <Box
                component="img"
                src="https://nhakhoawilson.vn/wp-content/uploads/2024/03/Web-mobi.jpg"
                alt="Quảng cáo phải"
                sx={{
                    position: 'fixed',
                    top: '50%',
                    right: 0,
                    transform: 'translateY(-50%)',
                    zIndex: 1000,
                    width: '350px',
                    height: 'auto'
                }}

            />
        </>
    )

}
export default Home;
