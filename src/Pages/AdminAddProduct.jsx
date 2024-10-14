import React, { useContext, useState } from 'react';
import { MdDelete } from "react-icons/md";
import myPic from "../assets/defaultPic.jpg";
import MyContext from '../Context/data/MyContext';
import cloudinary from '../config/cloudinary';
import { useNavigate } from 'react-router-dom';

const AdminAddProduct = () => {
  const context = useContext(MyContext);
  const { product, setProduct, addProduct } = context;

  const [isUploading, setIsUploading] = useState(false); // To track the image upload status

  const navigate = useNavigate();

  const handleImageChange = async (e) => {
    try {
      const files = Array.from(e.target.files);
      let newImages = [...product.images, ...files];

      // Limit to 4 images
      if (newImages.length > 4) {
        newImages = newImages.slice(-4); // Keep the last 4 images
      }

      const imageUrls = [];
      setIsUploading(true); // Start uploading process

      for (const imageFile of newImages) {
        const reader = new FileReader();
        const imageBase64 = await new Promise((resolve, reject) => {
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(imageFile); // Convert to base64
        });

        const formData = new FormData();
        formData.append('file', imageBase64);
        formData.append('upload_preset', 'tradezy'); // Replace with actual preset
        formData.append('folder', 'tradezy');

        const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/upload`, {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();
        if (response.ok) {
          imageUrls.push(result.secure_url); // Push the secure URL if upload is successful
        } else {
          throw new Error(result.error.message); // Handle Cloudinary error response
        }
      }

      setProduct({
        ...product,
        images: imageUrls,
      });
      setIsUploading(false); // Image upload completed
    } catch (error) {
      setIsUploading(false); // Handle errors and reset uploading state
      console.error("Image upload failed:", error.message);
    }
  };


  const handleAddProduct = async (e) => {
    e.preventDefault();
    
    if (isUploading) {
      alert("Please wait until the images are uploaded.");
      return;
    }

    try {
      await addProduct(); 
      navigate('/admin/dashboard')

    } catch (error) {
      console.error("Failed to add product:", error.message);
      // Optionally, handle errors related to addProduct here
    }
  };

  return (
    <main className='min-h-screen overflow-x-hidden mb-4'>
      <div id="profile" className='w-screen min-h-[95vh] lg:mt-12 lg:px-12 flex relative justify-center'>
        <div id="cartProducts" className='lg:flex flex-col p-0 w-[100vw] lg:w-[80vw] min-h-[60vh] m-0 lg:mt-0 bg-slate-100 mx-0 lg:mx-2 lg:rounded-lg lg:p-6 items-center overflow-x-hidden'>
          <div className="w-full flex items-center justify-center mb-10 mt-4">
            <h1 className=' text-4xl md:text-6xl font-normal text-red-500 underline'>Add Product</h1>
          </div>

          <form className="w-full mt-14 flex flex-col justify-center items-center gap-7 md:gap-10">
            {/* Product form fields */}
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_number" id="floating_number" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl" placeholder=" " value={product.title} onChange={(e) => setProduct({...product, title: e.target.value})} required />
              <label htmlFor="floating_number" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl">Product Name</label>
            </div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6 w-full">
              <div className="relative z-0 w-full mb-5 group">
                <input type="number" name="floating_qty" id="floating_qty" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl" placeholder=" " value={product.qty} onChange={(e) => setProduct({ ...product, qty: e.target.value })} required max={200} min={0} />
                <label htmlFor="floating_qty" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl">Quantity</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="number" name="floating_price" id="floating_price" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl" placeholder=" "  value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})}  required max={100000} min={0} />
                <label htmlFor="floating_price" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl">{"Price(₹)"}</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <select 
                  name="category" 
                  id="category" 
                  className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl" 
                  required
                  value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} 
                >
                  <option value="" disabled selected>Select Category</option>
                  <option value="apparel">Apparel</option>
                  <option value="shoes">Shoes</option>
                  <option value="watches">Watches</option>
                  <option value="bags">Bags</option>
                  <option value="jewellery">Jewellery</option>
                  <option value="caps_hats">Caps & Hats</option>
                  <option value="home">Home</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="outdoor">Outdoor</option>
                  <option value="books">Books</option>
                  <option value="videogames">Video Games</option>
                  <option value="movies">Movies</option>
                  <option value="tv_appliances">TV & Appliances</option>
                  <option value="headphones">Headphones</option>
                  <option value="stationary">Stationary</option>
                  <option value="computer_accessories">Computer & Accessories</option>
                </select>
                <label htmlFor="category" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl">Category</label>
              </div>

            </div>

            <div className="w-full px-4">
              <label htmlFor="message" className="block mb-2 text-xl font-normal text-black">Product Description:</label>
              <textarea id="message" rows="8" className="block p-2.5 w-full  text-base md:text-lg text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Describe the product" maxLength={500}  value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})}  required ></textarea>
            </div>

            
            <div className="w-full flex flex-col gap-8 my-6 items-center justify-center">
              <h3 className=' text-lg md:text-2xl font-medium text-slate-700'>Select product image</h3>
              <div className="w-full h-48 md:h-80 bg-slate-300 rounded-lg border-[4px] border-dashed border-slate-700 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-black" onClick={() => document.getElementById('imageUpload').click()}>
                <h3 className='text-lg md:text-2xl font-medium text-slate-700' id="placeholder">{isUploading ? "Uploading" : "Select product image"}</h3>
              </div>

              <input type="file" id="imageUpload" name="image" accept="image/*" multiple style={{ display: 'none' }} onChange={handleImageChange} />

              {/* Button to add product */}
              <div className="w-full my-10 flex items-center justify-center">
                <button type="submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg py-2.5 text-center me-2 mb-2 w-fit px-6 text-xl" disabled={isUploading} onClick={handleAddProduct}>
                  {isUploading ? "Uploading..." : "Add Product"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AdminAddProduct;
