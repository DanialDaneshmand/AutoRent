import React from "react";
import Layout from "../features/Layout/Layout";
import { HiChevronLeft } from "react-icons/hi2";
import Header from "../features/Header/Header";
import Process from "../features/UserInfo/Process";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import UserInformationBox from "../features/UserInfo/UserInformationBox";

function UserInformation() {
  return (
    <Layout>
      <Header>
      <img
            src="./images/header.jpg"
            alt="auto-rent"
            className=" block sm:hidden w-screen h-full "
          />
          <img
            src="./images/header5.jpg"
            alt="auto-rent"
            className=" hidden sm:block w-screen h-[800px] "
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
              <span>ثبت درخواست رزرو</span>
            </p>
          </div>
        </div>
      </Header>
      <div className=" flex flex-col items-center w-full px-4">
        <Process />
        <div className=" rounded-xl py-1 px-4 flex justify-center items-center gap-x-3 w-full max-w-screen-xl bg-blue-100 text-blue-500 mb-16">
          <span className="text-xl sm:text-4xl"><HiOutlineChatBubbleLeftEllipsis/></span>
          <span className="text-sm sm:text-lg">برای اعتبار سنجی قبل از تحویل خودرو مستنداتی از شما درخواست می گردد عدم ارایه این مستندات باعت لغو رزرو می شود .</span>
        </div>
        <UserInformationBox/>
      </div>
    </Layout>
  );
}

export default UserInformation;
