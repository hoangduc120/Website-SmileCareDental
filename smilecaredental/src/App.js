import React from 'react';
import UserInfo from './components/pages/user/UserInfo';
import ChangePassword from './components/pages/user/ChangePassword';
import ViewAppointments from './components/pages/user/ViewAppointments';
import MyAccount from './components/pages/user/MyAccount';
import Doctors from "./pages/users/booking/Doctors.js";
import Home from './pages/users/homepage/Home.js'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Price from './pages/users/homepage/Price.js';
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
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/price" element={<Price />} />
            <Route path="/home" element={<Home />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/service" element={<Service />} />
            <Route path="/sign" element={<SignRegistration />} />
            <Route path="/brand" element={<Brand />} />
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
            <Route path="/" element={<Navigate to="/home" />} />
          </Route>

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ScrollToTopButton />
      </BrowserRouter>
    </div>
  );
};

export default App;