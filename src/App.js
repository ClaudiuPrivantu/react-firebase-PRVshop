import React from 'react';
//import './App.scss';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import Reset from './auth/Reset';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './components/pages/contact/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from './components/pages/admin/Admin';
import AdminOnlyRoute from './components/adminOnlyRoute/AdminOnlyRoute';
import ProductDetails from './components/product/productDetails/ProductDetails';
import Cart from './components/pages/cart/Cart';
import CheckoutDetails from './components/pages/checkout/CheckoutDetails';
import Checkout from './components/pages/checkout/Checkout';
import CheckoutSuccess from './components/pages/checkout/CheckoutSuccess';
import OrderHistory from './components/pages/orderHistory/OrderHistory';
import OrderDetails from './components/pages/orderDetails/OrderDetails';
import ReviewProducts from './components/reviewProducts/ReviewProducts';
import NotFound from './components/pages/notFound/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Header />
        <Routes>
          <Route path='/' exact element={ <Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/reset' element={<Reset/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/product-details/:id' element={<ProductDetails/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout-details' element={<CheckoutDetails/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/checkout-success' element={<CheckoutSuccess/>} />
          <Route path='/order-history' element={<OrderHistory/>} />
          <Route path='/order-details/:id' element={<OrderDetails/>} />
          <Route path='/review-product/:id' element={<ReviewProducts/>} />
          <Route path='/*' element={<NotFound/>} />

          <Route path='/admin/*' element={
          <AdminOnlyRoute> 
            <Admin/> 
            </AdminOnlyRoute>
          } 
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
