import React from "react";

function CalCulationPrice() {
  return (
    <div className="  py-4 w-full max-w-screen-xl mb-4">
      <div className=" grid grid-cols-12 ">
        <div className=" col-span-12 md:col-span-7 px-8 bg-white md:ml-2 rounded-xl">
          <p className=" text-xl sm:text-2xl text-gray-700 font-bold">محاسبه قیمت </p>
          <div className="border-b mt-2"></div>
          <div className="border-b-2 border-[rgb(253,183,19)] w-24"></div>
          <div className=" space-y-3 py-2 text-sm">
            <div className=" text-gray-500 flex justify-between">
              <span>هزینه روزانه</span>
              <span>25,500,000</span>
            </div>
            <div className=" text-gray-500 flex justify-between">
              <span>تحویل در محل مبدا</span>
              <span>585,000</span>
            </div>
            <div className=" text-gray-500 flex justify-between">
              <span> تحویل در محل بازگشت</span>
              <span>585,000</span>
            </div>
            <div className=" text-gray-500 flex justify-between">
              <span>مالیات</span>
              <span>3,685,000</span>
            </div>
            <div className=" text-gray-500 flex justify-between">
              <span> مجموع هزینه</span>
              <span>3,329,000</span>
            </div>
            <div className=" text-gray-500 flex justify-between">
              <span>ودیعه</span>
              <span>150,000,000</span>
            </div>
            <div className=" text-gray-500 flex justify-between">
              <span> ودیعه راهنمایی رانندگی</span>
              <span>0</span>
            </div>
            <div className=" text-gray-500 flex justify-between">
              <span>مجموع هزینه به همراه ودیعه</span>
              <span>180,500,000</span>
            </div>
          </div>
        </div>
        <div className=" col-span-12 mt-4 md:mt-0 md:col-span-5 space-y-5 bg-white border rounded-xl p-8">
          <div className=" text-gray-500 flex  gap-x-2">
            <input type="checkBox" className="" />
            <label htmlFor="">مایلم ودیعه ها را بعدا پرداخت کنم.</label>
          </div>
          <div className=" text-gray-500 flex  gap-x-2">
            <input type="checkBox" className="" />
            <label htmlFor="">
              مایلم بابت ودیعه خسارت مبلغ 50,000,00 نقد به همراه 800,000,00چک
              صیادی پرداخت نمابم
            </label>
          </div>
          <div>
            <p className=" text-gray-400">
              ودیعه تا حداکثر 150,000,000 با توجه به مدارک ارایه شده از طرف شما
              متفاوت می باشد .{" "}
            </p>
          </div>
          <div className=" text-gray-500 flex  gap-x-2">
            <input type="checkBox" className="" />
            <label htmlFor="">
              مایلم فقط با پزداخت 5,150,000 خودرو رزرو کنم .
            </label>
          </div>
          <button className=" text-lg font-bold w-full flex justify-between text-white p-2 bg-green-600 rounded-lg">
            <span>قابل پرداخت </span>
            <span>45,480,000 تومان</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalCulationPrice;
