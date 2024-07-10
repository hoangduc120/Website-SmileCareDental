import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './authContext/AuthContext.js';
import ProtectedRoute from './protecedRouted/ProtectedRoute.js'
import MainLayout from './components/layout/MainLayout.js';
import Home from './pages/users/homepage/Home.js'
import Service from './pages/users/homepage/Service.js';
import SignRegistration from './pages/users/homepage/SignRegistration.js';
import Introduce from './pages/users/homepage/Introduce.js';
import ClinicManagement from './pages/admin/clinicOwner/ClinicManagement.js';
import DoctorManagement from './pages/admin/clinicOwner/DoctorManagement.js';
import PatientManagement from './pages/admin/clinicOwner/PatientManegement.js';
import AppointmentManagement from './pages/admin/clinicOwner/AppoinmentManagement.js';
import Dashboard from './pages/admin/clinicOwner/Dashboard.js';
import UserInfo from './pages/users/profile/UserInfo.js';
import ViewAppointments from './pages/users/profile/ViewAppointments';
import MyAccount from './pages/users/profile/MyAccount';
import Doctors from "./pages/users/booking/Doctors.js";
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton.js';
import Brand from './pages/users/homepage/Brand.js';
import Login from "./pages/users/login/Login.js";
import Register from "./pages/guest/Register.js";
import ForgetPassword from "./pages/users/login/ForgetPassword.js";
import ForgetPassword2 from "./pages/users/login/ForgetPassword2.js";
import Clinics from "./pages/users/booking/Clinics.js";
import Booking from "./pages/users/booking/Booking.js";
import DentalFacility from './pages/admin/adminSystem/DentalFacility.js';
import AccountUser from './pages/admin/adminSystem/AccountUser.js';
import NewClinic from './pages/admin/adminSystem/NewClinic.js';
import DashboardSystem from './pages/admin/adminSystem/DashboardSystem.js';
import NotAuthorized from './NotAuthorized.js'
import DoctorAccount from './pages/doctor/DoctorAccount.js';
import DoctorInfo from './pages/doctor/DoctorInfo.js';
import ViewPatientList from './pages/doctor/ViewPatienList.js';
import ViewScheduleAppointment from './pages/doctor/ViewScheduleAppointment.js';
import ExaminationResult from './pages/users/profile/ExaminationResult.js';
function App() {
  return (
    <div className="App">
      <AuthProvider>
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

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
              <Route path="/forgetpassword2" element={<ForgetPassword2 />} />

              <Route path="/book-appointment/:doctorId" element={<Booking />} />
              {/* DOCTOR */}
              <Route element={<ProtectedRoute roles={[3]} />}>
                <Route path="/doctoraccount" element={<DoctorAccount />} />
                <Route path="/doctorinfo" element={<DoctorInfo />} />
                <Route path="/viewpatienlist" element={<ViewPatientList />} />
                <Route path="/viewscheduleappointment" element={<ViewScheduleAppointment />} />
                <Route path="/examinationresult" element={<ExaminationResult />} />
              </Route>
              {/* USER */}
              <Route element={<ProtectedRoute roles={[2]} />}>
                <Route path="/userinfo" element={<UserInfo />} />
                <Route path="/myaccount" element={<MyAccount />} />
                <Route path="/viewappointments" element={<ViewAppointments />} />
              </Route>
              {/* CLINIC OWNER */}
              <Route element={<ProtectedRoute roles={[4]} />}>
                <Route path="/dashboardclinic" element={<Dashboard />} />
                <Route path="/clinicmanagement" element={<ClinicManagement />} />
                <Route path="/doctor" element={<DoctorManagement />} />
                <Route path="/patient" element={<PatientManagement />} />
                <Route path="/appointment" element={<AppointmentManagement />} />
              </Route>
              {/* ADMIN SYSTEM  */}
              <Route element={<ProtectedRoute roles={[1]} />}>
                <Route path="/dentalfacility" element={<DentalFacility />} />
                <Route path="/accountuser" element={<AccountUser />} />
                <Route path="/newclinic" element={<NewClinic />} />
                <Route path="/dashboardsystem" element={<DashboardSystem />} />
              </Route>
              <Route path="/" element={<Navigate to="/home" />} />
            </Route>

            {/* Redirect unknown routes to home */}
            <Route path="/not-authorized" element={<NotAuthorized />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <ScrollToTopButton />
        </BrowserRouter>
      </AuthProvider>
    </div>

  );
};

export default App;

