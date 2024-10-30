import React from "react";

function SendMessage() {
  return (
    <div className=" w-full mb-16 px-4 max-w-screen-xl p-4 bg-white rounded-xl">
      <p className=" text-lg text-gray-700">ارسال پیام شما به مجموعه اتو رنت</p>
      <hr className=" mt-2" />
      <div className=" grid grid-cols-1 sm:grid-cols-2 my-4">
        <div className=" p-4">
          <div className=" my-8 relative ">
            <label
              htmlFor=""
              className="block py-1 px-2 text-gray-400 z-50 absolute -top-4 bg-white right-4"
            >
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              className=" w-full p-2 border outline-none rounded-lg"
            />
          </div>
          <div className=" my-8 relative">
            <label
              htmlFor=""
              className="block py-1 px-2 text-gray-400 z-50 absolute -top-4 bg-white right-4"
            >
              پست الکترونیکی{" "}
            </label>
            <input
              type="text"
              className=" w-full p-2 border outline-none rounded-lg"
            />
          </div>
          <div className=" my-8 relative">
            <label
              htmlFor=""
              className="block py-1 px-2 text-gray-400 z-50 absolute -top-4 bg-white right-4"
            >
                شماره تماس
            </label>
            <input
              type="text"
              className=" w-full p-2 border outline-none rounded-lg"
            />
          </div>
        </div>
        <div className="sm:py-4 py-0 px-4">
            <textarea className="sm:mt-8 rounded-lg w-full h-32 border outline-none" name="" id=""></textarea>
            <button className=" w-full my-4 py-2 rounded-lg bg-blue-600 text-white ">ارسال </button>
        </div>
      </div>
    </div>
  );
}

export default SendMessage;
