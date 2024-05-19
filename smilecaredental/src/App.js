/* The following line can be included in your src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/users/homepage/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import RouterCustom from './Router';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Homepage />} />
              {/* <Route path="register" element={<null />} />
              <Route path="forgetpassword" element={<null />} />
              <Route path="forgetpassword2" element={<null />} />
              <Route path="login" element={<null />} /> */}
              <Route path="home" element={<Homepage />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
