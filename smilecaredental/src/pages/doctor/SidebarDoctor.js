
import React, { useEffect, useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Typography } from '@mui/material';
import { CalendarToday, Logout, AccountCircle } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../api/api';

const SidebarDoctor = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [selectedItem, setSelectedItem] = useState('/doctorinfo'); // Default selected item

  useEffect(() => {
    const name = localStorage.getItem('name');
    setUserName(name);
  }, []);


  const handleLogout = () => {
    logout();
    navigate('/login'); // Điều hướng về trang đăng nhập sau khi đăng xuất
  };

  const menuItems = [
    { text: 'Tài khoản của tôi', icon: <AccountCircle />, path: '/doctoraccount' },
    { text: 'Xem lịch hẹn', icon: <CalendarToday />, path: '/viewscheduleappointment' },
    { text: 'Danh sách bệnh nhân', icon: <CalendarToday />, path: '/viewpatienlist' },
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
        <Typography variant="h6" sx={{ color: '#ffffff' }}>Bác sĩ: {userName}</Typography>
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

export default SidebarDoctor;
