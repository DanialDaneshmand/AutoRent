import React from "react";
import ProcessPayment from "../features/Payment/ProcessPayment";
import Header from "../features/Header/Header";
import Layout from "../features/Layout/Layout";
import { HiChevronLeft } from "react-icons/hi2";
import RentInformation from "../features/Payment/RentInformation";
import CalCulationPrice from "../features/Payment/CalCulationPrice";
import Conditions from "../features/Payment/Conditions";

function PayMent() {
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
            <p className="  text-4xl text-[rgb(253,183,19)]">پرداخت </p>
            <p className=" text-gray-400 flex items-center">
              <span>اتو رنت </span>
              <span>
                <HiChevronLeft />
              </span>
              <span>ثبت درخواست رزرو</span>
            </p>
          </div>
        </div>
      </Header>
      <div className=" flex flex-col items-center px-4">
        <ProcessPayment />
        <RentInformation />
        <CalCulationPrice />
        <Conditions/>
      </div>
    </Layout>
  );
}

export default PayMent;
