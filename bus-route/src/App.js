
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contect from './Components/Contect';
import Navbar from './Components/Navbar';


// import Admin from './Components/Admin';
// import Admintable from './Components/Admintable';

import Signin from './Components/Signin';

import Auth from './Components/Auth';
// import Requiredauth from './Components/Requiredauth';
import Login from './Components/Login';
import Filters from './Components/Filter';
import AdminLogin from './Components/AdminLogin';
import Admin from './Components/Admin';
import Profil from './Components/Profil';
import Filter2 from './Components/Filter2';


function App() {
  return (
    <div className="App">
      <Auth>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contect />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Filter' element={<Filters />} />
          <Route path='/Filter2' element={<Filter2/>}/>
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/profile' element={<Profil/>}/>
        </Routes>
      </Auth>

     
    </div>

  );
}

export default App;
