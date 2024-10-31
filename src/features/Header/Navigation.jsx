import React, { useState } from "react";
import Logo from "../../ui/Logo";
import { Link, NavLink } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiBars4 } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import Modal from "../../ui/SearchModal";
import { cars } from "../../../data/data";
import SearchModal from "../../ui/SearchModal";
import { useUser } from "../../Context/userContext";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";

const options = [
  {
    path: "/rent",
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
    path: "/about-us",
    label: " درباره ما",
  },
  {
    path: "/contact-us",
    label: " تماس با ما",
  },
];

function Navigation() {
  const user = useUser();

  const [isShow, setIsShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const [searchItems, setSearchItems] = useState([]);

  const handleRemove = (id) => {
    const newCars = searchItems.filter((item) => item.title.includes(value));
    const updatedList = newCars.filter((item) => item.id !== id);
    setSearchItems(updatedList);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      setSearchItems("");
    } else {
      const newCars = cars.filter((item) =>
        item.title.includes(e.target.value)
      );
      setSearchItems(newCars);
    }
  };

  return (
    <div className=" flex justify-center w-full ">
      <div className="mx-4 z-50 max-w-screen-xl flex justify-between items-center w-full bg-[#efefef]  p-8 shadow-md rounded-b-2xl ">
        <div className="md:w-3/12">
          <Logo />
        </div>

        {isShow ? (
          <div className="block md:hidden backdrop-blur-sm bg-opacity-30 fixed top-0 left-0 w-screen  h-screen bg-gray-500 z-50">
            <div className="  fixed top-0 right-0 h-screen z-45 p-4 px-8 w-full sm:w-[350px] bg-[#efefef]">
              <div className="  flex justify-end mb-12">
                <button onClick={() => setIsShow(false)}>
                  <HiMiniXMark />
                </button>
              </div>
              <div className=" flex  justify-between">
                <ul className="flex flex-col gap-y-4 items-center  text-gray-500 text-sm">
                  <li className=" text-xl ">
                    <button onClick={() => setOpen(true)}>
                      <HiMagnifyingGlass />
                    </button>
                    <SearchModal
                      title="جستجو"
                      onClose={() => setOpen(false)}
                      open={open}
                      searchItems={searchItems}
                      handleRemove={handleRemove}
                    >
                      <div className=" flex py-8">
                        <div className=" flex items-center justify-center w-full">
                          <input
                            type="text"
                            value={value}
                            onChange={handleChange}
                            className=" border rounded-lg py-2 px-4 w-10/12 outline-none"
                            placeholder="جستجو ..."
                          />
                          <span className="-mr-8">
                            <HiMagnifyingGlass />
                          </span>
                        </div>
                      </div>
                    </SearchModal>
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
                  {user.phone ? (
                    <Link to="/user-panel">
                      <button className=" flex gap-x-2 items-center py-2 px-4 rounded-lg bg-blue-600 text-white">
                        <span>
                          <HiOutlineUserCircle className=" text-xl" />
                        </span>{" "}
                        <span>{user.phone}</span>
                        <span>
                          <HiChevronDown className=" text-xl" />
                        </span>
                      </button>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <button className=" text-white bg-blue-600 rounded-lg py-2 px-4 text-sm">
                        ورود / ثبت نام
                      </button>
                    </Link>
                  )}
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
                  <button onClick={() => setOpen(true)}>
                    <HiMagnifyingGlass />
                  </button>
                  <Modal
                    title="جستجو"
                    onClose={() => setOpen(false)}
                    open={open}
                    searchItems={searchItems}
                    handleRemove={handleRemove}
                  >
                    <div className=" flex py-8">
                      <div className=" flex items-center justify-center w-full">
                        <input
                          type="text"
                          value={value}
                          onChange={handleChange}
                          className=" border rounded-lg py-2 px-4 w-7/12 outline-none"
                          placeholder="جستجو ..."
                        />
                        <span className="-mr-8">
                          <HiMagnifyingGlass />
                        </span>
                      </div>
                    </div>
                  </Modal>
                </li>
              </ul>
              <div>
                {user.phone ? (
                  <Link to="/user-panel">
                    <button className=" flex gap-x-2 items-center py-2 px-4 rounded-lg bg-blue-600 text-white">
                      <span>
                        <HiOutlineUserCircle className=" text-xl" />
                      </span>{" "}
                      <span>{user.phone}</span>
                      <span>
                        <HiChevronDown className=" text-xl" />
                      </span>
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className=" text-white bg-blue-600 rounded-lg py-2 px-4 text-sm">
                      ورود / ثبت نام
                    </button>
                  </Link>
                )}
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
