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

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path='categories' element={<Categories />} />
          <Route path='products' element={<Product />} />
          <Route path='productOverview' element={<ProductOverview />} />
          <Route path='cart' element={<Cart />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
