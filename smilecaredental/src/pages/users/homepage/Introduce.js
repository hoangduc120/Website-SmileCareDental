import * as React from 'react';
import { Box, CardContent, CardMedia, Grid, Typography, Stack, Container, List, ListItem, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import { ListIntros } from '../../../components/datatest/technology/Technology.js'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DisplayButton from "../../../components/Layout/DisplayButton";
function Introduce() {
    return (
        <>
            <Box textAlign="center" height="20vh">
                <Typography variant='h3' pt="25px" color="#0477CA">Giới thiệu</Typography>
                <Box display="flex" justifyContent="center" pt="15px">
                    <Stack direction="row" spacing={2}  >
                        <Typography>
                            <Link to="/Home" style={{ textDecoration: "none", color: "#0477CA" }}>
                                Trang chủ
                            </Link>
                        </Typography>
                        <ArrowForwardIosIcon sx={{ color: "#0477CA", fontSize: "16px" }} />
                        <Typography>
                            <Link to="/Introduce" style={{ textDecoration: "none", color: "#0477CA" }}>
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
            <Container maxWidth="lg">

                <Box sx={{ my: 5 }}>
                    <Typography variant="h4" component="h1" gutterBottom color="#0477CA" fontWeight={700}>
                        Giới thiệu về Booking Smile
                    </Typography>
                    <Typography variant="h6" component="h2" gutterBottom >
                        Nền tảng Booking Smile được xây dựng và ra mắt với mong muốn cung cấp giải pháp kết nối trực tuyến các phòng khám,
                        bác sĩ và doanh nghiệp kinh doanh các sản phẩm về nha khoa. Hay nói cách khác,
                        Booking Smile là nền tảng kết nối Nha khoa 4.0 hiện đại và uy tín nhất hiện nay.
                        Tại Booking Smile, người dùng có thể dễ dàng tham khảo các thông tin về phòng khám,
                        bác sĩ và doanh nghiệp kinh doanh sản phẩm nha khoa uy tín hàng đầu thị trường.

                    </Typography>
                    <Typography variant="h6" component="h2" gutterBottom >
                        Đồng thời có thể liên hệ trực tuyến, đặt lịch hẹn thăm khám, điều trị với các phòng khám,
                        bác sĩ một cách nhanh chóng và tiện lợi. Chúng tôi tin rằng, sự ra đời của
                        <Link href="https://bookingsmile.com" target="_blank" rel="noopener"> Booking Smile</Link>. sẽ mang đến bạn trải nghiệm đáng giá và tiện ích hơn,
                        bắt kịp với sự phát triển của nền công nghiệp 4.0 hiện nay.
                    </Typography>
                </Box>
            </Container>
            <Container maxWidth="lg">

                <Box sx={{ my: 5 }}>
                    <Typography variant="h4" component="h1" gutterBottom color="#0477CA" fontWeight={700}>
                        Tại sao chọn Booking Smile?
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary={
                                <Typography variant="h6">
                                    Giao diện thân thiện và dễ sử dụng.
                                </Typography>
                            } />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={
                                <Typography variant="h6">
                                    Đội ngũ hỗ trợ khách hàng chuyên nghiệp.
                                </Typography>
                            } />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={
                                <Typography variant="h6">
                                    Giá cả cạnh tranh và nhiều chương trình khuyến mãi hấp dẫn.
                                </Typography>
                            } />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={
                                <Typography variant="h6">
                                    Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ, đừng ngần ngại liên hệ với chúng tôi qua:
                                </Typography>
                            } />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={
                                <Typography variant="h6">
                                    Bảo mật thông tin khách hàng tuyệt đối.
                                </Typography>
                            } />
                        </ListItem>
                    </List>
                </Box>
            </Container>
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
                                        <Typography variant="h6" component="div" color="#0477CA">
                                            {ListIntro.name}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Typography variant="h4" component="h1" gutterBottom color="#0477CA" fontWeight={700}>
                    Liên hệ
                </Typography>
                <Typography variant="body1" paragraph>
                    Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ, đừng ngần ngại liên hệ với chúng tôi qua:
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary={
                                <Typography variant="h6">
                                    Email: support@bookingsmile.com
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={
                                <Typography variant="h6">
                                    Hotline: 1900-123-456
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>
            </Container >
            <hr />
            <Box>
                <DisplayButton />
            </Box>
        </>
    )
}
export default Introduce