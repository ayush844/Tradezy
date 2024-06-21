import React, { useState } from 'react'
import { BsPeopleFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";


const AdminDashboard = () => {

  // select between 1>Product, 2>Order, 3>Customer
  const [selected, setSelected] = useState(1);

  return (
    <main  className='min-h-screen overflow-x-hidden mb-4'>

    <div id="profile" className=' w-screen min-h-[95vh] lg:mt-12 lg:px-12 flex relative justify-center'>

      <div id="cartProducts" className={`lg:flex flex-col p-0 w-[100vw] lg:w-[80vw] min-h-[60vh] m-0 lg:mt-0 bg-slate-100 mx-0 lg:mx-2 lg:rounded-lg lg:p-6 items-center overflow-x-hidden`}>

      <div className="flex w-full items-center mt-8 flex-wrap gap-4 justify-evenly">

        <div className=" w-72 h-48 md:h-60 border-2 border-black bg-white rounded-md shadow-lg shadow-black hover:shadow-red-600 flex flex-col items-center justify-evenly">
          <h3 className=' text-3xl text-red-500 font-extrabold'>Total Customers</h3>
          <p className=' text-6xl text-blue-950 font-bold flex items-center w-full justify-center gap-3'>
            <BsPeopleFill />
            <span className=' line-clamp-1'>150</span>
          </p>
        </div>

        <div className=" w-72 h-48 md:h-60 border-2 border-black bg-white rounded-md shadow-lg shadow-black hover:shadow-red-600 flex flex-col items-center justify-evenly">
          <h3 className=' text-3xl text-red-500 font-extrabold'>Total Orders</h3>
          <p className=' text-6xl text-blue-950 font-bold flex items-center w-full justify-center gap-3'>
            <FaShoppingCart />
            <span className=' line-clamp-1'>550</span>
          </p>
        </div>

        <div className=" w-72 h-48 md:h-60 border-2 border-black bg-white rounded-md shadow-lg shadow-black hover:shadow-red-600 flex flex-col items-center justify-evenly">
          <h3 className=' text-3xl text-red-500 font-extrabold'>Total Products</h3>
          <p className=' text-6xl text-blue-950 font-bold flex items-center w-full justify-center gap-3'>
            <FaBasketShopping />
            <span className=' line-clamp-1'>1000</span>
          </p>
        </div>

      </div>     


      <div className="w-full flex items-center justify-center mt-8 mb-8 md:mt-16 md:mb-16">
        <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center justify-center gap-3 mt-10 w-fit">
          <MdAdd  className=' text-4xl font-extrabold text-white'/>
          <span className=' text-2xl font-bold text-white'>ADD PRODUCT</span>
        </button>
      </div>

      <div className="flex w-full items-center mt-8 flex-wrap gap-2 md:gap-4 justify-center">

        <div className={`w-52 md:w-64 h-10 md:h-14 border-2 border-black ${selected==1? " bg-red-500 " : " bg-white "}  rounded-md flex flex-col items-center justify-evenly cursor-pointer`} onClick={(e)=> setSelected(1)}>
          <h3 className={` text-xl md:text-3xl ${selected==1? " font-bold text-white ": " text-red-500 font-normal "}`}>PRODUCTS</h3>
        </div>

        <div className={`w-52 md:w-64 h-10 md:h-14 border-2 border-black ${selected==2? " bg-red-500 " : " bg-white "}  rounded-md flex flex-col items-center justify-evenly cursor-pointer`} onClick={(e)=> setSelected(2)}>
          <h3 className={` text-xl md:text-3xl ${selected==2? " font-bold text-white ": " text-red-500 font-normal "}`}>ORDERS</h3>
        </div>


        <div className={`w-52 md:w-64 h-10 md:h-14 border-2 border-black ${selected==3? " bg-red-500 " : " bg-white "}  rounded-md flex flex-col items-center justify-evenly cursor-pointer`} onClick={(e)=> setSelected(3)}>
          <h3 className={` text-xl md:text-3xl ${selected==3? " font-bold text-white ": " text-red-500 font-normal "}`}>CUSTOMERS</h3>
        </div>


      </div>     





      </div>

    </div>

    </main>

  )
}

export default AdminDashboard