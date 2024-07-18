import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import Hero from './Pages/Hero.jsx';
import LogIn from './Pages/LogIn.jsx';
import './index.css';
import Signup from './Pages/Signup.jsx';
import Categories from './Pages/Categories.jsx';
import Product from './Pages/Product.jsx';
import ProductOverview from './Pages/ProductOverview.jsx';
import Cart from './Pages/Cart.jsx';
import Me from './Pages/Me.jsx';
import Error from './Pages/Error.jsx';
import Checkout from './Pages/Checkout.jsx';
import AdminDashboard from './Pages/AdminDashboard.jsx';
import AdminAddProduct from './Pages/AdminAddProduct.jsx';
import MyState from './Context/data/MyState.jsx';
import AdminUpdateProduct from './Pages/UpdateProduct.jsx';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <MyState>
    <BrowserRouter >
      <Routes >

        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path='categories' element={<Categories />} />
          <Route path='products' element={<Product />} />
          <Route path='productOverview/:id' element={<ProductOverview />} />
          <Route path='cart' element={<Cart />} />
          <Route path='me' element={<Me />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='admin/dashboard' element={<AdminDashboard />} />
          <Route path='admin/addProduct' element={<AdminAddProduct />} />
          <Route path='admin/updateProduct' element={<AdminUpdateProduct />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </BrowserRouter>
    </MyState>
  </React.StrictMode>
);
