
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contect from './Components/Contect';
import Navbar from './Components/Navbar';
import Admin from './Components/Admin';



function App() {
  return (
    <div className="App">
    <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contect/>}/> 
 </Routes>
 <Admin/>
    </div>
  );
}

export default App;
