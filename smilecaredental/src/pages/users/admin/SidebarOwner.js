import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Book, CalendarToday, Home, Logout, People } from '@mui/icons-material';

const SidebarOwner = () => {
  const [adminName] = useState('Hoàng Đức');
  const menuItems = [
    { to: '/dashboard', icon: <Home />, text: 'Dash board' },
    { to: '/clinicManagement', icon: <Book />, text: 'Quản lý phòng khám' },
    { to: '/doctor', icon: <People />, text: 'Quản lý bác sĩ' },
    { to: '/patient', icon: <People />, text: 'Quản lý bệnh nhân' },
    { to: '/appointment', icon: <CalendarToday />, text: 'Quản lý lịch khám' },
    { to: '/', icon: <Logout />, text: 'Đăng xuất' }
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
        <Typography variant="h6" sx={{ color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
          Chào mừng admin {adminName}
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
