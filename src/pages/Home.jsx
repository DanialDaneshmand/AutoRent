import React from "react";
import Header from "../features/Header/Header";
import { FaCarRear } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import MoreInformation from "../ui/MoreInformation";
import CarsLogo from "../ui/CarsLogo";
import WhyComponent from "../ui/WhyComponent";
import CategoryList from "../features/Category/CategoryList";
import CarList from "../features/CarList/CarList";
import HowBooking from "../features/HowBooking/HowBooking";
import GeneralQuestions from "../features/GeneralQuestions/GeneralQuestions";
import Comments from "../features/Comments/Comments";
import Articels from "../features/Articels/Articels";
import Footer from "../features/Footer/Footer";

function Home() {
  return (
    <div className=" flex flex-col items-center">
      <Header>
        <img
          src="./images/article/5.jpg"
          alt="auto-rent"
          className="w-full h-screen rounded-b-xl"
        />
        <div className=" absolute z-30 top-0  w-full bg-black opacity-70 h-full rounded-b-xl"></div>
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
      <div className=" mt-16">
        <WhyComponent />
      </div>
      <CategoryList />
      <CarList />
      {/* <HowBooking /> */}
      <GeneralQuestions/>
      <Comments/>
      <Articels/>
      <Footer/>
    </div>
  );
}

export default Home;
