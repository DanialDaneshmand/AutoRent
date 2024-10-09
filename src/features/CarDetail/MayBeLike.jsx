import React from "react";
import CarListItem from "../CarList/CarListItem";
import { cars } from "../../../data/data";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

function MayBeLike() {
  return (
    <div className=" w-full flex flex-col items-center mb-16 px-4">
      <div className=" flex flex-col sm:flex-row items-center  gap-y-4 sm:gap-y-0 sm:justify-between w-full max-w-screen-xl text-lg sm:text-xl">
        <span className=" text-gray-700">
          خودروهایی که شاید دوست داشته باشید{" "}
        </span>
        <span className=" text-blue-600 flex items-center gap-x-2">
          <span>
            <Link to="/rent">مشاهده بیشتر</Link>
          </span>
          <span>
            <HiOutlineChevronLeft />
          </span>
        </span>
      </div>
      <div className=" w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 mx-4  lg:grid-cols-3 gap-8 mt-16">
        {cars.slice(0, 3).map((item) => (
          <CarListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MayBeLike;
