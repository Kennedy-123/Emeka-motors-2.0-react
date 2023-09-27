import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import myLogo from '../images/my logo.png';

function Footer() {
  return (
    <footer>
      <ul className="footer-link flex gap-6 place-content-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="About">About</Link>
        </li>
        <li>
          <Link to="Cars">Cars</Link>
        </li>
        <li>
          <Link to="Contact">Contact</Link>
        </li>
      </ul>

      <div className="footer-icons flex gap-6 place-content-center mt-3 text-2xl">
        <Link className="instagram-icon" to={'https://www.instagram.com/okolochidera223/'}>
          <FaInstagram className='icon'></FaInstagram>
        </Link>
        <Link className="email-icon" to={'mailto:okolochidera223@gmail.com'}>
          <FaEnvelope className='icon'></FaEnvelope>
        </Link>
        <Link className="whatsapp-icon" to={'https://wa.me/+2348092282821'}>
          <FaWhatsapp className='icon'></FaWhatsapp>
        </Link>
      </div>
      <hr />
      <p>Made by <img src={myLogo} alt="" className='mylogo'width={'40px'}/> Ken D Coder</p>
    </footer>
  );
}

export default Footer;
