import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { menuItems } from './MenuItems';
const Sidebar = () => {
  const [adminName] = useState('Hoàng Đức'); // Mock admin name

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
        {menuItems.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton
              component={item.to ? Link : 'div'}
              to={item.to}
              onClick={item.onClick}
              sx={{ '&:hover': { backgroundColor: '#1976D2' } }}
            >
              <ListItemIcon sx={{ color: '#ffffff' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
