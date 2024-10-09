import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../features/Header/Header";
import { HiChevronLeft } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import PicsBox from "../features/CarDetail/PicsBox";
import Support from "../features/CarDetail/Support";
import CarInformation from "../features/CarDetail/CarInformation";
import AboutCarText from "../features/CarDetail/AboutCarText";
import AboutCar from "../features/CarDetail/AbotCar";
import RegisterationQuestions from "../features/CarDetail/RegisterationQuestions";
import CarComments from "../features/CarDetail/CarComments";
import CarOptions from "../features/CarDetail/CarOptions";
import Layout from "../features/Layout/Layout";
import MayBeLike from "../features/CarDetail/MayBeLike";

function CarDetail() {
  const { state } = useLocation();

  return (
    <Layout>
      <Header>
        <img
          src="./images/article/5.jpg"
          alt="auto-rent"
          className="w-screen h-screen "
        />
        <div className=" absolute z-30 top-0  w-full bg-black opacity-70 h-full rounded-b-xl"></div>
        <div className=" z-30 absolute   bottom-64  flex justify-center w-full">
          <div className=" flex flex-col gap-y-2">
            <p className="  text-4xl text-[rgb(253,183,19)]">اجاره خودرو</p>
            <p className=" text-gray-400 flex items-center">
              <span>اتو رنت </span>
              <span>
                <HiChevronLeft />
              </span>
              <span>لیست خودروهای اجاره ای</span>
            </p>
          </div>
        </div>
      </Header>
      <div className=" w-full flex justify-center">
        <div className=" grid grid-cols-12 py-16 w-full max-w-screen-xl">
          <div className=" col-span-12 md:col-span-7 px-4 xl:px-0 xl:pl-4 ">
            <AboutCar state={state} />
            <PicsBox state={state} />
            <Support />
            <CarInformation />
            <CarOptions />
            <AboutCarText state={state} />
            <CarComments />
          </div>
          <div className=" col-span-12 md:col-span-5  px-4 xl:px-0">
            <RegisterationQuestions />
          </div>
        </div>
      </div>
      <MayBeLike />
    </Layout>
  );
}

export default CarDetail;
