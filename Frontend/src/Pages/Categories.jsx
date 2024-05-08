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

                    <CategoryCard name={"Apparel"} pic={Apparel} />
                    <CategoryCard name={"Shoes"} pic={Shoes} />
                    <CategoryCard name={"Watches"} pic={Watch} />
                    <CategoryCard name={"Bags"} pic={Bag} />
                    <CategoryCard name={"Jewellery"} pic={Jwellery} />
                    <CategoryCard name={"Caps & Hats"} pic={Cap} />

                </div>
            </div>

            <div id='category-4' className="rounded-xl border flex flex-col items-center bg-white px-4 py-6">
                <h2 className='text-3xl font-bold'>HOME, KITCHEN & OUTDOORS</h2>
                <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3 mt-8">
                    <CategoryCard name={"HOME"} pic={Home} />
                    <CategoryCard name={"Kitchen"} pic={Kitchen} />
                    <CategoryCard name={"Outdoor"} pic={Sports} />
                </div>
            </div>

            <div id='category-2' className="rounded-xl border flex flex-col items-center bg-white px-4 py-6">
                <h2 className='text-3xl font-bold'>ENTERTAINMENT</h2>
                <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3 mt-8">
                    <CategoryCard name={"Books"} pic={Books} />
                    <CategoryCard name={"Video Games"} pic={Games} />
                    <CategoryCard name={"Movies"} pic={Movies} />
                </div>
            </div>

            <div id='category-3' className="rounded-xl border flex flex-col items-center bg-white px-4 py-6">
                <h2 className='text-3xl font-bold'>ELECTRONICS, APPLIANCES & ACCESSORIES</h2>
                <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3 mt-8">
                    <CategoryCard name={"TV & appliances"} pic={TV} />
                    <CategoryCard name={"Headphones"} pic={Headphones} />
                    <CategoryCard name={"Stationary"} pic={Stationary} />
                    <CategoryCard name={"Computer & accessories"} pic={Computer} />
                </div>
            </div>

        </div>
    </main>
  )
}

export default Categories