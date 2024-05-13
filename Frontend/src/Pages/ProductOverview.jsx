import React, { useState } from 'react'

const ProductOverview = () => {

    const [selectedImage, setSelectedImage] = useState("https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

    const [selectedId, setSelectedId] = useState(1);

    const clickedImage = (img, id) => {
        setSelectedImage(img);
        setSelectedId(id);
    }


  return (
    <main  className='min-h-screen overflow-x-hidden mb-6'>
        <div id="productPage" className=' w-screen min-h-[100vh] lg:mt-12 lg:px-12 flex relative justify-center'>
          <div id="productsCollection" className={`lg:flex flex-col w-screen lg:w-[80vw] min-h-[100vh] m-0 lg:mt-0 bg-slate-100 mx-0 lg:mx-2 lg:rounded-lg p-3`}>
            <div id="imageAndDescription" className=' flex w-[100%] gap-8'>
                <div id="imageSection" className=' flex flex-col w-[50%] gap-4 p-2'>
                    <div id="selectedImage" className=' w-[100%] h-[40rem] border border-black'>
                        <img src={selectedImage} alt="product image" className='w-[100%] h-[100%] object-cover p-0' />
                    </div>
                    <div id="allImage" className=' w-[100%] flex items-center justify-evenly'>
                        <div id="imgBox" className={`${selectedId==1? "border-blue-700 border-[3px]" : "border border-black "} w-[10rem] h-[10rem] cursor-pointer`} onClick={()=> clickedImage("https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 1)}>
                            <img src="https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img box" className='w-[100%] h-[100%] object-cover p-0' />
                        </div>
                        <div id="imgBox" className={`${selectedId==2? "border-blue-700 border-[3px]" : "border border-black "} w-[10rem] h-[10rem] cursor-pointer`}  onClick={()=> clickedImage("https://images.unsplash.com/photo-1541351991055-b55135fea4bf?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 2)}>
                            <img src="https://images.unsplash.com/photo-1541351991055-b55135fea4bf?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img box" className='w-[100%] h-[100%] object-cover p-0' />
                        </div>
                        <div id="imgBox" className={`${selectedId==3? "border-blue-700 border-[3px]" : "border border-black "} w-[10rem] h-[10rem] cursor-pointer`}  onClick={()=> clickedImage("https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 3)}>
                            <img src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img box" className='w-[100%] h-[100%] object-cover p-0' />
                        </div>
                        <div id="imgBox" className={`${selectedId==4? "border-blue-700 border-[3px]" : "border border-black "} w-[10rem] h-[10rem] cursor-pointer`}  onClick={()=> clickedImage("https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 4)}>
                            <img src="https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img box" className='w-[100%] h-[100%] object-cover p-0' />
                        </div>
                    </div>
                </div>
                <div id="descriptionSection">

                </div>
            </div>

          </div>  
        </div>
    </main>        
  )
}

export default ProductOverview