import React from 'react';
import '../css/contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <React.Fragment>
      <div className='bg-blue-200 pl-9 pb-6 flex gap-4'>
        <div className=" bg-gray-400 mt-11 form">
          <form className="">
            <input
              type="text"
              placeholder="Enter Surname"
              className=" ml-2 mr-40 contact-input"
            />
            <input
              type="text"
              placeholder="Enter First Name"
              className=" ml-2 contact-input"
            />
            <br />
            <input
              type="text"
              className="contact-input email-input ml-2 mt-2"
              placeholder="Enter Email"
            />
            <input
              type="text"
              className="contact-input email-input ml-2 mt-2"
              placeholder="Enter Subject"
            />
          <textarea name="" className="info-text mt-2 ml-2" placeholder="message"></textarea>
          <button type='submit' className='submit-btn'>Send Message</button>
          </form>
        </div>
        <div className='bg-gray-400 w-96 contact-info'>
          <h1 className='font-bold'>Address</h1>
          <p>No 16 New World Street</p>
          <p>Ajao Estate</p>
          <p>Lagos Nigeria</p>
          <div className='mt-2'>
          <h1 className='font-bold'>Phone Number</h1>
          <p><Link to={"tel:+2348092282821"}>0809228281</Link></p>
          <p><Link to={"tel:+2348141554846"}>08141554846</Link></p>
          </div>
          <div className='mt-2'>
          <h1 className='font-bold'>Email</h1>
          <p><Link to={"mailto:okolochidera223@gmail.com"}>Okolochidera223@gmail.com</Link></p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
