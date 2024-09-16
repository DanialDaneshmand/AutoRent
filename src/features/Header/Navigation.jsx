import React, { useState } from "react";
import Logo from "../../ui/Logo";
import { NavLink } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiBars4 } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";

function Navigation() {
  const [isShow, setIsShow] = useState(false);
  const options = [
    {
      path: "/",
      label: "رزرو خودرو",
    },
    {
      path: "/a",
      label: " خدمات ما",
    },
    {
      path: "/a",
      label: " بلاگ",
    },
    {
      path: "/b",
      label: " درباره ما",
    },
    {
      path: "/c",
      label: " تماس با ما",
    },
  ];
  return (
    <div className=" flex justify-center w-full ">
      <div className="mx-4 z-50 max-w-screen-lg flex justify-between items-center w-full bg-[#efefef]  p-8 shadow-md rounded-b-2xl ">
        <div className="md:w-3/12">
          <Logo />
        </div>

        {isShow ? (
          <div className="block md:hidden backdrop-blur-sm bg-opacity-30 fixed top-0 left-0 w-screen  h-screen bg-gray-500 z-50">
            <div className="  fixed top-0 right-0 h-screen z-45 p-4 px-8 w-full sm:w-[350px] bg-[#efefef]">
              <div className="  flex justify-end mb-12">
                <button onClick={() => setIsShow(false)}>
                    <HiMiniXMark/>
                </button>
              </div>
              <div className=" flex  justify-between">
                <ul className="flex flex-col gap-y-4 items-center  text-gray-500 text-sm">
                  <li className=" text-xl ">
                    <button>
                      <HiMagnifyingGlass />
                    </button>
                  </li>
                  {options.map((item) => (
                    <li key={item.label}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-blue-600 " : "text-gray-500"
                        }
                        to={item.path}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <div>
                  <button className=" text-white bg-blue-600 rounded-lg py-2 px-4 text-sm">
                    ورود / ثبت نام
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className=" hidden md:block w-full ">
            <div className=" flex w-full justify-between ">
              <ul className="flex gap-x-6 lg:pr-8 items-center text-sm text-gray-500">
                {options.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-blue-600 " : ""
                      }
                      to={item.path}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
                <li className=" text-xl">
                  <button>
                    <HiMagnifyingGlass />
                  </button>
                </li>
              </ul>
              <div>
                <button className=" text-white bg-blue-600 rounded-lg py-2 px-4 text-sm">
                  ورود / ثبت نام
                </button>
              </div>
            </div>
          </div>
        )}
        <div className=" block md:hidden">
          <button
            onClick={() => setIsShow(!isShow)}
            className=" text-gray-700 text-2xl font-bold"
          >
            <HiBars4 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
