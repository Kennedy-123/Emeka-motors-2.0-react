import React from 'react';
import myPic from '../images/my pic.png';
import '../css/about.css';

function About() {
  return (
    <React.Fragment>
      <div className='pb-11 bg-blue-200 about-info-container'>
        <div className='flex gap-11'>
          <div className="bg-gray-400 ceo-card flex">
            <img src={myPic} alt="" className="w-56 bg-gray-300"/>
            <h1 className='text-lg font-semibold ml-24'>C.E.O</h1>
            <div className='ceo-info'>
              <p className='mt-6'><span className='font-semibold'>Name:</span> Emeka</p>
              <p className='mt-6'><span className='font-semibold'>Surname:</span> Okolo</p>
              <p className='mt-6'><span className='font-semibold'>Othername:</span> Emmanuel</p>
              <p className='mt-6'><span className='font-semibold'>State Of Origin:</span> Anambra</p>
              <p className='mt-6'><span className='font-semibold'>Nationality:</span> Nigeria</p>
            </div>
          </div>
          <div className="about-para bg-gray-400">
            <p>
              deserunt laudantium eaque, consequuntur reiciendis esse provident minus optio dolorum impedit, nemo culpa obcaecati perspiciatis mollitia pariatur nesciunt inventore accusamus dolores! Temporibus repudiandae mollitia modi sapiente quae. Ex inventore explicabo unde pariatur fuga aperiam optio, fugit repudiandae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis voluptatum eos facere cumque delectus, ut a ullam earum voluptatibus ad praesentium impedit illo, incidunt expedita. Distinctio asperiores unde labore. lorem
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
