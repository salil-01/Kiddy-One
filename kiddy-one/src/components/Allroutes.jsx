import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import { HomePage } from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<ProductPage />} />
        <Route
          path="/cart"
          element={
            // <PrivateRoute>
            <Cart />
            // </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            // <PrivateRoute>
            <Checkout/>
            // </PrivateRoute>
          }
        />
        {/* <Route path="/singleproduct/:id" element={<SingleProductPage />} />
          <Route
          path="/account"
          element={
            <PrivateRoute>
              <MyAccountPages />
            </PrivateRoute>
          }
        />
       
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/deshboard" element={<Deshboard />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/ordermanagement" element={<OrderManagement />} />
        <Route path="/otp" element={<Otp />} />
        <Route />
        <Route />  */}
      </Routes>
    </div>
  );
};

export { Allroutes };
