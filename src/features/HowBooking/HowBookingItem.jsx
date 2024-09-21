import React from "react";

function HowBookingItem({ children ,icon}) {
  return (
    <div className="flex items-center gap-x-4">
      <div className=" p-4 text-4xl   flex justify-center items-center w-20 h-20 border rounded-xl ">
        {icon}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default HowBookingItem;
