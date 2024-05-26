import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/menu/Header';
import Sidebar from './components/sidebar/Sidebar';
import UserInfo from './components/pages/user/UserInfo';
import ChangePassword from './components/pages/user/ChangePassword';
import Footer from './components/menu/Footer';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box sx={{ display: 'flex', flex: 1, overflow: 'auto' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<Navigate to="/userinfo" />} />
              <Route path="/userinfo" element={<UserInfo />} />
              <Route path="/changepassword" element={<ChangePassword />} />
              {/* Add more routes as needed */}
            </Routes>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;

