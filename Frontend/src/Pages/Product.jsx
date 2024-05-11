import React, { useState } from 'react'
import ProductFilter from '../Components/ProductFilter'


import { BiSolidCategory } from "react-icons/bi";

const Product = () => {

  const [showProductFilter, setShowProductFilter] = useState(false);

    const toggleProductFilter = () => {
      setShowProductFilter(true);
    };

  return (
    <main  className='min-h-screen overflow-x-hidden mb-6'>
        <div id="productPage" className=' w-screen min-h-[80vh] lg:mt-12 lg:px-12 flex relative justify-between'>
          {!showProductFilter && 
            <button className="lg:hidden absolute flex items-center justify-center w-12 h-12 top-3 left-3 rounded-[100%] bg-white" onClick={toggleProductFilter}>
              <BiSolidCategory className=' text-3xl text-red-500'/>
            </button>
          }

          <ProductFilter showProductFilter={showProductFilter} setShowProductFilter={setShowProductFilter}/>



          <div id="productsCollection" className={`${showProductFilter && "hidden"} lg:flex w-screen lg:w-[70vw] min-h-[100vh] mt-20 lg:mt-0 bg-slate-100 mx-2 rounded-lg`}>
            <div className="flex flex-row items-start p-4 md:p-6 justify-between w-[100%]">
              <h1 className=' text-3xl lg:text-4xl'>PRODUTCS:</h1>


              <select name="price" id="price" className='  hidden md:flex bg-slate-300 lg:px-4 lg:py-2 outline-none rounded-sm lg:text-lg'>
                <option value="l2h">Price: low to high</option>
                <option value="h2l">Price: high to low</option>
              </select>
            </div>
          </div>


        </div>
    </main>
  )
}

export default Product