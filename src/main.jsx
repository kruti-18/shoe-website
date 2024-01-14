import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header.jsx';
import Products from './Components/Products.jsx';
import Contact from './Components/Contact.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import CartPage from './Components/CartPage.jsx';
import Checkout from './Components/Checkout.jsx';
import Login from './Components/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
  },

  {
    path: '/products',
    element: <Products/>
  },

  {
    path: '/contact',
    element: <Contact/>
  },

  {
    path: '/product-details',
    element: <ProductDetails/>
  },

  {
    path: '/cart',
    element: <CartPage/>
  },
  {
    path: '/checkout',
    element: <Checkout/>
  },

  {
    path: '/login',
    element: <Login/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
