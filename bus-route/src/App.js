
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

 



<Auth>
 <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}>
  </Route>
  <Route path='/Filter' element={<Requiredauth>
    <Filter/>
    </Requiredauth>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contect/>}/> 
  <Route  path='/signin' element={<Signin/>}/>
  <Route path='/login' element={<Login/>}/>
 </Routes>
 {/* <Admin/>
 <Admintable/> */}
 </Auth>

    </div>
  );
}

export default App;
