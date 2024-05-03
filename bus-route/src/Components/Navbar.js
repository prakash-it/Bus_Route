import React from 'react'
import '../Components/Nav.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>

        <div className='container'>
        <h2 className='logo'>Logo</h2>
        <nav className='nav-links'>
        <NavLink className={'nav navitem1'} to='/'>Home</NavLink>
        <NavLink className={'nav navitem2'} to='/about'>About</NavLink>
        <NavLink className={'nav navitem3'} to='/contact'>Contact</NavLink>
      </nav>
      </div>
    </div>
  )
}
