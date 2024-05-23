import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../src/components/page/user/login/Login.js";
import HomeLayout from "./components/layout/HomeLayout.js";
import DefaultLayout from "./components/layout/DefaultLayout.js"
import Home from "../src/components/page/guest/Home.js";
import Register from "../src/components/page/guest/Register.js";
import ForgetPassword from "../src/components/page/user/forgetPassword/ForgetPassword.js";
import ForgetPassword2 from "../src/components/page/user/forgetPassword/ForgetPassword2.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        
      </Route>

      <Route element={<DefaultLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />
        <Route path="forgetpassword2" element={<ForgetPassword2 />} />
      </Route>

      {/* 
Chuyển hướng mọi đường dẫn không xác định về nhà */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;
