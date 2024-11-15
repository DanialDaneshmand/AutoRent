import React, { useState } from "react";
import { FaAngleLeft, FaAngleUp, FaCarRear } from "react-icons/fa6";
import Layout from "../features/Layout/Layout";
import CarListItem from "../features/CarList/CarListItem";
import { cars } from "../../data/data";
import GeneralHeader from "../features/Header/GeneralHeader";
import GeneralModal from "../ui/GeneralModal";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Header from "../features/Header/Header";
import { HiChevronLeft } from "react-icons/hi2";


function Rent() {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      {/* <GeneralHeader>
        <p className="  text-4xl text-[rgb(253,183,19)]">اجاره خودرو</p>
      </GeneralHeader> */}
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
              <span>لیست خودروهای اجاره ای</span>
            </p>
          </div>
        </div>
      </Header>

      <div className="flex justify-center py-16">
        <div className=" grid grid-cols-12 w-full max-w-screen-xl">
          <div className="hidden md:block px-4 col-span-3 w-full ">
            <SideBar />
          </div>

          <div className=" block md:hidden ">
            <GeneralModal
              title="جستجوی پیشرفته"
              onClose={() => setOpen(false)}
              open={open}
            >
              <div className=" p-4 col-span-3 w-full ">
                <SideBar />
                <div className=" w-full">
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-2 py-2 px-5 rounded-lg bg-blue-600 text-white w-full flex justify-center text-sm"
                  >
                    نمایش نتایج
                  </button>
                </div>
              </div>
            </GeneralModal>
          </div>
          <MainContent setOpen={setOpen} />
        </div>
      </div>
    </Layout>
  );
}

export default Rent;

function SideBar() {
  return (
    <div className="p-6 md:border rounded-xl text-gray-500  bg-white">
      <div className=" ">
        <div className=" flex justify-between items-center ">
          <span>قیمت اجاره خودرو</span>
          <span>
            <FaAngleUp />
          </span>
        </div>
        <div className=" text-sm mt-2 flex justify-between items-center ">
          <span> از 6,000,000</span>
          <span>تا 60,000,000</span>
        </div>
        <hr className=" my-2" />
      </div>
      <div>
        <div className="my-4 flex justify-between items-center ">
          <span>برند خودرو </span>
          <span>
            <FaAngleUp />
          </span>
        </div>
        <div className="text-sm">
          <div className=" my-1 flex gap-x-1 items-center">
            <input type="checkBox" />
            <label htmlFor="">اجاره بنز</label>
          </div>
          <div className=" my-1 flex gap-x-1 items-center">
            <input type="checkBox" />
            <label htmlFor="">اجاره بی ام و</label>
          </div>
          <div className=" my-1 flex gap-x-1 items-center">
            <input type="checkBox" />
            <label htmlFor="">اجاره پژو</label>
          </div>
          <div className=" my-1 flex gap-x-1 items-center">
            <input type="checkBox" />
            <label htmlFor="">اجاره پورشه</label>
          </div>
          <div className=" my-1 flex gap-x-1 items-center">
            <input type="checkBox" />
            <label htmlFor="">اجاره تویتا</label>
          </div>
          <div className=" my-1 flex gap-x-1 items-center">
            <input type="checkBox" />
            <label htmlFor="">اجاره هیوندا</label>
          </div>
        </div>
      </div>
      <div>
        <div className="my-4 flex justify-between items-center ">
          <span>اجاره خودرو بر اساس نیاز شما </span>
          <span>
            <FaAngleUp />
          </span>
        </div>
        <div className="text-sm">
          <div className=" my-1 flex gap-x-1 items-center">
            <input type="radio" />
            <label htmlFor="">اجاره خودرو با راننده</label>
          </div>
          <div className=" my-1 flex gap-x-1 items-center">
            <input type="radio" />
            <label htmlFor="">اجاره خودرو بدون راننده</label>
          </div>
          <div className=" my-1 flex gap-x-1 items-center">
            <input type="radio" />
            <label htmlFor="">اجاره خودرو ایرانی</label>
          </div>
          <div className=" my-1 flex gap-x-1 items-center">
            <input type="radio" />
            <label htmlFor="">اجاره خودرو لوکس</label>
          </div>
          <div className=" my-1 flex gap-x-1 items-center">
            <input type="radio" />
            <label htmlFor="">اجاره خودرو تشریفات</label>
          </div>
          <div className=" my-1 flex gap-x-1 items-center">
            <input type="radio" />
            <label htmlFor="">اجاره ماشین عروس</label>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContent({ setOpen }) {
  return (
    <div className="col-span-12 md:col-span-9 w-full ">
      <div className=" w-full block md:hidden">
        <div className=" w-full flex justify-center ">
          <button
            onClick={() => setOpen(true)}
            className=" flex items-center gap-x-2 border py-1 px-3 border-gray-400 text-gray-500 my-4 rounded-lg "
          >
            <span>
              <HiAdjustmentsHorizontal />
            </span>
            <span>جستجوی پیشرفته</span>
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-12 ">
        <div className=" w-full flex justify-center px-4 col-span-12 sm:col-span-6    ">
          <select className=" w-8/12 sm:w-full border border-gray-400 text-gray-500 py-2 sm:py-4 rounded-lg  sm:rounded-xl  bg-[#efefef] px-4 sm:px-8 outline-none">
            <option> تقویم قیمتی</option>
          </select>
        </div>
        <div className="w-full my-4 sm:my-0 px-4 flex justify-center col-span-12 sm:col-span-6  ">
          <select className="w-8/12 sm:w-full border text-gray-500 border-gray-400 py-2 sm:py-4 rounded-lg sm:rounded-xl  bg-[#efefef] px-4 sm:px-8 outline-none">
            <option> مرتب سازی</option>
          </select>
        </div>
      </div>
      <div>
        {
          <div className=" grid grid-cols-1 md:grid-cols-2 px-4 mx-4 md:mx-0 lg:grid-cols-3 gap-8 mt-16">
            {cars.map((item) => (
              <CarListItem key={item.id} item={item} />
            ))}
          </div>
        }
      </div>
    </div>
  );
}
