import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import { HomePage } from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import SignIn from "../pages/SignIn";
import PrivateRoute from "./PrivateRoute";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<SignIn />} />
        <Route path="/product" element={<ProductPage />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default Allroutes;
