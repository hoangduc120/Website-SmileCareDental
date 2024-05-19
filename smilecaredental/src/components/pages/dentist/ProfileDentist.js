import React, { Component } from 'react';
import { Box, Button, TextField, Typography, List, ListItem, ListItemText, Divider, FormControl, InputLabel, Select, MenuItem, ListItemButton } from '@mui/material';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';

const Profile = ({ dentist }) => (
  <Box>
    <Typography variant="h5">Thông tin nha sĩ</Typography>
    <TextField label="Tên đăng nhập" value={dentist.userName} fullWidth margin="normal" InputProps={{ readOnly: true }} />
    <TextField label="Họ và tên" value={dentist.fullName} fullWidth margin="normal" InputProps={{ readOnly: true }} />
    <TextField label="Ngày sinh" value={dentist.dateOfBirth} fullWidth margin="normal" type="date" InputLabelProps={{ shrink: true }} InputProps={{ readOnly: true }} />
    <FormControl fullWidth margin="normal">
      <InputLabel>Giới tính</InputLabel>
      <Select value={dentist.sex} inputProps={{ readOnly: true }}>
        <MenuItem value="Nam">Nam</MenuItem>
        <MenuItem value="Nữ">Nữ</MenuItem>
      </Select>
    </FormControl>
    <TextField label="Số điện thoại" value={dentist.phoneNumber} fullWidth margin="normal" InputProps={{ readOnly: true }} />
    <TextField label="Email" value={dentist.email} fullWidth margin="normal" InputProps={{ readOnly: true }} />
    <TextField label="Địa chỉ" value={dentist.address} fullWidth margin="normal" InputProps={{ readOnly: true }} />
  </Box>
);

const ChangePassword = () => (
  <Box>
    <Typography variant="h5">Thay đổi mật khẩu</Typography>
    <TextField label="Mật khẩu cũ" fullWidth margin="normal" type="password" />
    <Button variant="text">Quên mật khẩu ?</Button>
    <TextField label="Mật khẩu mới" fullWidth margin="normal" type="password" />
    <TextField label="Xác nhận lại mật khẩu" fullWidth margin="normal" type="password" />
    <Button variant="contained">Thay đổi</Button>
  </Box>
);

export default class ProfileDentist extends Component {
  state = {
    dentist: {
      userName: 'hoangandentist',
      fullName: 'Hoàng An',
      dateOfBirth: '2003-01-01',
      sex: 'Nam',
      phoneNumber: '1234567890',
      email: 'hoangan@dentist.com',
      address: 'Dĩ An, Bình Dương',
    }
  };

  render() {
    const { dentist } = this.state;

    return (
      <Router>
        <Box display="flex" border="1px solid #000000" borderRadius=" 10px" margin="40px 40px">
          <Box width="250px" borderRight="1px solid #ddd" p={2} bgcolor="#2098e6" height="100%" textAlign="center">
            <Typography variant="h5">Nha sĩ: {dentist.fullName}</Typography>
            <List component="nav">
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/profiledentist">
                  <ListItemText primary="Thông tin nha sĩ" style={{ color: '#fff' }}/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/change-password">
                  <ListItemText primary="Thay đổi mật khẩu" style={{ color: '#fff' }}/>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Xem lịch khám" style={{ color: '#fff' }}/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Đăng xuất" style={{ color: '#fff' }}/>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          <Box flex="1" p={3}>
            <Routes>
              <Route path="/profiledentist" element={<Profile dentist={dentist} />} />
              <Route path="/change-password" element={<ChangePassword />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    );
  }
}
