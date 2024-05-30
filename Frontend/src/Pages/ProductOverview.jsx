import React, { useState } from 'react'

import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProductOverview = () => {

    const [selectedImage, setSelectedImage] = useState("https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

    const [selectedId, setSelectedId] = useState(1);

    const clickedImage = (img, id) => {
        setSelectedImage(img);
        setSelectedId(id);
    }


  return (
    <main  className='min-h-screen overflow-x-hidden mb-6'>
        <div id="productPage" className=' w-screen min-h-[100vh] lg:mt-12 lg:px-12 flex relative justify-center'>
          <div id="productsCollection" className={`lg:flex flex-col p-0 w-[100vw] lg:w-[80vw] min-h-[100vh] m-0 lg:mt-0 bg-slate-100 mx-0 lg:mx-2 lg:rounded-lg lg:p-3`}>
            <div id="imageAndDescription" className=' flex flex-col w-screen lg:flex-row lg:w-[100%] gap-8 pt-4'>
                <div id="imageSection" className=' flex flex-col w-full lg:w-[50%] gap-4 p-2'>
                    <div id="selectedImage" className=' w-[100%] h-[20rem] lg:h-[40rem] border border-black'>
                        <img src={selectedImage} alt="product image" className='w-[100%] h-[100%] object-cover p-0' />
                    </div>
                    <div id="allImage" className=' w-[100%] flex items-center justify-evenly'>
                        <div id="imgBox" className={`${selectedId==1? "border-blue-700 border-[3px]" : "border border-black "} w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[10rem] cursor-pointer`} onClick={()=> clickedImage("https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 1)}>
                            <img src="https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img box" className='w-[100%] h-[100%] object-cover p-0' />
                        </div>
                        <div id="imgBox" className={`${selectedId==2? "border-blue-700 border-[3px]" : "border border-black "} w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[10rem] cursor-pointer`}  onClick={()=> clickedImage("https://images.unsplash.com/photo-1541351991055-b55135fea4bf?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 2)}>
                            <img src="https://images.unsplash.com/photo-1541351991055-b55135fea4bf?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img box" className='w-[100%] h-[100%] object-cover p-0' />
                        </div>
                        <div id="imgBox" className={`${selectedId==3? "border-blue-700 border-[3px]" : "border border-black "} w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[10rem] cursor-pointer`}  onClick={()=> clickedImage("https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 3)}>
                            <img src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img box" className='w-[100%] h-[100%] object-cover p-0' />
                        </div>
                        <div id="imgBox" className={`${selectedId==4? "border-blue-700 border-[3px]" : "border border-black "} w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[10rem] cursor-pointer`}  onClick={()=> clickedImage("https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 4)}>
                            <img src="https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img box" className='w-[100%] h-[100%] object-cover p-0' />
                        </div>
                    </div>
                </div>
                <div id="descriptionSection" className=' flex flex-col w-full lg:w-[50%] gap-7 p-2 pt-5'>
                    <h1 className=' text-4xl font-bold'>Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h1>

                    <h2 className=' text-[3rem] font-normal'>$40,000</h2>

                    <div id="review" className=' flex gap-3'>
                        <div id="starBox" className=' flex gap-2'>
                            <FaStar className=' text-2xl text-yellow-400'/>
                            <FaStar className=' text-2xl text-yellow-400'/>
                            <FaStar className=' text-2xl text-yellow-400'/>
                            <FaStar className=' text-2xl text-yellow-400'/>
                            <FaRegStar className=' text-2xl text-gray-500' />
                        </div>
                        <div id="rating" className=' w-fit h-fit px-2 py-1 bg-blue-400 flex items-center justify-center rounded-lg'>
                            <span className=' text-blue-900 text-sm font-bold'>4.0</span>
                        </div>
                    </div>

                    <p className=' text-base text-gray-700'>Introducing the Apple Watch Series 7 GPS, Aluminum Case in the captivating Starlight Sport edition, combining elegance with unmatched functionality. This cutting-edge wearable technology redefines convenience and style. Crafted from durable aluminum, the sleek Starlight finish adds a touch of sophistication to your attire. With its advanced GPS capabilities, track your workouts, monitor your heart rate, and stay connected on-the-go without needing your iPhone nearby. The Series 7's larger Retina display offers enhanced visibility, while its robust construction ensures durability in any activity. Elevate your fitness journey and daily life with the Apple Watch Series 7, a fusion of innovation and elegance.</p>

                    <div className="flex w-full items-center justify-center">
                        <button className=' outline-none flex max-w-[20rem] border-black h-fit rounded-md items-center justify-center gap-3 px-4 py-3 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium text-sm text-center me-2 mt-10 mb-10'>
                            <FaCartPlus className=' text-2xl'/>
                            <Link to='/cart' className=' text-xl font-bold outline-none'>ADD TO CART</Link>
                        </button>
                    </div>



                </div>
            </div>



          </div>  
        </div>
    </main>        
  )
}

export default ProductOverview