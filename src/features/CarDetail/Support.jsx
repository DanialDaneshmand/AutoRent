import React from "react";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function Support() {
  return (
    <div className=" w-full my-4 bg-white rounded-xl border p-4">
      <p className=" text-2xl text-gray-700 font-bold">پوشش ها</p>
      <div className="border-b mt-2"></div>
      <div className="border-b-2 border-[rgb(253,183,19)] w-24"></div>
      <div className=" flex justify-between my-4 text-gray-700 border-b pb-2">
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
      <div className=" flex justify-between text-gray-700 border-b py-4 ">
        <span className=" font-bold w-1/3">قیمت</span>
        <span className="w-1/3">{toPersianNumbers(0)}</span>
        <span>{toPersianNumbersWithComma(32240200)}</span>
      </div>
      <div className=" flex justify-between text-gray-700 border-b py-4 ">
        <span className=" font-bold w-1/3">ودیعه</span>
        <span className="w-1/3">{toPersianNumbersWithComma(250000000)}</span>
        <span>{toPersianNumbersWithComma(250000000)}</span>
      </div>
      <div className=" flex justify-between text-gray-700 border-b py-4 ">
        <span className=" font-bold w-1/3">حداکثر تعهد خسارت جزیی</span>
        <span className="w-1/3">{toPersianNumbersWithComma(250000000)}</span>
        <span>{toPersianNumbersWithComma(50000000)}</span>
      </div>
      <div className=" flex justify-between text-gray-700 border-b py-4 ">
        <span className=" font-bold w-1/3">حداکثر تعهد خسارت کلی</span>
        <span className="w-1/3">{toPersianNumbersWithComma(500000000)}</span>
        <span>{toPersianNumbersWithComma(50000000)}</span>
      </div>
      <div className=" flex justify-between text-gray-700 border-b py-4 ">
        <span className=" font-bold w-1/3">اخذ افت خودرو زمان تصادف</span>
        <span className="w-1/3">به طور کامل</span>
        <span>اخذ نمیگردد</span>
      </div>
      <div className=" flex justify-between text-gray-700  py-4 ">
        <span className=" font-bold w-1/3">خواب خودرو</span>
        <span className="w-1/3">تمام روز های خواب</span>
        <span>نصف اجاره خودرو</span>
      </div>
    </div>
  );
}

export default Support;
