import React, { useEffect, useState } from "react";
import { cars } from "../../../data/data";
import { FaAngleLeft } from "react-icons/fa6";
import CarListItem from "./CarListItem";
import Btn from "../../ui/Btn";

function CarList() {
  const [carlist, setCarList] = useState(cars);
  const [categoryItem, setCategoryItem] = useState("");
  useEffect(() => {
    if (categoryItem === "economic") {
      const newList = cars.filter((item) => item.sort === "economic");
      return setCarList(newList);
    }
    if (categoryItem === "public") {
      const newList = cars.filter((item) => item.sort === "public");
      return setCarList(newList);
    }
    if (categoryItem === "luxury") {
      const newList = cars.filter((item) => item.sort === "luxury");
      return setCarList(newList);
    }
  }, [categoryItem]);
  return (
    <div className=" flex justify-center">
      <div className=" w-full max-w-screen-xl flex flex-col items-center">
        <div className=" flex flex-col items-center  w-full gap-y-6">
          <p className=" text-gray-500">مشاهده موجودی خودرو ها</p>
          <p className=" text-2xl sm:text-4xl">
            رزرو خودرو در{" "}
            <span className=" text-[rgb(253,183,19)]">اتو رنت</span>
          </p>
          <div className=" flex gap-x-1 sm:gap-x-3">
            <Btn
              categoryItem={categoryItem === "public"}
              title="محبوب"
              onClick={() => setCategoryItem("public")}
            />
            <Btn
              categoryItem={categoryItem === "luxury"}
              title="لوکس"
              onClick={() => setCategoryItem("luxury")}
            />
            <Btn
              categoryItem={categoryItem === "economic"}
              title="اقتصادی"
              onClick={() => setCategoryItem("economic")}
            />
          </div>
        </div>
        <div className="flex justify-center sm:justify-end  w-full ">
          <button
            onClick={() => setCarList(cars)}
            className="sm:-mt-10 mt-5 ml-4 flex items-center gap-x-2 sm:text-lg text-blue-600"
          >
            <span>مشاهده همه</span>
            <span>
              <FaAngleLeft />
            </span>
          </button>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 mx-4  lg:grid-cols-3 gap-8 mt-16">
          {carlist.map((item) => (
            <CarListItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarList;
