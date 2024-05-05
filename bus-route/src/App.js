
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contect from './Components/Contect';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';

import Admin from './Components/Admin';


import Signin from './Components/Signin';
import Admintable from './Components/Admintable';
import Auth from './Components/Auth';
import Requiredauth from './Components/Requiredauth';
import Login from './Components/Login';



function App() {
  return (
    <div className="App">


    <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contect/>}/> 
  <Route  path='/signin' element={<Signin/>}/> 

 </Routes>






  
 


    </div>
  );
}

export default App;
