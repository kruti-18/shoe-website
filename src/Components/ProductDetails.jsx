import React, { useState } from "react";
import Navbar from "./Navbar";

const ProductDetails = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    return (
      <>
      <Navbar/>
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 bg-[#F8F0E5] ">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img className="w-full" alt="img of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
                <img className="mt-6 w-full" alt="img of a girl posing" src="https://i.ibb.co/qxkRXSq/component-image-two.png" />
            </div>
            <div className="md:hidden">
                <img className="w-full" alt="img of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
                <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                </div>
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-[gray-200] pb-6">
                    <p className="text-sm leading-none text-gray-600">Adidas Fall Collection</p>
                    <h1
                        className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-[#102C57]
							mt-2
						"
                    >
                        Adidas Signature Shoes
                    </h1>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Colours</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600">Smoke Blue with red accents</p>
                        <div
                            className="
								w-6
								h-6
								bg-gradient-to-b
								from-gray-900
								to-indigo-500
								ml-3
								mr-4
								cursor-pointer
							"
                        ></div>
                        <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
               
                <button
                    className="
                     border-2  border-[#102c57]
                    bg-transparent
                     text-[#102C57]
                    
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						w-full
						py-4
						hover:bg-[#102C57]
            hover:text-[#F8F0E5]
					"
                >
                  
                    Check availability in store
                </button>
                <div>
                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">It   is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                    <p className="text-base leading-4 mt-7 text-gray-600">Product Code: 8BN321AF2IF0NYA</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Length: 13.2 inches</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Height: 10 inches</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Depth: 5.1 inches</p>
                    <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">Composition: 100% calf leather, inside: 100% lamb leather</p>
                </div>
                <div>
                    <div className="border-t border-b py-4 mt-7 border-gray-200">
                        <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Shipping and returns</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-b py-4 border-gray-200">
                        <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Contact us</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
                            If you have any questions on how to return your item to us, contact us.
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
        
    );
};

export default ProductDetails;























// import React from 'react'
// import Navbar from './Navbar'
// import'../styles/ProductDetails.css'

// function ProductDetails() {
//   return (
//     <>
//     <Navbar/>

//     <div className='product-page'>
//       <div className="container">
//       <div className="product-img">
          
//           </div>
  
//           <div className="product-about">
//               <div className="company-name">NIKE</div>
//               <div className="title">AIR JORDAN</div>
//               <div className="price">100$</div>

//               <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique mollitia quia eum nisi nostrum expedita nihil praesentium quo cupiditate eveniet quos pariatur suscipit, alias totam, vitae nam vero? Natus, reprehenderit.</div>
              

//               <div className="buying-option">
//                 <div className="size">
//                   <label htmlFor="" >Size: </label>
//                   <select name="" id="">
                    
//                     <option value="">5UK</option>
//                     <option value="">6UK</option>
//                     <option value="">7UK</option>
//                     <option value="">8UK</option>
//                     <option value="">9UK</option>
//                   </select>
//                 </div>
             

//                 <div className="add-cart">
//                   <label htmlFor="">Quantity:</label>
//                   <input type="number"value='1' />
                  
//                   <button className="buy">BUY NOW</button>
//                 </div>

               
//               </div>

              
//           </div>
//       </div>
       
//     </div>
//     </>
//   )
// }

// export default ProductDetails