import React from 'react'

const CategoryCard = ({name, pic}) => {
  return (
    <div className=" flex items-center gap-3 border-2 border-gray-400 rounded-lg px-1 md:p-2 lg:p-6 m-2 hover:bg-gray-100 cursor-pointer min-w-fit">
        <div id='imgContainer' className=" w-36 h-36 bg-gray-100 rounded-[100%] hover:shadow-xl transition duration-300 shadow-purple-500">
            <img src={pic} alt="img" className='rounded-full w-full h-full object-cover'/>
        </div>
        <div>
            <h3 className=' text-[1rem] md:text-[1.5rem] font-[300] uppercase'>{name}</h3>
        </div> 
    </div>
  )
}

export default CategoryCard