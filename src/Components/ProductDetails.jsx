import React from 'react'
import Navbar from './Navbar'
import'../styles/ProductDetails.css'

function ProductDetails() {
  return (
    <>
    <Navbar/>

    <div className='product-page'>
      <div className="container">
      <div className="product-img">
          
          </div>
  
          <div className="product-about">
              <div className="company-name">NIKE</div>
              <div className="title">AIR JORDAN</div>

              <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique mollitia quia eum nisi nostrum expedita nihil praesentium quo cupiditate eveniet quos pariatur suscipit, alias totam, vitae nam vero? Natus, reprehenderit.</div>
              <div className="price">100$</div>

              <div className="buying-option">
                <select name="" id="">
                  <option value="">Select Size</option>
                  <option value="">5UK</option>
                  <option value="">6UK</option>
                  <option value="">7UK</option>
                  <option value="">8UK</option>
                  <option value="">9UK</option>
                </select>

                <input type="number"value='1' />
              </div>
          </div>
      </div>
       
    </div>
    </>
  )
}

export default ProductDetails