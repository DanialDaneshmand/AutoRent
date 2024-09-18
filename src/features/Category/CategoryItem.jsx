import React from "react";

function CategoryItem({ title }) {
  return (
    <div className=" rounded-lg border bg-[rgb(246,246,246)] ">
      <div className="border-b-4 w-full flex flex-col items-center  border-[rgb(253,183,19)] rounded-lg text-center p-2">
        <p className=" font-bold text-lg"> {title}</p>
        <img src="./images/carSide3.png" alt="" className="w-48 h-28" />
      </div>
    </div>
  );
}

export default CategoryItem;
