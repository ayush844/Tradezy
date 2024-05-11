import React, { useState } from 'react'

import { FaAngleUp } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";

import MultiRangeSlider from "multi-range-slider-react";


const ProductFilter = ({showProductFilter, setShowProductFilter}) => {

    const [isFAQopen, setIsFAQopen] = useState(0);

    const [minValue, set_minValue] = useState(700);
    const [maxValue, set_maxValue] = useState(7000);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    
    
  return (
    <div className={`${showProductFilter ? "flex overflow-hidden" : " hidden"} flex-col lg:relative items-center justify-center lg:justify-start w-[100vw] min-h-screen lg:min-h-[60vh] lg:max-h-[80vh] lg:w-96 bg-slate-50 lg:rounded-lg lg:flex lg:flex-col gap-8 absolute`}>

        {showProductFilter && <ImCancelCircle className=' text-3xl absolute top-2 right-2 lg:hidden' onClick={() => setShowProductFilter(false)}/>}
        

        <div className="flex flex-col gap-4 p-4 justify-start">
            <h2 className=' text-2xl font-bold'>CATEGORIES:</h2>
            <div id="categoryBox" className=' flex flex-col w-[100%]'>
                <div className="group border border-gray-700 bg-gray-50 p-6 gap-2">
                    <dt className='flex justify-between items-center cursor-pointer' onClick={()=> setIsFAQopen(isFAQopen===1? 0 : 1)}>
                    <p className=' font-semibold text-lg'>FASHION</p>
                    <FaAngleUp className={`${isFAQopen===1 ? "" : "-rotate-180"} transition`} />
                    </dt>
                    <dd className={` text-lg font-light mt-6 ${isFAQopen===1 ? "" : "hidden"}`}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut architecto tenetur quo doloremque, a vero ab magnam accusantium vel deleniti, provident officia porro delectus, autem in quisquam odit sequi.</p>
                    </dd>
                </div>
                <div className="group border border-gray-700 bg-gray-50 p-6">
                    <dt className='flex justify-between items-center cursor-pointer' onClick={()=> setIsFAQopen(isFAQopen===2? 0 : 2)}>
                    <p className=' font-semibold text-lg'>HOME, KITCHEN & OUTDOORS</p>
                    <FaAngleUp className={`${isFAQopen===2 ? "" : "-rotate-180"} transition`} />
                    </dt>
                    <dd className={` text-lg font-light mt-6 ${isFAQopen===2 ? "" : "hidden"}`}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut architecto tenetur quo doloremque, a vero ab magnam accusantium vel deleniti, provident officia porro delectus, autem in quisquam odit sequi.</p>
                    </dd>
                </div>

                <div className="group border border-gray-700 bg-gray-50 p-6">
                    <dt className='flex justify-between items-center cursor-pointer' onClick={()=> setIsFAQopen(isFAQopen===3? 0 : 3)}>
                    <p className=' font-semibold text-lg'>ENTERTAINMENT</p>
                    <FaAngleUp className={`${isFAQopen===3 ? "" : "-rotate-180"} transition`} />
                    </dt>
                    <dd className={` text-lg font-light mt-6 ${isFAQopen===3 ? "" : "hidden"}`}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut architecto tenetur quo doloremque, a vero ab magnam accusantium vel deleniti, provident officia porro delectus, autem in quisquam odit sequi.</p>
                    </dd>
                </div>

                <div className="group border border-gray-700 bg-gray-50 p-6">
                    <dt className='flex justify-between items-center cursor-pointer' onClick={()=> setIsFAQopen(isFAQopen===4? 0 : 4)}>
                    <p className=' font-semibold text-lg'>ELECTRONICS, APPLIANCES & ACCESSORIES</p>
                    <FaAngleUp className={`${isFAQopen===4 ? "" : "-rotate-180"} transition`} />
                    </dt>
                    <dd className={` text-lg font-light mt-6 ${isFAQopen===4 ? "" : "hidden"}`}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut architecto tenetur quo doloremque, a vero ab magnam accusantium vel deleniti, provident officia porro delectus, autem in quisquam odit sequi.</p>
                    </dd>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-4 p-4 justify-start">
            <h2 className=' text-2xl font-bold'>PRICE RANGE:</h2>
            <div className=' font-medium text-blue-700 text-xl flex justify-center'>
                ₹{minValue} - ₹{maxValue}
            </div>

            <MultiRangeSlider
                min={500}
                max={50000}
                step={5}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                    handleInput(e);
                }} ruler={false} className='border-none box-shadow-none' barInnerColor='#0008C1' barLeftColor='black' barRightColor='black' thumbLeftColor='#102C57' thumbRightColor='#102C57'
                style={{border: 'none', boxShadow: 'none', width: '18rem'}}
		    />
            
        </div>    

    </div>
  )
}

export default ProductFilter