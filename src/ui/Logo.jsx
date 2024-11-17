import React from "react";
import { FaCarSide } from "react-icons/fa6";

function Logo() {
  return (
    <div className=" text-2xl font-bold flex items-center gap-x-2">
      {/* <span className=" text-yellow-500">
        <FaCarSide />
      </span> */}
      <img src="/images/logo.png" className=" rounded-full border w-12 sm:w-16 h-12 sm:h-16" alt="" />
      <span>
        <span className=" text-blue-500">اتو</span>
        <span className=" text-yellow-500">رنت</span>
      </span>
    </div>
  );
}

export default Logo;
