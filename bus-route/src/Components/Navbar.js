import React, { useState } from 'react';
import '../Components/Nav.css';
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [mobile, setMobile] = useState(false)

  return (
    <div className='navbar'>

      <div className='containerss'>
        <h2 className='logo'>Logo</h2>
        <button className='mobile-menu' onClick={() => setMobile(!mobile)}>
          {mobile ? <FaBars />:<ImCross />}
        </button>
        <nav className={mobile ? 'nav-links-mobile' : 'nav-links'}>
          <NavLink className={'nav navitem1'} to='/' onClick={() => setMobile(false)}>Home</NavLink>
          <NavLink className={'nav navitem2'} to='/about' onClick={() => setMobile(false)}>About</NavLink>
          <NavLink className={'nav navitem3'} to='/contact' onClick={() => setMobile(false)}>Contact</NavLink>
        </nav>


        <div className='container'>
        <h2 className='logo'>Logo</h2>
        <nav className='nav-links'>
        <NavLink className={'nav navitem1'} to='/'>Home</NavLink>
        <NavLink className={'nav navitem2'} to='/about'>About</NavLink>
        <NavLink className={'nav navitem3'} to='/contact'>Contact</NavLink>
      </nav>

      </div>
    </div>
  );
}
