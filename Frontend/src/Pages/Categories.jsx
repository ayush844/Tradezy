import React from 'react'

import CategoryCard from '../Components/Cards/CategoryCard';

import Apparel from '../assets/clothingCategory.png';
import Shoes from '../assets/shoesCategory.png';
import Watch from '../assets/watchCategory.png';
import Bag from '../assets/bagCategory.png';
import Jwellery from '../assets/jwelleryCategory.png';
import Cap from '../assets/capCategory.png';
import Books from '../assets/booksCategory.png';
import Games from '../assets/gameCategory.png';
import Movies from '../assets/moviesCategory.png';
import TV from '../assets/tvCategory.png';
import Headphones from '../assets/headphoneCategory.png';
import Stationary from '../assets/stationaryCategory.png';
import Computer from '../assets/computerCategory.png';
import Home from '../assets/homeCategory.png';
import Kitchen from '../assets/kitchenCategory.png';
import Sports from '../assets/sportsCategory.png';


const Categories = () => {
  return (
    <main className='min-h-screen overflow-x-hidden'>
        <div id="heading" className='container flex justify-center mt-0'>
            <h1 className=' font-semibold leading-snug sm:leading-normal mt-4 text-4xl md:text-5xl bg-gradient-to-r  from-cyan-400 to-green-400 bg-clip-text text-transparent text-center'>Discover Endless Choices: Explore Our Categories!</h1>
        </div>
        
        <div className=" container mt-4 pt-0  flex flex-col gap-6 px-0 md:px-6">
        <div id='category-4' className="rounded-xl border flex flex-col items-center bg-white px-4 py-6">
                <h2 className='text-3xl font-bold items-center'>FASHION</h2>
                <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3 mt-8">

                    <CategoryCard name={"Apparel"} pic={"https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <CategoryCard name={"Shoes"} pic={"https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <CategoryCard name={"Watches"} pic={"https://images.unsplash.com/photo-1609587312208-cea54be969e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <CategoryCard name={"Bags"} pic={"https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <CategoryCard name={"Jewellery"} pic={"https://images.unsplash.com/photo-1651160670627-2896ddf7822f?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <CategoryCard name={"Caps & Hats"} pic={"https://images.unsplash.com/photo-1620327467532-6ebaca6273ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />

                </div>
            </div>

            <div id='category-4' className="rounded-xl border flex flex-col items-center bg-white px-4 py-6">
                <h2 className='text-3xl font-bold'>HOME, KITCHEN & OUTDOORS</h2>
                <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3 mt-8">
                    <CategoryCard name={"HOME"} pic={"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <CategoryCard name={"Kitchen"} pic={"https://images.unsplash.com/photo-1610527003928-47afd5f470c6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <CategoryCard name={"Outdoor"} pic={"https://images.unsplash.com/photo-1617144519966-05c876b4f917?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                </div>
            </div>

            <div id='category-2' className="rounded-xl border flex flex-col items-center bg-white px-4 py-6">
                <h2 className='text-3xl font-bold'>ENTERTAINMENT</h2>
                <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3 mt-8">
                    <CategoryCard name={"Books"} pic={"https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <CategoryCard name={"Video Games"} pic={"https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <CategoryCard name={"Movies"} pic={"https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                </div>
            </div>

            <div id='category-3' className="rounded-xl border flex flex-col items-center bg-white px-4 py-6">
                <h2 className='text-3xl font-bold'>ELECTRONICS, APPLIANCES & ACCESSORIES</h2>
                <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3 mt-8">
                    <CategoryCard name={"TV & appliances"} pic={"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <CategoryCard name={"Headphones"} pic={"https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <CategoryCard name={"Stationary"} pic={"https://images.unsplash.com/photo-1568871391149-449702439177?q=80&w=2116&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <CategoryCard name={"Computer & accessories"} pic={"https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                </div>
            </div>

        </div>
    </main>
  )
}

export default Categories