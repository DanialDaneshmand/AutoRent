import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserDispatch } from "../Context/userContext";

function ExitPage() {
    const navigate=useNavigate()
    const setUser=useUserDispatch()
    const handleExit=()=>{
        setUser({})
        navigate("/")
    }
  return (
    <div>
      <div className=" border-b pb-4">
        <p className=" text-gray-600 text-lg"> خروج</p>
      </div>
      <div className=" py-8">
        <p className=" text-2xl text-gray-500 font-bold">برای خروج از حساب کاربری خود مطمعن هستید ؟</p>
      </div>
      <div className=" flex gap-x-4">
        <button onClick={()=>navigate(-1)} className=" py-1 rounded-lg px-4 border border-red-600 text-red-600">انصراف</button>
        <button onClick={handleExit} className=" py-1 rounded-lg px-4 border bg-red-600 border-red-600 text-white">خروج از حساب </button>
      </div>
    </div>
  );
}

export default ExitPage;
