import React, { useContext, useEffect, useState } from 'react';
import CartProduct from '../Components/Cards/CartProduct';
import { Link } from 'react-router-dom';
import MyContext from '../Context/data/MyContext';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../redux/CartSlice';
import { toast } from 'react-toastify';

const amountArr = [];

const Cart = () => {
  const context = useContext(MyContext);
  const { ourProduct } = context;
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((state) => state.cart);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success('Product deleted from cart');
  };


  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem, index) => {
      amountArr[index] = cartItem.quantity ? +cartItem.quantity : 1;
      temp += cartItem.price * (cartItem.quantity ? +cartItem.quantity : 1);  // Calculate based on quantity
      console.log(amountArr[index]);
    });
    console.log("total price is ", temp)
    setTotalPrice(temp);
    console.log(amountArr);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);


    // Function to handle disabled checkout with toast
    const handleCheckoutClick = (e) => {
      if (totalPrice === 0 || cartItems.length === 0) {
        e.preventDefault(); // Prevent the default action (navigating to checkout)
        toast.error('Add something to the cart first!');
      }
    };

    // console.log(cartItems[0].quantity);

    useEffect(() => {
      cartItems.forEach((cartItem, index) => {
        amountArr[index] = cartItem.quantity ? +cartItem.quantity : 1;
        console.log(`amount @ ${index}: ${amountArr[index]}`);
      });
      console.log(amountArr);
    }, []);


    const dataToSend = {
      price: totalPrice,
      cartItems: cartItems,
      amountArr: amountArr
    };
  

  return (
    <main className='min-h-screen overflow-x-hidden mb-6'>
      <div id="cartPage" className='w-screen min-h-[100vh] lg:mt-12 lg:px-12 flex relative justify-center'>
        <div id="cartProducts" className={`lg:flex flex-col p-0 w-[100vw] lg:w-[80vw] min-h-[100vh] m-0 lg:mt-0 bg-slate-100 mx-0 lg:mx-2 lg:rounded-lg lg:p-6 items-center`}>
          <div className="w-full h-fit py-4 pb-7 border-black border-b-2 flex justify-center">
            <h1 className='text-3xl md:text-5xl font-bold md:font-normal uppercase'>Shopping Cart</h1>
          </div>

          <div className="w-full h-fit p-12 flex flex-col">
            {cartItems.map((item, index) => (
              <CartProduct item={item} key={index} deleteCart={deleteCart} />
            ))}
          </div>

          <div id="checkoutCart" className='mb-12 w-full md:w-[80%] h-fit min-h-56 flex flex-col items-center gap-10 bg-slate-200 rounded-xl p-8'>
            <h2 className='text-3xl md:text-4xl font-light md:font-normal uppercase'>Order Summary</h2>

            <div className="w-full">
              <div className="w-full h-fit border-gray-400 border-b flex items-center justify-between p-4">
                <span className='text-lg md:text-xl'>Total Price:</span>
                <span className='text-lg md:text-xl text-gray-700'>₹{totalPrice}</span>
              </div>

              <div className="w-full h-fit border-gray-800 border-2 md:border-4 flex items-center justify-between p-4">
                <span className='text-2xl font-medium'>Order Total:</span>
                <span className='text-2xl font-medium text-gray-700'>₹{totalPrice}</span>
              </div>
            </div>

            {/* <Link to="/checkout" state={{ data: dataToSend }} className='w-full' >
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg w-full px-5 py-2.5 md:text-2xl text-center me-2 mb-2 uppercase font-bold text-xl">Checkout</button>
            </Link> */}

                        {/* Disable the button if totalPrice is 0 or cartItems is empty */}
            <Link
              to={totalPrice > 0 && cartItems.length > 0 ? "/checkout" : "#"}
              state={{ data: dataToSend }}
              className='w-full'
              onClick={handleCheckoutClick}
            >
              <button
                type="button"
                disabled={totalPrice === 0 || cartItems.length === 0} // Disable condition
                className={`text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg w-full px-5 py-2.5 md:text-2xl text-center me-2 mb-2 uppercase font-bold text-xl ${
                  (totalPrice === 0 || cartItems.length === 0) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Checkout
              </button>
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
