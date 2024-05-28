import React from 'react';
import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from '../pages/user/Sidebar';
import Footer from '../layout/Footer';

const MainLayout = () => {
    const location = useLocation();
    const isUserProfileRoute = ['/userinfo', '/myaccount', '/changepassword', '/viewappointments'].includes(location.pathname);

    return (
        <div>
            <Header />
            <Box sx={{ display: 'flex' }}>
                {isUserProfileRoute && <Sidebar />}
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: isUserProfileRoute ? '240px' : '0' }}>
                    <Outlet />
                </Box>
            </Box>
            <Footer />
        </div>
    );
};

export default MainLayout;
