import React, { useState } from 'react'

import { RiCustomerService2Line } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiKeyReturnBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";


import electronics from '../assets/electronics.png';
import clothes from '../assets/clothes.png';
import kitchen from '../assets/kitchen.png';
import sports from '../assets/sports.png';
import stationary from '../assets/stationary.png';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';
import { Link } from 'react-router-dom';


const Hero = () => {

  const [isFAQopen, setIsFAQopen] = useState(0);


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

{/* MULTIPLE CATEGORY */}
           <div id="category-grid" className='container'>
            <h2 className='text-4xl md:text-5xl sm:font-semibold mb-7 md:mb-10 max-w-8xl leading-normal text-white'>🛍️ Explore multiple Categories...</h2>
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
                <Link to='/categories'>
                <div className="rounded-2xl bg-white w-full h-full p-6 flex flex-row gap-2 items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:via-orange-100 group-hover:to-blue-100">
                  <h1 className=' text-2xl md:text-4xl font-light'>SEE ALL PRODUCTS</h1>
                  <FaArrowRight className=' text-3xl'/>
                </div>
                </Link>
              </div>
            </div>
           </div>

{/* CUSTOMER REVIEWS */}
           <div id="customer-review" className='container'>
            <h2 className='text-4xl md:text-5xl sm:font-semibold mb-7 md:mb-10 max-w-8xl leading-normal text-white'>🔊 Hear What Our Customers Are Saying!</h2>
            <div className="rounded-xl border flex flex-col items-center bg-white px-4 py-6">
              <h3 class="text-2xl leading-relaxed">Seamless Selection: A Smooth Shopping Journey with TRADEZY</h3>
              <div id="tag-container" class="flex gap-3 flex-wrap my-6">
                <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                  <FaCheck />
                  <span class="font-display font-medium">Fast and On time Delievery</span>
                </div>
                <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                  <FaCheck />
                  <span class="font-display font-medium">Caring and Friendly Customer Support</span>
                </div>
                <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                  <FaCheck />
                  <span class="font-display font-medium">Amazing Product</span>
                </div>
              </div>
              <p className=' text-lg font-light text-gray-500 mx-1 md:mx-2 px-1 md:px-11'>My recent shopping experience at TRADEZY was exceptional. Navigating the website was effortless, thanks to its intuitive layout and clear organization. Finding the products I needed was quick and hassle-free, thanks to the user-friendly interface.
              I was impressed by the extensive selection of products available on the site. From electronics to clothing to home goods, TRADEZY offered a wide variety of options to choose from, catering to diverse tastes and preferences.
              <br />
              The checkout process was straightforward, with easy-to-follow steps and multiple secure payment options available. I appreciated the seamless transaction process, which made completing my purchase a breeze.
              Overall, I was highly satisfied with my shopping experience at TRADEZY. The website's ease of use and comprehensive product selection exceeded my expectations, and I look forward to shopping here again in the future.</p>

              <div id="user-card" class="flex gap-4 m-10">
                <div class="w-12 h-12">
                    <img src={user1}  class="rounded-full w-full h-full object-cover"  alt="" />
                </div>
                <div class="flex flex-col">
                    <h3>Aditya Mishra</h3>
                    <p class="text-gray-500">A happy <a href="#" class="anchor-hover">Customer 😃</a> </p>
                </div>
              </div>

            </div>

            <div id="more-customer-reviews" className='flex flex-col md:flex-row gap-6 lg:grid lg:grid-cols-3 mt-9 md:mt-12'>
              <div className=" group rounded-2xl p-[3px] bg-slate-200 hover:bg-gradient-to-br hover:from-pink-500 hover:via-orange-400 hover:to-blue-500">
                <div className="rounded-2xl bg-white w-full h-full p-6 flex flex-col gap-4 items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:via-orange-100 group-hover:to-blue-100">
                  <p className=' text-lg font-normal text-gray-500 mx-1 md:mx-2 px-1 md:px-9'>My recent shopping escapade at Tradezy was nothing short of exceptional. With its seamless navigation and intuitive layout, browsing through the extensive array of electronics, fashion pieces, and home essentials was a breeze. The hassle-free checkout process, coupled with multiple secure payment options, added to the overall convenience. Suffice it to say, I left thoroughly satisfied and eagerly await my next rendezvous with Tradezy.</p>

              <div id="user-card" class="flex gap-4 m-10 items-center">
                <div class="w-16 h-16">
                    <img src={user2}  class="rounded-full w-full h-full object-cover"  alt="" />
                </div>
                <h3 className=' text-lg'>Nidhi Tanwar</h3>
              </div>

                </div>
              </div>

              <div className=" group rounded-2xl p-[3px] bg-slate-200 hover:bg-gradient-to-br hover:from-pink-500 hover:via-orange-400 hover:to-blue-500">
                <div className="rounded-2xl bg-white w-full h-full p-6 flex flex-col gap-4 items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:via-orange-100 group-hover:to-blue-100">
                  <p className=' text-lg font-normal text-gray-500 mx-1 md:mx-2 px-1 md:px-9'>My recent shopping expedition at TRADEZY was an absolute triumph. The website's seamless interface and intuitive design made browsing through their extensive collection a breeze. From trendy fashion pieces to cutting-edge electronics and chic home décor, they truly had it all. The checkout process was swift and hassle-free, offering a range of secure payment options to suit my preferences. Overall, my experience exceeded expectations, and I eagerly anticipate my next shopping spree at TRADEZY.</p>
              <div id="user-card" class="flex gap-4 m-10 items-center">
                <div class="w-16 h-16">
                    <img src={user3}  class="rounded-full w-full h-full object-cover"  alt="" />
                </div>
                <h3 className=' text-lg'>Samay Raina</h3>
              </div>
                </div>
              </div>

              <div className=" group rounded-2xl p-[3px] bg-slate-200 hover:bg-gradient-to-br hover:from-pink-500 hover:via-orange-400 hover:to-blue-500">
                <div className="rounded-2xl bg-white w-full h-full p-6 flex flex-col gap-4 items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:via-orange-100 group-hover:to-blue-100">
                  <p className=' text-lg font-normal text-gray-500 mx-1 md:mx-2 px-1 md:px-9'>My recent shopping experience at TRADEZY was superb. Navigating their user-friendly website was effortless, and their diverse selection of products, from fashion to electronics, impressed me. The checkout process was quick and secure, leaving me highly satisfied. I'll definitely be returning to TRADEZY for my future shopping needs.</p>
                <div id="user-card" class="flex gap-4 m-10 items-center">
                <div class="w-16 h-16">
                    <img src={user4}  class="rounded-full w-full h-full object-cover"  alt="" />
                </div>
                <h3 className=' text-lg'>Aniket Sharma</h3>
              </div>
                </div>
              </div>

            </div>
           </div>


          <div id="customer-review" className='container'>
           <h2 className='text-4xl md:text-5xl sm:font-semibold mb-7 md:mb-10 max-w-8xl leading-normal text-white'>🤔 FAQs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mt-6">
              <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                <dt className='flex justify-between items-center cursor-pointer' onClick={()=> setIsFAQopen(isFAQopen===1? 0 : 1)}>
                  <p className=' font-semibold text-lg'>who built the TRADEZY website ?</p>
                  <FaAngleUp className={`${isFAQopen===1 ? "" : "-rotate-180"} transition`} />
                </dt>
                <dd className={` text-lg font-light mt-6 ${isFAQopen===1 ? "" : "hidden"}`}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut architecto tenetur quo doloremque, a vero ab magnam accusantium vel deleniti, provident officia porro delectus, autem in quisquam odit sequi.</p>
                </dd>
              </div>

              <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                <dt className='flex justify-between items-center cursor-pointer' onClick={()=> setIsFAQopen(isFAQopen===2? 0 : 2)}>
                  <p className=' font-semibold text-lg'>who built the TRADEZY website ?</p>
                  <FaAngleUp className={`${isFAQopen===2 ? "" : "-rotate-180"} transition`} />
                </dt>
                <dd className={` text-lg font-light mt-6 ${isFAQopen===2 ? "" : "hidden"}`}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut architecto tenetur quo doloremque, a vero ab magnam accusantium vel deleniti, provident officia porro delectus, autem in quisquam odit sequi.</p>
                </dd>
              </div>

              <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                <dt className='flex justify-between items-center cursor-pointer' onClick={()=> setIsFAQopen(isFAQopen===3? 0 : 3)}>
                  <p className=' font-semibold text-lg'>who built the TRADEZY website ?</p>
                  <FaAngleUp className={`${isFAQopen===3 ? "" : "-rotate-180"} transition`} />
                </dt>
                <dd className={` text-lg font-light mt-6 ${isFAQopen===3 ? "" : "hidden"}`}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut architecto tenetur quo doloremque, a vero ab magnam accusantium vel deleniti, provident officia porro delectus, autem in quisquam odit sequi.</p>
                </dd>
              </div>

              <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                <dt className='flex justify-between items-center cursor-pointer' onClick={()=> setIsFAQopen(isFAQopen===4? 0 : 4)}>
                  <p className=' font-semibold text-lg'>who built the TRADEZY website ?</p>
                  <FaAngleUp className={`${isFAQopen===4 ? "" : "-rotate-180"} transition`} />
                </dt>
                <dd className={` text-lg font-light mt-6 ${isFAQopen===4 ? "" : "hidden"}`}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut architecto tenetur quo doloremque, a vero ab magnam accusantium vel deleniti, provident officia porro delectus, autem in quisquam odit sequi.</p>
                </dd>
              </div>

              <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                <dt className='flex justify-between items-center cursor-pointer' onClick={()=> setIsFAQopen(isFAQopen===5? 0 : 5)}>
                  <p className=' font-semibold text-lg'>who built the TRADEZY website ?</p>
                  <FaAngleUp className={`${isFAQopen===5 ? "" : "-rotate-180"} transition`} />
                </dt>
                <dd className={` text-lg font-light mt-6 ${isFAQopen===5 ? "" : "hidden"}`}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut architecto tenetur quo doloremque, a vero ab magnam accusantium vel deleniti, provident officia porro delectus, autem in quisquam odit sequi.</p>
                </dd>
              </div>

              <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                <dt className='flex justify-between items-center cursor-pointer' onClick={()=> setIsFAQopen(isFAQopen===6? 0 : 6)}>
                  <p className=' font-semibold text-lg'>who built the TRADEZY website ?</p>
                  <FaAngleUp className={`${isFAQopen===6 ? "" : "-rotate-180"} transition`} />
                </dt>
                <dd className={` text-lg font-light mt-6 ${isFAQopen===6 ? "" : "hidden"}`}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut architecto tenetur quo doloremque, a vero ab magnam accusantium vel deleniti, provident officia porro delectus, autem in quisquam odit sequi.</p>
                </dd>
              </div>
            </div>
          </div>

        </div>  
    </main>
  )
}

export default Hero