/* The following line can be included in your src/index.js or App.js file */
import React from "react";
import Doctors from "./pages/users/booking/Doctors.js";
import BookingPage from "./pages/users/booking/Booking.js";
import './App.css';
import Home from './pages/users/homepage/Home.js'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/layout/Header.js';
import Price from './pages/users/homepage/Price.js';
import Introduce from './pages/users/homepage/Introduce.js';
import Service from './pages/users/homepage/Service.js';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton.js';
import SignRegistration from './pages/users/homepage/SignRegistration.js';
import Brand from './pages/users/homepage/Brand.js';
import Login from "./pages/users/login/Login.js";
import DefaultLayout from "./components/layout/DefaultLayout.js"
import Register from "./pages/guest/Register.js";
import ForgetPassword from "./pages/users/login/ForgetPassword.js";
import ForgetPassword2 from "./pages/users/login/ForgetPassword2.js";
import Clinics from "./pages/users/booking/Clinics.js";
import Booking from "./pages/users/booking/Booking.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/Price" element={<Price />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Introduce" element={<Introduce />} />
              <Route path="/Service" element={<Service />} />
              <Route path="/sign" element={<SignRegistration />} />
              <Route path="/Brand" element={<Brand />} />
              <Route path="/booking" element={<Doctors />} />
              <Route path="/booking/:index" element={<BookingPage />} />
              <Route path="/clinic" element={<Clinics />} />
              <Route path="/clinic/:id" element={<Doctors />} />
              <Route path="/book-appointment/:doctorId" element={<Booking />} /> {/* Thêm route cho trang đặt lịch */}
            </Route>
            <Route element={<DefaultLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgetpassword" element={<ForgetPassword />} />
              <Route path="forgetpassword2" element={<ForgetPassword2 />} />
              {/*  Chuyển hướng mọi đường dẫn không xác định về nhà */}
              <Route path="*" element={<Navigate to="/" />} />
            </Route >
          </Routes >
    <ScrollToTopButton />
        </BrowserRouter >
      </header >
    </div >

  );
}

export default App;
