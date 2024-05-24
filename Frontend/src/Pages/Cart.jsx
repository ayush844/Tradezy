import React from 'react'
import CartProduct from '../Components/Cards/CartProduct'

const Cart = () => {
  return (
    <main  className='min-h-screen overflow-x-hidden mb-6'>
    <div id="cartPage" className=' w-screen min-h-[100vh] lg:mt-12 lg:px-12 flex relative justify-center'>
      <div id="cartProducts" className={`lg:flex flex-col p-0 w-[100vw] lg:w-[80vw] min-h-[100vh] m-0 lg:mt-0 bg-slate-100 mx-0 lg:mx-2 lg:rounded-lg lg:p-6 items-center`}>

        <div className="w-full h-fit py-4 pb-7 border-black border-b-2 flex justify-center">
            <h1 className=' text-3xl md:text-5xl font-bold md:font-normal uppercase '>Shopping Cart</h1>
        </div>

        <div className="w-full h-fit p-12 flex flex-col">
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
        </div>

        <div id="checkoutCart" className=' w-[80%] h-fit min-h-56 flex flex-col items-center gap-10 bg-slate-300 rounded-xl p-8'>
          <h2 className=' text-4xl font-normal uppercase '>Order Summary</h2>

          <div className=" w-full">
            <div className=" w-full h-fit border-gray-400 border-b flex items-center justify-between p-4">
              <span className=' text-xl'>Total Price:</span>
              <span className=' text-xl text-gray-700'>$500</span>
            </div>
            <div className=" w-full h-fit border-gray-400 border-b flex items-center justify-between p-4">
              <span className=' text-xl'> Discount:</span>
              <span className=' text-xl text-gray-700'>- $100</span>
            </div>

            <div className=" w-full h-fit border-gray-800 border-4 flex items-center justify-between p-4">
              <span className=' text-2xl font-medium'> Order Total:</span>
              <span className=' text-2xl font-medium text-gray-700'>$400</span>
            </div>
          </div>

          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg w-full px-5 py-2.5 text-2xl text-center me-2 mb-2 uppercase font-bold">checkout</button>

        </div>
        
      </div>
    </div>
    </main>
  )
}

export default Cart