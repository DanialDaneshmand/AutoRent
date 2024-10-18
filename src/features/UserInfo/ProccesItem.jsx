import React from "react";

function ProccesItem({ icon, title, active, checked }) {
  return (
    <div>
      <div className=" flex flex-col gap-y-2 items-center">
        {checked ? (
          <div className=" flex justify-center items-center  bg-blue-600 text-white border w-8 sm:w-16 h-8 sm:h-16 rounded-full ">
            <div className="text-lg sm:text-4xl flex justify-center items-center h-6 sm:w-14 w-6 sm:h-14 rounded-full border sm:border-2 border-white">
              {icon}
            </div>
          </div>
        ) : (
          <div
            className={`text-lg sm:text-4xl  flex justify-center items-center text-gray-500   border w-8 sm:w-16 h-8 sm:h-16 rounded-full ${
              active
                ? "bg-yellow-400 border-yellow-400 text-black"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            {icon}
          </div>
        )}

        <span className=" text-gray-400 text-xs sm:text-sm text-center">{title}</span>
      </div>
    </div>
  );
}

export default ProccesItem;
