import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Link, Typography } from '@mui/material';
import { Home, People, Book, CalendarToday, MonetizationOn, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

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
      classes={{
        paper: {
          width: 240, // Adjust width as needed
          backgroundColor: '#000000'
        },
      }}
    >
      <div className="greeting">
        <Typography variant="h6">Chào mừng admin: {adminName}</Typography>
      </div>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemIcon className="listItemIcon"><Home /></ListItemIcon>
            <ListItemText className="listItemText">Dash board</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/clinic">
            <ListItemIcon className="listItemIcon"><Book /></ListItemIcon>
            <ListItemText className="listItemText">Quản lý phòng khám</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/doctor">
            <ListItemIcon className="listItemIcon"><People /></ListItemIcon>
            <ListItemText className="listItemText">Quản lý bác sĩ</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/patient">
            <ListItemIcon className="listItemIcon"><People /></ListItemIcon>
            <ListItemText className="listItemText">Quản lý bệnh nhân</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/appointment">
            <ListItemIcon className="listItemIcon"><CalendarToday /></ListItemIcon>
            <ListItemText className="listItemText">Quản lý lịch hẹn</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/financial">
            <ListItemIcon className="listItemIcon"><MonetizationOn /></ListItemIcon>
            <ListItemText className="listItemText">Quản lý tài chính</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon className="listItemIcon"><Logout /></ListItemIcon>
            <ListItemText className="listItemText">Đăng xuất</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

