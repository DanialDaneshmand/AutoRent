import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Rent from "./pages/Rent";
import CarDetail from "./pages/CarDetail";
import UserInformation from "./pages/UserInformation";
import PayMent from "./pages/PayMent";
import OrderDetail from "./pages/OrderDetail";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/carDetail" element={<CarDetail />} />
        <Route path="/userInfo" element={<UserInformation />} />
        <Route path="/payment" element={<PayMent />} />
        <Route path="/orderDetail" element={<OrderDetail />} />
      </Routes>
    </div>
  );
}

export default App;
