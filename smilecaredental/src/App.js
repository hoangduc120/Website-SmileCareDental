/* The following line can be included in your src/index.js or App.js file */
import './App.css';
import Home from './components/page/user/homepage/Home.js'
import { BrowserRouter, Route, Routes, Navigate, } from 'react-router-dom';
// import RouterCustom from './Router';
import Header from './components/Header.js';
import Price from './components/page/user/homepage/Price.js';
import Introduce from './components/page/user/homepage/Introduce.js';
import Service from './components/page/user/homepage/Service.js';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton.js';
import Login from "../src/components/page/user/login/Login.js";
import DefaultLayout from "./components/layout/DefaultLayout.js"
import Register from "../src/components/page/guest/Register.js";
import ForgetPassword from "../src/components/page/user/forgetPassword/ForgetPassword.js";
import ForgetPassword2 from "../src/components/page/user/forgetPassword/ForgetPassword2.js";
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
              <Route path="*" element={<Navigate to="/" />} />   {/* Chuyển hướng mọi đường dẫn không xác định về nhà */}
            </Route>
          </Routes>
          <ScrollToTopButton />
        </BrowserRouter>

      </header>
    </div >
  );
}

export default App;
