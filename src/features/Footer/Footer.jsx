import React from "react";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlineMapPin } from "react-icons/hi2";
import Logo from "../../ui/Logo";
import { Link } from "react-router-dom";
import { FaCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div className=" text-sm flex justify-center px-4 w-full mb-16">
      <div className=" w-full max-w-screen-xl text-gray-300 bg-[rgb(51,51,51)] rounded-xl p-4 sm:p-8">
        <TopSection />
        <BottomSection />
        <hr />
        <div className=" flex justify-center text-gray-300 mt-8 gap-x-2  items-center">
          <span className=" text-xl"><FaCopyright/></span>
          <span>تمامی حقوق این وبسایت متلق به اتو رنت می باشد .</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

function TopSection() {
  return (
    <div className="border rounded-xl p-4 flex flex-col md:flex-row items-center gap-y-4 sm:gap-y-0   md:justify-between">
      <div className=" flex items-center gap-x-4 w-64 md:w-auto">
        <div className=" border border-gray-300 rounded-md p-3 flex justify-center items-center text-2xl">
          <HiOutlinePhone />
        </div>
        <div className=" flex flex-col gap-y-4">
          <span>ارتباط با ما </span>
          <span>09392923907</span>
        </div>
      </div>
      <div className=" border-l border-gray-300 "></div>
      <div className=" flex items-center gap-x-4 w-64 md:w-auto">
        <div className=" border border-gray-300 rounded-md p-3 flex justify-center items-center text-2xl">
          <HiOutlineEnvelope />
        </div>
        <div className=" flex flex-col items-center gap-y-4">
          <span> ایمیل</span>
          <span>daniald11111377@gmail.com</span>
        </div>
      </div>
      <span className=" border-l border-gray-300 "></span>

      <div className=" flex items-center gap-x-4 w-64 md:w-auto">
        <div className=" border border-gray-300 rounded-md p-3 flex justify-center items-center text-2xl">
          <HiOutlineMapPin />
        </div>
        <div className=" flex flex-col items-center gap-y-4">
          <span> ادرس</span>
          <span>تهران-خیابان شادمانی</span>
        </div>
      </div>
    </div>
  );
}

function BottomSection() {
  return (
    <div className=" grid grid-cols-1 gap-y-8 md:gap-y-0 md:grid-cols-3 py-8">
      <div className=" space-y-6 flex flex-col items-center md:items-start">
        <Logo />
        <p>
          می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد
        </p>
      </div>
      <div className=" flex flex-col justify-center gap-y-4 items-center">
        <Link>دسترسی اسان</Link>
        <Link>سوالات متداول</Link>
        <Link>تماس با ما </Link>
        <Link>درباره ما</Link>
      </div>
      <div className=" text-center flex flex-col justify-center">
        <p className="text-2xl mb-4">خبرنامه</p>
        <div className=" flex">
          <input
            type="text"
            placeholder="ایمیل خود را وارد کنید"
            className=" text-gray-500 bg-[rgb(51,51,51)] border px-4 py-3 w-full rounded-lg"
          />
          <button className=" bg-[rgb(253,183,19)] text-[rgb(51,51,51)] my-1  -mr-[65px] px-4 rounded-lg">
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
}
