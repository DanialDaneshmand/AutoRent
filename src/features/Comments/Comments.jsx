import React, { useState } from "react";
import { comments } from "../../../data/data";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

function Comments() {
  const [selectedComment, setSelectedComment] = useState(comments[0]);
  return (
    <div className=" w-full px-4 flex justify-center">
      <div className=" w-full max-w-screen-xl flex flex-col items-center  ">
        <CommentDetail selectedComment={selectedComment} />
        <div className=" h-48 sm:h-auto overflow-y-scroll sm:overflow-auto mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8  py-8 w-full mx-8">
          {comments.map((item) => (
            <Comment
              key={item.id}
              item={item}
              setSelectedComment={setSelectedComment}
              selectedComment={selectedComment}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comments;

function CommentDetail({ selectedComment }) {
  return (
    <>
      <div className=" text-center mb-16 ">
        <p className=" text-gray-500 text-lg mb-2">
          انچه مشتریانمان در مورد ما گفته اند
        </p>
        <p className=" text-3xl">
          <span>نظرات </span>{" "}
          <span className=" text-[rgb(253,183,19)]">مشتریان</span>
        </p>
      </div>
      <div className=" flex flex-col items-center bg-white border rounded-xl w-full py-8">
        <div className="w-32 h-32 rounded-full bg-blue-600 flex justify-center items-center">
          <img
            src={selectedComment.imageSrc}
            alt=""
            className=" w-28 h-28 rounded-full"
          />
        </div>
        <p className=" text-xl mt-3 ">{selectedComment.name}</p>
        <p className=" my-2">
          <span className="flex items-center gap-x-2 text-[rgb(253,183,19)]">
            <FaRegStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
        </p>
        <p className="px-8 text-gray-500 text-sm max-w-screen-sm mt-12">
          {selectedComment.text}
        </p>
      </div>
    </>
  );
}

function Comment({ item, setSelectedComment, selectedComment }) {
  return (
    <div
      onClick={() => setSelectedComment(item)}
      className={` ${
        selectedComment.id === item.id
          ? "bg-[rgb(253,183,19)] border-[rgb(253,183,19)]"
          : "bg-white"
      } border rounded-xl  py-2 shadow-md cursor-pointer`}
    >
      <div className=" flex justify-center gap-x-4 items-center">
        <div>
          <img src={item.imageSrc} alt="" className="w-16 h-16 rounded-full" />
        </div>
        <div>
          <p className=" text-gray-800 text-lg">{item.name}</p>
          <p className=" text-sm text-gray-500">27 دی ماه 1399</p>
        </div>
      </div>
    </div>
  );
}
