import React, { useContext, useState, useEffect } from 'react';
import ProductFilter from '../Components/ProductFilter';
import { BiSolidCategory } from "react-icons/bi";
import ProductCard from '../Components/Cards/ProductCard';
import MyContext from '../Context/data/MyContext';

const Product = () => {
  const context = useContext(MyContext);
  const { ourProduct, filterType, filterMinPrice, filterMaxPrice } = context;

  const [filteredProducts, setFilteredProducts] = useState(ourProduct); // To store filtered and sorted products
  const [sortOption, setSortOption] = useState('l2h'); // Default sort option (low to high)
  const [showProductFilter, setShowProductFilter] = useState(false);

  const toggleProductFilter = () => {
    setShowProductFilter(true);
  };

  // Filter products based on category, min price, and max price
  useEffect(() => {
    let updatedProducts = [...ourProduct];

    // Filter by category (filterType)
    if (filterType) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === filterType
      );
    }

    // Filter by price range
    updatedProducts = updatedProducts.filter(
      (product) =>
        product.price >= filterMinPrice && product.price <= filterMaxPrice
    );

    // Sort products by price
    if (sortOption === 'l2h') {
      updatedProducts.sort((a, b) => a.price - b.price); // Low to High
    } else if (sortOption === 'h2l') {
      updatedProducts.sort((a, b) => b.price - a.price); // High to Low
    }

    // Update the filteredProducts state
    setFilteredProducts(updatedProducts);
  }, [ourProduct, filterType, filterMinPrice, filterMaxPrice, sortOption]);

  return (
    <main className='min-h-screen overflow-x-hidden mb-6'>
      <div id="productPage" className='w-screen min-h-[80vh] lg:mt-12 lg:px-12 flex relative justify-between'>
        {!showProductFilter && 
          <button className="lg:hidden absolute flex items-center justify-center w-12 h-12 top-3 left-3 rounded-[100%] bg-white" onClick={toggleProductFilter}>
            <BiSolidCategory className='text-3xl text-red-500'/>
          </button>
        }

        <ProductFilter showProductFilter={showProductFilter} setShowProductFilter={setShowProductFilter} />

        <div id="productsCollection" className={`${showProductFilter && "hidden"} lg:flex flex-col w-screen lg:w-[70vw] min-h-[100vh] mt-20 lg:mt-0 bg-slate-200 mx-2 rounded-lg`}>
          <div className="flex flex-row items-start p-4 md:p-6 justify-between w-[100%]">
            <h1 className='text-3xl lg:text-4xl'>PRODUCTS:</h1>

            <select
              name="price"
              id="price"
              className='hidden md:flex bg-slate-300 lg:px-4 lg:py-2 outline-none rounded-sm lg:text-lg'
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="l2h">Price: low to high</option>
              <option value="h2l">Price: high to low</option>
            </select>
          </div>

          <div id="productContainer" className='w-[100%] h-fit p-2 md:p-6 flex flex-wrap items-center justify-center'>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item, index) => (
                <ProductCard item={item} key={index} />
              ))
            ) : (
              <p className="text-lg text-center mt-4">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
