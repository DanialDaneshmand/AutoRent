import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { articles } from "../../../data/data";
import { HiOutlineClock } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi2";


function Articels() {
  const [newArticels, setNewArticles] = useState(articles.slice(0, 3));
  return (
    <div className=" w-full flex justify-center my-16 px-4">
      <div className=" w-full max-w-screen-xl ">
        <div className=" flex flex-col items-center  w-full gap-y-2">
          <p className=" text-gray-500 text-lg"> مقالات ما</p>
          <p className=" text-3xl text-gray-800">
            <span>مجله </span>
            <span className=" text-[rgb(253,183,19)]">خودرو</span>
          </p>
        </div>
        <div className="flex justify-center sm:justify-end  w-full ">
          <button className="sm:-mt-5 mt-5 ml-4 flex items-center gap-x-2 sm:text-lg text-blue-600">
            <span>مشاهده همه</span>
            <span>
              <FaAngleLeft />
            </span>
          </button>
        </div>
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {newArticels.map((item) => (
            <div key={item.id} className=" border rounded-xl p-2 bg-white space-y-2">
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
                        <HiOutlineClock/>
                    </span>
                    <span>3 دقیقه</span>
                </span>
                <span className=" flex items-center gap-x-1">
                    <span>
                        <HiOutlineEye/>
                    </span>
                    <span>1,213</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articels;
