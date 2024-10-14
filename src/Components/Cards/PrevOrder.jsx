import React from 'react'

const PrevOrder = () => {
  return (
    <div className='w-[25rem] h-[15rem] overflow-hidden flex flex-col justify-evenly items-center border border-black shadow-md shadow-black rounded-md group p-6 m-2 hover:shadow-lg hover:shadow-black cursor-pointer'>
        <span className=' text-2xl line-clamp-3 font-bold text-blue-900 group-hover:underline group-hover:text-blue-600'>Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</span>

        <span className=' text-4xl w-[10rem] md:w-[20rem] line-clamp-1 font-bold text-red-500 group-hover:text-red-600'>₹1500</span>

        <p className=' text-xl w-[10rem] md:w-[20rem] line-clamp-1 font-bold text-gray-500 group-hover:text-gray-800'>amt: <span>1</span></p>

    </div>
  )
}

export default PrevOrder