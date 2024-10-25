import React from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Conditions() {
  return (
    <div className=" w-full max-w-screen-xl rounded-xl  mb-4 bg-gray-300">
      <div className=" w-full bg-white p-4  rounded-t-lg border">
        <p className=" text-xl sm:text-2xl text-gray-700 font-bold">
          {" "}
          شروط و تعهدات طرفین{" "}
        </p>
        <div className="border-b mt-2"></div>
        <div className="border-b-2 border-[rgb(253,183,19)] w-24"></div>
        <div className=" py-4">
          <div className="flex gap-x-2">
            <input type="checkBox" />
            <label htmlFor="" className=" text-sm text-gray-500">
              شروط و تعهدات طرفین قرارداد را قبول دارم
            </label>
          </div>
          <div className=" flex gap-x-2 mt-2">
            <span className=" text-lg text-gray-500">
              <HiOutlineClipboardDocumentList />
            </span>
            <span className=" text-blue-500">متن شروط تعهدات طرفین</span>
          </div>
        </div>
      </div>
      <div className=" py-6 px-4 flex justify-between ">
        <span className="sm:text-xl font-bold">
          مبلغ قابل پرداخت : 45,480,000 تومان
        </span>
        <span>
          <Link to="/orderDetail">
            <button className=" bg-blue-600 text-white py-2 px-12 rounded-lg">
              پرداخت
            </button>
          </Link>{" "}
        </span>
      </div>
    </div>
  );
}

export default Conditions;
