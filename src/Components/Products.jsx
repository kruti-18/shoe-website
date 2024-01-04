import React from 'react'
import Navbar from './Navbar'
// import Cards from './Cards'
import '../styles/Products.css'
import Card from './Card'



function Products() {
  return (
    <>
       <Navbar/>

       <div className="card-main">
            <div className="card-area">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            
        </div>
       
    </>
  )
}

export default Products