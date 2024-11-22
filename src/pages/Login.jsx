import React, { useState } from "react";
import Logo from "../ui/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useUserDispatch } from "../Context/userContext";
import RHFTextFeild from "../ui/RHFTextFeild";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast  from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  const setUser = useUserDispatch();
  
  const schema = yup
    .object({
      phone: yup
        .string()
        .min(10, "   شماره موبایل نامعتبر است.")
        .max(30)
        .required("   شماره موبایل الزامی است ."),
        password: yup.string().required("رمز عبور الزامی است ."),

    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const submitHandler = (data) => {
    setUser(data)
    toast.success("ورود با موفقیت انجام شد")
    navigate("/")
  };

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className="w-10/12 md:w-7/12 border  rounded-xl overflow-hidden h-[580px]  flex  justify-between">
        <div className=" bg-white py-8 w-full">
          <div className=" w-full flex  justify-center">
            <Logo />
          </div>
          <div className=" flex flex-col items-center justify-center h-full py-16 ">
            <p className=" text-2xl text-gray-700 mb-8 font-bold">ورود</p>
            <div>
              <form onSubmit={handleSubmit(submitHandler)}>
                <RHFTextFeild
                  errors={errors}
                  isRequired={true}
                  title="شماره موبایل"
                  name="phone"
                  register={register}
                />
                <RHFTextFeild
                  errors={errors}
                  isRequired={true}
                  title=" رمز عبور"
                  name="password"
                  register={register}
                />

                <button className=" w-full bg-blue-600 text-white rounded-lg py-2 px-4 my-4">
                  ورود
                </button>
                <div className=" w-full text-center">
                  <Link to="/signup" className=" text-sm text-gray-400">
                    ایا هنوز ثبت نام نکرده اید؟
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <img
            src="./images/loginBg/1.jpg"
            className="lg:block hidden h-[580px] object-cover object-left"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
