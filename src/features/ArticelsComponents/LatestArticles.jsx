import React, { useState } from "react";
import { articles } from "../../../data/data";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi2";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function LatestArticles() {
  const [newArticels, setNewArticles] = useState(articles.slice(0, 5));

  return (
    <div>
      <div className=" bg-white rounded-xl p-4">
        <p className=" text-xl sm:text-2xl text-gray-700 font-bold">
          اخرین مقالات
        </p>
        <div className="border-b mt-2"></div>
        <div className="border-b-2 border-[rgb(253,183,19)] w-24"></div>
        <div>
          {newArticels.map((item) => (
            <div key={item.id} className="my-6 flex gap-x-4">
              <img
                src={item.imageSrc}
                alt=""
                className=" w-16 h-16 rounded-lg"
              />
              <div className=" flex flex-col text-sm justify-between">
                <div>
                  <p className=" text-gray-500">{item.title}</p>
                </div>
                <div className=" flex items-center gap-x-5 text-sm text-gray-500">
                  <span className=" flex items-center gap-x-1">
                    <span>
                      <HiOutlineClock />
                    </span>
                    <span>{toPersianNumbers(3)} دقیقه</span>
                  </span>
                  <span className=" flex items-center gap-x-1">
                    <span>
                      <HiOutlineEye />
                    </span>
                    <span>{toPersianNumbersWithComma(1213)}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-white p-4 mt-4 rounded-xl">
        <p className=" text-xl sm:text-2xl text-gray-700 font-bold">برچسب ها</p>
        <div className="border-b mt-2"></div>
        <div className="border-b-2 border-[rgb(253,183,19)] w-24"></div>
        <div className=" flex justify-around gap-2 my-4 flex-wrap">
          <span className=" block py-2 px-4 rounded-full bg-gray-200 text-gray-500">
            اجاره خودرو
          </span>
          <span className=" block py-2 px-4 rounded-full bg-gray-200 text-gray-500">
            مرسدس بنز
          </span>
          <span className=" block py-2 px-4 rounded-full bg-gray-200 text-gray-500">
            ون
          </span>
          <span className=" block py-2 px-4 rounded-full bg-gray-200 text-gray-500">
            بدون راننده
          </span>
        </div>
      </div>
    </div>
  );
}

export default LatestArticles;
