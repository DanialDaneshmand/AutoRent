import React from "react";
import { Fa1 } from "react-icons/fa6";
import { Fa2 } from "react-icons/fa6";
import { Fa3 } from "react-icons/fa6";
import { Fa4 } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";
import HowBookingItem from "./HowBookingItem";

function HowBooking() {
  return (
    <div className=" flex justify-center">
      <div className=" w-full max-w-screen-lg py-32">
        <div className=" text-center">
          <p className="text-gray-500 text-2xl mb-2">چگونه در وبسایت</p>
          <p className=" text-4xl font-bold">
            <span className=" text-[rgb(253,183,19)]">اتو رنت </span>
            <span className=" text-gray-800"> خودرو رزرو کنیم ؟</span>
          </p>
        </div>
        <div className=" grid grid-cols-12 mt-32">
          <div className=" col-span-6 ">
            <HowBookingItem
              icon={
                <sapn>
                  <FaCarRear />
                </sapn>
              }
            >
              <p className=" text-2xl font-bold  text-gray-800">
                <span className=" text-[rgb(253,183,19)]">خودروی</span> خود را
                انتخاب کنید.
              </p>
              <p className=" text-sm text-gray-500">
                خودروی مورد نظر خود را متناسب با درخواست خود انتخاب کنید .
              </p>
            </HowBookingItem>
          </div>
          <div className=" col-span-6 ">
            <HowBookingItem
              icon={
                <sapn>
                  <FaCarRear />
                </sapn>
              }
            >
              <p className=" text-2xl font-bold  text-gray-800">
                <span className=" text-[rgb(253,183,19)]">خودروی</span> خود را
                انتخاب کنید.
              </p>
              <p className=" text-sm text-gray-500">
                خودروی مورد نظر خود را متناسب با درخواست خود انتخاب کنید .
              </p>
            </HowBookingItem>
          </div>
          <div className=" col-span-6 ">
            <HowBookingItem
              icon={
                <sapn>
                  <FaCarRear />
                </sapn>
              }
            >
              <p className=" text-2xl font-bold  text-gray-800">
                <span className=" text-[rgb(253,183,19)]">خودروی</span> خود را
                انتخاب کنید.
              </p>
              <p className=" text-sm text-gray-500">
                خودروی مورد نظر خود را متناسب با درخواست خود انتخاب کنید .
              </p>
            </HowBookingItem>
          </div>
          <div className=" col-span-6 ">
            <HowBookingItem
              icon={
                <sapn>
                  <FaCarRear />
                </sapn>
              }
            >
              <p className=" text-2xl font-bold  text-gray-800">
                <span className=" text-[rgb(253,183,19)]">خودروی</span> خود را
                انتخاب کنید.
              </p>
              <p className=" text-sm text-gray-500">
                خودروی مورد نظر خود را متناسب با درخواست خود انتخاب کنید .
              </p>
            </HowBookingItem>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowBooking;
