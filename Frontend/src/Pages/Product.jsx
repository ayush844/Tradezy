import React, { useState } from 'react'
import ProductFilter from '../Components/ProductFilter'


import { BiSolidCategory } from "react-icons/bi";

const Product = () => {

  const [showProductFilter, setShowProductFilter] = useState(true);

    const toggleProductFilter = () => {
      setShowProductFilter(true);
    };

  return (
    <main  className='min-h-screen overflow-x-hidden'>
        <div id="productPage" className=' w-screen min-h-[80vh] lg:mt-12 lg:px-12 flex relative'>
          {!showProductFilter && 
            <button className="lg:hidden absolute flex items-center justify-center w-12 h-12 top-3 left-3 rounded-[100%] bg-white" onClick={toggleProductFilter}>
              <BiSolidCategory className=' text-3xl text-red-500'/>
            </button>
          }

          <ProductFilter showProductFilter={showProductFilter} setShowProductFilter={setShowProductFilter}/>



          <div id="productsCollection" className={`${showProductFilter && "hidden"} w-screen min-h-[100vh] mt-20 lg:mt-0 bg-slate-100 mx-2 rounded-lg`}>
            <div className="flex items-start p-4 md:p-6">
              <h1 className=' text-3xl lg:text-4xl'>PRODUTCS:</h1>
            </div>
          </div>


        </div>
    </main>
  )
}

export default Product