import React from "react";

function TextFeildInfo({ icon, title, name, errors, register }) {
  return (
    <div>
      <div className=" flex  items-center w-full justify-center">
        <div className=" -ml-10 z-30  text-2xl text-gray-400 flex items-center justify-center border w-8 h-8 rounded-lg ">
          {icon}
        </div>
        <input
          type="text"
          className=" w-full text-sm sm:w-10/12 py-3 px-12 outline-none border rounded-lg"
          placeholder={title}
          {...register(name)}
        />
      </div>
      <div className=" px-12">
        {errors && errors[name] && (
          <span className="text-red-600 text-sm block mt-2">
            {errors[name]?.message}
          </span>
        )}
      </div>
    </div>
  );
}

export default TextFeildInfo;
