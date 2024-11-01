import React from "react";

function MyPayment() {
  return (
    <div>
      <div className=" border-b pb-4">
        <p className=" text-gray-600 text-lg">پرداخت های من</p>
      </div>
      <div className=" py-4">
        <div className=" border my-4 rounded-lg p-4 flex justify-between">
          <div className=" flex gap-x-4">
            <img
              src="/images/benz-g-class.png"
              className=" w-64 h-64 rounded-lg border"
              alt=""
            />
            <div className=" flex flex-col h-full  justify-center items-center gap-y-4">
              <span className="text-gray-600 font-bold">بنز g class</span>
              <span className=" text-sm">
                <span className=" text-gray-400">مدل :</span>
                <span className=" text-gray-600">2024</span>
              </span>
              <span className=" text-sm">
                <span className=" text-gray-400">مدت :</span>
                <span className=" text-gray-600">3 روز</span>
              </span>
            </div>
          </div>
          <div className=" flex flex-col gap-y-2 text-sm justify-center">
            <span className=" font-bold text-green-600">پرداخت موفق</span>
            <span>
              <span className=" text-gray-400"> شناسه پرداخت : </span>
              <span className=" text-gray-600">25621385482475</span>
            </span>
            <span>
              <span className=" text-gray-400"> شماره حساب : </span>
              <span className=" text-gray-600">6037998289364773</span>
            </span>
            <span>
              <span className=" text-gray-400"> دارنده حساب : </span>
              <span className=" text-gray-600">اتورنت گشتر ایرانیان </span>
            </span>
          </div>
        </div>
        <div className=" border rounded-lg my-4 p-4 flex justify-between">
          <div className=" flex gap-x-4">
            <img
              src="/images/toyota-land.png"
              className=" w-64 h-64 rounded-lg border"
              alt=""
            />
            <div className=" flex flex-col h-full  justify-center items-center gap-y-4">
              <span className="text-gray-600 font-bold">تیوتا لندکروزر</span>
              <span className=" text-sm">
                <span className=" text-gray-400">مدل :</span>
                <span className=" text-gray-600">2024</span>
              </span>
              <span className=" text-sm">
                <span className=" text-gray-400">مدت :</span>
                <span className=" text-gray-600">3 روز</span>
              </span>
            </div>
          </div>
          <div className=" flex flex-col gap-y-2 text-sm justify-center">
            <span className=" font-bold text-red-600">پرداخت ناموفق</span>
            <span>
              <span className=" text-gray-400"> شناسه پرداخت : </span>
              <span className=" text-gray-600">25621385482475</span>
            </span>
            <span>
              <span className=" text-gray-400"> شماره حساب : </span>
              <span className=" text-gray-600">6037998289364773</span>
            </span>
            <span>
              <span className=" text-gray-400"> دارنده حساب : </span>
              <span className=" text-gray-600">اتورنت گشتر ایرانیان </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPayment;
