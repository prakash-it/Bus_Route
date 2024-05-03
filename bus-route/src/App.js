
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contect from './Components/Contect';
import { Navbar } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contect/>}/>  
 </Routes>
    </div>
  );
}

export default App;