import React, { useState } from "react";
import Logo from "../ui/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useUserDispatch } from "../Context/userContext";

function Login() {
  const navigate=useNavigate()
  const setUser = useUserDispatch();
  const [userInfo, setUserInfo] = useState({
    phone: "",
    password: " ",
  });
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(userInfo);
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
              <form onSubmit={handleSubmit}>
                <div className="my-4">
                  <label
                    htmlFor="phone"
                    className=" block text-gray-500 mb-3 font-bold "
                  >
                    شماره موبایل
                  </label>
                  <input
                    type="text"
                    className="border outline-none py-2 px-4 rounded-lg h-full"
                    value={userInfo.phone}
                    onChange={handleChange}
                    name="phone"
                  />
                </div>
                <div className=" my-4">
                  <label
                    htmlFor="phone"
                    className=" block text-gray-500 mb-3 font-bold "
                  >
                    {" "}
                    رمز عبور
                  </label>
                  <input
                    type="text"
                    className="border outline-none py-2 px-4 rounded-lg h-full"
                    value={userInfo.password}
                    onChange={handleChange}
                    name="password"
                  />
                </div>
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
            className="lg:block hidden h-[580px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
