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
    <div className={`${showProductFilter ? "flex overflow-hidden" : " hidden"} flex-col lg:relative items-center justify-center lg:justify-start w-[100vw] min-h-screen lg:min-h-[60vh] lg:h-fit lg:w-96 bg-slate-50 lg:rounded-lg lg:flex lg:flex-col gap-8 absolute`}>

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
<ul class="max-w-sm flex flex-col">
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-1" name="hs-list-group-item-checkbox-1" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-1" class="ms-3.5 block w-full text-sm text-gray-600">
        APPAREL
      </label>
    </div>
  </li>

  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-2" name="hs-list-group-item-checkbox-2" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-2" class="ms-3.5 block w-full text-sm text-gray-600">
        SHOES
      </label>
    </div>
  </li>

  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-3" name="hs-list-group-item-checkbox-3" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-3" class="ms-3.5 block w-full text-sm text-gray-600">
        WATCHES
      </label>
    </div>
  </li>
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-3" name="hs-list-group-item-checkbox-3" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-3" class="ms-3.5 block w-full text-sm text-gray-600">
        BAGS
      </label>
    </div>
  </li>
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-3" name="hs-list-group-item-checkbox-3" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-3" class="ms-3.5 block w-full text-sm text-gray-600">
        JEWELLERY
      </label>
    </div>
  </li>
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-3" name="hs-list-group-item-checkbox-3" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-3" class="ms-3.5 block w-full text-sm text-gray-600">
        CAPS & HATS
      </label>
    </div>
  </li>
</ul>
                    </dd>
                </div>
                <div className="group border border-gray-700 bg-gray-50 p-6">
                    <dt className='flex justify-between items-center cursor-pointer' onClick={()=> setIsFAQopen(isFAQopen===2? 0 : 2)}>
                    <p className=' font-semibold text-lg'>HOME, KITCHEN & OUTDOORS</p>
                    <FaAngleUp className={`${isFAQopen===2 ? "" : "-rotate-180"} transition`} />
                    </dt>
                    <dd className={` text-lg font-light mt-6 ${isFAQopen===2 ? "" : "hidden"}`}>
<ul class="max-w-sm flex flex-col">
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-1" name="hs-list-group-item-checkbox-1" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-1" class="ms-3.5 block w-full text-sm text-gray-600">
        HOME
      </label>
    </div>
  </li>

  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-2" name="hs-list-group-item-checkbox-2" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-2" class="ms-3.5 block w-full text-sm text-gray-600">
        KITCHEN
      </label>
    </div>
  </li>

  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-3" name="hs-list-group-item-checkbox-3" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-3" class="ms-3.5 block w-full text-sm text-gray-600">
      OUTDOOR
      </label>
    </div>
  </li>
</ul>
                    </dd>
                </div>

                <div className="group border border-gray-700 bg-gray-50 p-6">
                    <dt className='flex justify-between items-center cursor-pointer' onClick={()=> setIsFAQopen(isFAQopen===3? 0 : 3)}>
                    <p className=' font-semibold text-lg'>ENTERTAINMENT</p>
                    <FaAngleUp className={`${isFAQopen===3 ? "" : "-rotate-180"} transition`} />
                    </dt>
                    <dd className={` text-lg font-light mt-6 ${isFAQopen===3 ? "" : "hidden"}`}>
<ul class="max-w-sm flex flex-col">
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-1" name="hs-list-group-item-checkbox-1" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-1" class="ms-3.5 block w-full text-sm text-gray-600">
      BOOKS
      </label>
    </div>
  </li>

  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-2" name="hs-list-group-item-checkbox-2" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-2" class="ms-3.5 block w-full text-sm text-gray-600">
      VIDEO GAMES
      </label>
    </div>
  </li>

  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-3" name="hs-list-group-item-checkbox-3" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-3" class="ms-3.5 block w-full text-sm text-gray-600">
      MOVIES
      </label>
    </div>
  </li>
</ul>
                    </dd>
                </div>

                <div className="group border border-gray-700 bg-gray-50 p-6">
                    <dt className='flex justify-between items-center cursor-pointer' onClick={()=> setIsFAQopen(isFAQopen===4? 0 : 4)}>
                    <p className=' font-semibold text-lg'>ELECTRONICS, APPLIANCES & ACCESSORIES</p>
                    <FaAngleUp className={`${isFAQopen===4 ? "" : "-rotate-180"} transition`} />
                    </dt>
                    <dd className={` text-lg font-light mt-6 ${isFAQopen===4 ? "" : "hidden"}`}>
<ul class="max-w-sm flex flex-col">
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-1" name="hs-list-group-item-checkbox-1" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-1" class="ms-3.5 block w-full text-sm text-gray-600">
      TV & APPLIANCES
      </label>
    </div>
  </li>

  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-2" name="hs-list-group-item-checkbox-2" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-2" class="ms-3.5 block w-full text-sm text-gray-600">
        HEADPHONES
      </label>
    </div>
  </li>

  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-3" name="hs-list-group-item-checkbox-3" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-3" class="ms-3.5 block w-full text-sm text-gray-600">
      STATIONARY
      </label>
    </div>
  </li>
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
    <div class="relative flex items-start w-full">
      <div class="flex items-center h-5">
        <input id="hs-list-group-item-checkbox-3" name="hs-list-group-item-checkbox-3" type="checkbox" class="border-gray-200 rounded disabled:opacity-50" />
      </div>
      <label for="hs-list-group-item-checkbox-3" class="ms-3.5 block w-full text-sm text-gray-600">
      COMPUTER & ACCESSORIES
      </label>
    </div>
  </li>
</ul>
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


    <div class="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg mb-10">
        <button class="flex-1 font-bold text-xl bg-white px-6 py-3 rounded-xl" onClick={() => setShowProductFilter(false)}>Apply Filters</button>
    </div>

    </div>
  )
}

export default ProductFilter