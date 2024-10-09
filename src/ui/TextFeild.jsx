import React from "react";
import { HiOutlineChevronDown, HiOutlineMapPin } from "react-icons/hi2";

function TextFeild({ title, children, icon }) {
  return (
    <div className=" relative">
      {children}
      <div className=" flex w-full justify-center  items-center">
        <span className=" -ml-8 z-20 text-2xl text-gray-500">{icon}</span>
        <input
          type="text"
          placeholder={title}
          className=" rounded-lg border outline-none py-3 px-10 w-full"
        />
        <span className=" text-2xl -mr-8 text-gray-500">
          <HiOutlineChevronDown />
        </span>
      </div>
    </div>
  );
}

export default TextFeild;
