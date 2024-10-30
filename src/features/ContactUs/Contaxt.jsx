import React from "react";
import { HiOutlineMapPin } from "react-icons/hi2";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";

function Contaxt() {
  return (
    <div className="grid grid-cols-12 p-4 my-16  w-full max-w-screen-xl bg-white rounded-xl ">
      <div className=" col-span-12 md:col-span-8 space-y-4">
        <p className=" text-lg text-gray-700">ارتباط با دفتر مرکزی اتو رنت</p>
        <hr className=" mt-2" />
        <p className=" text-gray-400 flex items-center gap-x-1">
          <span>
            <HiOutlineMapPin />
          </span>
          <span className=" text-gray-600">ادرس :</span>
          <span>تهران میدان ازادی -پلاک 22</span>
        </p>
        <p className=" text-gray-400 flex items-center gap-x-1">
          <span>
            <HiDevicePhoneMobile />
          </span>
          <span className=" text-gray-600">شماره تماس :</span>
          <span>09392923907</span>
        </p>
        <p className=" text-gray-400 flex items-center gap-x-1">
          <span>
            <HiOutlineEnvelope />
          </span>
          <span className=" text-gray-600">ایمیل :</span>
          <span>daniald11111377@gmail.com</span>
        </p>
      </div>
      <div className=" col-span-12 md:col-span-4"></div>
    </div>
  );
}

export default Contaxt;
