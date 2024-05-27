/* The following line can be included in your src/index.js or App.js file */
import './App.css';
import Home from './pages/users/homepage/Home.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import RouterCustom from './Router';
import Header from './components/Header.js';
import Price from './pages/users/homepage/Price.js';
import Introduce from './pages/users/homepage/Introduce.js';
import Service from './pages/users/homepage/Service.js';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton.js';
import SignRegistration from './pages/users/homepage/SignRegistration.js';
import Brand from './pages/users/homepage/Brand.js';

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
            </Route>

          </Routes>
        </BrowserRouter>
        <ScrollToTopButton />
      </header>
    </div>
  );
}

export default App;
