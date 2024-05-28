
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Typography } from '@mui/material';
import { CalendarToday, Logout, AccountCircle, Lock } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const SidebarDentis = () => {
  const navigate = useNavigate();
  const [dentistName] = useState('Hoàng An'); // Mock admin name
  const [selectedItem, setSelectedItem] = useState('/dentisinfo'); // Default selected item

  const handleLogout = () => {
    console.log('User logged out'); // Implement your logout logic
    setSelectedItem('logout');
    navigate('/login'); // Redirect to login page
  };

  const menuItems = [
    { text: 'Thông tin cá nhân', icon: <AccountCircle />, path: '/dentisinfo' },
    { text: 'Tài khoản của tôi', icon: <AccountCircle />, path: '/dentisaccount' },
    { text: 'Thay đổi mật khẩu', icon: <Lock />, path: '/changepassworddentis' },
    { text: 'Xem lịch khám', icon: <CalendarToday />, path: '/dentisappointments' },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#87CEFA',
          color: '#fff',
          width: '270px',
          minHeight: '650px',
          position: 'relative', // Ensure it scrolls with the content
        },
      }}
    >
      <div style={{ padding: '16px', textAlign: 'center', backgroundColor: '#1565C0' }}>
        <Typography variant="h6" sx={{ color: '#ffffff' }}>Bác sĩ: {dentistName}</Typography>
      </div>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={() => setSelectedItem(item.path)}
              sx={{
                '&:hover': { backgroundColor: '#1565C0' },
                backgroundColor: selectedItem === item.path ? '#1565C0' : 'inherit',
              }}
            >
              <ListItemIcon sx={{ color: '#ffffff' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleLogout}
            sx={{
              '&:hover': { backgroundColor: '#1565C0' },
              backgroundColor: selectedItem === 'logout' ? '#1565C0' : 'inherit',
            }}
          >
            <ListItemIcon sx={{ color: '#ffffff' }}><Logout /></ListItemIcon>
            <ListItemText primary="Đăng xuất" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarDentis;
