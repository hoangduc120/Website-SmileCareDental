import { Box, Button, Container, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import React from 'react';

function SignRegistration() {
    return (
        <>
            <Container maxWidth="md">
                <Box sx={{ my: 4 }}>
                    <Typography variant="h2" component="h1" gutterBottom color="#0477CA" fontWeight={700}>
                        Đăng Ký Thương Hiệu Với Booking Smile
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom fontWeight={700}>
                        Booking Smile xin chào bạn
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Chúng tôi tại Booking Smile rất tự hào và vinh dự khi có cơ hội hợp tác với các phòng khám nha khoa uy tín như quý vị.
                        Chúng tôi hiểu rằng mỗi phòng khám có những điểm mạnh và đặc điểm riêng,
                        và chúng tôi muốn giúp bạn chia sẻ những giá trị độc đáo đó với cộng đồng của chúng tôi.
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom fontWeight={700}>
                        Về Booking Smile:
                    </Typography>
                    <Typography variant="body1" gutterBottom >
                        Booking Smile là một nền tảng trực tuyến cho phép người dùng tìm kiếm và đặt hẹn với các phòng khám nha khoa trên khắp các quận huyện, tỉnh thành.
                        Chúng tôi cam kết mang lại sự thuận tiện nhất cho bệnh nhân và tạo điều kiện tốt nhất cho chủ phòng khám để họ tiếp cận một lượng lớn bệnh nhân tiềm năng.
                    </Typography>
                    <Box my={4}>
                        <Typography variant="h5" gutterBottom fontWeight={700}>
                            Lợi ích khi tham gia Booking Smile:
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="1. Tăng sự nhận diện"
                                    secondary="Chúng tôi sẽ giúp bạn tăng sự nhận diện và tiếp cận đối tượng khách hàng mục tiêu của bạn thông qua mạng lưới người dùng rộng lớn của chúng tôi."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="2. Quảng cáo hiệu quả"
                                    secondary="Chúng tôi sẽ giúp bạn quảng cáo phòng khám của mình thông qua một giao diện dễ sử dụng và tiện lợi, từ đó tạo điều kiện thuận lợi cho bệnh nhân đặt hẹn."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="3. Tối ưu hóa thời gian"
                                    secondary="Chúng tôi sẽ giúp bạn quản lý lịch hẹn một cách hiệu quả, giúp tận dụng thời gian và nguồn lực một cách tốt nhất."
                                />
                            </ListItem>
                        </List>
                    </Box>
                    <Typography variant="h5" component="h2" gutterBottom fontWeight={700}>
                        Hãy chia sẻ thông tin của bạn với chúng tôi:
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Nếu bạn quan tâm đến việc đưa thông tin phòng khám của mình lên Booking Smile, vui lòng liên hệ với chúng tôi tại
                    </Typography>
                    <Box my={4} padding="20px" bgcolor="#FFFFFF" borderRadius="8px">
                        <Typography variant="h5" gutterBottom fontWeight={700}>
                            Form gửi thông tin
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất để thảo luận chi tiết và hỗ trợ bạn trong quá trình này.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Hãy cùng chúng tôi tạo nên một cộng đồng nha khoa đa dạng và chất lượng trên Booking Smile. Cảm ơn bạn đã quan tâm và hợp tác cùng chúng tôi.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Trân trọng,
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Giám Đốc Kinh Doanh – Booking Smile
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Hoàng Việt Đức
                        </Typography>

                        <Box component="form" sx={{ mt: 3 }}>
                            <TextField
                                fullWidth
                                required
                                label="Họ và tên"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                required
                                label="Email"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                required
                                label="Số điện thoại"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                required
                                label="Nội dung"
                                margin="normal"
                                variant="outlined"
                                multiline
                                rows={4}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2 }}
                            >
                                Gửi thông tin
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container >
        </>
    )
}
export default SignRegistration;
