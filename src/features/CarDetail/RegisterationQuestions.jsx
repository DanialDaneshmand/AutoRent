import React from "react";
import {
  HiOutlineCalendar,
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { HiOutlineChevronDown } from "react-icons/hi2";
import TextFeild from "../../ui/TextFeild";
import Btn from "../../ui/Btn";
import { Link } from "react-router-dom";
import { useUser } from "../../Context/userContext";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumbers";


function RegisterationQuestions() {
  const user=useUser()
  return (
    <div className=" w-full  bg-white rounded-xl  border p-4">
      <div className=" flex flex-wrap justify-center gap-2 xl:justify-between">
        <div className=" p-2 bg-slate-200 rounded-lg">
          <span className=" flex gap-x-2 justify-between text-gray-600">
            <span>از {toPersianNumbers(1)} تا {toPersianNumbers(30)} روز:</span>
            <span className=" text-blue-600 font-bold text-lg">{toPersianNumbersWithComma(12500000)}</span>
            <span>ماهانه</span>
          </span>
        </div>
        <div className=" p-2 bg-slate-200 rounded-lg">
          <span className=" flex gap-x-2 justify-between text-gray-600">
            <span>از {toPersianNumbers(1)} تا {toPersianNumbers(30)} روز:</span>
            <span className=" text-blue-600 font-bold text-lg">{toPersianNumbersWithComma(2500000)}</span>
            <span>روزانه</span>
          </span>
        </div>
      </div>
      <div className=" my-4  flex justify-center gap-2 flex-wrap ">
        <div className="px-4 border hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg cursor-pointer  text-gray-800 rounded-full py-2 flex justify-center items-center ">
          <p>اجاره خودرو با راننده</p>
        </div>
        <div className=" border px-4 text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer text-gray-800 rounded-full py-2 flex justify-center items-center ">
          <p>اجاره خودرو بی راننده </p>
        </div>
        <div className=" border text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer text-gray-800 rounded-full py-2 px-4 flex justify-center items-center ">
          <p>اجاره ماشین عروس </p>
        </div>
      </div>
      <div className=" space-y-6">
        <TextFeild title="محل تحویل خوردو" icon={<HiOutlineMapPin />} />
        <TextFeild title="محل بازگشت خوردو" icon={<HiOutlineMapPin />} />
        <TextFeild icon={<HiOutlineCalendarDays />} title="1403/2/10">
          <span className="text-gray-400 absolute -top-3 right-4 px-1 block bg-white  z-50">
            تاریخ تحویل
          </span>
        </TextFeild>
        <TextFeild icon={<HiOutlineClock />} title=" 07:00">
          <span className="text-gray-400 absolute -top-3 right-4 px-1 block bg-white  z-50">
            ساعت تحویل
          </span>
        </TextFeild>
        <TextFeild icon={<HiOutlineCalendarDays />} title="1403/2/28">
          <span className="text-gray-400 absolute -top-3 right-4 px-1 block bg-white  z-50">
            تاریخ بازگشت
          </span>
        </TextFeild>
        <TextFeild icon={<HiOutlineClock />} title=" 07:00">
          <span className="text-gray-400 absolute -top-3 right-4 px-1 block bg-white  z-50">
            ساعت بازگشت
          </span>
        </TextFeild>
        <div className=" flex justify-between my-4 px-2 text-gray-700  pb-2">
          <span>نوع بیمه</span>
          <div className=" flex items-center gap-x-1 font-bold ">
            <input type="radio" />
            <label htmlFor="">بیمه پایه</label>
          </div>
          <div className=" flex items-center gap-x-1 font-bold">
            <input type="radio" />
            <label htmlFor="">بیمه پایه</label>
          </div>
        </div>
        <div className=" p-2 bg-slate-200 rounded-lg">
          <span className=" flex gap-x-2  text-gray-600">
            <span>{toPersianNumbers(18)} روز :</span>
            <span className=" text-blue-600 font-bold text-lg">{toPersianNumbersWithComma(8500000)}</span>
          </span>
        </div>
        <Link to={user.phone?"/userInfo":"/login"}>
          <button className="mt-4 py-2 text-lg px-5 rounded-lg bg-blue-600 text-white w-full flex justify-center ">
            ثبت درخواست 
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RegisterationQuestions;
