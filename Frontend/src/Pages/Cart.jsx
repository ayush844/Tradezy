import React from 'react'
import CartProduct from '../Components/Cards/CartProduct'

const Cart = () => {
  return (
    <main  className='min-h-screen overflow-x-hidden mb-6'>
    <div id="cartPage" className=' w-screen min-h-[100vh] lg:mt-12 lg:px-12 flex relative justify-center'>
      <div id="cartProducts" className={`lg:flex flex-col p-0 w-[100vw] lg:w-[80vw] min-h-[100vh] m-0 lg:mt-0 bg-slate-100 mx-0 lg:mx-2 lg:rounded-lg lg:p-6`}>

        <div className="w-full h-fit py-4 pb-7 border-black border-b-2 flex justify-center">
            <h1 className=' text-5xl font-normal uppercase '>Shopping Cart</h1>
        </div>

        <div className="w-full h-fit p-12 flex flex-col">
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
        </div>
        
      </div>
    </div>
    </main>
  )
}

export default Cart