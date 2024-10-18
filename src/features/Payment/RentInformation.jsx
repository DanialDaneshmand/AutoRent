import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";

function RentInformation() {
  return (
    <div className=" w-full my-4 bg-white rounded-xl border p-4 max-w-screen-xl mb-4">
      <p className=" text-xl sm:text-2xl text-gray-700 font-bold">اطلاعات رزرو</p>
      <div className="border-b mt-2"></div>
      <div className="border-b-2 border-[rgb(253,183,19)] w-24"></div>
      <div className=" grid grid-cols-2 lg:grid-cols-3  gap-8 my-4">
        <div className=" flex gap-x-2 items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700">محل تحویل</span>
            <span className=" text-gray-400">تحویل در محل تهران</span>
          </span>
        </div>
        <div className=" flex gap-x-2 items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700"> تاریخ تحویل</span>
            <span className=" text-gray-400">1403/7/10 </span>
          </span>
        </div>
        <div className=" flex gap-x-2 items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700"> خودرو </span>
            <span className=" text-gray-400">بنز s500 </span>
          </span>
        </div>
        <div className=" flex gap-x-2 items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700"> محل بازگشت  </span>
            <span className=" text-gray-400">تحویل در محل بازگشت </span>
          </span>
        </div>
        <div className=" flex gap-x-2 items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700"> تاریخ بازگشت </span>
            <span className=" text-gray-400">1403/7/28 </span>
          </span>
        </div>
        <div className=" flex gap-x-2 items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700"> با راننده</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RentInformation;
