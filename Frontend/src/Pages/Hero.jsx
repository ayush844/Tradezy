import React from 'react'

import { RiCustomerService2Line } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiKeyReturnBold } from "react-icons/pi";

const Hero = () => {
  return (
    <main>
        <div id="hero" class="min-h-screen bg-gradient-to-br from-red-600 via-orange-500 to-pink-500">
           <div id="hero-container" class="max-w-4xl mx-auto px-6 pt-6 pb-16 flex flex-col sm:items-center sm:text-center sm:pt-12 sm:max-w-2xl">
              <h1 className='text-4xl md:text-5xl font-semibold leading-snug sm:leading-normal mt-4 text-white'>Where Convenience Meets Choice:< br/> Your <span className='text-5xl md:text-8xl bg-gradient-to-b from-blue-200 from-10% via-sky-300 via-30% to-emerald-300 to-90%  inline-block text-transparent bg-clip-text'>Shopping Heaven.</span></h1>
              <p className='text-xl mt-8 mb-5 text-gray-200'>Celebrate the joy of effortless shopping with our curated selection of products, exceptional service, and seamless online experience. Welcome to your ultimate shopping haven!</p>
              <button className='mt-8 px-7 py-3 font-bold text-2xl rounded-lg text-white bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700 hover:from-pink-500 hover:via-purple-500 hover:to-blue-600'>Start Shopping</button>
           </div>
        </div>  
    </main>
  )
}

export default Hero