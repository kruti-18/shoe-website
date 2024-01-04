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
