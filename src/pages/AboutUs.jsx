import React from "react";
import Layout from "../features/Layout/Layout";
import Header from "../features/Header/Header";
import { HiChevronLeft } from "react-icons/hi2";
import TextBox from "../ui/TextBox";
import { Fa2, Fa4, FaBox, FaCreditCard } from "react-icons/fa6";

function AboutUs() {
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
            <p className="  text-4xl text-[rgb(253,183,19)]"> درباره ما </p>
            <p className=" text-gray-400 flex items-center">
              <span>اتو رنت </span>
              <span>
                <HiChevronLeft />
              </span>
              <span> درباره ما</span>
            </p>
          </div>
        </div>
      </Header>
      <div className=" w-full items-center flex  px-4 flex-col">
        <div className=" w-full max-w-screen-xl">
          <div className=" w-full my-4 bg-white rounded-xl border p-4">
            <p className=" text-lg sm:text-2xl text-gray-700 font-bold">معرفی اتو رنت</p>
            <div className="border-b mt-2"></div>
            <div className="border-b-2 border-[rgb(253,183,19)] w-28"></div>
            <div className=" py-4">
              <p className=" text-gray-500">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
          <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 mb-4">
            <div className="py-4  sm:p-4 ">
              <TextBox icon={<FaBox />}>
                <p className=" sm:text-2xl text-lg font-bold text-gray-800">
                  {" "}
                  تحویل در محل{" "}
                </p>
                <p className=" text-sm text-gray-400 text-center">
                  تحویل خودرو در مکان و زمان تعیین شده توسط شما خواهد بود.
                </p>
              </TextBox>
            </div>
            <div className="py-4  sm:p-4 ">
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
            </div>
            <div className="py-4  sm:p-4 ">
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
          <div className=" w-full my-4 bg-white rounded-xl border p-4">
            <p className=" text-lg sm:text-2xl text-gray-700 font-bold">
              {" "}
              شبکه نمایندگان وشرکت های اجاره خودرو همکار
            </p>
            <div className="border-b mt-2"></div>
            <div className="border-b-2 border-[rgb(253,183,19)] w-28"></div>
            <div className=" py-4">
              <p className=" text-gray-500">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
          <div className=" flex justify-center my-16 mb-[360px] md:mb-32 ">
            <div className="relative max-w-screen-xl rounded-lg ">
              <div className="w-full">
                <img src="./images/fix.jpg" className=" w-full rounded-lg " />
              </div>
              <div className=" bg-black w-full opacity-60 absolute z-20 top-0 left-0 h-full rounded-lg"></div>
              <div className=" text-center w-full absolute  top-0 left-0 pt-0 sm:pt-4  md:px-32 z-30 text-white p-8 flex flex-col items-center">
                <p className="sm:text-3xl text-xl text-[rgb(253,173,19)]">
                    شبکه امدای و تعمیرات خودرو
                </p>
                <p className="text-sm sm:text-lg">
                  اجاره خودرو از یک شرکت اجاره خودرو با سابقه به شما کمک میکند
                  تا در مسافرت هاوقرار های مهم و مجالس و... ماشین مناسب خود را
                  در اختیار داشته باشید.
                </p>
              </div>
              <div className=" w-full flex justify-center ">
                <div className="px-0 max-w-screen-md   md:px-8 gap-y-8 md:gap-y-0 absolute z-30 w-full md:w-auto md:gap-x-6   flex flex-col  md:flex-row -mt-8 md:-mt-16 lg:-mt-0 items-center md:-bottom-24   md:justify-center">
                  <div className="w-64 sm:w-auto rounded-xl border bg-white p-4 flex flex-col items-center gap-y-6">
                    <div className=" border-b-2 border-yellow-500">
                      <p>خدمات شبانه روزی</p>
                    </div>
                    <p className="text-sm sm:text-lg text-gray-500">
                      اجاره خودرو از یک شرکت اجاره خودرو با سابقه به شما کمک
                      میکند تا در مسافرت هاوقرار های مهم و مجالس و... ماشین
                      مناسب خود را در اختیار داشته باشید.
                    </p>
                  </div>
                  <div className="w-64 sm:w-auto rounded-xl border bg-white p-4 flex flex-col items-center gap-y-6">
                    <div className=" border-b-2 border-yellow-500">
                      <p>اجاره خودرو جایگزین</p>
                    </div>
                    <p className="text-sm sm:text-lg text-gray-500">
                      اجاره خودرو از یک شرکت اجاره خودرو با سابقه به شما کمک
                      میکند تا در مسافرت هاوقرار های مهم و مجالس و... ماشین
                      مناسب خود را در اختیار داشته باشید.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
