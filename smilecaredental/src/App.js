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
import DentisInfo from './components/pages/dentist/DentisInfo';
import DentisAccount from './components/pages/dentist/DentisAccount';
import DentisAppointments from './components/pages/dentist/DentisAppointments';
import ChangePasswordDentis from './components/pages/dentist/ChangePasswordDentis';
import SidebarDentis from './components/pages/dentist/SidebarDentis';

const App = () => {
  return (
    <Router>
      {/* <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> */}
        <Header />
        <Box sx={{ display: 'flex', flex: 1, overflow: 'auto' }}>
          {window.location.pathname === '/sidebar' && <Sidebar />}
          {window.location.pathname === '/dentissidebar' && <SidebarDentis />}
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              {/* User Routes */}
              <Route path="/userinfo" element={<UserInfo />} />
              <Route path="/myaccount" element={<MyAccount />} />
              <Route path="/changepassword" element={<ChangePassword />} />
              <Route path="/viewappointments" element={<ViewAppointments />} />

              {/* Dentist Routes */}
              <Route path="/dentisinfo" element={<DentisInfo />} />
              <Route path="/dentisaccount" element={<DentisAccount />} />
              <Route path="/changepassworddentis" element={<ChangePasswordDentis />} />
              <Route path="/dentisappointments" element={<DentisAppointments />} />

              <Route path="/" element={<Navigate to="/userinfo" />} />
            </Routes>
          </Box>
        </Box>
        <Footer />
      {/* </Box> */}
    </Router>
  );
};

export default App;
