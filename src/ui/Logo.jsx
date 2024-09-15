import React from "react";
import { FaCarSide } from "react-icons/fa6";

function Logo() {
  return (
    <div className=" text-2xl font-bold flex items-center gap-x-2">
      <span className=" text-yellow-500">
        <FaCarSide />
      </span>
      <span>
        <span className=" text-blue-500">اتو</span>
        <span className=" text-yellow-500">رنت</span>
      </span>
    </div>
  );
}

export default Logo;