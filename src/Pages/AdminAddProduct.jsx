import React from 'react';
import { MdDelete } from "react-icons/md";
import myPic from "../assets/defaultPic.jpg";

const AdminAddProduct = () => {
  return (
    <main className='min-h-screen overflow-x-hidden mb-4'>
      <div id="profile" className='w-screen min-h-[95vh] lg:mt-12 lg:px-12 flex relative justify-center'>
        <div id="cartProducts" className='lg:flex flex-col p-0 w-[100vw] lg:w-[80vw] min-h-[60vh] m-0 lg:mt-0 bg-slate-100 mx-0 lg:mx-2 lg:rounded-lg lg:p-6 items-center overflow-x-hidden'>
          <div className="w-full flex items-center justify-center mb-10 mt-4">
            <h1 className=' text-4xl md:text-6xl font-normal text-red-500 underline'>Add Product</h1>
          </div>

          <form className="w-full mt-14 flex flex-col justify-center items-center gap-7 md:gap-10">
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_number" id="floating_number" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl" placeholder=" " required />
              <label htmlFor="floating_number" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl">Product Name</label>
            </div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6 w-full">
              <div className="relative z-0 w-full mb-5 group">
                <input type="number" name="floating_qty" id="floating_qty" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl" placeholder=" " required defaultValue={10} max={200} min={0} />
                <label htmlFor="floating_qty" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl">Quantity</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="number" name="floating_price" id="floating_price" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl" placeholder=" " required defaultValue={1000} max={100000} min={0} />
                <label htmlFor="floating_price" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl">{"Price($)"}</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="number" name="floating_id" id="floating_id" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl" placeholder=" " required />
                <label htmlFor="floating_id" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl">{"Product Id."}</label>
              </div>
            </div>

            <div className="w-full px-4">
              <label htmlFor="message" className="block mb-2 text-xl font-normal text-black">Product Description:</label>
              <textarea id="message" rows="8" className="block p-2.5 w-full  text-base md:text-lg text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Leave a comment..." maxLength={500}></textarea>
            </div>

            <div className="w-full flex flex-col gap-8 my-6 items-center justify-center">
              <div className="w-full h-48 md:h-80 bg-slate-300 rounded-lg border-[4px] border-dashed border-slate-700 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-black">
                <h3 className=' text-lg md:text-2xl font-medium text-slate-700'>select product image</h3>
              </div>

              <div className="w-full flex flex-wrap gap-8 items-center justify-center">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className=" w-48 md:w-60 h-48 md:h-60 rounded-lg relative">
                    <img src={myPic} alt="preview image" className='w-full h-full object-cover' />
                    <div className='absolute bottom-1 right-1 rounded-full w-10 md:w-12 h-10 md:h-12 bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-black'>
                      <MdDelete className='text-red-500 text-lg md:text-2xl' />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full my-10 flex items-center justify-center">
              <button type="submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg py-2.5 text-center me-2 mb-2 w-fit px-6 text-xl">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AdminAddProduct;
