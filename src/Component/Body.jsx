import React from 'react';
import benz from '../images/benz/benz.jpg';
import 'animate.css'
import '../css/index.css'
import logo from '../images/logo.png';

function Body() {
  return (
    <div className="img">
      <div className="intro-text animate__animated animate__heartBeat">
        <h1 className='text-8xl text-white'>Welcome</h1>
        <h1 className='text-8xl text-white'>To</h1>
        <h1 className='text-8xl text-white'>Emeka Motors</h1>
        <img src={logo} alt=""  className='w-60 ml-40 mt-5 animate__animated animate__rotateIn'/>
      </div>
      <img src={benz} alt="" />
      <div class="overlay"></div>
    </div>
  );
}

export default Body;
