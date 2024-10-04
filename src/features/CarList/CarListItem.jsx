import React from "react";

 function CarListItem({item}) {
  return (
    <div className=" border rounded-xl px-2 pb-2 bg-white space-y-2">
      <div className=" flex justify-end relative">
        <span className=" block p-1 z-30 absolute -bottom-12 left-4  rounded-md bg-blue-900 text-white text-sm">
          <span>{item.off}</span>
          <span>%</span>
        </span>
      </div>
      <div className="border rounded-lg  overflow-hidden">
        <img
          src={item.imageSrc}
          alt={item.title}
          className="w-full h-[200px]"
        />
      </div>
      <p className=" text-2xl font-bold">{item.title}</p>
      <p className=" text-sm text-gray-500">مدل 2016</p>
      <div className=" flex justify-between bg-[#efefef] rounded-lg p-2 text-sm text-gray-500">
        <span>
          <span>از 1 روز تا 30 روز : </span>
          <span className=" text-blue-600 font-bold">8.500.000</span>
        </span>
        <span>روزانه</span>
      </div>
      <div className=" flex justify-between bg-[#efefef] rounded-lg p-2 text-sm text-gray-500">
        <span>
          <span>از 1 روز تا 30 روز : </span>
          <span className=" text-blue-600 font-bold">8.500.000</span>
        </span>
        <span>ماهانه</span>
      </div>
      <hr />
      <div className=" text-sm flex justify-between p-2">
        <p className=" text-gray-500 ">مبلغ ضمانت :</p>
        <p className=" font-bold">80 میلیون تومان</p>
      </div>
      <button className=" py-2 px-5 rounded-lg bg-blue-600 text-white w-full flex justify-center text-sm">
        درخواست رزرو
      </button>
    </div>
  );
}

export default CarListItem;
