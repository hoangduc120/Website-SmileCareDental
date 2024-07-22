import { Box, Button, Container, List, ListItem, ListItemText, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerClinicRequest } from '../../../api/api';

function SignRegistration() {
    const initialValues = {
        name: "",
        email: "",
        phonenumber: "",
        address: "",
        image: null, // Thêm trường image vào initialValues
    };

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("email", values.email);
            formData.append("phonenumber", values.phonenumber);
            formData.append("address", values.address);
            formData.append("image", values.image);

            // Gọi hàm gửi yêu cầu từ service và xử lý kết quả
            const response = await registerClinicRequest(formData);
            console.log('Response:', response); // In response để kiểm tra

            // Xử lý thành công
            alert("Yêu cầu đăng ký phòng khám đã được gửi thành công!");

            // Reset form và đánh dấu đã xử lý xong
            resetForm();
            setSubmitting(false);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("Đã xảy ra lỗi khi gửi yêu cầu đăng ký phòng khám!");
            setSubmitting(false);
        }
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Vui lòng nhập tên phòng khám"),
        email: Yup.string().email('Hãy nhập định dạng email!').required("Không để trống!"),
        phonenumber: Yup.string()
            .matches(/^[0-9]+$/, "Số điện thoại chỉ chứa các số")
            .length(10, "Số điện thoại phải có ít nhất 10 chữ số")
            .required("Vui lòng nhập số điện thoại"),
        address: Yup.string().required("Vui lòng nhập địa chỉ của phòng khám"),
        image: Yup.string().url().required("Không để trống")
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
                    <Typography variant="body1" gutterBottom>
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
                                    <Field as={TextField} fullWidth name="name" label='Nhập tên phòng khám'
                                        placeholder="Nhập tên phòng khám" helperText={<ErrorMessage name="name" component="span" style={{ color: 'red' }} />} />
                                    <Field as={TextField} fullWidth name="email" label='Nhập email của bạn'
                                        placeholder="Nhập email của bạn" helperText={<ErrorMessage name="email" component="span" style={{ color: 'red' }} />} />
                                    <Field as={TextField} fullWidth name="phonenumber" label='Nhập số điện thoại của bạn'
                                        placeholder="Nhập số điện thoại của bạn" helperText={<ErrorMessage name="phonenumber" component="span" style={{ color: 'red' }} />} />
                                    <Field as={TextField} fullWidth name='address' multiline
                                        label='Nhập địa chỉ của phòng khám' placeholder="Nhập địa chỉ của phòng khám"
                                        helperText={<ErrorMessage name="address" component="span" style={{ color: 'red' }} />} />
                                    <Field as={TextField} fullWidth name="image" label='Nhập url'
                                        placeholder="Nhập link url hình ảnh" helperText={<ErrorMessage name="image" component="span" style={{ color: 'red' }} />} />
                                    <Button variant="contained" type="submit" disabled={props.isSubmitting}>
                                        Đăng Ký Ngay
                                    </Button>
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Container>
        </>
    )
}

export default SignRegistration;
