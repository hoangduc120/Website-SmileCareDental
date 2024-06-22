import { Box, Button, Container, List, ListItem, ListItemText, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SignRegistration() {

    const initialValues = {
        username: "",
        email: "",
        phoneNumber: "",
        content: "",
    }
    const onSubmit = (values, props) => {
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Vui lòng nhập tên của bạn"),
        email: Yup.string().email('Hãy nhập định dạng emai!').required("Không để trống!"),
        phoneNumber: Yup
            .string()
            .matches(/^[0-9]+$/, "Số điện thoại chỉ chứa các số")
            .length(10, "Số điện thoại phải có ít nhất 10 chữ số")
            .required("Vui lòng nhập số điện thoại"),
        content: Yup.string().required("Hãy nhập nội dung"),

    });


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
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>
                                <Stack spacing={4} padding={'50px'}>
                                    <Field as={TextField} fullWidth name="username" label='Nhập tên tài khoản'
                                        placeholder="hoangduc" helperText={<ErrorMessage name="username" component="span" style={{ color: 'red' }} />} />
                                    <Field as={TextField} fullWidth name="email" label='Nhập email của bạn'
                                        placeholder="hoangduc@example.com" helperText={<ErrorMessage name="email" component="span" style={{ color: 'red' }} />} />
                                    <Field as={TextField} fullWidth name="phoneNumber" label='Nhập sđt của bạn'
                                        placeholder="Nhập sđt của bạn" helperText={<ErrorMessage name="phoneNumber" component="span" style={{ color: 'red' }} />} />
                                    <Field as={TextField} fullWidth name='content' multiline
                                        label='Nội dung' placeholder="Nhập nội dung"
                                        helperText={<ErrorMessage name="content" component="span" style={{ color: 'red' }} />} />
                                    <Button variant="contained">Đăng Ký Ngay</Button>
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Container >
        </>
    )
}
export default SignRegistration;
