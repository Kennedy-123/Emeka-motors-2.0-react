import React from 'react';
import '../css/input.css';
import { NavLink, Link,Outlet } from 'react-router-dom';
import logo from '../images/logo.png';
import '../css/index.css';
import 'animate.css'

function NavBar() {
  return (
    <nav className=" p-2">
      <Link to={"/"}><img src={logo} alt="" className="w-28 animate__animated animate__rotateIn" /></Link>
      <ul className="p-6 gap-6 flex">
        <li>
          <NavLink to="/" className='Navlinks'>Home</NavLink>
        </li>
        <li>
          <NavLink to="About" className='Navlinks'>About</NavLink>
        </li>
        <li>
          <NavLink to="Cars" className='Navlinks'>Cars</NavLink>
        </li>
        <li>
          <NavLink to="Contact" className='Navlinks'>Contact</NavLink>
        </li>
        <NavLink to='contact'/>
      </ul>
      <Outlet />
    </nav>
  );
}

export default NavBar;
