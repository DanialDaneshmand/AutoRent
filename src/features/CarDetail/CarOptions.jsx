import React from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { toPersianNumbers } from "../../utils/toPersianNumbers";


function CarOptions() {
  return (
    <div className=" w-full my-4 bg-white rounded-xl border p-4">
      <p className=" text-2xl text-gray-700 font-bold">امکانات</p>
      <div className="border-b mt-2"></div>
      <div className="border-b-2 border-[rgb(253,183,19)] w-24"></div>
      <div className=" grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-8 my-4">
        <div className="  flex gap-x-2 items-center">
          <span className=" text-2xl text-gray-500">
            <FaCircleArrowLeft />
          </span>
          <span>
            <span className=" text-gray-700"> گرمکن صندلی </span>
          </span>
        </div>
        <div className="  flex gap-x-2 items-center">
          <span className=" text-2xl text-gray-500">
            <FaCircleArrowLeft />
          </span>
          <span>
            <span className=" text-gray-700"> سیستم PRE-SAFE Brake </span>
          </span>
        </div>
        <div className="  flex gap-x-2 items-center">
          <span className=" text-2xl text-gray-500">
            <FaCircleArrowLeft />
          </span>
          <span>
            <span className=" text-gray-700"> گیربکس {toPersianNumbers(7)} سرعته اتوماتیک </span>
          </span>
        </div>
        <div className="  flex gap-x-2 items-center">
          <span className=" text-2xl text-gray-500">
            <FaCircleArrowLeft />
          </span>
          <span>
            <span className=" text-gray-700">
              {" "}
              گرمکن و تهویه متبوع صندلی ها{" "}
            </span>
          </span>
        </div>
        <div className="  flex gap-x-2 items-center">
          <span className=" text-2xl text-gray-500">
            <FaCircleArrowLeft />
          </span>
          <span>
            <span className=" text-gray-700"> استارت بدون کلید </span>
          </span>
        </div>
        <div className="  flex gap-x-2 items-center">
          <span className=" text-2xl text-gray-500">
            <FaCircleArrowLeft />
          </span>
          <span>
            <span className=" text-gray-700"> تعلیق تمام الکترونیکی </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CarOptions;
