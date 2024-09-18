import React from "react";
import Navigation from "./Navigation";

function Header({ children }) {
  return (
    <div className="relative ">
      <div className=" absolute z-40 top-0 w-full ">
        <Navigation />
      </div>
      {children}
    </div>
  );
}

export default Header;
