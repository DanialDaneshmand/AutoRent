import React from "react";

function TextBox({ icon, children,active }) {
  return (
    <div className={` border   rounded-xl ${active?`w-64`:"w-full"} bg-white p-4 space-y-4 border-gray-300 flex flex-col items-center`}>
      <div className="sm:h-20 h-16 sm:w-20 w-16 rounded-xl flex justify-center items-center border border-blue-900">
        <span className=" text-blue-600 sm:text-3xl text-xl font-bold">{icon}</span>
      </div>
      {children}
    </div>
  );
}

export default TextBox;
