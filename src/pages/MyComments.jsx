import React, { useEffect, useState } from "react";
import {
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineCheckCircle,
  HiOutlineClock,
} from "react-icons/hi2";

const myComments = [
  {
    id: 1,
    status: 1,
    text: "ماشین مورد علاقم ناموجود بود چرا؟",
  },
  {
    id: 2,
    status: 2,
    text: "بهترین تجربه که با پورشه داشتم.دمتون گرم",
  },
  {
    id: 3,
    status: 1,
    text: "منتظرم برا شب عروسیم ماشین مورد علاقم رو بگیریم.",
  },
];

function MyComments() {
  const [count, setCount] = useState(1);
  const [newComments, setNewComments] = useState(myComments);
  useEffect(() => {
    if (count === 1) {
      setNewComments(myComments.filter((item) => item.status !== 3));
    } 
    if(count===2) {
      setNewComments(myComments.filter((item) => item.status === 1));
    }
    if(count===3) {
      setNewComments(myComments.filter((item) => item.status === 2));
    }
  }, [count]);
  return (
    <div>
      <div className=" border-b pb-4">
        <p className=" text-gray-600 text-lg">پرداخت های من</p>
      </div>
      <div className=" py-4 flex flex-col w-full items-center sm:flex-row gap-y-4 sm:gap-y-0 gap-x-0  sm:gap-x-2">
        <div className=" w-full sm:w-auto">
          <button
            onClick={() => setCount(1)}
            className={`py-1 justify-center px-4 rounded-lg w-full sm:w-auto border flex items-center gap-x-2  ${
              count === 1
                ? "border-blue-600 text-blue-600"
                : " border-gray-400 text-gray-400"
            }`}
          >
            <span className=" text-2xl">
              <HiOutlineChatBubbleOvalLeftEllipsis />
            </span>
            <span>همه نظرات</span>
          </button>
        </div>
        <div className=" w-full sm:w-auto">
          <button
            onClick={() => setCount(2)}
            className={`py-1 w-full justify-center px-3 rounded-lg border flex items-center gap-x-2  ${
              count === 2
                ? "border-blue-600 text-blue-600"
                : " border-gray-400 text-gray-400"
            }`}
          >
            <span className=" text-2xl">
              <HiOutlineCheckCircle />
            </span>
            <span>نظرات تایید شده</span>
          </button>
        </div>
        <div className=" w-full sm:w-auto">
          <button
            onClick={() => setCount(3)}
            className={`py-1 justify-center w-full  px-4 rounded-lg border flex items-center gap-x-2  ${
              count === 3
                ? "border-blue-600 text-blue-600"
                : " border-gray-400 text-gray-400"
            }`}
          >
            <span className=" text-2xl">
              <HiOutlineClock />
            </span>
            <span>در انتظار تایید</span>
          </button>
        </div>
      </div>
      <div>
        {newComments.map((item) => (
          <div
            className=" border text-gray-400 rounded-lg p-4 my-4"
            key={item.id}
          >
            <div className=" text-gray-500">{item.text}</div>
            <div className=" flex items-center gap-x-2 mt-2">
              <span>
                {item.status === 1 ? (
                  <HiOutlineCheckCircle />
                ) : (
                  <HiOutlineClock />
                )}
              </span>
              <span>
                {item.status === 1 ? <p>تایید شده</p> : <p>در انتظار تایید</p>}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyComments;
