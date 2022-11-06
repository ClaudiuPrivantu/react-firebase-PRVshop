import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../../admin/home/Home';
import Navbar from '../../admin/navbar/Navbar';
import ViewProducts from "../../admin/viewProducts/ViewProducts"
import AddProduct from "../../admin/addProduct/AddProduct"
import Orders from "../../admin/orders/Orders"
import styles from "./../admin/Admin.module.scss"
import OrderDetails from '../../admin/orderDetails/OrderDetails';

const Admin = () => {
  return (
    <div className={styles.admin}>
        <div className={styles.navbar}>
            <Navbar />
        </div>
        <div className={styles.content}>
            <Routes>
                <Route path="home" element={<Home/>} />
                <Route path="all-products" element={<ViewProducts />} />
                <Route path="add-product/:id" element={<AddProduct />} />
                <Route path="orders" element={<Orders />} />
                <Route path="order-details/:id" element={<OrderDetails />} />
            </Routes>
        </div>
    </div>
  )
}

export default Admin;