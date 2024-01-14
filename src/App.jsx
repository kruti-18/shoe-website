import './App.css'
import Header from './Components/Header'
import ProductDetails from './Components/ProductDetails'
import Products from './Components/Products'
import CartPage from './Components/CartPage'
import { useState } from 'react'

function App() {
  
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <>

    
     <Header cartOpen = { () => {setCartOpen(true)}}/>
     {/* <Products/> */}
     {/* <ProductDetails/> */}
     {/* <CartPage/> */}

     {cartOpen && <CartPage onClose={() => setCartOpen(false)} />}
     
    </>
  )
}

export default App
