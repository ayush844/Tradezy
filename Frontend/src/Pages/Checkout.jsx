import React from 'react'

import { MdOutlineNavigateNext } from "react-icons/md";

const Checkout = () => {
  return (
    <main  className='min-h-screen overflow-x-hidden mb-4'>
    <div id="profile" className=' w-screen min-h-[95vh] lg:mt-12 lg:px-12 flex relative justify-center'>
      <div id="cartProducts" className={`lg:flex flex-col p-0 w-[100vw] lg:w-[80vw] min-h-[60vh] m-0 lg:mt-0 bg-slate-100 mx-0 lg:mx-2 lg:rounded-lg lg:p-6 items-center overflow-x-hidden`}>
        <div className=" w-full justify-center flex my-8 lg:my-4 border-b-2 pb-4 border-black">
            <h1 className=' text-5xl md:text-6xl font-normal '>CHECKOUT</h1>
        </div>

        <form className=" w-full justify-center flex my-8 lg:my-4 flex-col items-center gap-16 px-36">
            <div className=" flex flex-col w-full gap-4">
                <label for="username" className=' text-2xl font-normal'>Enter your full name:</label>
                <input type="text" id="username" name="username" placeholder='enter your name' className=' bottom-3 border-black bg-gray-200 outline-none rounded-md px-3 py-2' required/>
            </div>
            <div className=" flex flex-col w-full gap-4">
                <label for="username" className=' text-2xl font-normal'>Enter your EmailId:</label>
                <input type="email" id="username" name="username" placeholder='enter your email' className=' bottom-3 border-black bg-gray-200 outline-none rounded-md px-3 py-2' required/>
            </div>
            <div className=" flex flex-col w-full gap-4">
                <label for="username" className=' text-2xl font-normal'>Enter your address:</label>
                <input type="text" id="username" name="username" placeholder='enter your address' className=' bottom-3 border-black bg-gray-200 outline-none rounded-md px-3 py-2' required/>
            </div>
            <div className=" flex flex-col w-full gap-4">
                <label for="username" className=' text-2xl font-normal'>Enter your city:</label>
                <input type="text" id="username" name="username" placeholder='enter your city' className=' bottom-3 border-black bg-gray-200 outline-none rounded-md px-3 py-2' required/>
            </div>
            <div className=" flex flex-col w-full gap-4">
                <label for="username" className=' text-2xl font-normal'>Enter your state:</label>
                <select className=' text-lg p-2 border-2 border-black bg-slate-100'>
                    <option value="AP">Andhra Pradesh</option>
                    <option value="AR">Arunachal Pradesh</option>
                    <option value="AS">Assam</option>
                    <option value="BR">Bihar</option>
                    <option value="CT">Chhattisgarh</option>
                    <option value="GA">Gujarat</option>
                    <option value="HR">Haryana</option>
                    <option value="HP">Himachal Pradesh</option>
                    <option value="JK">Jammu and Kashmir</option>
                    <option value="GA">Goa</option>
                    <option value="JH">Jharkhand</option>
                    <option value="KA">Karnataka</option>
                    <option value="KL">Kerala</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="MH">Maharashtra</option>
                    <option value="MN">Manipur</option>
                    <option value="ML">Meghalaya</option>
                    <option value="MZ">Mizoram</option>
                    <option value="NL">Nagaland</option>
                    <option value="OR">Odisha</option>
                    <option value="PB">Punjab</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="SK">Sikkim</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="TG">Telangana</option>
                    <option value="TR">Tripura</option>
                    <option value="UT">Uttarakhand</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="WB">West Bengal</option>
                    <option value="AN">Andaman and Nicobar Islands</option>
                    <option value="CH">Chandigarh</option>
                    <option value="DN">Dadra and Nagar Haveli</option>
                    <option value="DD">Daman and Diu</option>
                    <option value="DL">Delhi</option>
                    <option value="LD">Lakshadweep</option>
                    <option value="PY">Puducherry</option>
                </select>
            </div>
            <div className=" flex flex-col w-full gap-4">
                <label for="username" className=' text-2xl font-normal'>Enter your Postal Code:</label>
                <input type="number" id="username" name="username" placeholder='enter your postal code' className=' bottom-3 border-black bg-gray-200 outline-none rounded-md px-3 py-2' required/>
            </div>

            <button type="button" class="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-400 dark:focus:ring-green-300 flex items-center justify-center">
                <span className='text-lg md:text-2xl font-bold'>Make Payment</span>
                <MdOutlineNavigateNext className='text-lg md:text-4xl font-bold'/>
            </button>

        </form>
      </div>
    </div>
    </main>


  )
}

export default Checkout