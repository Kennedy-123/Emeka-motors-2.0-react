import React from 'react'
import { honda } from './data';
import logo from '../images/logo.png'

function Honda(props) {
  const {heading} = props
  return (
    <React.Fragment>
    <h1 className="text-2xl text-center font-bold bg-yellow-300">{heading}</h1>
    <React.Fragment>
      <div className="grid bg-blue-200">
        {honda.map((car) => {
          const { id, name, image, price } = car;
          return (
            <div className="card" key={id}>
              <img src={image} alt={name} className="w-96 h-52" />
              <p className="font-bold h-8">{name}</p>
              <p className=" mb-10">₦ {price}</p>
              <img src={logo} alt='' className="w-16 logo" />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  </React.Fragment>
  )
}

export default Honda
