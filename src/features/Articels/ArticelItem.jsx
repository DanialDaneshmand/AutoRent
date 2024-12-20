import React from "react";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function ArticelItem({ item }) {
  return (
    <Link to={`/articleDetail`} state={{ id: item.id }}>
      <div className=" border rounded-xl p-2 bg-white space-y-2">
        <div className="border rounded-lg  overflow-hidden">
          <img
            src={item.imageSrc}
            alt={item.title}
            className="w-full h-[200px]"
          />
        </div>
        <p className=" text-lg text-gray-800 ">{item.title}</p>
        <p className=" text-sm text-gray-500">{item.text}</p>
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
            <span>{toPersianNumbersWithComma(1243)}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ArticelItem;
