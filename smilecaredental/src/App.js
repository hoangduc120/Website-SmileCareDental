/* The following line can be included in your src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProfileUser from './components/pages/user/ProfileUser';
import ProfileDentist from './components/pages/dentist/ProfileDentist';


function App() {

  return (
    // <div className="App">
    //   <header className="App-header">

    //   </header>

    // </div>
    <>
    <ProfileUser/>
    <ProfileDentist/>    
    </>

  );
}

export default App;
