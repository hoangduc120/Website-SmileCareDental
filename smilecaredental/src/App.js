/* The following line can be included in your src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import ProfileUser from './components/pages/user/ProfileUser';
// import ProfileDentist from './components/pages/dentist/ProfileDentist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/menu/Header';
import ProfileUser from './components/pages/user/ProfileUser';


function App() {

  return (
    // <div className="App">
    //   <header className="App-header">

    //   </header>

    // </div>
    // <>
    // <ProfileUser/>
    // <ProfileDentist/>    
    // </>
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              {/* <Route path="/Home" element={<Home />} />
              <Route path="/Introduce" element={<Introduce />} />
              <Route path="/Service" element={<Service />} /> */}
            </Route>
            <Route path="/" element={<ProfileUser />} />

          </Routes>
        </BrowserRouter>
      </header>
    </div>

  );
}

export default App;
