import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";

function RentInfoOrderDetail() {
  return (
    <div className=" w-full bg-white  max-w-screen-xl rounded-xl p-8">
      <div className=" w-full text-gray-700 text-center text-lg md:text-2xl font-bold">
        <p>
          خودروی شما اماده تحویل می باشد کارشناسان ما در سریع ترین زمان ممکن جهت
          پیگیری سفارش با شما تماس خواهند گرفت.
        </p>
        <p className=" my-4">جزییات سفارش</p>
      </div>
      <div className=" w-full flex justify-center">
      <div className=" grid grid-cols-2 lg:grid-cols-3  w-full gap-8 my-4">
        <div className=" flex gap-x-2  items-center justify-start lg:justify-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700">محل تحویل</span>
            <span className=" text-gray-400">تحویل در محل تهران</span>
          </span>
        </div>
        <div className=" flex gap-x-2 justify-start lg:justify-center items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700"> تاریخ تحویل</span>
            <span className=" text-gray-400">1403/7/10 </span>
          </span>
        </div>
        <div className=" flex gap-x-2 justify-start lg:justify-center items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700"> خودرو </span>
            <span className=" text-gray-400">بنز s500 </span>
          </span>
        </div>
        <div className=" flex gap-x-2 justify-start lg:justify-center items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700"> محل بازگشت </span>
            <span className=" text-gray-400">تحویل در محل بازگشت </span>
          </span>
        </div>
        <div className=" flex gap-x-2 justify-start lg:justify-center items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700"> تاریخ بازگشت </span>
            <span className=" text-gray-400">1403/7/28 </span>
          </span>
        </div>
        <div className=" flex gap-x-2 justify-start lg:justify-center items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700"> با راننده</span>
          </span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default RentInfoOrderDetail;
