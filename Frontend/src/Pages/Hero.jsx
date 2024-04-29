import React from 'react'

import { RiCustomerService2Line } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiKeyReturnBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";


import electronics from '../assets/electronics.png';
import clothes from '../assets/clothes.png';
import kitchen from '../assets/kitchen.png';
import sports from '../assets/sports.png';
import stationary from '../assets/stationary.png';



const Hero = () => {
  return (
    <main className='min-h-screen bg-gradient-to-br from-red-600 via-orange-500 to-pink-500 overflow-x-hidden'>
        <div id="hero" class="min-h-screen ">
           <div id="hero-container" class="max-w-4xl mx-auto px-6 pt-6 pb-16 flex flex-col sm:items-center sm:text-center sm:pt-12 sm:max-w-2xl ">
              <div id="hero-features" className='hidden sm:flex gap-6 my-6'>
                <div className="flex justify-center items-center gap-1 text-gray-300 text-base font-bold">
                  <CiDeliveryTruck className='text-xl text-gray-200'/>
                  <span>Fast Delivery</span>
                </div>
                <div className="flex justify-center items-center gap-1 text-gray-300 text-base font-bold">
                  <RiCustomerService2Line className='text-xl' />
                  <span>24/7 Customer Support:</span>
                </div>
                <div className="flex justify-center items-center gap-1 text-gray-300 text-base font-bold">
                  <PiKeyReturnBold className='text-xl' />
                  <span>Easy Returns and Refunds</span>
                </div>
              </div>
              <h1 className='text-4xl md:text-5xl font-semibold leading-snug sm:leading-normal mt-4 text-white'>Where Convenience Meets Choice:< br/> Your <span className='text-5xl md:text-8xl bg-gradient-to-b from-blue-200 from-10% via-sky-300 via-30% to-emerald-300 to-90%  inline-block text-transparent bg-clip-text'>Shopping Heaven.</span></h1>
              <p className='text-xl mt-8 mb-5 text-gray-200'>Celebrate the joy of effortless shopping with our curated selection of products, exceptional service, and seamless online experience. Welcome to your ultimate shopping haven!</p>
              <button className='mt-8 px-7 py-3 font-bold text-2xl rounded-lg text-white bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700 hover:from-pink-500 hover:via-purple-500 hover:to-blue-600'>Start Shopping</button>
           </div>

           <div id="category-grid" className='container flex flex-col gap-6'>
            <h2 className='text-4xl md:text-5xl sm:font-semibold mb-7 md:mb-10 max-w-8xl leading-normal text-white'>Explore multiple Categories...</h2>
            <div id="grid-container" className='flex flex-col gap-6 lg:grid lg:grid-cols-3'>
              <div className=" group rounded-2xl p-[3px] bg-slate-200 hover:bg-gradient-to-br hover:from-pink-500 hover:via-orange-400 hover:to-blue-500 cursor-pointer">
                <div className="rounded-2xl bg-white w-full h-full p-6 flex flex-col gap-4 items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:via-orange-100 group-hover:to-blue-100">
                  <h3 className=' text-xl md:text-2xl'>Electronics and Gadgets</h3>
                  <p className=' text-center font-light text-lg'>Power up your life with our cutting-edge electronics!</p>
                  <div className="w-40 h-40 p-3">
                    <img src={electronics} alt="electronics" className='w-full h-full object-cover' />
                  </div>
                </div>
              </div>

              <div className=" group rounded-2xl p-[3px] bg-slate-200 hover:bg-gradient-to-br hover:from-pink-500 hover:via-orange-400 hover:to-blue-500 cursor-pointer">
                <div className="rounded-2xl bg-white w-full h-full p-6 flex flex-col gap-4 items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:via-orange-100 group-hover:to-blue-100">
                  <h3 className=' text-xl md:text-2xl'>Apparel and Accessories</h3>
                  <p className=' text-center font-light text-lg'>Define Your Style: Elevate Your Wardrobe with Timeless Fashion Statements!</p>
                  <div className="w-40 h-40 p-3">
                    <img src={clothes} alt="electronics" className='w-full h-full object-cover' />
                  </div>
                </div>
              </div>

              <div className=" group rounded-2xl p-[3px] bg-slate-200 hover:bg-gradient-to-br hover:from-pink-500 hover:via-orange-400 hover:to-blue-500 cursor-pointer">
                <div className="rounded-2xl bg-white w-full h-full p-6 flex flex-col gap-4 items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:via-orange-100 group-hover:to-blue-100">
                  <h3 className=' text-xl md:text-2xl'>Home & Kitchen Appliances</h3>
                  <p className=' text-center font-light text-lg'>Transform Your Space: Elevate Your Lifestyle with Our Premier Home & Kitchen Collection!</p>
                  <div className="w-36 h-auto p-3">
                    <img src={kitchen} alt="electronics" className='w-full h-full object-cover' />
                  </div>
                </div>
              </div>

              <div className=" group rounded-2xl p-[3px] bg-slate-200 hover:bg-gradient-to-br hover:from-pink-500 hover:via-orange-400 hover:to-blue-500 cursor-pointer">
                <div className="rounded-2xl bg-white w-full h-full p-6 flex flex-col gap-4 items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:via-orange-100 group-hover:to-blue-100">
                  <h3 className=' text-xl md:text-2xl'>Sports and Outdoors</h3>
                  <p className=' text-center font-light text-lg'>Unleash Your Potential: Dominate Every Field with Our Sports Gear Selection!</p>
                  <div className="w-auto h-40 p-3">
                    <img src={sports} alt="electronics" className='w-full h-full object-cover' />
                  </div>
                </div>
              </div>

              <div className=" group rounded-2xl p-[3px] bg-slate-200 hover:bg-gradient-to-br hover:from-pink-500 hover:via-orange-400 hover:to-blue-500 cursor-pointer">
                <div className="rounded-2xl bg-white w-full h-full p-6 flex flex-col gap-4 items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:via-orange-100 group-hover:to-blue-100">
                  <h3 className=' text-xl md:text-2xl'>Office Supplies and Stationery</h3>
                  <p className=' text-center font-light text-lg'>Fuel Your Productivity: Explore Our Office Supplies for Every Workspace!</p>
                  <div className="w-auto h-40 p-3">
                    <img src={stationary} alt="electronics" className='w-full h-full object-cover' />
                  </div>
                </div>
              </div>

              <div className=" group rounded-2xl p-[3px] bg-slate-200 hover:bg-gradient-to-br hover:from-pink-500 hover:via-orange-400 hover:to-blue-500 cursor-pointer">
                <div className="rounded-2xl bg-white w-full h-full p-6 flex flex-row gap-2 items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:via-orange-100 group-hover:to-blue-100">
                  <h2 className=' text-2xl md:text-4xl font-light'>SEE ALL PRODUCTS</h2>
                  <FaArrowRight className=' text-3xl'/>
                </div>
              </div>
            </div>
           </div>
        </div>  
    </main>
  )
}

export default Hero