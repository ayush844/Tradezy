import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
import { Provider } from 'react-redux';
import { store } from './redux/Store.jsx';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TermsAndConditions from './Pages/TermsAndConditions.jsx';
import PrivacyPolicy from './Pages/Privacy.jsx';
import RefundsCancellations from './Pages/Refunds.jsx';
import ShippingPolicy from './Pages/Shipping.jsx';
import ContactUs from './Pages/Contact.jsx';


// USER

export const ProtectedRoute = ({children})=>{
  const user = localStorage.getItem('user');
  
  if(user){
    return children;
  }else{
    return <Navigate to='/login' />
  }
}


// ADMIN

export const ProtectedRouteForAdmin = ({children})=>{
  const admin = JSON.parse(localStorage.getItem('user'));

  if(admin?.user?.email === 'admin@gmail.com'){
    return children;
  }else{
    return <Navigate to='/login' />
  }

} 


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <MyState>
    <BrowserRouter >
      <Routes >

        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path='categories' element={<Categories />} />
          <Route path='products' element={<Product />} />
          <Route path='productOverview/:id' element={<ProductOverview />} />
          <Route path='teramsandconditions' element={<TermsAndConditions />} />
          <Route path='privacy' element={<PrivacyPolicy />} />
          <Route path='refundorcancellation' element={<RefundsCancellations />} />
          <Route path='shipping' element={<ShippingPolicy />} />
          <Route path='contact' element={<ContactUs />} />

          {/* user specific routes  */}

          <Route path='cart' element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />

          <Route path='me' element={
            <ProtectedRoute>
              <Me />
            </ProtectedRoute>
          } />

          <Route path='checkout' element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          } />



          {/* admin routes  */}


          <Route path='admin/dashboard' element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />

          <Route path='admin/addProduct' element={
            <ProtectedRouteForAdmin>
              <AdminAddProduct />
            </ProtectedRouteForAdmin>
          } />

          <Route path='admin/updateProduct' element={
            <ProtectedRouteForAdmin>
              <AdminUpdateProduct />
            </ProtectedRouteForAdmin>
          } />




          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      <ToastContainer />
    </BrowserRouter>
    </MyState>
    </Provider>
  </React.StrictMode>
);


