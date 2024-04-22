import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import logo from '../../assets/logo.png'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='p-3 flex bg-white justify-between items-center border-b-2'>
        <a href="#" id='brand' className='flex gap-2 items-center'>
            <img className='object-cover max-w-12 max-h-12 md:max-h-14 md:max-w-14' src={logo} alt="logo" />
            <span className='text-xl font-medium font-display md:text-3xl'>Tradezy</span>
        </a>
        <div id="nav-menu" className='hidden md:flex gap-12'>
            <a href="#" className='font-medium hover:text-primary text-lg'>Categories</a>
            <a href="#" className='font-medium hover:text-primary text-lg'>Latest Arrivals</a>
        </div>
        <button className=' hidden md:flex items-center justify-center gap-3 rounded-lg border border-red-600 px-6 py-2 hover:border-2'>
            <CiLogin className='text-primary text-2xl'/>
            <span className='font-medium text-primary'>LogIn/SignUp</span>
        </button>
        <button className='p-2 md:hidden'  onClick={()=>setIsOpen(prev => !prev)}>
            <MdMenu className='text-3xl'/>
        </button>

        <div className={`fixed inset-0 bg-red-600 ${isOpen ? "": "hidden"} md:hidden z-10`}>
            <nav className='p-3 flex bg-white justify-between items-center border-b-2'>
                <a href="#" id='brand' className='flex gap-2 items-center'>
                    <img className='object-cover max-w-12 max-h-12 md:max-h-14 md:max-w-14' src={logo} alt="logo" />
                    <span className='text-xl font-medium font-display md:text-3xl'>Tradezy</span>
                </a>
                <button className='p-2 md:hidden' onClick={()=>setIsOpen(prev => !prev)}>
                    <IoMdClose className='text-3xl'/>
                </button>
            </nav>
            <div className="mt-6">
                <a href="#" className="font-medium m-3 p-3 block hover:bg-red-500 rounded-lg text-2xl text-white">
                    Categories
                </a>
                <a href="#" className="font-medium m-3 p-3 block hover:bg-red-500 rounded-lg text-2xl text-white">
                    Latest Arrivals
                </a>
                <div className="h-[1px] bg-gray-300"></div>
                <button className='flex items-center justify-center gap-3 rounded-lg border-white px-3 py-1 border border-2 m-4'>
                    <CiLogin className='text-white text-2xl'/>
                    <span className='font-medium text-white text-2xl'>LogIn/SignUp</span>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar