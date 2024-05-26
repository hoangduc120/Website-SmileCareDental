// import React, { useState } from 'react';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Typography } from '@mui/material';
// import {CalendarToday, Logout, AccountCircle, Lock } from '@mui/icons-material';
// import { Link, useNavigate } from 'react-router-dom';

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [userName] = useState('Hoàng Đức'); // Mock admin name

//   const handleLogout = () => {
//     // Implement your logout logic here (e.g., local storage)
//     console.log('User logged out'); // Replace with your logic
//     navigate('/login'); // Redirect to login page
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       anchor="left"
//       sx={{
//         '& .MuiDrawer-paper': {
//           backgroundColor: '#0D47A1', // Primary dark blue background color
//           color: '#ffffff', // White text color
//           width: 240, // Set drawer width
//         },
//       }}
//     >
//       <div className="greeting" style={{ padding: '16px', textAlign: 'center', backgroundColor: '#1565C0' }}>
//         <Typography variant="h6" sx={{ color: '#ffffff' }}>Khách hàng: {userName}</Typography>
//       </div>
//       <List>
//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/userinfo" sx={{ '&:hover': { backgroundColor: '#1976D2' } }}>
//             <ListItemIcon sx={{ color: '#ffffff' }}><AccountCircle /></ListItemIcon>
//             <ListItemText primary="Thông tin khách hàng" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/changepassword" sx={{ '&:hover': { backgroundColor: '#1976D2' } }}>
//             <ListItemIcon sx={{ color: '#ffffff' }}><Lock /></ListItemIcon>
//             <ListItemText primary="Thay đổi mật khẩu" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/" sx={{ '&:hover': { backgroundColor: '#1976D2' } }}>
//             <ListItemIcon sx={{ color: '#ffffff' }}><CalendarToday /></ListItemIcon>
//             <ListItemText primary="Xem lịch khám" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding>
//           <ListItemButton onClick={handleLogout} sx={{ '&:hover': { backgroundColor: '#1976D2' } }}>
//             <ListItemIcon sx={{ color: '#ffffff' }}><Logout /></ListItemIcon>
//             <ListItemText primary="Đăng xuất" />
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Typography } from '@mui/material';
import { CalendarToday, Logout, AccountCircle, Lock } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [userName] = React.useState('Hoàng Đức'); // Mock admin name

  const handleLogout = () => {
    console.log('User logged out'); // Implement your logout logic
    navigate('/login'); // Redirect to login page
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#0D47A1',
          color: '#ffffff',
          width: 240,
          height: '100%', // Adjust height to fit between header and footer
          position: 'relative', // Ensure it scrolls with the content
        },
      }}
    >
      <div style={{ padding: '16px', textAlign: 'center', backgroundColor: '#1565C0' }}>
        <Typography variant="h6" sx={{ color: '#ffffff' }}>Khách hàng: {userName}</Typography>
      </div>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/userinfo" sx={{ '&:hover': { backgroundColor: '#1976D2' } }}>
            <ListItemIcon sx={{ color: '#ffffff' }}><AccountCircle /></ListItemIcon>
            <ListItemText primary="Thông tin khách hàng" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/changepassword" sx={{ '&:hover': { backgroundColor: '#1976D2' } }}>
            <ListItemIcon sx={{ color: '#ffffff' }}><Lock /></ListItemIcon>
            <ListItemText primary="Thay đổi mật khẩu" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="#" sx={{ '&:hover': { backgroundColor: '#1976D2' } }}>
            <ListItemIcon sx={{ color: '#ffffff' }}><CalendarToday /></ListItemIcon>
            <ListItemText primary="Xem lịch khám" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout} sx={{ '&:hover': { backgroundColor: '#1976D2' } }}>
            <ListItemIcon sx={{ color: '#ffffff' }}><Logout /></ListItemIcon>
            <ListItemText primary="Đăng xuất" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

