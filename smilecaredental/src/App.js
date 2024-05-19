import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/components/page/user/login/Login.js";
import Header from "./components/layout/Layout.js";
import Home from "../src/components/page/guest/Home.js";
import Register from "../src/components/page/guest/Register.js";
import ForgetPassword from "../src/components/page/user/forgetPassword/ForgetPassword.js";
import ForgetPassword2 from "../src/components/page/user/forgetPassword/ForgetPassword2.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="forgetpassword2" element={<ForgetPassword2 />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
