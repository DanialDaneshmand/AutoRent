import React from "react";
import { FaStar } from "react-icons/fa6";

function CarComments() {
  return (
    <div className=" w-full my-4 bg-white rounded-xl border p-4">
      <p className=" text-2xl text-gray-700 font-bold"> نظرات</p>
      <div className="border-b mt-2"></div>
      <div className="border-b-2 border-[rgb(253,183,19)] w-24"></div>
      <div className=" border rounded-xl p-3 my-4">
        <div className=" flex justify-between">
          <span className=" flex items-center gap-x-2">
            <span>
              <img
                src="./images/profile/1.jpg"
                alt=""
                className=" w-12 h-12 rounded-md"
              />
            </span>
            <span className=" text-sm text-gray-400">تاریخ 1403/3/12</span>
          </span>
          <span className=" flex items-center gap-x-1">
            <span>4.2</span>
            <span className=" text-[rgb(253,183,19)]">
              <FaStar />
            </span>
          </span>
        </div>
        <span className=" text-gray-500 mt-4 block">
          خیلی عالی بود پیشنهاد میکنم یه بارم که شده از اتو رنت ماشین اجاره کنید
          .
        </span>
      </div>
    </div>
  );
}

export default CarComments;
