import React from 'react';
import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import SidebarProfile from '../../pages/users/profile/SidebarProfile';
import SidebarOwner from '../../pages/admin/clinicOwner/SidebarOwner'
import SidebarSystem from '../../pages/admin/adminSystem/SidebarSystem';
import Footer from '../layout/Footer';
const MainLayout = () => {
    const location = useLocation();
    const isUserProfileRoute = ['/userinfo', '/myaccount', '/changepassword', '/viewappointments'].includes(location.pathname);
    const isClinicRoute = ['/dashboardClinic', '/clinicManagement', '/doctor', '/appointment', '/patient'].includes(location.pathname);
    const isAdminRoute = ['/dashboardsystem', '/newclinic', '/accountuser', '/dentalfacility'].includes(location.pathname);
    const sidebarComponent = isUserProfileRoute ? <SidebarProfile /> : isClinicRoute ? <SidebarOwner /> : isAdminRoute ? <SidebarSystem /> : null;

    return (
        <div>
            <Header />
            <Box sx={{ display: 'flex' }}>
                {sidebarComponent}
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: isUserProfileRoute ? '240px' : '0' }}>
                    <Outlet />
                </Box>
            </Box>
            <Footer />
        </div>
    );
};

export default MainLayout;
