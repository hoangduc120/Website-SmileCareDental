import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import ClinicManagement from './components/ClinicManagement';
import DoctorManagement from './components/DoctorManagement';
import PatientManagement from './components/PatientManegement';
import AppointmentManagement from './components/AppoinmentManagement';

import Dashboard from './components/Dashboard';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* cho sidebar nó ko bị khuất biểu đồ */}
        <Box sx={{ display: 'flex' }}> 
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: '240px' }}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/clinic" element={<ClinicManagement />} />
              <Route path="/doctor" element={<DoctorManagement />} />
              <Route path="/patient" element={<PatientManagement />} />
              <Route path="/appointment" element={<AppointmentManagement />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
