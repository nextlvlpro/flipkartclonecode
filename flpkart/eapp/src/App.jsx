import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Comps/Layout/Layout'
import Home from './Comps/Home/Home'
import AllProducts from './Comps/Products/AllProducts'
import SingleProductPage from './Comps/Products/SingleProductPage'
import CategoryProductPage from './Comps/Products/CategoryProductPage'
import SinglecategoryPage from './Comps/Products/SinglecategoryPage'
import Category from './Comps/Products/Category2'
import Category2 from './Comps/Products/Category2'
import Cart from './Comps/Products/Cart'

import Register from './Comps/registerandLogin/Register'
import Login from './Comps/registerandLogin/Login'
import LoggedInUserContextProvider from './LoggedInUserContext'
import AllCart from './Comps/Products/AllCart'
import Logout from './Comps/registerandLogin/Logout'
import BuySingleProduct from './Comps/Products/Buy/BuySingleProduct'
import Orders from './Comps/Products/orders/Orders'

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true

function App() {

 
  return (
    <LoggedInUserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/cart/:id' element={<Cart />} />
          <Route path='/buysingleproduct/:id' element={<BuySingleProduct />} />

          <Route path='/allproducts' element={<AllProducts />} />
          <Route path='/allcart' element={<AllCart />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/' element={<Category2 />}>
            <Route path='/products/:id' element={<SingleProductPage />} />
            <Route path='/newuser/register' element={<Register />} />
            <Route path='/user/login' element={<Login />} />
            <Route path='/user/logout' element={<Logout />} />
          </Route>
          <Route path='/catedoryproducts' element={<CategoryProductPage />} />
          <Route path='/' element={<Category2 />}>
            <Route path='/catedoryproducts/:id' element={<SinglecategoryPage />} />
          </Route>
        </Route>

      </Routes>
    </LoggedInUserContextProvider>
  )
}

export default App
