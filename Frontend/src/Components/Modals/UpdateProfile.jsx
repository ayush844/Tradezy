import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

const UpdateProfile = ({setShowModal}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center flex-col justify-center gap-4'>

      <IoCloseCircleOutline className=' text-5xl text-black font-bold cursor-pointer hover:scale-125 transition ' onClick={()=>setShowModal(prev => !prev)}/>

      <div className=" flex border-2 md:rounded-lg border-gray-700 p-8 bg-slate-300 items-center justify-center w-fit">
            <form className=' flex flex-col gap-6 items-center justify-center'>
                <div className=" flex flex-col">
                    <label for="username" className=' font-bold'>New Username:</label>
                    <input type="text" id="username" name="username" placeholder='enter your username' className=' bottom-3 border-2 border-black bg-gray-200 outline-none rounded-md px-3 py-2'/>
                </div>

                <div className=" flex flex-col">
                    <label for="phone" className=' font-bold'>New Phone No:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='123-456-7890' className=' bottom-3 border-2 border-black bg-gray-200 outline-none rounded-md px-3 py-2'/>
                </div>

                <div className=" flex flex-col">
                  <label for="address" className=' font-bold'>New address:</label>
                  <input type="text" id="address" name="username" placeholder='enter your address' className=' bottom-3 border-black border-2 bg-gray-200 outline-none rounded-md px-3 py-2'/>
                </div>



                <button type="submit" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-xl mt-6 outline-none" onClick={(e)=>e.preventDefault()}>UPDATE</button>

            </form>
      </div>
    </div>
  )
}

export default UpdateProfile