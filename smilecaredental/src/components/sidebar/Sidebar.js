import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Typography } from '@mui/material';
import { Home, People, Book, CalendarToday, MonetizationOn, Logout } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [adminName] = useState('Hoàng Đức'); // Mock admin name

  const handleLogout = () => {
    // Implement your logout logic here (e.g., local storage)
    console.log('User logged out'); // Replace with your logic
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
        },
      }}
    >
      <div className="greeting" style={{ padding: '16px', textAlign: 'center', backgroundColor: '#1565C0' }}>
        <Typography variant="h6" sx={{ color: '#ffffff' }}>Chào mừng admin {adminName}</Typography>
      </div>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard" sx={{ '&:hover': { backgroundColor: '#1976D2' } }}>
            <ListItemIcon sx={{ color: '#ffffff' }}><Home /></ListItemIcon>
            <ListItemText primary="Dash board" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/clinic" sx={{ '&:hover': { backgroundColor: '#1976D2' } }}>
            <ListItemIcon sx={{ color: '#ffffff' }}><Book /></ListItemIcon>
            <ListItemText primary="Quản lý phòng khám" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/doctor" sx={{ '&:hover': { backgroundColor: '#1976D2' } }}>
            <ListItemIcon sx={{ color: '#ffffff' }}><People /></ListItemIcon>
            <ListItemText primary="Quản lý bác sĩ" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/patient" sx={{ '&:hover': { backgroundColor: '#1976D2' } }}>
            <ListItemIcon sx={{ color: '#ffffff' }}><People /></ListItemIcon>
            <ListItemText primary="Quản lý bệnh nhân" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/appointment" sx={{ '&:hover': { backgroundColor: '#1976D2' } }}>
            <ListItemIcon sx={{ color: '#ffffff' }}><CalendarToday /></ListItemIcon>
            <ListItemText primary="Quản lý lịch hẹn" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/financial" sx={{ '&:hover': { backgroundColor: '#1976D2' } }}>
            <ListItemIcon sx={{ color: '#ffffff' }}><MonetizationOn /></ListItemIcon>
            <ListItemText primary="Quản lý tài chính" />
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
