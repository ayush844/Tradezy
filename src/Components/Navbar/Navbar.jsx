import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const user = JSON.parse(localStorage.getItem('user'));



  return (
    <nav className='p-3 flex bg-white justify-between items-center border-b-2'>
        <Link to="/" id='brand' className='flex gap-2 items-center'>
            <img className='object-cover max-w-12 max-h-12 md:max-h-14 md:max-w-14' src={logo} alt="logo" />
            <span className='text-xl font-medium font-display md:text-3xl'>Tradezy</span>
        </Link>
        <div id="nav-menu" className='hidden md:flex gap-12'>
            <NavLink to="/categories" className={({isActive}) => `font-medium hover:text-primary text-lg ${isActive?"text-primary" : "" }`}>Categories</NavLink>
            <NavLink to="/products" className={({isActive}) => `font-medium hover:text-primary text-lg ${isActive?"text-primary" : "" }`}>Products</NavLink>
            {
                user?.user?.email &&
                <>
                    <NavLink to="/me" className={({isActive}) => `font-medium hover:text-primary text-lg ${isActive?"text-primary" : "" }`}>Me</NavLink>

                </>
            }

            {
                user?.user?.email === "admin@gmail.com" &&
                <>
                    <NavLink to="/admin/dashboard" className={({isActive}) => `font-medium hover:text-primary text-lg ${isActive?"text-primary" : "" }`}>Dashboard</NavLink>

                </>
            }

        </div>

        {!user ?
            <Link to='/login' className=' hidden md:flex items-center justify-center gap-3 rounded-lg border border-red-600 px-6 py-2 hover:border-2'>
                <CiLogin className='text-primary text-2xl'/>
                <span className='font-medium text-primary'>LogIn/SignUp</span>
            </Link>
            :
            <NavLink to="/cart" className={({isActive}) => `font-medium hover:text-primary text-lg hidden md:flex items-center gap-2 ${isActive?"text-primary" : "" }`}> <FaShoppingCart className=' text-2xl' /> Cart</NavLink>
        }

        <button className='p-2 md:hidden'  onClick={()=>setIsOpen(prev => !prev)}>
            <MdMenu className='text-3xl'/>
        </button>

        <div className={`fixed inset-0 bg-red-600 ${isOpen ? "": "hidden"} md:hidden z-10`}>
            <nav className='p-3 flex bg-white justify-between items-center border-b-2'>
                <Link to="/" id='brand' className='flex gap-2 items-center'>
                    <img className='object-cover max-w-12 max-h-12 md:max-h-14 md:max-w-14' src={logo} alt="logo" />
                    <span className='text-xl font-medium font-display md:text-3xl'>Tradezy</span>
                </Link>
                <button className='p-2 md:hidden' onClick={()=>setIsOpen(prev => !prev)}>
                    <IoMdClose className='text-3xl'/>
                </button>
            </nav>
            <div className="mt-6">
                <Link to="/categories" className="font-medium m-3 p-3 block hover:bg-red-500 rounded-lg text-2xl text-white"  onClick={()=>setIsOpen(prev => !prev)}>
                    Categories
                </Link>

                <Link to="/products" className="font-medium m-3 p-3 block hover:bg-red-500 rounded-lg text-2xl text-white"  onClick={()=>setIsOpen(prev => !prev)}>
                    Products
                </Link>

                <Link to="/me" className="font-medium m-3 p-3 block hover:bg-red-500 rounded-lg text-2xl text-white"  onClick={()=>setIsOpen(prev => !prev)}>
                    Me
                </Link>


                <div className="h-[1px] bg-gray-300"></div>


                {
                !user ?
                    <Link to='/login' className='flex items-center justify-center gap-3 rounded-lg border-white px-3 py-1  border-2 m-4'  onClick={()=>setIsOpen(prev => !prev)}>
                        <CiLogin className='text-white text-2xl'/>
                        <span className='font-medium text-white text-2xl'>LogIn/SignUp</span>
                    </Link> 
                    
                    :

                    <Link to="/cart" className="font-medium m-3 p-3 flex items-center gap-2 hover:bg-red-500 rounded-lg text-2xl text-white"  onClick={()=>setIsOpen(prev => !prev)}>
                        <FaShoppingCart className=' text-2xl' /> 
                        Cart
                    </Link>

                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar