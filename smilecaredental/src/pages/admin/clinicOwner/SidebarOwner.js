import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Typography, Stack, Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { CalendarToday, Home, Logout, People } from '@mui/icons-material';
import { logout } from '../../../api/api';

const SidebarOwner = () => {
  const navigate = useNavigate();
  const [adminName] = useState('SmileCare Center');
  const handleLogout = () => {
    logout();
    navigate('/login'); // Điều hướng về trang đăng nhập sau khi đăng xuất
  };
  const menuItems = [
    { to: '/dashboardclinic', icon: <Home />, text: 'Dash board' },
    { to: '/doctor', icon: <People />, text: 'Quản lý bác sĩ' },
    { to: '/patient', icon: <People />, text: 'Quản lý bệnh nhân' },
    { to: '/appointment', icon: <CalendarToday />, text: 'Quản lý lịch khám' },
    { to: '/appointmentfilter', icon: <CalendarToday />, text: 'Xét duyệt lịch hẹn' },
    { to: '/createappoinment', icon: <CalendarToday />, text: 'Tạo lịch khám' },
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
          width: 240,
          position: 'relative'
        },
      }}
    >
      <div style={{ padding: '16px', textAlign: 'center', backgroundColor: '#1565C0', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <Stack direction="row" style={{ justifyContent: 'center' }}>
          <Avatar alt="Remy Sharp" sx={{ width: 80, height: 80 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-WLohO5b-vvwezUCKexd-DF5VxCPoooWD8e2SyQYMcy5HCpOf6Del4A7rCO-cFM4J8s&usqp=CAU" />
        </Stack>
        <Typography variant="h6" sx={{ color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
          Nha khoa {adminName}
        </Typography>
      </div>

      <List>
        {menuItems.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton
              component={item.to ? Link : 'div'}
              to={item.to}
              onClick={item.onClick}
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

export default SidebarOwner;
