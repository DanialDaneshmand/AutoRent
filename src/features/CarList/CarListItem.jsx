import React from "react";
import { Link } from "react-router-dom";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumbers";


function CarListItem({ item }) {
  return (
    <div className=" border rounded-xl px-2 pb-2 bg-white space-y-2">
      <div className=" flex justify-end relative">
        <span className=" block p-1 z-30 absolute -bottom-12 left-4  rounded-md bg-blue-900 text-white text-sm">
          <span>{item.off.toLocaleString("fa-ir")}</span>
          <span>%</span>
        </span>
      </div>
      <div className="border rounded-lg  overflow-hidden">
        <img
          src={item.imageSrc}
          alt={item.title}
          className="w-full object-contain h-[200px] "
        />
      </div>
      <p className=" text-2xl font-bold">{item.title}</p>
      <p className=" text-sm text-gray-500"><span>مدل</span> <span>{toPersianNumbers(2016)}</span></p>
      <div className=" flex justify-between bg-[#efefef] rounded-lg p-2 text-sm text-gray-500">
        <span>
          <span>از {toPersianNumbers(1)} روز تا {toPersianNumbers(30)} روز : </span>
          <span className=" text-blue-600 font-bold">{toPersianNumbersWithComma(8500000)}</span>
        </span>
        <span>روزانه</span>
      </div>
      <div className=" flex justify-between bg-[#efefef] rounded-lg p-2 text-sm text-gray-500">
        <span>
          <span>از {toPersianNumbers(1)} روز تا {toPersianNumbers(30)} روز : </span>
          <span className=" text-blue-600 font-bold">{toPersianNumbersWithComma(8500000)}</span>
        </span>
        <span>ماهانه</span>
      </div>
      <hr />
      <div className=" text-sm flex justify-between p-2">
        <p className=" text-gray-500 ">مبلغ ضمانت :</p>
        <p className=" font-bold">{toPersianNumbers(80)} میلیون تومان</p>
      </div>
      <Link to="/carDetail" state={{id:item.id}}>
        <button className=" py-2 px-5 rounded-lg bg-blue-600 text-white w-full flex justify-center text-sm">
          درخواست رزرو
        </button>
      </Link>
    </div>
  );
}

export default CarListItem;
