import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/menu/Header';
import UserInfo from './components/pages/user/UserInfo';
import ChangePassword from './components/pages/user/ChangePassword';
import Footer from './components/menu/Footer';
import Sidebar from './components/pages/user/Sidebar';
import ViewAppointments from './components/pages/user/ViewAppointments';
import MyAccount from './components/pages/user/MyAccount';

const App = () => {
  return (
    <Router>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: '240px' }}>
          <Routes>
            {/* User Routes */}
            <Route path="/userinfo" element={<UserInfo />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/viewappointments" element={<ViewAppointments />} />
            <Route path="/" element={<Navigate to="/userinfo" />} />
          </Routes>
        </Box>
      </Box>
      <Footer />
    </Router >
  );
};

export default App;
