import React from "react";
import Layout from "../features/Layout/Layout";
import ProcessOrderDetail from "../features/OrderDetail/ProcessOrderDetail";
import Header from "../features/Header/Header";
import { HiChevronLeft } from "react-icons/hi2";
import RentInformation from "../features/Payment/RentInformation";
import RentInfoOrderDetail from "../features/OrderDetail/RentInfoOrderDetail";

function OrderDetail() {
  return (
    <Layout>
      <Header>
        <img
          src="./images/article/5.jpg"
          alt="auto-rent"
          className="w-screen h-screen "
        />
        <div className=" absolute z-30 top-0  w-full bg-black opacity-70 h-full rounded-b-xl"></div>
        <div className=" z-30 absolute   bottom-64  flex justify-center w-full">
          <div className=" flex flex-col gap-y-2">
            <p className="  text-4xl text-[rgb(253,183,19)]">تحویل خودرو </p>
            <p className=" text-gray-400 flex items-center">
              <span>اتو رنت </span>
              <span>
                <HiChevronLeft />
              </span>
              <span>تحویل خودرو</span>
            </p>
          </div>
        </div>
      </Header>
      <div className=" flex flex-col items-center px-4">
        <ProcessOrderDetail />
        <div className=" rounded-lg py-1 px-4 flex justify-center items-center gap-x-3 w-full max-w-screen-xl bg-blue-100 text-green-500 mb-16">
          <span className="text-sm sm:text-lg">
            پرداخت با موفقیت انجام شد.
          </span>
        </div>
        <RentInfoOrderDetail/>
        <div className="w-full flex justify-center ">
            <button className=" py-2 w-48 sm:w-64 rounded-lg my-16  bg-blue-600 text-white">پیگیری سفارش</button>
        </div>
      </div>
    </Layout>
  );
}

export default OrderDetail;
