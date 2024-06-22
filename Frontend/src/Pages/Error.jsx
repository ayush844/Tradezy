import React from 'react'

import error from '../assets/error.png'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main  className='min-h-screen overflow-x-hidden mb-4'>
    <div id="profile" className=' w-screen min-h-[95vh] lg:mt-12 lg:px-12 flex relative justify-center'>
      <div id="cartProducts" className={`lg:flex flex-col p-0 w-[100vw] lg:w-[80vw] min-h-[60vh] m-0 lg:mt-0 bg-slate-100 mx-0 lg:mx-2 lg:rounded-lg lg:p-6 items-center overflow-x-hidden`}>

      <div className='flex items-center justify-center'>
          <div className=" w-40 h-40 md:w-72 md:h-72 lg:w-96 lg:h-96">
            <img src={error}  className="rounded-full w-full h-full object-cover"  alt="error" />
          </div>
        </div>

        <div className='flex items-center justify-center mt-8'>
            <h1 className=' text-8xl text-red-600 font-bold text-center'>404 <span className=' font-light'>ERROR</span></h1>
        </div>

        <div className='flex items-center justify-center mt-4'>
            <p className=' text-3xl text-red-600 font-normal text-center'>page not found</p>
        </div>

        <div className=" mt-10 md:mt-20 w-full items-center justify-center flex ">
        <Link to="/">  
        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 flex items-center justify-center gap-3">

          <FaArrowLeft className=' text-2xl md:text-4xl font-bold'/>
          <span className=' text-lg md:text-2xl font-bold'>Go Back To Home</span>  

        </button>
        </Link>  

      </div>

      </div>
    </div>
    </main>
  )
}

export default Error