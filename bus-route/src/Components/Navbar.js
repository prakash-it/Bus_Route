import React, { useState } from 'react';

import Logo from '../Components/Images/Logo.png'
import '../Components/Nav.css';

import { FaBars } from "react-icons/fa6";

import { Nav } from 'react-bootstrap';

import { ImCross } from "react-icons/im";
import { NavLink } from 'react-router-dom';
// import Logo from '../Components/Images/Logo.png';
import '../Components/Nav.css';
import Navbar from 'react-bootstrap/Navbar';
import  { useAuth } from './Auth';

export default function MyNavbar() {
  const [mobile, setMobile] = useState(false);
  const auth =useAuth()
  // window.onscroll = function() {myFucntion()};

  // var navbar = document.getElementById('navBarMainDiv')
  // var sticky = navbar.offsetTop;

  // function myFucntion(){
  //   if(window.pageYOffset>=sticky){
  //     navbar.classList.add('sticky')
  //   }else{
  //     navbar.classList.remove('sticky')
  //   }
  // }

  return (
    <div id='navBarMainDiv'>
    <Navbar bg="none" expand="lg" className="text-align-center navbarMain">
      <Navbar.Brand href="/" className="mr-auto">
        <img src={Logo} alt="Logo" height={70} width={70} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setMobile(!mobile)}>
        {mobile ? <ImCross /> : <FaBars />}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className={mobile ? 'show' : ''}>
        <Nav className="mx-auto m-2 d-flex justify-content-between">
          <NavLink className=" nav-link " to="/" onClick={() => setMobile(false)}>Home</NavLink>
          <NavLink className=" nav-link " to="/about" onClick={() => setMobile(false)}>About</NavLink>
          <NavLink className=" nav-link " to="/contact" onClick={() => setMobile(false)}>Contact</NavLink>
        </Nav>
        <Nav>
          <button style={{ backgroundColor: 'transparent', border: 'none' }}>
            {!auth.user?<NavLink to="/signin" className="bas-bas nav-link" onClick={() => setMobile(false)}>Sign Up</NavLink>:<div>
            <NavLink className="nav-link " to="/profile" onClick={()=>setMobile(false)}>{auth.user}</NavLink><span><NavLink className='nav-link' to="/Admin" onClick={()=>setMobile(false)}>Update</NavLink></span>
              </div>}
            {/* {!auth.user?<NavLink to="/signin" className="bas-bas nav-link" onClick={() => setMobile(false)}>Sign Up</NavLink>:<NavLink className="nav-link " to="/profile" onClick={()=>setMobile(false)}>{auth.user}</NavLink>} */}
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}