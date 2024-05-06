
// import React, { useState } from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { FaBars } from "react-icons/fa";

import React, { useState } from 'react';
import Logo from '../Components/Images/Logo.png'
import '../Components/Nav.css';
<<<<<<< HEAD
=======

>>>>>>> f16301af7179705812135e04b5519b7dfe201464
import { FaBars } from "react-icons/fa6";

import { Navbar, Nav } from 'react-bootstrap';
import { ImCross } from "react-icons/im";
import { NavLink } from 'react-router-dom';
import '../Components/Nav.css';


// import Logo from '../Components/Images/Logo.png'
// import '../Components/Nav.css';
// import { FaBars } from "react-icons/fa6";

// import { ImCross } from "react-icons/im";
// import { NavLink } from 'react-router-dom';
// import '../Components/Nav.css';


export default function MyNavbar() {
  const [mobile, setMobile] = useState(false);

  return (


//     <Navbar bg="light" expand="lg text align-center" >
//         <Navbar.Brand href="/">Logo</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setMobile(!mobile)}>
//           {mobile ? <ImCross /> : <FaBars />}
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav" className={mobile ? 'show' : ''}>
//           <Nav className="mx-auto m-2">
//             <NavLink className='nav-link' to='/' onClick={() => setMobile(false)}>Home</NavLink>
//             <NavLink className='nav-link' to='/about' onClick={() => setMobile(false)}>About</NavLink>
//             <NavLink className='nav-link' to='/contact' onClick={() => setMobile(false)}>Contact</NavLink>
//             <button><NavLink to='/signin' onClick={()=>setMobile(false)}> SignIn</NavLink></button>
//           </Nav>
//         </Navbar.Collapse>
//     </Navbar>


//   );
// }

    <Navbar bg="light" expand="lg text align-center" >
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setMobile(!mobile)}>
          {mobile ? <ImCross /> : <FaBars />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={mobile ? 'show' : ''}>
          <Nav className="mx-auto m-2">
            <NavLink className='nav-link' to='/' onClick={() => setMobile(false)}>Home</NavLink>
            <NavLink className='nav-link' to='/about' onClick={() => setMobile(false)}>About</NavLink>
            <NavLink className='nav-link' to='/contact' onClick={() => setMobile(false)}>Contact</NavLink>
            <button><NavLink to='/signin' onClick={()=>setMobile(false)}> SignIn</NavLink></button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>


  );
}

