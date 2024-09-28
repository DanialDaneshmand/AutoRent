import React from "react";
import { FaBox } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { Fa2 } from "react-icons/fa6";
import { Fa4 } from "react-icons/fa6";
import TextBox from "./TextBox";

function WhyComponent() {
  return (
    <div className=" flex justify-center my-16 mx-4 ">
      <div className="relative max-w-screen-lg rounded-lg ">
        <div className="w-full">
          <img src="./images/wall2.jpg" className=" w-full rounded-lg " />
        </div>
        <div className=" bg-black w-full opacity-60 absolute z-20 top-0 left-0 h-full rounded-lg"></div>
        <div className=" text-center w-full absolute  top-0 left-0 pt-0 sm:pt-4  md:px-32 z-30 text-white p-8 flex flex-col items-center">
          <p className="sm:text-3xl text-2xl text-[rgb(253,173,19)]">
            چرا اتو رنت ؟!
          </p>
          <p className="text-sm sm:text-lg">
            اجاره خودرو از یک شرکت اجاره خودرو با سابقه به شما کمک میکند تا در
            مسافرت هاوقرار های مهم و مجالس و... ماشین مناسب خود را در اختیار
            داشته باشید.
          </p>
        </div>
        <div className=" w-full flex justify-center">
          <div className="px-0 max-w-screen-md   md:px-8 gap-y-8 md:gap-y-0 absolute z-30 w-full md:w-auto md:gap-x-6   flex flex-col  md:flex-row -mt-8 md:-mt-16 lg:-mt-0 items-center md:-bottom-24   md:justify-center">
            <TextBox icon={<FaBox />}>
              <p className=" sm:text-2xl text-lg font-bold text-gray-800">
                {" "}
                تحویل در محل{" "}
              </p>
              <p className=" text-sm text-gray-400 text-center">
                تحویل خودرو در مکان و زمان تعیین شده توسط شما خواهد بود.
              </p>
            </TextBox>
            <TextBox
              icon={
                <span className=" flex items-center ">
                  <Fa4 />
                  <Fa2 />
                </span>
              }
            >
              <p className=" sm:text-2xl text-lg font-bold text-gray-800">
                پشتیبانی 24 ساعته{" "}
              </p>
              <p className=" text-sm text-gray-400 text-center">
                کارشناسان ما در هر زمان و مکان پاسخگوی شما هستند.
              </p>
            </TextBox>
            <TextBox icon={<FaCreditCard />}>
              <p className=" sm:text-2xl text-lg font-bold text-gray-800">
                {" "}
                قیمت مناسب
              </p>
              <p className=" text-sm text-gray-400 text-center">
                هدف ما ارایه بهترین خدمات با مناسب ترین قیمت است .
              </p>
            </TextBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyComponent;
