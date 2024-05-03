
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contect from './Components/Contect';
import Signin from './Components/Signin';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contect/>}/>  
 </Routes>
 <Signin/>
    </div>
  );
}

export default App;
