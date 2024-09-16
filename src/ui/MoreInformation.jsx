import React, { useState } from "react";
import MoreInfoItem from "./MoreInfoItem";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarDays } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";

function MoreInformation() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className=" w-full flex justify-center ">
      <div className="p-8 max-w-screen-lg w-full border mx-4 shadow-md rounded-xl  bg-white mt-16 ">
        <div className="flex flex-col-reverse sm:flex-row gap-y-4 sm:gap-y-0 sm:justify-between gap-x-2 items-center text-sm">
          <div className="flex gap-y-2 md:gap-y-0 md:gap-x-2 flex-col md:flex-row">
            <div className=" hover:bg-blue-600 hover:text-white py-2 px-4 rounded-full border ">
              رزرو خودرو با راننده
            </div>
            <div className=" hover:bg-blue-600 hover:text-white py-2 px-4 rounded-full border ">
              اجاره خودرو بی راننده
            </div>
            <div className=" hover:bg-blue-600 hover:text-white py-2 px-4 rounded-full border ">
              اجاره ماشین عروس
            </div>
          </div>
          <div className="text-blue-600">
            <button>اطلاعات بیشتر در مورد رزرو خودرو</button>
          </div>
        </div>
        <div className=" grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-6  my-4 border p-2 rounded-lg ">
          <div  className=" flex justify-center my-4 ">
            <MoreInfoItem title="محل تحویل خودرو">
              <div>تهران فرودگاه امام خمینی</div>
            </MoreInfoItem>
          </div>
          <div className=" flex justify-center my-4 ">
            <MoreInfoItem title="تاریخ تحویل">
              <div className="flex gap-x-1">
                <FaCalendarDays />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-24"
                />
              </div>
            </MoreInfoItem>
          </div>
          <div className=" flex justify-center my-4 ">
            <MoreInfoItem title="ساعت تحویل">
              <div className="flex gap-x-2 items-center">
                <span>
                  <FaRegClock />
                </span>
                <span>07:00 am</span>
              </div>
            </MoreInfoItem>
          </div>
          <div className=" flex justify-center my-4 ">
            <MoreInfoItem title="تاریخ بازگشت">
              <div className="flex gap-x-1">
                <FaCalendarDays />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-24"
                />
              </div>
            </MoreInfoItem>
          </div>
          <div className=" flex justify-center my-4 ">
            <MoreInfoItem title="ساعت بازگشت">
              <div className="flex gap-x-2  items-center">
                <span>
                  <FaRegClock />
                </span>
                <span>08:00 pm</span>
              </div>
            </MoreInfoItem>
          </div>
          <div className="flex items-center justify-center">
            <button className=" bg-[rgb(253,183,19)] p-4 text-xl  rounded-md">
              <HiMagnifyingGlass />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInformation;
