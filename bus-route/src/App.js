
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contect from './Components/Contect';
import Navbar from './Components/Navbar';
import Signin from './Components/Signin';
import Admintable from './Components/Admintable';


function App() {
  return (
    <div className="App">
    {/* <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contect/>}/> 
  <Route  path='/signin' element={<Signin/>}/> 
 </Routes>
  */}
  

 <Admintable/>
    </div>
  );
}

export default App;
