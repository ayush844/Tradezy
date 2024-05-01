import React from 'react'
import Navbar from './Components/Navbar/Navbar'

import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

const Layout = () => {
  return (

    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout