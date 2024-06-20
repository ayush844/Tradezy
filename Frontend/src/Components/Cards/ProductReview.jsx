import React from 'react';
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

const ProductReview = () => {
  return (
    <div className='border-2 border-black h-44 md:h-52 p-2 md:p-4 rounded-md shadow-lg hover:shadow-orange-500 transition-all flex flex-col gap-2'>
        <div id="infoAndStar" className='flex  w-full justify-between px-4'>
            <div id="info" className='flex items-center gap-2'>
                <div id="imgBox" className=' w-12 h-12 rounded-full'>
                    <img className='rounded-full w-full h-full object-cover' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Customer" />
                </div>
                <div className=" w-20 sm:w-44 md:w-40 lg:w-44 line-clamp-1 overflow-hidden">
                    <h3 id='customer-name' className=' font-normal text-lg'>Nidhi Tanwar</h3>
                </div>
            </div>

            <div id="stars" className="flex items-center">
                {[...Array(3)].map((_, i) => (<IoIosStar className=' text-xl text-yellow-500' key={i} />))}
                {[...Array(1)].map((_, i) => (<IoIosStarHalf className=' text-xl text-yellow-500' key={i} />))}
                {[...Array(1)].map((_, i) => (<IoIosStarOutline className=' text-xl text-yellow-500' key={i} />))}
            </div>
        </div>
        <div id="review" className='px-4 line-clamp-4 overflow-hidden'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nobis corrupti a, soluta aliquid qui, veritatis fugiat repellendus deserunt ipsa reiciendis sed modi et atque, eveniet voluptate. Fuga corporis, id mollitia eum eaque placeat, nemo eligendi rerum laborum nisi magnam odio maiores in. Ducimus aspernatur esse minima assumenda porro voluptas temporibus, nihil accusantium! Veniam ipsam praesentium quae numquam veritatis repellat aspernatur est iste dolores. Sequi, magni. Praesentium suscipit libero quod voluptate sequi excepturi sit assumenda qui quas dolorum nobis repellat, voluptas fugiat quaerat ex nesciunt vitae obcaecati corrupti est iusto velit nulla. Voluptatibus, maxime error id necessitatibus fugit excepturi ut optio qui. Delectus blanditiis hic minima similique, doloribus debitis. Doloremque, asperiores cupiditate. Tempora ipsa beatae, aliquam officiis, magni quidem magnam illum sapiente assumenda placeat ducimus dolorem quas dignissimos temporibus repellendus, quae et molestias illo? Ducimus facere atque minima ab doloremque suscipit reprehenderit accusantium. Natus dolor dicta alias tempore quidem, inventore ullam? Molestiae deserunt tempore voluptatem voluptate officiis laudantium nostrum minus eos quod sequi dolore velit accusamus inventore omnis labore, nihil ut in voluptates facilis minima deleniti iure. Molestias, et magnam! Aperiam harum dicta dolor, quasi dolore numquam veritatis amet consectetur quisquam, expedita impedit laudantium molestias voluptatem magni itaque quaerat odit omnis, sint temporibus soluta labore accusantium voluptatibus quas. Eaque debitis tempore numquam amet animi nam qui, veniam assumenda maiores accusantium sapiente sint provident dolore voluptates enim. Consequuntur, sapiente? Labore iure obcaecati minima exercitationem incidunt. Voluptatum delectus optio id nostrum alias rem, eveniet harum adipisci maiores architecto. Optio possimus enim culpa nesciunt non. Perspiciatis iure quod maiores iste maxime reiciendis ad blanditiis est suscipit nulla. Sapiente officia aliquam repellat quo iste culpa eius impedit consequatur doloribus perspiciatis obcaecati tempora illo alias autem necessitatibus mollitia reiciendis repellendus numquam quaerat cupiditate voluptatibus voluptate unde, ex id. Dolore, harum quas culpa exercitationem explicabo labore?</p>
        </div>
    </div>
  );
};

export default ProductReview;
