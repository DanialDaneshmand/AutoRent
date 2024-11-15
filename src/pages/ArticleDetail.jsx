import React from "react";
import LatestArticles from "../features/ArticelsComponents/LatestArticles";
import { useLocation } from "react-router-dom";
import Layout from "../features/Layout/Layout";
import { HiChevronLeft } from "react-icons/hi2";
import Header from "../features/Header/Header";
import { articles } from "../../data/data";
import { HiOutlineClock } from "react-icons/hi2";
import { HiOutlineCalendarDays } from "react-icons/hi2";

function ArticleDetail() {
  const { state } = useLocation();
  console.log(state.id);

  return (
    <Layout>
      <Header>
      <img
            src="./images/header.jpg"
            alt="auto-rent"
            className=" block sm:hidden w-screen h-full "
          />
          <img
            src="./images/header3.jpg"
            alt="auto-rent"
            className=" hidden sm:block w-screen h-[800px] "
          />
        <div className=" absolute z-30 top-0  w-full bg-black opacity-70 h-full rounded-b-xl"></div>
        <div className=" z-30 absolute   bottom-64  flex justify-center w-full">
          <div className=" flex flex-col gap-y-2">
            <p className="  text-4xl text-[rgb(253,183,19)]">مقالات </p>
            <p className=" text-gray-400 flex items-center">
              <span>اتو رنت </span>
              <span>
                <HiChevronLeft />
              </span>
              <span> مقالات</span>
            </p>
          </div>
        </div>
      </Header>
      <div className=" w-full flex justify-center ">
        <div className="px-4 w-full max-w-screen-xl my-8">
          <div>
            <p className="text-xl sm:text-4xl font-bold text-gray-700">
              {articles[state.id]?.title}
            </p>
          </div>
          <div className=" flex gap-x-8 py-4">
            <span className=" flex items-center text-gray-500 gap-x-1 text-sm">
              <span className=" flex items-center gap-x-2">
                <HiOutlineClock className=" sm:text-2xl" />
                <span>مدت زمان مطالعه :</span>
              </span>
              <span>5 دقیقه </span>
            </span>
            <span className=" flex items-center text-gray-500 gap-x-1 text-sm">
              <span className=" flex items-center gap-x-2">
                <HiOutlineCalendarDays className=" sm:text-2xl" />
                <span>30اذر 1402</span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <div className=" grid grid-cols-12 w-full  max-w-screen-xl my-4">
          <div className="px-4 xl:px-0 pl-4 col-span-12 sm:col-span-8 ">
            <div>
              <img
                src={articles[state.id].imageSrc}
                className=" w-full rounded-xl"
                alt=""
              />
            </div>
            <TextBox />
            <RegisterationAspect />
          </div>
          <div className="px-4 xl:px-0  w-full mt-4 sm:mt-0 col-span-12 sm:col-span-4 ">
            <LatestArticles />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ArticleDetail;

function TextBox() {
  return (
    <div className=" px-4 mt-4 bg-white rounded-xl">
      <div className=" py-8">
        <p className=" text-xl sm:text-2xl text-gray-700">
          محبوب ترین خودرو های خانواده کدامند ؟
        </p>
        <p className=" text-sm text-gray-500 mt-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      <div className=" mb-4">
        <p className=" text-xl sm:text-2xl text-gray-700">
          فاکتورهای کلیدی در انتخاب خودرو خانواده
        </p>
        <p className=" text-sm text-gray-500 mt-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت
        </p>
      </div>
    </div>
  );
}

function RegisterationAspect() {
  return (
    <div className="  mt-8">
      <p className=" text-sm text-gray-500">
        نشانی ایمیل شما منتشر نخواهد شد . بخش های مورد نیاز علامت گذاری شده است
        *
      </p>
      <div className=" my-8 ">
        <label htmlFor="" className="mb-2 block text-xl text-gray-700">
          دیدگاه شما *
        </label>
        <textarea
          placeholder="پیام"
          name=""
          className=" w-full h-32 rounded-xl border outline-none p-4"
          id=""
        ></textarea>
      </div>
      <div className=" my-8 ">
        <label htmlFor="" className="mb-2 block text-xl text-gray-700">
          {" "}
          نام *
        </label>
        <input
          type="text"
          placeholder="نام"
          className=" w-full outline-none border rounded-lg p-2"
        />
      </div>
      <div className=" my-8 ">
        <label htmlFor="" className="mb-2 block text-xl text-gray-700">
          {" "}
          ایمیل *
        </label>
        <input
          type="text"
          placeholder="ایمیل"
          className=" w-full outline-none border rounded-lg p-2"
        />
      </div>
      <button className="py-1 sm:py-2 px-10 sm:px-12 bg-blue-600 rounded-lg text-white">ثبت دیدگاه </button>
    </div>
  );
}
