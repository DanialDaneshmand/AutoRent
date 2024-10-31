import React from "react";
import Navigation from "../features/Header/Navigation";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineMapPin,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { useUser, useUserDispatch } from "../Context/userContext";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { HiCreditCard } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

const options = [
  {
    id: 1,
    linkIcon: <HiCreditCard />,
    title: "کیف پول",
    path: "/user-panel/wallet",
  },
  {
    id: 2,
    linkIcon: <HiOutlineClipboardDocumentCheck />,
    title: " رزرو های من",
    path: "/user-panel/reserve",
  },
  {
    id: 3,
    linkIcon: <HiOutlineMapPin />,
    title: " ادرس های من ",
    path: "/user-panel/location",
  },
  {
    id: 4,
    linkIcon: <HiCreditCard />,
    title: "پرداخت های من",
    path: "/user-panel/myPayment",
  },
  {
    id: 5,
    linkIcon: <HiOutlineChatBubbleOvalLeftEllipsis />,
    title: "نظرات من ",
    path: "/user-panel/myComments",
  },
];

function UserPanel() {
  const user = useUser();
  const setUser = useUserDispatch();
  const navigate = useNavigate();

  const handleExit = () => {
    setUser({});
    navigate("/");
  };

  return (
    <div className=" flex  flex-col items-center ">
      <Navigation />
      <div className="my-8 grid grid-cols-12 w-full max-w-screen-xl">
        <div className=" col-span-12 md:col-span-4   my-4 px-4 xl:pl-4 w-full">
          <div className=" rounded-xl items-center flex justify-between bg-white p-4">
            <span className=" flex items-center gap-x-3">
              <span>
                <HiOutlineUserCircle className=" text-4xl text-gray-500" />
              </span>
              <span className=" text-gray-500">{user.phone}</span>
            </span>
            <span>
              <HiOutlinePencilSquare className=" text-2xl text-blue-500" />
            </span>
          </div>
          <div className=" mt-4 rounded-xl space-y-6 bg-white p-4">
            {options.map((item) => (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 my-2 block"
                    : "text-gray-500 my-2 block"
                }
                key={item.id}
              >
                <span className="  flex justify-between items-center">
                  <span className=" flex items-center gap-x-2">
                    <span className=" text-2xl">{item.linkIcon}</span>
                    <span>{item.title}</span>
                  </span>
                  <span>
                    <HiChevronLeft />
                  </span>
                </span>
              </NavLink>
            ))}
            <button
              className="w-full  mt-6 block"
              onClick={handleExit}
            >
              <span className="  flex justify-between items-center">
                <span className=" flex items-center text-red-600 gap-x-2">
                  <span className=" text-2xl">
                    <HiOutlineArrowRightOnRectangle />
                  </span>
                  <span>خروج</span>
                </span>
                <span>
                  <HiChevronLeft />
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className=" col-span-12 md:col-span-8 h-full px-4 xl:px-0    my-4 w-full">
          <div className="bg-white rounded-xl p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
