import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import CustomCursor from '../CustomCursor';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Layout({ headerVariant }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='mb-4'><Header variant={headerVariant} /></div>
      <Outlet />
      
      <Footer />
    </>
  );
}