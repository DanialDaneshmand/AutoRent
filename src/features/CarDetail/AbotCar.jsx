import React from "react";
import { FaRegSquareCheck, FaRegStar, FaStar } from "react-icons/fa6";
import { cars } from "../../../data/data";

function AboutCar({state}) {
  return (
    <div className=" w-full bg-white rounded-xl border p-4">
      <div className=" flex justify-between">
        <span className=" text-2xl font-bold text-gray-700">
          {cars[state.id - 1].title}
        </span>
        <span className="flex items-center gap-x-2 text-[rgb(253,183,19)]">
          <FaRegStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
      </div>
      <div className="border-b mt-2"></div>
      <div className="border-b-2 border-[rgb(253,183,19)] w-24"></div>
      <div className=" text-gray-500 flex justify-start sm:justify-center gap-4 my-4 flex-wrap">
        <span>
          <span className=" flex items-center w-full  gap-x-2">
            <span>
              <FaRegSquareCheck />
            </span>
            <span>حداقل سن راننده :25 سال</span>
          </span>
        </span>
        <span>
          <span className=" flex items-center w-full gap-x-2">
            <span>
              <FaRegSquareCheck />
            </span>
            <span>تعداد سرنشین :4 نفر</span>
          </span>
        </span>
        <span>
          <span className=" flex items-center w-full gap-x-2">
            <span>
              <FaRegSquareCheck />
            </span>
            <span>چمدان : 2 چمدان بزرگ</span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default AboutCar;
