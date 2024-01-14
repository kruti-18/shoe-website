import React from 'react'
import '../styles/Banner.css'
import shoe_img from '../assets/shoe_image.png'


function Banner() {
  return (
    <>
         <div className="main">
            <div className="main-body">
                <div className="left">
                    <div className="heading">
                        <h1>YOUR FEET</h1>
                        <h1>DESERVE</h1>
                        <h1>BEST</h1>
                    </div>
                    <div className="para">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Corrupti nam dolorem laborum in aperiam, obcaecati pariatur itaque facere mollitia 
                        ab molestias
                    </div>
                    <div className="buttons">
                        <div className="primary">
                            <button>Shop Now</button>
                        </div>

                        <div className="secondary">
                            <button>Categories</button>
                        </div>
                    </div>

                   

                </div>

                <div className="right">
                    <img src={shoe_img} alt="" />
                </div>
            </div>
           
        </div> 
       
    </>

  )
}

export default Banner

 

    //     <section className="dark:bg-gray-800 dark:text-gray-100 ">
    //     <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-36 lg:flex-row lg:justify-center">
    //         <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
    //             <img src={shoe_img} alt="" className="object-contain h-[27rem] w-[27rem] sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
    //         </div>
    //         <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
    //             <h1 className="text-5xl font-bold leadi sm:text-6xl">Ac mattis
    //                 <span className="dark:text-violet-400">senectus</span>erat pharetra
    //             </h1>
    //             <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
    //                 <br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem
    //             </p>
    //             <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
    //                 <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
    //                 <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
    //             </div>
    //         </div>
    //     </div>
    // </section>