import React from 'react';
import { Container, Grid, Typography, Box, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #0477CA, #0294FF, #0454CA, #00CFFF)',
        backgroundSize: '200% 200%',
        color: '#fff',
        padding: '40px 0',
        animation: 'gradientAnimation 15s ease infinite, fadeIn 2s ease-in-out'
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={4} sx={{ animation: 'slideInLeft 1.5s ease-out' }}>
            <Typography variant="h5" gutterBottom>Thông tin liên hệ</Typography>
            <Typography variant="body1">Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</Typography>
            <Typography variant="body1">Điện thoại: (012) 345-6789</Typography>
            <Typography variant="body1">Email: smilecaredental@company.com</Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                color="inherit"
                href="https://www.facebook.com/shinichikun120"
                target="_blank"
                sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://instagram.com"
                target="_blank"
                sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://twitter.com"
                target="_blank"
                sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://linkedin.com"
                target="_blank"
                sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ animation: 'slideInUp 1.5s ease-out' }}>
            <Typography variant="h5" gutterBottom>Về chúng tôi</Typography>
            <Typography variant="body1">Chúng tôi là hệ thống nha khoa hàng đầu, cung cấp các dịch vụ chăm sóc răng miệng chất lượng cao với đội ngũ bác sĩ chuyên nghiệp và trang thiết bị hiện đại.</Typography>
          </Grid>
          <Grid item xs={4} sx={{ animation: 'slideInRight 1.5s ease-out' }}>
            <Typography variant="h5" gutterBottom>Chính sách</Typography>
            <Link href="#" color="inherit" variant="body1" display="block" underline="hover" sx={{ transition: 'color 0.3s', '&:hover': { color: '#ffcc00' } }}>Chính sách bảo mật</Link>
            <Link href="#" color="inherit" variant="body1" display="block" underline="hover" sx={{ transition: 'color 0.3s', '&:hover': { color: '#ffcc00' } }}>Chính sách đổi trả</Link>
            <Link href="#" color="inherit" variant="body1" display="block" underline="hover" sx={{ transition: 'color 0.3s', '&:hover': { color: '#ffcc00' } }}>Điều khoản sử dụng</Link>
          </Grid>
        </Grid>
        <Divider/>
        <Typography variant="body2" color="inherit" align="center" sx={{ mt: 4, animation: 'fadeIn 1.5s ease-in-out' }}>
          © 2024 Hệ thống Nha Khoa. All rights reserved.
        </Typography>
      </Container>
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes slideInLeft {
            0% { transform: translateX(-100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInUp {
            0% { transform: translateY(100%); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes slideInRight {
            0% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
};

export default Footer;

