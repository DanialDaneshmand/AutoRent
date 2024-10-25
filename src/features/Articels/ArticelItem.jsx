import React from "react";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi2";

function ArticelItem({ item }) {
  return (
    <div className=" border rounded-xl p-2 bg-white space-y-2">
      <div className="border rounded-lg  overflow-hidden">
        <img
          src={item.imageSrc}
          alt={item.title}
          className="w-full h-[200px]"
        />
      </div>
      <p className=" text-lg text-gray-800 ">{item.title}</p>
      <p className=" text-sm text-gray-500">{item.text}</p>
      <div className=" flex items-center gap-x-5 text-sm text-gray-500">
        <span className=" flex items-center gap-x-1">
          <span>
            <HiOutlineClock />
          </span>
          <span>3 دقیقه</span>
        </span>
        <span className=" flex items-center gap-x-1">
          <span>
            <HiOutlineEye />
          </span>
          <span>1,213</span>
        </span>
      </div>
    </div>
  );
}

export default ArticelItem;
