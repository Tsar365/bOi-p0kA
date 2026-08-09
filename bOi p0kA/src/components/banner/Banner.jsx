// import React from 'react';
import bookImage from '../../assets/books.jpg';


const Banner = () => {
  return (
    <div className="flex justify-around items-center bg-gray-100 p-8 rounded-lg shadow-md">
      <div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, deserunt.</h1>
        <button className="btn btn-primary">Get Started</button>
      </div>
      
      <div>
        <img src={bookImage} alt="Books" />
      </div>

    </div>
  );
};

export default Banner;