import React, { useState } from "react";
import { HiOutlineClock } from "react-icons/hi2";
import { toPersianNumbers } from "../utils/toPersianNumbers";

function Reserve() {
  const [count, setCount] = useState(2);
  return (
    <div className="p-4">
      <div className="border-b pb-4 text-gray-600">
        <p className="text-lg font-bold">رزرو های من </p>
      </div>
      <div className="flex justify-between gap-x-3 my-6">
        <div
          onClick={() => setCount(1)}
          className={`border cursor-pointer py-2 w-full border-[rgb(8,35,125)] rounded-lg flex flex-col items-center justify-center ${
            count === 1 ? "bg-[rgb(8,35,125)] text-white" : "text-gray-500"
          }`}
        >
          <span>جاری</span>
          <span className={`${count === 1 && "text-yellow-500"}`}>{toPersianNumbers(1)}</span>
        </div>
        <div
          onClick={() => setCount(2)}
          className={`border cursor-pointer  text-lg w-full border-[rgb(8,35,125)] rounded-lg flex flex-col items-center justify-center ${
            count === 2 ? "bg-[rgb(8,35,125)] text-white" : "text-gray-500"
          }`}
        >
          <span>انجام شده </span>
          <span className={`${count === 2 && "text-yellow-500"}`}>{toPersianNumbers(2)}</span>
        </div>
        <div
          onClick={() => setCount(3)}
          className={`border cursor-pointer text-lg  w-full border-[rgb(8,35,125)] rounded-lg flex flex-col items-center justify-center ${
            count === 3 ? "bg-[rgb(8,35,125)] text-white" : "text-gray-500"
          }`}
        >
          <span>لغو شده</span>
          <span className={`${count === 3 && "text-yellow-500"}`}>{toPersianNumbers(3)}</span>
        </div>
      </div>
      <div>
        <div className=" w-full border my-4 rounded-lg py-2 px-4 flex flex-col sm:flex-row items-center justify-between">
          <div className=" flex flex-col justify-center gap-y-2 md:gap-y-0 md:flex-row items-center gap-x-8">
            <div className=" flex items-center gap-x-2 text-blue-600">
              <span className=" text-xl">
                <HiOutlineClock />
              </span>
              <span>
                {count === 1
                  ? "درحال بررسی"
                  : count === 2
                  ? "انجام شده"
                  : "لغو شده"}
              </span>
            </div>
            <div>
              <img
                src="/images/benz-g-class.png"
                className="w-20 h-20"
                alt=""
              />
            </div>
            <div className=" flex flex-col text-gray-500 text-sm">
              <span>بنز g class</span>
              <span>تاریخ تحویل :{toPersianNumbers(11)} بهمن {toPersianNumbers(1402)}</span>
            </div>
          </div>
          <div>
            <button className="hover:bg-blue-600 mt-4 sm:mt-0 hover:text-white border border-blue-600 text-blue-600 rounded-lg py-2 px-8">
              مشاهده جزییات
            </button>
          </div>
        </div>
        <div className=" w-full border my-4 rounded-lg py-2 px-4 flex flex-col sm:flex-row items-center justify-between">
          <div className=" flex flex-col justify-center gap-y-2 md:gap-y-0 md:flex-row items-center gap-x-8">
            <div className=" flex items-center gap-x-2 text-blue-600">
              <span className=" text-xl">
                <HiOutlineClock />
              </span>
              <span>
                {count === 1
                  ? "درحال بررسی"
                  : count === 2
                  ? "انجام شده"
                  : "لغو شده"}
              </span>
            </div>
            <div>
              <img
                src="/images/benz-g-class.png"
                className="w-20 h-20"
                alt=""
              />
            </div>
            <div className=" flex flex-col text-gray-500 text-sm">
              <span>بنز g class</span>
              <span>تاریخ تحویل :{toPersianNumbers(11)} بهمن {toPersianNumbers(1402)}</span>
            </div>
          </div>
          <div>
            <button className="hover:bg-blue-600 mt-4 sm:mt-0 hover:text-white border border-blue-600 text-blue-600 rounded-lg py-2 px-8">
              مشاهده جزییات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
