import React from 'react'
import '../styles/Card.css'
import shoeImg from '../assets/shoe_image.png'

function Card() {
  return (
    <>
    <div className="card">
        <img src={shoeImg} alt="" className="card-img" />
        <div className="card-title">Shoe Name</div>
        <div className="card-heading">COMPANY NAME</div>
        <div className="price">$100</div>
    </div>
    </>
    
  )
}

export default Card