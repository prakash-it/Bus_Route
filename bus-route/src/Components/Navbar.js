import React, { useState } from 'react';

import Logo from '../Components/Images/Logo.png'
import '../Components/Nav.css';
import { FaBars } from "react-icons/fa6";

import { Navbar, Nav } from 'react-bootstrap';

import { ImCross } from "react-icons/im";
import { NavLink } from 'react-router-dom';
// import Logo from '../Components/Images/Logo.png';
import '../Components/Nav.css';

export default function MyNavbar() {
  const [mobile, setMobile] = useState(false);

  return (
    <Navbar bg="none" expand="lg" className="text-align-center">
      <Navbar.Brand href="/" className="mr-auto">
        <img src={Logo} alt="Logo" height={70} width={70} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setMobile(!mobile)}>
        {mobile? <ImCross /> : <FaBars />}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className={mobile? 'show' : ''}>
        <Nav className="mx-auto m-2 d-flex justify-content-between">
          <NavLink className=" nav-link " to="/" onClick={() => setMobile(false)}>Home</NavLink>
          <NavLink className=" nav-link " to="/about" onClick={() => setMobile(false)}>About</NavLink>
          <NavLink className=" nav-link " to="/contact" onClick={() => setMobile(false)}>Contact</NavLink>
        </Nav>
        <Nav>
  <button style={{ backgroundColor: 'transparent', border: 'none' }}>
    <NavLink to="/signin" className="bas-bas" onClick={() => setMobile(false)}>Sign Up</NavLink>
  </button>
</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}