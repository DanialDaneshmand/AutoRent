import React from "react";
import { HiCreditCard } from "react-icons/hi2";

function Wallet() {
  return (
    <div className=" ml-4 xl:ml-0">
      <div className=" border-b flex justify-between pb-4">
        <span className=" text-lg font-bold text-gray-600 ">کیف پول</span>
        <span className=" flex items-center gap-x-2 text-blue-600">
          <HiCreditCard className=" text-xl" />
          <span>افزایش اعتبار</span>
        </span>
      </div>
      <div className=" flex flex-col items-center py-16">
        <p className=" text-xl text-gray-500 mb-4">موجودی کیف پول</p>
        <div className=" border rounded-xl bg-blue-100 flex justify-center items-center w-64 py-8">
          <p className=" text-4xl font-bold text-gray-500 ">1,000,000 تومان</p>
        </div>
        <div className=" lg:w-7/12 pr-2">
          <div className=" flex gap-x-3  mt-8 ">
            <div className="border py-3 px-4 md:px-8 rounded-lg text-gray-500 flex justify-center items-center">
              100,000 تومان
            </div>
            <div className="border py-3 px-4 md:px-8 rounded-lg text-gray-500 flex justify-center items-center">
              200,000 تومان
            </div>
            <div className="border py-3 px-4 md:px-8 rounded-lg text-gray-500 flex justify-center items-center">
              300,000 تومان
            </div>
          </div>
          <div className="  mt-4">
            <input
              type="text"
              placeholder="مبلغ مورد نظر را وارد کنید"
              className=" w-full outline-none border p-2 rounded-lg"
            />
          </div>
          <button className=" w-full rounded-lg bg-blue-600 text-white py-3 mt-4">افزایش اعتبار</button>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
