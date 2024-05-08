import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import Hero from './Pages/Hero.jsx';
import LogIn from './Pages/LogIn.jsx';
import './index.css';
import Signup from './Pages/Signup.jsx';
import Categories from './Pages/Categories.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path='categories' element={<Categories />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
