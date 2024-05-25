// // App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Doctors from "./components/page/Doctors";
import BookingPage from "./components/page/Booking";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route để hiển thị trang Doctors */}
        <Route path="/" element={<Doctors />} />
        {/* Route để hiển thị trang BookingPage */}
        <Route path="/booking/:index" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
