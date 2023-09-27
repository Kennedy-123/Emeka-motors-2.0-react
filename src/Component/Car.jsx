import React from 'react';
import '../css/car.css';
import Honda from './Honda';
import Toyota from './Toyota';
import Benz from './Benz';
import Lexus from './Lexus';

function Car() {
  return (
    <>
      <Honda heading='Honda'/>
      <Toyota heading ='Toyota'/>
      <Benz heading='Benz'/>
      <Lexus heading='Lexus'/>
    </>
  );
}

export default Car;
