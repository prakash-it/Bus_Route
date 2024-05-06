
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contect from './Components/Contect';
import Navbar from './Components/Navbar';

import Filter from './Components/Filter';
// import Admin from './Components/Admin';
// import Admintable from './Components/Admintable';

import Signin from './Components/Signin';

import Auth from './Components/Auth';
// import Requiredauth from './Components/Requiredauth';
import Login from './Components/Login';
import Filter from './Components/Filter';


function App() {
  return (
    <div className="App">

 
    
    



<Auth>
 <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contect/>}/> 
  <Route  path='/signin' element={<Signin/>}/> 
<Route path='/Login' element={<Login/>}/>
 <Route path='/Filter' element={<Filter/>}/> 
 </Routes>
</Auth>
<Signin/>



    </div>
  );
}

export default App;
