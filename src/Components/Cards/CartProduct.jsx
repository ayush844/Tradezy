import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../Context/data/MyContext';
import { useDispatch } from 'react-redux';
import { updateCartQuantity } from '../../redux/CartSlice';

const CartProduct = ({item, deleteCart}) => {
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(item.quantity || 1);


    const handleAmountChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        setQuantity(newQuantity);
        dispatch(updateCartQuantity({ id: item.id, quantity: newQuantity }));  // Dispatch the action to update quantity
    };



    

    return (
        <div className='flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between w-full border-b-[1px] border-black px-1 md:px-2 py-3'>
            <div id='productInfo' className="flex items-center gap-3">
                <div className="w-24 h-28 md:w-32 md:h-40">
                    <img className='w-full h-full object-cover' src={item.images[0]} alt="product image" />
                </div>
                <h2 className='line-clamp-3 md:line-clamp-2 text-lg md:text-xl font-normal w-48 sm:w-60 md:w-96 cursor-pointer hover:text-blue-600 hover:underline'>{item.title}</h2>
            </div>

            <select className="py-2 px-3 pe-9 border-black bg-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none outline-none" value={item.quantity ?? 1} onChange={handleAmountChange}>
                {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                        {num + 1}
                    </option>
                ))}
            </select>

            <div id="optionAndPrice" className='flex flex-col items-center justify-evenly h-full gap-3'>
                <span className='text-2xl'>${item.price * quantity}</span>
                <span className='text-blue-800 cursor-pointer' onClick={() => deleteCart(item)}>REMOVE</span>
            </div>
        </div>

    );
};

export default CartProduct;
