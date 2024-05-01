import React from 'react'

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className=' container p-2 mt-0'>
        <div className=" rounded-lg border bg-gray-50 p-16 md:p-24 flex items-center justify-between gap-12 flex-col md:flex-row-reverse hover:bg-gray-200">
            <div className="flex gap-6">
                <a href="https://github.com/ayush844/Tradezy" target="_blank"><FaGithub className=' text-3xl'/></a>
                <a href="https://twitter.com/ayushuprush" target="_blank"><FaXTwitter className=' text-3xl'/></a>
            </div>
            <a href="#" id='brand' className='flex gap-2 items-center'>
                <img className='object-cover max-w-12 max-h-12 md:max-h-14 md:max-w-14' src={logo} alt="logo" />
                <span className='text-xl font-medium font-display md:text-3xl'>Tradezy</span>
            </a>
        </div>

        <h2 className=' text-center text-2xl m-5 mt-6'>made with 🫀, 🧠 and 💻 by Ayush Sharma</h2>
    </footer>
  )
}

export default Footer