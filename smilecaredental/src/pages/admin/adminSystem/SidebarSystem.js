import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { HomeWork, Article, Home, Logout, People } from '@mui/icons-material';
import { logout } from '../../../api/api';

const SidebarSystem = () => {
  const navigate = useNavigate();
  const [adminName] = useState('Hoàng Đức');
  const handleLogout = () => {
    logout();
    navigate('/login'); // Điều hướng về trang đăng nhập sau khi đăng xuất
  };
  const menuItems = [
    { to: '/dashboardsystem', icon: <Home />, text: 'Dash board' },
    { to: '/dentalfacility', icon: <HomeWork />, text: 'Quản lý cơ sở nha khoa' },
    { to: '/accountuser', icon: <People />, text: 'Quản lý tài khoản người dùng' },
    { to: '/newclinic', icon: <Article />, text: 'Quản lý đơn đăng ký phòng khám mới' },
    { icon: <Logout />, text: 'Đăng xuất', onClick: handleLogout }
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        '& .MuiDrawer-paper': {
          backgroundImage: 'linear-gradient(to bottom, #0D47A1, #1565C0)',
          color: '#ffffff',
          width: 300,
          position: 'relative'
        },
      }}
    >
      <div style={{ padding: '16px', textAlign: 'center', backgroundColor: '#1565C0', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h6" sx={{ color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
          Chào mừng admin: {adminName}
        </Typography>
      </div>
      <List>
        {menuItems.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton
              component={Link}
              to={item.to}
              sx={{
                '&:hover': { backgroundColor: '#1976D2' },
                '& .MuiListItemIcon-root': { color: '#ffffff' }
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SidebarSystem;
