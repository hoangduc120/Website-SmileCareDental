// import React, { Component } from 'react';
// import { Box, Button, TextField, Typography, List, ListItem, ListItemText, Divider, FormControl, InputLabel, Select, MenuItem, ListItemButton } from '@mui/material';
// import { Link, Route, Routes } from 'react-router-dom';


// const Profile = ({ customer }) => (
//   <Box>
//     <Typography variant="h5">Thông tin khách hàng</Typography>
//     <TextField label="Tên đăng nhập" value={customer.userName} fullWidth margin="normal" InputProps={{ readOnly: true }} />
//     <TextField label="Họ và tên" value={customer.fullName} fullWidth margin="normal" InputProps={{ readOnly: true }} />
//     <TextField label="Ngày sinh" value={customer.dateOfBirth} fullWidth margin="normal" type="date" InputLabelProps={{ shrink: true }} InputProps={{ readOnly: true }} />
//     <FormControl fullWidth margin="normal">
//       <InputLabel>Giới tính</InputLabel>
//       <Select value={customer.sex} inputProps={{ readOnly: true }}>
//         <MenuItem value="Nam">Nam</MenuItem>
//         <MenuItem value="Nữ">Nữ</MenuItem>
//       </Select>
//     </FormControl>
//     <TextField label="Số điện thoại" value={customer.phoneNumber} fullWidth margin="normal" InputProps={{ readOnly: true }} />
//     <TextField label="Email" value={customer.email} fullWidth margin="normal" InputProps={{ readOnly: true }} />
//     <TextField label="Địa chỉ" value={customer.address} fullWidth margin="normal" InputProps={{ readOnly: true }} />
//   </Box>
// );

// const ChangePassword = () => (
//   <Box>
//     <Typography variant="h5">Thay đổi mật khẩu</Typography>
//     <TextField label="Mật khẩu cũ" fullWidth margin="normal" type="password" />
//     <Button variant="text">Quên mật khẩu ?</Button>
//     <TextField label="Mật khẩu mới" fullWidth margin="normal" type="password" />
//     <TextField label="Xác nhận lại mật khẩu" fullWidth margin="normal" type="password" />
//     <Button variant="contained">Thay đổi</Button>
//   </Box>
// );

// export default class ProfileUser extends Component {
//   state = {
//     customer: {
//       userName: 'doantruong',
//       fullName: 'Đoàn Trường',
//       dateOfBirth: '2003-08-15',
//       sex: 'Nam',
//       phoneNumber: '1234567890',
//       email: 'truong@example.com',
//       address: 'Dĩ An, Bình Dương',
//     }
//   };

//   render() {
//     const { customer } = this.state;

//     return (

//         <Box display="flex" border="1px solid #000000" borderRadius=" 10px" margin="40px 40px">
//           <Box width="250px" borderRight="1px solid #ddd" p={2} bgcolor="#2098e6" height="100%" textAlign="center">
//             <Typography variant="h5">{customer.fullName}</Typography>
//             <List component="nav">
//               <ListItem disablePadding>
//                 <ListItemButton component={Link} to="/profile">
//                   <ListItemText primary="Thông tin khách hàng" style={{ color: '#fff' }}/>
//                 </ListItemButton>
//               </ListItem>
//               <ListItem disablePadding>
//                 <ListItemButton component={Link} to="/change-password">
//                   <ListItemText primary="Thay đổi mật khẩu" style={{ color: '#fff' }}/>
//                 </ListItemButton>
//               </ListItem>
//               <Divider />
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemText primary="Xem lịch khám" style={{ color: '#fff' }}/>
//                 </ListItemButton>
//               </ListItem>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemText primary="Đăng xuất" style={{ color: '#fff' }}/>
//                 </ListItemButton>
//               </ListItem>
//             </List>
//           </Box>
//           <Box flex="1" p={3}>
//             <Routes>
//               <Route path="/profile" element={<Profile customer={customer} />} />
//               <Route path="/change-password" element={<ChangePassword />} />
//             </Routes>
//           </Box>
//         </Box>

//     );
//   }
// }


import React, { Component } from 'react';
import { Box, Button, TextField, Typography, List, ListItem, ListItemText, Divider, FormControl, InputLabel, Select, MenuItem, ListItemButton } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';

const Profile = ({ customer }) => (
  <Box>
    <Typography variant="h5">Thông tin khách hàng</Typography>
    <TextField label="Tên đăng nhập" value={customer.userName} fullWidth margin="normal" InputProps={{ readOnly: true }} />
    <TextField label="Họ và tên" value={customer.fullName} fullWidth margin="normal" InputProps={{ readOnly: true }} />
    <TextField label="Ngày sinh" value={customer.dateOfBirth} fullWidth margin="normal" type="date" InputLabelProps={{ shrink: true }} InputProps={{ readOnly: true }} />
    <FormControl fullWidth margin="normal">
      <InputLabel>Giới tính</InputLabel>
      <Select value={customer.sex} inputProps={{ readOnly: true }}>
        <MenuItem value="Nam">Nam</MenuItem>
        <MenuItem value="Nữ">Nữ</MenuItem>
      </Select>
    </FormControl>
    <TextField label="Số điện thoại" value={customer.phoneNumber} fullWidth margin="normal" InputProps={{ readOnly: true }} />
    <TextField label="Email" value={customer.email} fullWidth margin="normal" InputProps={{ readOnly: true }} />
    <TextField label="Địa chỉ" value={customer.address} fullWidth margin="normal" InputProps={{ readOnly: true }} />
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

export default class ProfileUser extends Component {
  state = {
    customer: {
      userName: 'doantruong',
      fullName: 'Đoàn Trường',
      dateOfBirth: '2003-08-15',
      sex: 'Nam',
      phoneNumber: '1234567890',
      email: 'truong@example.com',
      address: 'Dĩ An, Bình Dương',
    }
  };

  render() {
    const { customer } = this.state;

    return (
      <Box display="flex" border="1px solid #000000" borderRadius="10px" margin="40px 40px">
        <Box width="250px" borderRight="1px solid #ddd" p={2} bgcolor="#2098e6" height="100%" textAlign="center">
          <Typography variant="h5">{customer.fullName}</Typography>
          <List component="nav">
            <ListItem disablePadding>
              <ListItemButton component={Link} to="profile">
                <ListItemText primary="Thông tin khách hàng" style={{ color: '#fff' }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="change-password">
                <ListItemText primary="Thay đổi mật khẩu" style={{ color: '#fff' }} />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Xem lịch khám" style={{ color: '#fff' }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Đăng xuất" style={{ color: '#fff' }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box flex="1" p={3}>
          <Routes>
            <Route path="profile" element={<Profile customer={customer} />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Routes>
        </Box>
      </Box>
    );
  }
}
