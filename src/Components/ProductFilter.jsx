import React, { useContext, useState, useEffect } from 'react';
import { FaAngleUp } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import MultiRangeSlider from "multi-range-slider-react";
import MyContext from '../Context/data/MyContext';

const categories = [
  {
    name: "FASHION",
    options: ["APPAREL", "SHOES", "WATCHES", "BAGS", "JEWELLERY", "CAPS & HATS"],
  },
  {
    name: "HOME, KITCHEN & OUTDOORS",
    options: ["HOME", "KITCHEN", "OUTDOOR"],
  },
  {
    name: "ENTERTAINMENT",
    options: ["BOOKS", "VIDEO GAMES", "MOVIES"],
  },
  {
    name: "ELECTRONICS, APPLIANCES & ACCESSORIES",
    options: ["TV & appliances", "headphones", "stationary", "computer & accessories"]
  }
  // Add more categories as needed
];

const ProductFilter = ({ showProductFilter, setShowProductFilter }) => {
  const [isFAQopen, setIsFAQopen] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null); // State to manage selected option
  const [minValue, set_minValue] = useState(700);
  const [maxValue, set_maxValue] = useState(7000);

  // Get context values
  const context = useContext(MyContext);
  const { filterType, setFilterType, filterMinPrice, setFilterMinPrice, filterMaxPrice, setFilterMaxPrice } = context;

  // Initialize the selected option and price range from context
  useEffect(() => {
    setSelectedOption(filterType ? { option: filterType } : null);
    set_minValue(filterMinPrice);
    set_maxValue(filterMaxPrice);
  }, [filterType, filterMinPrice, filterMaxPrice]);

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);

    // Update the context when the slider values change
    setFilterMinPrice(e.minValue);
    setFilterMaxPrice(e.maxValue);
  };

  const handleOptionChange = (category, option) => {
    // If the same option is clicked, unselect it; otherwise, select the new option
    if (selectedOption?.category === category && selectedOption?.option === option) {
      setSelectedOption(null);
      setFilterType(null); // Clear filter type in context
    } else {
      setSelectedOption({ category, option });
      setFilterType(option); // Update filter type in context
    }
  };

  return (
    <div className={`${showProductFilter ? "flex overflow-hidden" : "hidden"} flex-col lg:relative items-center justify-center lg:justify-start w-[100vw] min-h-screen lg:min-h-[60vh] lg:h-fit lg:w-96 bg-slate-50 lg:rounded-lg lg:flex lg:flex-col gap-8 absolute`}>
      {showProductFilter && <ImCancelCircle className='text-3xl absolute top-2 right-2 lg:hidden' onClick={() => setShowProductFilter(false)} />}
      
      <div className="flex flex-col gap-4 p-4 justify-start">
        <h2 className='text-2xl font-bold'>CATEGORIES:</h2>
        
        {categories.map((category, index) => (
          <div key={index} className="group border border-gray-700 bg-gray-50 p-6 gap-2">
            <dt className='flex justify-between items-center cursor-pointer' onClick={() => setIsFAQopen(isFAQopen === index ? null : index)}>
              <p className='font-semibold text-lg'>{category.name}</p>
              <FaAngleUp className={`${isFAQopen === index ? "" : "-rotate-180"} transition`} />
            </dt>
            <dd className={`text-lg font-light mt-6 ${isFAQopen === index ? "" : "hidden"}`}>
              <ul className="max-w-sm flex flex-col">
                {category.options.map((option, idx) => (
                  <li key={idx} className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                    <div className="relative flex items-start w-full">
                      <div className="flex items-center h-5">
                        <input
                          id={`category-radio-${index}-${idx}`}
                          type="radio"
                          className="border-gray-200 rounded"
                          // Pre-select if the option matches the filterType in context
                          checked={selectedOption?.option === option}
                          onChange={() => handleOptionChange(category.name, option)}
                        />
                      </div>
                      <label htmlFor={`category-radio-${index}-${idx}`} className="ms-3.5 block w-full text-sm text-gray-600">
                        {option}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}

        {/* Price Filter */}
        <div className="flex flex-col gap-4 mt-6 w-[100%]">
          <h2 className="text-2xl font-bold">PRICE RANGE:</h2>
          <MultiRangeSlider
            min={0}
            max={10000}
            step={100}
            minValue={minValue}
            maxValue={maxValue}
            onInput={handleInput}
            ruler={false}
            style={{
              border: "none",
              boxShadow: "0px 0px 3px 0px #f0f0f0"
            }}
          />
          <div className="flex justify-between">
            <span>₹{minValue}</span>
            <span>₹{maxValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
