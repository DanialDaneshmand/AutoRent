import React from "react";
import Header from "../features/Header/Header";
import { FaCarRear } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import MoreInformation from "../ui/MoreInformation";

function Home() {
  return (
    <div>
      <Header>
        <img
          src="./images/bg3.jpg"
          alt="auto-rent"
          className="w-full h-screen"
        />
        <div className=" absolute z-30 top-0  w-full bg-black opacity-70 h-full"></div>
        <div className=" z-30 absolute   bottom-64  flex justify-center w-full">
          <div className="max-w-screen-lg  w-full space-y-8 flex flex-col items-center md:items-start mx-0  sm:mx-8 ">
            <p className=" text-2xl md:text-4xl text-[rgb(253,183,19)] font-bold">
              اتو رنت ; سریع, اسان و به صرفه
            </p>
            <p className=" text-gray-300 text-sm md:text-lg">
              سرویس دهنده رزرو خودرو در کمترین زمان ممکن !
            </p>
            <div className="flex gap-x-4  font-bold">
              <button className="flex items-center gap-x-2 py-2 px-3 md:py-3 md:px-6 rounded-lg font-bold bg-[rgb(253,183,19)]">
                <span>
                  <FaCarRear />
                </span>
                <span>رزرو اسان خودرو</span>
              </button>
              <button className="flex items-center text-gray-300 gap-x-2 py-2 px-3 md:py-3 md:px-6 rounded-lg border border-gray-300">
                <span>
                  <FaAngleLeft />
                </span>
                <span>تماس با ما</span>
              </button>
            </div>
          </div>
        </div>
      </Header>
      <MoreInformation />
    </div>
  );
}

export default Home;
