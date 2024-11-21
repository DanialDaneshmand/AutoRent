import React from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";

function GeneralQuestionsItem({item,selectedId,setSelectedId}) {
  return (
    <div className=" ml-0 xl:ml-4">
      <div
        className={` transition-all duration-300 my-4 border rounded-lg p-4 bg-white overflow-hidden ${
          selectedId === item.id
            ? "h-auto transition-all duration-300"
            : "h-[68px] md:h-14 transition-all duration-300"
        }`}
      >
        <p className=" flex items-center gap-x-2 mb-6 md:mb-4  text-gray-700">
          <span
            className=" text-blue-600 cursor-pointer "
            onClick={() => setSelectedId(selectedId ? "" : item.id)}
          >
            {selectedId === item.id ? (
              <FaRegSquareMinus />
            ) : (
              <FaRegSquarePlus />
            )}
          </span>
          <span>{item.title}</span>
        </p>
        <p className=" text-gray-500 text-sm">{item.desc}</p>
      </div>
    </div>
  );
}

export default GeneralQuestionsItem;
