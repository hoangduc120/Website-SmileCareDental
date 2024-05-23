import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/menu/Header';
import ProfileUser from './components/pages/user/ProfileUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              {/* <Route path="/Home" element={<Home />} />
              <Route path="/Introduce" element={<Introduce />} />
              <Route path="/Service" element={<Service />} /> */}
              <Route path="/" element={<ProfileUser />} />
            </Route>
            
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
