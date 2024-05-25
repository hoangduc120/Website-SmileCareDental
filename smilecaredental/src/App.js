/* The following line can be included in your src/index.js or App.js file */
import './App.css';
import Home from './pages/users/homePage/Home.js'
import { BrowserRouter, Route, Routes, Navigate, } from 'react-router-dom';
// import RouterCustom from './Router';
import Header from './components/layout/Header.js';
import Price from './pages/users/homePage/Price.js';
import Introduce from './pages/users/homePage/Introduce.js';
import Service from './pages/users/homePage/Service.js';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton.js';
import Login from "./pages/users/login/Login.js";

import DefaultLayout from "./components/layout/DefaultLayout.js"
import Register from "./pages/guest/Register.js";
import ForgetPassword from "./pages/users/login/ForgetPassword.js";
import ForgetPassword2 from "./pages/users/login/ForgetPassword2.js";

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
            </Route>
            <Route element={<DefaultLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgetpassword" element={<ForgetPassword />} />
              <Route path="forgetpassword2" element={<ForgetPassword2 />} />
              {/*  Chuyển hướng mọi đường dẫn không xác định về nhà */}
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ScrollToTopButton />
      </header>
    </div>
  );
}

export default App;
