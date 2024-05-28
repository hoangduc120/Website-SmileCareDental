import React, { useState } from 'react';
import { Typography, TextField, Button, Link, Grid, Box, Container } from '@mui/material';

const ChangePasswordDentis = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const minLength = 4;
  const maxLength = 20;

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Limit input length
    if (value.length <= maxLength) {
      if (name === 'oldPassword') {
        setOldPassword(value);
      } else if (name === 'newPassword') {
        setNewPassword(value);
      } else if (name === 'confirmPassword') {
        setConfirmPassword(value);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check password length before logic
    if (newPassword.length < minLength || newPassword.length > maxLength) {
      alert(`Mật khẩu mới phải dài từ ${minLength} đến ${maxLength} ký tự.`);
      return;
    }
    // Implement password change logic here (e.g., call API, validation)
    console.log('Submitted password change:', { oldPassword, newPassword });
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom style={{ color:'#0477CA', display:'flex', justifyContent:'center', fontWeight:'400', margin:'0 0 60px 0'}}>
          Thay đổi mật khẩu
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Mật khẩu cũ"
                type="password"
                name="oldPassword"
                value={oldPassword}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mật khẩu mới"
                type="password"
                name="newPassword"
                value={newPassword}
                onChange={handleChange}
                required
                fullWidth
                error={newPassword.length > 0 && (newPassword.length < minLength || newPassword.length > maxLength || newPassword === oldPassword )}
                helperText={
                  newPassword.length > 0
                    ? newPassword.length < minLength
                      ? `Mật khẩu mới phải ít nhất ${minLength} ký tự`
                      : newPassword.length > maxLength
                        ? `Mật khẩu mới không được quá ${maxLength} ký tự`
                        : newPassword === oldPassword
                          ? 'Mật khẩu mới không được trùng với mật khẩu cũ'
                            : ''
                    : ''
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Xác nhận mật khẩu mới"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                required
                fullWidth
                error={confirmPassword.length > 0 && newPassword !== confirmPassword}
                helperText={confirmPassword.length > 0 && newPassword !== confirmPassword ? 'Mật khẩu mới không khớp' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <Link href="/forgot-password" underline="none">
                <Typography variant="body2" color="primary">
                  Quên mật khẩu?
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button type="submit" variant="contained" color="primary">
                Xác nhận thay đổi
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default ChangePasswordDentis;
