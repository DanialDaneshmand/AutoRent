import React from "react";

function MyPayment() {
  return (
    <div>
      <div className=" border-b pb-4">
        <p className=" text-gray-600 text-lg"> پرداخت های من</p>
      </div>
      <div className=" py-4">
        <div className=" border my-4 rounded-lg p-4 flex flex-col sm:flex-row justify-between">
          <div className=" flex flex-col items-start sm:flex-row gap-x-4">
            <div className=" w-full flex justify-center">
            <img
              src="/images/benz-g-class.png"
              className=" w-64 h-64 rounded-lg border"
              alt=""
            />
            </div>
            <div className=" my-4 sm:my-0 flex flex-col h-full  justify-center items-center gap-y-4">
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
              <span className=" text-gray-600">اتورنت گستر ایرانیان </span>
            </span>
          </div>
        </div>
        <div className=" border my-4 rounded-lg p-4 flex flex-col sm:flex-row justify-between">
          <div className=" flex flex-col items-start sm:flex-row gap-x-4">
            <img
              src="/images/toyota-land.png"
              className=" w-64 h-64 rounded-lg border"
              alt=""
            />
            <div className=" my-4 sm:my-0 flex flex-col h-full  justify-center items-center gap-y-4">
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
            <span className=" font-bold text-red-600">پرداخت موفق</span>
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
              <span className=" text-gray-600">اتورنت گستر ایرانیان </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPayment;
