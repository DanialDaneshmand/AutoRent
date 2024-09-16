import React from "react";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";


function MoreInfoItem({ title, children }) {
  return (
    <div className="p-1">
      <div className="flex items-center gap-x-2 mb-4">
        <span>
          <HiOutlineArrowCircleLeft />
        </span>
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}

export default MoreInfoItem;
