import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Rent from "./pages/Rent";
import CarDetail from "./pages/CarDetail";
import UserInformation from "./pages/UserInformation";
import PayMent from "./pages/PayMent";
import OrderDetail from "./pages/OrderDetail";
import ArticelsPage from "./pages/ArticelsPage";
import ArticleDetail from "./pages/ArticleDetail";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import UserProvider from "./Context/userContext";
import UserPanel from "./pages/UserPanel";
import Wallet from "./pages/Wallet";
import Reserve from "./pages/Reserve";
import MyPayment from "./pages/MyPayment";
import MyLocations from "./pages/MyLocations";
import MyComments from "./pages/MyComments";
import ExitPage from "./pages/ExitPage";
import GeneralQuestionsPage from "./pages/GeneralQuestionsPage";
import ScrollToTop from "./ui/ScrollToTop";


function App() {
  return (
    <UserProvider>
      <div>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/general-questions" element={<GeneralQuestionsPage />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/carDetail" element={<CarDetail />} />
          <Route path="/userInfo" element={<UserInformation />} />
          <Route path="/payment" element={<PayMent />} />
          <Route path="/orderDetail" element={<OrderDetail />} />
          <Route path="/articles" element={<ArticelsPage />} />
          <Route path="/articleDetail" element={<ArticleDetail />} />
          <Route path="/Contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/user-panel" element={<UserPanel />}>
            <Route index element={<Navigate to="wallet" replace/>} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="reserve" element={<Reserve />} />
            <Route path="myPayment" element={<MyPayment />} />
            <Route path="location" element={<MyLocations />} />
            <Route path="myComments" element={<MyComments />} />
            <Route path="exit" element={<ExitPage />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
