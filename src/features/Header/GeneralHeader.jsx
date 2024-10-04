import React from "react";
import Header from "./Header";

function GeneralHeader({ children }) {
  return (
    <Header>
      <img
        src="./images/article/5.jpg"
        alt="auto-rent"
        className="w-full h-screen "
      />
      <div className=" absolute z-30 top-0 flex justify-center items-center  w-full bg-black opacity-70 h-full rounded-b-xl"></div>
      <div className=" absolute z-50 top-0 flex justify-center items-center  w-full  h-full rounded-b-xl">
        {children}
      </div>
    </Header>
  );
}

export default GeneralHeader;
