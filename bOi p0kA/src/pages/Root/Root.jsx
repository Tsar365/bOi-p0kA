// import React from 'react';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/fotoer/Footer';
import { Outlet } from 'react-router';
import '../../App.css';

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;