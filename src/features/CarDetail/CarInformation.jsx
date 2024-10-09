import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";

function CarInformation() {
  return (
    <div className=" w-full my-4 bg-white rounded-xl border p-4">
      <p className=" text-2xl text-gray-700 font-bold">مشخصات</p>
      <div className="border-b mt-2"></div>
      <div className="border-b-2 border-[rgb(253,183,19)] w-24"></div>
      <div className=" grid grid-cols-2 lg:grid-cols-3  gap-8 my-4">
        <div className=" flex gap-x-2 items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700">مسافت پیموده </span>
            <span className=" text-gray-400">12 کیلومتر</span>
          </span>
        </div>
        <div className=" flex gap-x-2 items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700">نوع دنده</span>
            <span className=" text-gray-400">اتوماتیک </span>
          </span>
        </div>
        <div className=" flex gap-x-2 items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700"> سوخت </span>
            <span className=" text-gray-400">بنزین </span>
          </span>
        </div>
        <div className=" flex gap-x-2 items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700"> ظرفیت </span>
            <span className=" text-gray-400">4 نفر </span>
          </span>
        </div>
        <div className=" flex gap-x-2 items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700"> فرمان </span>
            <span className=" text-gray-400">هیدرولیک </span>
          </span>
        </div>
        <div className=" flex gap-x-2 items-center">
          <span className=" text-4xl text-gray-500">
            <FaRegSquareCheck />
          </span>
          <span className=" flex flex-col text-sm ">
            <span className=" text-gray-700"> مدل</span>
            <span className=" text-gray-400"> 2016</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CarInformation;
