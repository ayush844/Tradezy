import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'

import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

const Layout = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (

    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout