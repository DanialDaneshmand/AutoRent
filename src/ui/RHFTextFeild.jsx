import React from "react";

function RHFTextFeild({errors, title, name, register,isRequired }) {
  return (
    <div className="my-4">
      <label className=" block mb-2 text-slate-600" htmlFor={name}>
        {title}
        {isRequired && <span className=" text-red-600">*</span>}
      </label>
      <input
        type="text"
        className="border outline-none py-2 px-4 rounded-lg h-full"
        {...register(name)}
      />
      {
        errors&&errors[name]&&(
          <span className="text-red-600 text-sm block mt-2">
            {errors[name]?.message}
          </span>
        )
      }
    </div>
  );
}

export default RHFTextFeild;
