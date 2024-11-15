import React from "react";

function Btn({title,onClick}) {
  return (
    <button
      onClick={onClick}
      className="  border border-blue-600 text-blue-600 sm:py-2 py-1  text-sm sm:lext-lg  sm:px-4 w-20 sm:w-28 rounded-lg hover:bg-blue-600 hover:text-white"
    >
      {title}
    </button>
  );
}

export default Btn;


