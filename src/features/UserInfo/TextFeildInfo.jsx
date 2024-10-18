import React from "react";

function TextFeildInfo({icon,title}) {
  return (
    <div className=" flex items-center w-full justify-center">
      <div className=" -ml-10 z-30  text-2xl text-gray-400 flex items-center justify-center border w-8 h-8 rounded-lg ">
        {icon}
      </div>
      <input
        type="text"
        className=" w-full text-sm sm:w-10/12 py-2 px-12 outline-none border rounded-lg"
        placeholder={title}
      />
    </div>
  );
}

export default TextFeildInfo;
