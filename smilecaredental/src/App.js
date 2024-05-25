/* The following line can be included in your src/index.js or App.js file */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import ClinicManagement from './components/ClinicManagement';
import DoctorManagement from './components/DoctorManagement';
import PatientManagement from './components/PatientManegement';
import AppointmentManagement from './components/AppoinmentManagement';
import FinancialManagement from './components/FinancialManagement';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/clinic" element={<ClinicManagement />} />
            <Route path="/doctor" element={<DoctorManagement />} />
            <Route path="/patient" element={<PatientManagement />} />
            <Route path="/appointment" element={<AppointmentManagement />} />
            <Route path="/financial" element={<FinancialManagement />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
