import React, { useState } from 'react';
import { Typography, TextField, Button, Link, Grid, Box, Container } from '@mui/material';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'oldPassword') {
      setOldPassword(value);
    } else if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement password change logic here (e.g., call API, validation)
    console.log('Submitted password change:', { oldPassword, newPassword });
  };

  return (
    <Container>
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h5" gutterBottom>
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
              error={!!oldPassword && newPassword !== confirmPassword} // Set error if new passwords don't match
              helperText={!!oldPassword && newPassword !== confirmPassword ? 'Mật khẩu mới không khớp' : ''} // Display error message
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
              error={newPassword !== confirmPassword} // Set error if new passwords don't match
              helperText={newPassword !== confirmPassword ? 'Mật khẩu mới không khớp' : ''} // Display error message
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
              error={newPassword !== confirmPassword} // Set error if new passwords don't match
              helperText={newPassword !== confirmPassword ? 'Mật khẩu mới không khớp' : ''} // Display error message
            />
          </Grid>
          <Grid item xs={12}>
            <Link href="/forgot-password" underline="none">
              <Typography variant="body2" color="primary">Quên mật khẩu?</Typography>
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

export default ChangePassword;
