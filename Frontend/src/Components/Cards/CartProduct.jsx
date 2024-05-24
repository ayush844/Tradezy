import React from 'react'

const CartProduct = () => {
  return (
    <div className=' flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between w-full border-b-[1px] border-black px-1 md:px-2 py-3'>
        <div id='productInfo' className=" flex items-center gap-3">
            <div className=" w-24 h-28 md:w-32 md:h-40">
                <img className=' w-full h-full object-cover' src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product image" />
            </div>
            <h2 className=' line-clamp-3 md:line-clamp-2 text-lg md:text-xl font-normal w-48 sm:w-60 md:w-96 cursor-pointer hover:text-blue-600 hover:underline'>Lux Cozi Men's Regular Fit Polo Neck Half Sleeve Solid Casual T-Shirt | Polo T-Shirt for Men</h2>
        </div>

        <select class="py-2 px-3 pe-9 border-black bg-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none outline-none">
            <option selected="">1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
        </select>


        <div id="optionAndPrice" className=' flex flex-col items-center justify-evenly h-full gap-3'>
            <span className=' text-2xl'> $50</span>
            <span className=' text-blue-800 cursor-pointer'>REMOVE</span>
        </div>
    </div>
  )
}

export default CartProduct