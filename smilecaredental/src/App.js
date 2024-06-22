import './App.css';
import ClinicManagement from './pages/users/clinicOwner/ClinicManagement.js';
import DoctorManagement from './pages/users/clinicOwner/DoctorManagement.js';
import PatientManagement from './pages/users/clinicOwner/PatientManegement.js';
import AppointmentManagement from './pages/users/clinicOwner/AppoinmentManagement.js';
import Dashboard from './pages/users/clinicOwner/Dashboard.js';
import React from 'react';
import UserInfo from './pages/users/profile/UserInfo.js';
import ChangePassword from './pages/users/profile/ChangePassword';
import ViewAppointments from './pages/users/profile/ViewAppointments';
import MyAccount from './pages/users/profile/MyAccount';
import Doctors from "./pages/users/booking/Doctors.js";
import Home from './pages/users/homepage/Home.js'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Introduce from './pages/users/homepage/Introduce.js';
import Service from './pages/users/homepage/Service.js';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton.js';
import SignRegistration from './pages/users/homepage/SignRegistration.js';
import Brand from './pages/users/homepage/Brand.js';
import Login from "./pages/users/login/Login.js";
import Register from "./pages/guest/Register.js";
import ForgetPassword from "./pages/users/login/ForgetPassword.js";
import ForgetPassword2 from "./pages/users/login/ForgetPassword2.js";
import Clinics from "./pages/users/booking/Clinics.js";
import Booking from "./pages/users/booking/Booking.js";
import MainLayout from './components/layout/MainLayout.js';
import DentalFacility from './pages/users/adminSystem/DentalFacility.js';
import AccountUser from './pages/users/adminSystem/AccountUser.js';
import NewClinic from './pages/users/adminSystem/NewClinic.js';
import DashboardSystem from './pages/users/adminSystem/DashboardSystem.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
           
            <Route path="/home" element={<Home />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/service" element={<Service />} />
            <Route path="/sign" element={<SignRegistration />} />
            <Route path="/brand/:id" element={<Brand />} />
            <Route path="/clinic" element={<Clinics />} />
            <Route path="/clinic/:id" element={<Doctors />} />
            <Route path="/book-appointment/:doctorId" element={<Booking />} />
            <Route path="/userinfo" element={<UserInfo />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/viewappointments" element={<ViewAppointments />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/forgetpassword2" element={<ForgetPassword2 />} />
            
            <Route path="/book-appointment/:doctorId" element={<Booking />} /> 
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clinicManagement" element={<ClinicManagement />} />
            <Route path="/doctor" element={<DoctorManagement />} />
            <Route path="/patient" element={<PatientManagement />} />
            <Route path="/appointment" element={<AppointmentManagement />} />
            {/* ADMIN SYSTEM  */}
            <Route path="/dentalfacility" element={<DentalFacility />} />
            <Route path="/accountuser" element={<AccountUser />} />
            <Route path="/newclinic" element={<NewClinic />} />
            <Route path="/dashboardsystem" element={<DashboardSystem />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Route>

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <ScrollToTopButton />
        {/* commit */}
      </BrowserRouter>
    </div>

  );
};

export default App;

